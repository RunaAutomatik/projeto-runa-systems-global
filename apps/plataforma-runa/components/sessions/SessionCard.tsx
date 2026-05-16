import Link from "next/link";
import type { Session } from "@/lib/types/mentee";

type SessionWithDeliverables = Session & { deliverables: [{ count: number }] };

interface Props {
  session: SessionWithDeliverables;
  menteeSlug: string;
}

export function SessionCard({ session, menteeSlug }: Props) {
  const date = new Date(session.session_date + "T00:00:00").toLocaleDateString(
    "pt-BR",
    { day: "2-digit", month: "2-digit", year: "numeric" },
  );
  const delivCount = session.deliverables?.[0]?.count ?? 0;

  return (
    <Link href={`/${menteeSlug}/sessoes/${session.session_number}`}>
      <div className="bg-surface1 border border-border rounded-lg p-5 flex items-start justify-between gap-4 hover:border-accent transition-colors cursor-pointer">
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-textMuted text-xs font-mono flex-shrink-0">
              {String(session.session_number).padStart(2, "0")}
            </span>
            <h3 className="text-textPrimary text-sm font-medium truncate">
              {session.title}
            </h3>
          </div>
          <div className="flex items-center gap-4 text-textMuted text-xs pl-7">
            <span>{date}</span>
            {session.duration_minutes != null && (
              <span>{session.duration_minutes}min</span>
            )}
          </div>
        </div>
        {delivCount > 0 && (
          <span className="text-xs bg-accentSoft text-textMuted border border-border rounded px-2 py-0.5 whitespace-nowrap flex-shrink-0">
            {delivCount} entregável{delivCount !== 1 ? "is" : ""}
          </span>
        )}
      </div>
    </Link>
  );
}
