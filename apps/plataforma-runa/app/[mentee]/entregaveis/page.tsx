import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { DeliverableBrowser } from "@/components/deliverables/DeliverableBrowser";

interface Props {
  params: Promise<{ mentee: string }>;
}

export default async function EntregaveisPage({ params }: Props) {
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

  const { data: deliverables } = await supabase
    .from("deliverables")
    .select("*, sessions(session_number, title)")
    .eq("mentee_id", profile.id)
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-text text-2xl font-semibold">Entregáveis</h1>
        <DeliverableBrowser deliverables={deliverables ?? []} />
      </div>
    </div>
  );
}
