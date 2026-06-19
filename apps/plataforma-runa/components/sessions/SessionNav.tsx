import Link from "next/link";

interface Props {
  menteeSlug: string;
  current: number;
  total: number;
}

export function SessionNav({ menteeSlug, current, total }: Props) {
  const hasPrev = current > 1;
  const hasNext = current < total;

  return (
    <div className="flex items-center justify-between text-sm">
      {hasPrev ? (
        <Link
          href={`/${menteeSlug}/sessoes/${current - 1}`}
          className="text-muted hover:text-text transition-colors flex items-center gap-1"
        >
          ← Sessão {String(current - 1).padStart(2, "0")}
        </Link>
      ) : (
        <span />
      )}

      <span className="text-muted font-mono text-xs">
        Sessão {String(current).padStart(2, "0")} de {total}
      </span>

      {hasNext ? (
        <Link
          href={`/${menteeSlug}/sessoes/${current + 1}`}
          className="text-muted hover:text-text transition-colors flex items-center gap-1"
        >
          Sessão {String(current + 1).padStart(2, "0")} →
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
