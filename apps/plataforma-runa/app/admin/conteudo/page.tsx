import { createAdminClient } from "@/lib/supabase/admin";
import ContentList from "./_components/ContentList";

export default async function AdminConteudoPage() {
  const supabase = createAdminClient();

  const { data } = await supabase
    .from("content_items")
    .select(
      "id, title, slug, description, bunny_video_id, tier_required, category, created_at",
    )
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-text text-2xl font-semibold">Conteúdo</h1>
        <p className="text-muted text-sm mt-1">
          {(data ?? []).length} item(s) cadastrado(s)
        </p>
      </div>
      <ContentList items={data ?? []} />
    </div>
  );
}
