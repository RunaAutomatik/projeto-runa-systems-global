import Link from "next/link";
import Stripe from "stripe";
import { currentUser } from "@clerk/nextjs/server";

export default async function PagamentoSucessoPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return <Fallback />;
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-04-22.dahlia",
  });

  let paid = false;
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    paid = session.payment_status === "paid";
  } catch {
    return <Fallback />;
  }

  if (!paid) {
    return <Fallback />;
  }

  const user = await currentUser();
  const menteeSlug = (
    user?.publicMetadata as { menteeSlug?: string } | undefined
  )?.menteeSlug;
  const platformHref = menteeSlug ? `/${menteeSlug}/home` : "/entrar";

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-green-900/40 flex items-center justify-center mx-auto">
          <span className="text-green-400 text-xl">✓</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-text text-2xl font-semibold">
            Pagamento confirmado!
          </h1>
          <p className="text-muted text-sm">
            Seu acesso será ativado em alguns minutos.
          </p>
        </div>

        <div className="bg-surface-1 border border-border rounded-lg p-4 text-left text-sm text-muted space-y-1">
          <p>O que acontece agora:</p>
          <ul className="space-y-1 mt-2">
            <li className="flex gap-2">
              <span>—</span>
              <span>Você receberá um e-mail de confirmação</span>
            </li>
            <li className="flex gap-2">
              <span>—</span>
              <span>Seu acesso à plataforma será liberado automaticamente</span>
            </li>
            <li className="flex gap-2">
              <span>—</span>
              <span>
                Arthur entrará em contato para agendar a primeira sessão
              </span>
            </li>
          </ul>
        </div>

        <Link
          href={platformHref}
          className="block w-full text-center bg-accent text-text py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Acessar plataforma →
        </Link>
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-text text-xl font-semibold">
          Não foi possível confirmar o pagamento
        </h1>
        <p className="text-muted text-sm">
          Se você realizou o pagamento, aguarde alguns minutos e verifique seu
          e-mail. Em caso de dúvida, entre em contato.
        </p>
        <Link
          href="/planos"
          className="inline-block text-accent text-sm hover:underline"
        >
          ← Voltar aos planos
        </Link>
      </div>
    </div>
  );
}
