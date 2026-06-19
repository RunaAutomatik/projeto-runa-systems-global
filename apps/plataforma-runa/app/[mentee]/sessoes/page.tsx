import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { SessionCard } from "@/components/sessions/SessionCard";
import { SessionPlaceholder } from "@/components/sessions/SessionPlaceholder";
import { SessionArcProgress } from "@/components/sessions/SessionArcProgress";
import type { Session } from "@/lib/types/mentee";

const TOTAL_SESSIONS = 21;

type SessionWithDeliverables = Session & { deliverables: [{ count: number }] };

interface Props {
  params: Promise<{ mentee: string }>;
}

export default async function SessoesPage({ params }: Props) {
  const { mentee } = await params;
  const supabase = createAdminClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, mentee_slug")
    .eq("mentee_slug", mentee)
    .single();

  if (!profile || profile.mentee_slug !== mentee) {
    notFound();
  }

  const { data: sessions } = await supabase
    .from("sessions")
    .select("*, deliverables(count)")
    .eq("mentee_id", profile.id)
    .order("session_number", { ascending: true });

  const sessionMap = new Map<number, SessionWithDeliverables>(
    (sessions ?? []).map((s) => [
      s.session_number,
      s as SessionWithDeliverables,
    ]),
  );

  const completed = sessionMap.size;

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <div className="space-y-3">
          <h1 className="text-text text-2xl font-semibold">Sessões</h1>
          <SessionArcProgress completed={completed} total={TOTAL_SESSIONS} />
        </div>

        <div className="space-y-3">
          {Array.from({ length: TOTAL_SESSIONS }, (_, i) => i + 1).map((n) => {
            const session = sessionMap.get(n);
            return session ? (
              <SessionCard key={n} session={session} menteeSlug={mentee} />
            ) : (
              <SessionPlaceholder key={n} number={n} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
