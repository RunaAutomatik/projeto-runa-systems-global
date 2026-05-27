"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function DeliverableSearch({ value, onChange }: Props) {
  return (
    <input
      type="search"
      placeholder="Buscar entregável..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-surface-1 border border-border rounded-lg px-4 py-2 text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
    />
  );
}
