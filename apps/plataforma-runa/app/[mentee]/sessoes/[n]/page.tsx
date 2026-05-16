import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { getBunnySignedUrl } from "@/lib/bunny";
import { SessionPlayer } from "@/components/sessions/SessionPlayer";
import { SessionNav } from "@/components/sessions/SessionNav";
import { DeliverableCard } from "@/components/deliverables/DeliverableCard";

const TOTAL_SESSIONS = 21;

interface Props {
  params: Promise<{ mentee: string; n: string }>;
}

export default async function SessaoDetailPage({ params }: Props) {
  const { mentee, n } = await params;
  const sessionNumber = Number(n);

  if (
    !Number.isInteger(sessionNumber) ||
    sessionNumber < 1 ||
    sessionNumber > TOTAL_SESSIONS
  ) {
    notFound();
  }

  const supabase = createAdminClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, mentee_slug")
    .eq("mentee_slug", mentee)
    .single();

  if (!profile || profile.mentee_slug !== mentee) {
    notFound();
  }

  const { data: session } = await supabase
    .from("sessions")
    .select("*, deliverables(*)")
    .eq("mentee_id", profile.id)
    .eq("session_number", sessionNumber)
    .single();

  // Session doesn't exist yet (future session) — not a 404
  if (!session) {
    return (
      <div className="min-h-screen bg-bg text-textPrimary">
        <div className="max-w-2xl mx-auto px-6 py-12 space-y-6">
          <SessionNav
            menteeSlug={mentee}
            current={sessionNumber}
            total={TOTAL_SESSIONS}
          />
          <div className="text-center py-24 space-y-3">
            <p className="text-textMuted text-sm font-mono">
              {String(sessionNumber).padStart(2, "0")}
            </p>
            <p className="text-textPrimary text-lg">
              Sessão não realizada ainda
            </p>
          </div>
        </div>
      </div>
    );
  }

  const signedUrl = session.bunny_video_id
    ? await getBunnySignedUrl(session.bunny_video_id)
    : null;

  const date = new Date(session.session_date + "T00:00:00").toLocaleDateString(
    "pt-BR",
    { day: "2-digit", month: "long", year: "numeric" },
  );

  const deliverables = (session.deliverables ?? []) as {
    id: string;
    mentee_id: string;
    session_id: string | null;
    title: string;
    type: "prompt" | "template" | "workflow" | "agent" | "doc";
    file_url: string | null;
    description: string | null;
    created_at: string;
  }[];

  return (
    <div className="min-h-screen bg-bg text-textPrimary">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <SessionNav
          menteeSlug={mentee}
          current={sessionNumber}
          total={TOTAL_SESSIONS}
        />

        {signedUrl ? (
          <SessionPlayer signedUrl={signedUrl} />
        ) : (
          <div className="w-full aspect-video bg-surface1 border border-border rounded-lg flex items-center justify-center">
            <p className="text-textMuted text-sm">Gravação em processamento</p>
          </div>
        )}

        <div className="flex items-center gap-4 text-textMuted text-xs">
          <span>📅 {date}</span>
          {session.duration_minutes != null && (
            <span>⏱ {session.duration_minutes}min</span>
          )}
        </div>

        {session.summary && (
          <section className="space-y-3">
            <h2 className="text-textPrimary text-base font-semibold">Resumo</h2>
            <p className="text-textMuted text-sm leading-relaxed whitespace-pre-wrap">
              {session.summary}
            </p>
          </section>
        )}

        {deliverables.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-textPrimary text-base font-semibold">
              Entregáveis desta sessão
            </h2>
            <div className="space-y-2">
              {deliverables.map((d) => (
                <DeliverableCard key={d.id} deliverable={d} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
