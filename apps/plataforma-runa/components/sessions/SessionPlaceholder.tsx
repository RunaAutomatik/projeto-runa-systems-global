interface Props {
  number: number;
}

export function SessionPlaceholder({ number }: Props) {
  return (
    <div className="bg-surface-1 border border-dashed border-border rounded-lg p-5 cursor-default opacity-50 select-none">
      <div className="flex items-start gap-3">
        <span className="text-muted text-xs font-mono flex-shrink-0 mt-0.5">
          {String(number).padStart(2, "0")}
        </span>
        <div className="space-y-1">
          <p className="text-muted text-sm">Sessão futura</p>
          <p className="text-muted text-xs opacity-70">
            Disponível após a sessão anterior
          </p>
        </div>
        <span className="ml-auto text-muted text-xs border border-dashed border-border rounded px-1.5 py-0.5 flex-shrink-0">
          🔒
        </span>
      </div>
    </div>
  );
}
