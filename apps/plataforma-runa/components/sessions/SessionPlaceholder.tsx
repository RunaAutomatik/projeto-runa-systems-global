interface Props {
  number: number;
}

export function SessionPlaceholder({ number }: Props) {
  return (
    <div className="bg-surface1 border border-border rounded-lg p-5 opacity-40 cursor-default">
      <div className="flex items-center gap-3">
        <span className="text-textMuted text-xs font-mono">
          {String(number).padStart(2, "0")}
        </span>
        <p className="text-textMuted text-sm">Sessão aguardando</p>
      </div>
    </div>
  );
}
