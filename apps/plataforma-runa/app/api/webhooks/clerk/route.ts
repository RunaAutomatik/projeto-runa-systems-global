import { Webhook } from "svix";
import { createAdminClient } from "@/lib/supabase/admin";

type WebhookEvent = {
  type: "user.created" | "user.updated" | string;
  data: {
    id: string;
    email_addresses: Array<{ email_address: string }>;
    first_name: string | null;
    last_name: string | null;
  };
};

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
  if (!WEBHOOK_SECRET) throw new Error("CLERK_WEBHOOK_SECRET not set");

  const svix_id = req.headers.get("svix-id");
  const svix_timestamp = req.headers.get("svix-timestamp");
  const svix_signature = req.headers.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const body = await req.text();

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id!,
      "svix-timestamp": svix_timestamp!,
      "svix-signature": svix_signature!,
    }) as WebhookEvent;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const { id, email_addresses, first_name, last_name } = evt.data;
  const email = email_addresses[0]?.email_address;
  const full_name = [first_name, last_name].filter(Boolean).join(" ") || null;
  const supabase = createAdminClient();

  if (evt.type === "user.created") {
    await supabase
      .from("profiles")
      .upsert(
        { id, email, full_name, tier: "free" },
        { onConflict: "id", ignoreDuplicates: true },
      );
  } else if (evt.type === "user.updated") {
    // Only update profile fields — never overwrite tier set by Stripe webhook
    await supabase.from("profiles").update({ email, full_name }).eq("id", id);
  }

  return new Response("OK", { status: 200 });
}
