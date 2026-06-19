import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Session, Deliverable } from "@/lib/types/mentee";
import SessionsSection from "./_components/SessionsSection";
import DeliverablesSection from "./_components/DeliverablesSection";
import NotesSection from "./_components/NotesSection";

type DeliverableWithSession = Deliverable & {
  sessions: { session_number: number; title: string } | null;
};

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AdminMentoradoPage({ params }: Props) {
  const { id } = await params;
  const supabase = createAdminClient();

  const { data: mentee } = await supabase
    .from("profiles")
    .select("id, full_name, email, tier, mentee_slug, mentee_context")
    .eq("id", id)
    .single();

  if (!mentee || mentee.tier !== "mentee") {
    redirect("/admin/mentorados");
  }

  const { data: sessions } = await supabase
    .from("sessions")
    .select("*")
    .eq("mentee_id", id)
    .order("session_number");

  const { data: deliverables } = await supabase
    .from("deliverables")
    .select("*, sessions(session_number, title)")
    .eq("mentee_id", id)
    .order("created_at", { ascending: false });

  const sessionList = (sessions ?? []) as Session[];
  const deliverableList = (deliverables ?? []) as DeliverableWithSession[];
  const menteeContext =
    (mentee.mentee_context as Record<string, unknown>) ?? {};
  const notes = (menteeContext.notes as string) ?? "";
  const displayName = mentee.full_name ?? mentee.email;

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-text text-2xl font-semibold">
            {displayName}
          </h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="bg-accent text-text text-xs px-2 py-1 rounded">
              {mentee.tier}
            </span>
            {mentee.mentee_slug && (
              <span className="text-muted text-sm">
                /{mentee.mentee_slug}
              </span>
            )}
          </div>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-text font-medium">Sessões</h2>
        <SessionsSection
          sessions={sessionList}
          menteeSlug={mentee.mentee_slug}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-text font-medium">Entregáveis</h2>
        <DeliverablesSection
          deliverables={deliverableList}
          sessions={sessionList}
          menteeId={mentee.id}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-text font-medium">Notas</h2>
        <NotesSection menteeId={mentee.id} initialNotes={notes} />
      </section>
    </div>
  );
}
