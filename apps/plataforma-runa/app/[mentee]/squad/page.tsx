import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { SquadGrid } from "@/components/squad/SquadGrid";

interface Props {
  params: Promise<{ mentee: string }>;
}

export default async function SquadPage({ params }: Props) {
  const { mentee } = await params;
  const supabase = createAdminClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, mentee_slug")
    .eq("mentee_slug", mentee)
    .single();

  if (!profile || profile.mentee_slug !== mentee) {
    notFound();
  }

  const { data: snapshot } = await supabase
    .from("infrastructure_snapshots")
    .select("agents")
    .eq("mentee_id", profile.id)
    .order("captured_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-text text-2xl font-semibold">Squad</h1>
        <SquadGrid agents={snapshot?.agents ?? {}} />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
