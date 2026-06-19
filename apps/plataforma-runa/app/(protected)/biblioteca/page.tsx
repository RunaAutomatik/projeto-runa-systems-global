import { createAdminClient } from "@/lib/supabase/admin";
import { BibliotecaClient } from "@/components/biblioteca/BibliotecaClient";

export const dynamic = "force-dynamic";

export default async function BibliotecaPage() {
  const supabase = createAdminClient();

  const { data: items } = await supabase
    .from("content_items")
    .select("id, slug, title, description, type, tier_required, published_at")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false });

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-text text-2xl font-semibold mb-1">Biblioteca</h1>
      <p className="text-muted text-sm mb-8">Recursos para a sua jornada</p>

      <BibliotecaClient items={items ?? []} />
    </div>
  );
}
