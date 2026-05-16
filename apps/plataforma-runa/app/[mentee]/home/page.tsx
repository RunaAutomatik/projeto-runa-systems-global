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
    <div className="min-h-screen bg-bg text-textPrimary">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <ProfileCard profile={profile} />

        <Section title="Sessões">
          <Placeholder text="Suas sessões aparecerão aqui após a primeira semana." />
        </Section>

        <Section title="Entregáveis">
          <Placeholder text="Os entregáveis das sessões ficarão disponíveis aqui." />
        </Section>

        <Section title="Seu Squad">
          <Placeholder text="Os 8 Agentes Neurais do seu squad serão configurados aqui." />
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
      <h2 className="text-textPrimary text-lg font-semibold border-b border-border pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Placeholder({ text }: { text: string }) {
  return (
    <div className="bg-surface1 border border-border rounded-lg p-8 text-center">
      <p className="text-textMuted text-sm">{text}</p>
    </div>
  );
}
