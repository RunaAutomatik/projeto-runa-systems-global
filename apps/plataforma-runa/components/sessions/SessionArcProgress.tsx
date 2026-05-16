interface Props {
  completed: number;
  total: number;
}

export function SessionArcProgress({ completed, total }: Props) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="space-y-2">
      <p className="text-textMuted text-sm">
        Sessão {completed} de {total} concluída{completed !== 1 ? "s" : ""}
      </p>
      <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
