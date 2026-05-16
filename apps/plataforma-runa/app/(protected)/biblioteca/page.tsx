import { createClient } from "@supabase/supabase-js";
import { ContentCard } from "@/components/biblioteca/content-card";
import { LockedCard } from "@/components/biblioteca/locked-card";

export const dynamic = "force-dynamic";

export default async function BibliotecaPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const { data: items } = await supabase
    .from("content_items")
    .select("id, slug, title, description, type, tier_required, published_at")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-textPrimary text-2xl font-semibold mb-1">
        Biblioteca
      </h1>
      <p className="text-textMuted text-sm mb-8">Recursos para a sua jornada</p>

      {!items?.length ? (
        <p className="text-textMuted text-sm">
          Nenhum recurso disponível ainda.
        </p>
      ) : (
        <div className="grid gap-4">
          {items.map((item) =>
            item.tier_required === "free" ? (
              <ContentCard key={item.id} item={item} />
            ) : (
              <LockedCard key={item.id} item={item} />
            ),
          )}
        </div>
      )}
    </div>
  );
}
