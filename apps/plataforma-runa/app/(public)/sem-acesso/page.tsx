import Link from "next/link";

export default function SemAcessoPage() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <p className="text-muted text-sm font-mono uppercase tracking-widest mb-6">
          RUNA — Acesso restrito
        </p>

        <h1 className="text-2xl font-bold text-text mb-4 leading-snug">
          Esta área é exclusiva para alunos RUNA.
        </h1>

        <p className="text-muted text-base leading-relaxed mb-8">
          O programa RUNA é uma mentoria de 21 sessões em 7 semanas. Você
          desenvolve sua operação com IA do zero — com Arthur acompanhando cada
          passo.
        </p>

        <div className="bg-surface-1 border border-border rounded-xl p-5 mb-8 text-left space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-muted font-mono text-xs shrink-0">21</span>
            <span className="text-text text-sm">
              sessões ao vivo, 1h30 cada
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted font-mono text-xs shrink-0">7</span>
            <span className="text-text text-sm">
              semanas de implementação real
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted font-mono text-xs shrink-0">1</span>
            <span className="text-text text-sm">sistema completo ao final</span>
          </div>
        </div>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-accent text-text font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity mb-3"
        >
          Quero entrar no RUNA — R$ 7.000
        </a>

        <Link
          href="/entrar"
          className="block text-muted text-sm hover:text-text transition-colors"
        >
          Já sou aluno — entrar
        </Link>
      </div>
    </div>
  );
}
