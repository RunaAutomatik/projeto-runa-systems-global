import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { ProfileCard } from "@/components/mentee/profile-card";

interface Props {
  params: Promise<{ mentee: string }>;
}

export default async function MenteeHomePage({ params }: Props) {
  const { mentee } = await params;
  const supabase = createAdminClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name, email, tier, mentee_slug")
    .eq("mentee_slug", mentee)
    .single();

  // Defense-in-depth: middleware already blocked wrong slugs,
  // but we double-check in case of JWT propagation delay
  if (!profile || profile.mentee_slug !== mentee) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <ProfileCard profile={profile} />

        <Section title="Sessões">
          <EmptyState
            icon="◎"
            label="Nenhuma sessão ainda"
            description="Suas sessões aparecem aqui após serem agendadas."
            action={{ href: `/${mentee}/sessoes`, label: "Ver calendário" }}
          />
        </Section>

        <Section title="Entregáveis">
          <EmptyState
            icon="◈"
            label="Sem entregáveis"
            description="PDFs, templates e recursos das sessões ficam aqui."
          />
        </Section>

        <Section title="Seu Squad">
          <EmptyState
            icon="◉"
            label="Squad em configuração"
            description="Os 8 Agentes Neurais serão configurados ao longo da mentoria."
            action={{ href: `/${mentee}/squad`, label: "Ver squad" }}
          />
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-text text-lg font-semibold border-b border-border pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function EmptyState({
  icon,
  label,
  description,
  action,
}: {
  icon: string;
  label: string;
  description: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="bg-surface-1 border border-dashed border-border rounded-lg p-8 flex flex-col items-center gap-3 text-center">
      <span className="text-2xl text-muted opacity-60 select-none">{icon}</span>
      <div className="space-y-1">
        <p className="text-text text-sm font-medium">{label}</p>
        <p className="text-muted text-xs max-w-xs">{description}</p>
      </div>
      {action && (
        <Link
          href={action.href}
          className="text-xs text-muted hover:text-text border border-border rounded px-3 py-1.5 transition-colors hover:border-accent mt-1"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
