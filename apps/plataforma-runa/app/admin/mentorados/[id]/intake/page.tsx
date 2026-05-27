"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const QUESTIONS = [
  "Qual é o principal produto/serviço que você vende hoje?",
  "Qual é a maior dificuldade no seu processo comercial?",
  "Quantas horas por semana você gasta em tarefas operacionais?",
  "Você já usa alguma ferramenta de IA no seu negócio? Qual?",
  "Qual é a meta de faturamento para os próximos 90 dias?",
  "Você tem equipe? Quantas pessoas?",
  "O que você espera que mude na sua operação depois da RUNA?",
  "Capacidade: qual é sua disponibilidade real por semana para implementar mudanças?",
  "Capital: você tem recurso para investir em ferramentas e automações?",
  "Comprometimento: como você avalia seu nível de comprometimento com a transformação?",
  "Clareza: você tem clareza sobre o que precisa mudar primeiro no seu negócio?",
];

export default function IntakePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>(
    new Array(QUESTIONS.length).fill(""),
  );
  const [current, setCurrent] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const isLast = current === QUESTIONS.length - 1;

  function handleAnswer(value: string) {
    const next = [...answers];
    next[current] = value;
    setAnswers(next);
  }

  async function submit() {
    setSubmitting(true);
    await fetch(`/api/admin/mentees/${id}/intake`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers }),
    });
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="min-h-screen bg-surface-1 flex items-center justify-center p-8">
        <div className="max-w-lg w-full text-center space-y-6">
          <p className="text-text text-lg">Intake concluído!</p>
          <button
            onClick={() => router.push(`/admin/mentorados/${id}`)}
            className="text-accent text-sm hover:underline"
          >
            ← Voltar ao perfil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-1 flex items-center justify-center p-8">
      <div className="max-w-lg w-full space-y-6">
        <p className="text-muted text-xs">
          Pergunta {current + 1} de {QUESTIONS.length}
        </p>
        <div className="w-full bg-surface-2 rounded-full h-1">
          <div
            className="bg-accent h-1 rounded-full transition-all"
            style={{
              width: `${((current + 1) / QUESTIONS.length) * 100}%`,
            }}
          />
        </div>
        <p className="text-text text-base leading-relaxed">
          {QUESTIONS[current]}
        </p>
        <textarea
          className="w-full bg-surface-2 border border-border text-text rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
          rows={5}
          value={answers[current]}
          onChange={(e) => handleAnswer(e.target.value)}
          autoFocus
        />
        <div className="flex gap-3">
          {current > 0 && (
            <button
              onClick={() => setCurrent((c) => c - 1)}
              className="text-muted text-sm hover:text-text"
            >
              ← Anterior
            </button>
          )}
          <div className="flex-1" />
          {isLast ? (
            <button
              onClick={submit}
              disabled={!answers[current].trim() || submitting}
              className="bg-accent text-text text-sm px-4 py-2 rounded disabled:opacity-50"
            >
              {submitting ? "Enviando…" : "Enviar"}
            </button>
          ) : (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              disabled={!answers[current].trim()}
              className="bg-accent text-text text-sm px-4 py-2 rounded disabled:opacity-50"
            >
              Próxima →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
