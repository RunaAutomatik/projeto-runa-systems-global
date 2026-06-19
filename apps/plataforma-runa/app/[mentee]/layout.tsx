import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { slugify } from "@/lib/slugify";
import { MenteeSidebar } from "@/components/mentee/MenteeSidebar";

export default async function MenteeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ mentee: string }>;
}) {
  const { userId, sessionClaims } = await auth();
  if (!userId) redirect("/entrar");

  const publicMetadata = sessionClaims?.public_metadata as
    | { tier?: string; menteeSlug?: string }
    | undefined;

  if (publicMetadata?.tier !== "mentee") {
    const supabase = createAdminClient();
    const { data: profile } = await supabase
      .from("profiles")
      .select("tier, mentee_slug, email")
      .eq("id", userId)
      .single();

    if (profile?.tier === "mentee") {
      const menteeSlug =
        profile.mentee_slug ?? slugify((profile.email ?? "").split("@")[0]);
      const clerk = await clerkClient();
      await clerk.users.updateUserMetadata(userId, {
        publicMetadata: { tier: "mentee", menteeSlug },
      });
    } else {
      redirect("/planos?upgrade=mentee");
    }
  }

  const { mentee } = await params;

  return (
    <div className="flex min-h-screen bg-bg">
      <MenteeSidebar menteeSlug={mentee} />
      <main className="flex-1 overflow-auto pb-16 md:pb-0">{children}</main>
    </div>
  );
}
