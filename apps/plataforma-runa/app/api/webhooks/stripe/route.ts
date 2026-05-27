import { clerkClient } from "@clerk/nextjs/server";
import Stripe from "stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugify } from "@/lib/slugify";
import { triggerOnboardingEmail } from "@/lib/emails";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
  if (!STRIPE_WEBHOOK_SECRET) throw new Error("STRIPE_WEBHOOK_SECRET not set");

  const sig = req.headers.get("stripe-signature");
  if (!sig) return new Response("Missing stripe-signature", { status: 400 });

  const rawBody = await req.text();

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-04-22.dahlia",
  });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.clerk_user_id;

    if (!userId) {
      return new Response("Missing clerk_user_id in metadata", { status: 400 });
    }

    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    const email = user.emailAddresses[0]?.emailAddress;

    if (!email) {
      return new Response("User has no email address", { status: 400 });
    }

    const menteeSlug = slugify(email.split("@")[0]);

    const supabase = createAdminClient();
    await supabase
      .from("profiles")
      .update({ tier: "mentee", mentee_slug: menteeSlug })
      .eq("id", userId);

    await clerk.users.updateUserMetadata(userId, {
      publicMetadata: { tier: "mentee", menteeSlug },
    });

    await supabase.from("subscriptions").upsert(
      {
        mentee_id: userId,
        stripe_session_id: session.id,
        stripe_payment_intent_id:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : null,
        amount_cents: session.amount_total ?? 0,
        currency: session.currency ?? "brl",
        status: "paid",
      },
      { onConflict: "stripe_session_id", ignoreDuplicates: true },
    );

    await triggerOnboardingEmail({ userId, menteeSlug, email });
  }

  return new Response("OK", { status: 200 });
}
