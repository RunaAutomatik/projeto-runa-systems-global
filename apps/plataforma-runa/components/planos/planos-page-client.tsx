"use client";
import { useSearchParams } from "next/navigation";

export function PlanosPageClient() {
  const params = useSearchParams();
  const upgrade = params.get("upgrade");

  return (
    <div className="min-h-screen bg-bg text-textPrimary flex flex-col items-center justify-center gap-8 p-8">
      {upgrade === "mentee" && (
        <div className="text-sm text-accent border border-border rounded px-4 py-2">
          Acesso restrito — faça o upgrade para continuar
        </div>
      )}

      <div className="border border-border rounded-lg p-8 max-w-sm w-full bg-surface1">
        <h2 className="text-textPrimary font-semibold text-lg mb-2">
          Mentoria RUNA
        </h2>
        <p className="text-textMuted text-sm mb-4">
          21 sessões · 7 semanas · 3×/sem
        </p>
        <p className="text-textPrimary text-2xl font-bold mb-6">R$ 7.000</p>
        <button
          disabled
          className="w-full bg-accent text-textPrimary rounded px-4 py-2 opacity-50 cursor-not-allowed text-sm"
        >
          Em breve
        </button>
      </div>
    </div>
  );
}
