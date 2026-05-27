import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import Link from "next/link";
import { MarkdownContent } from "@/components/biblioteca/markdown-content";
import { YoutubeEmbed } from "@/components/biblioteca/youtube-embed";

export const dynamic = "force-dynamic";

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { sessionClaims } = await auth();
  const tier = (sessionClaims?.public_metadata as { tier?: string } | undefined)
    ?.tier;

  const supabase = createAdminClient();

  const { data: item } = await supabase
    .from("content_items")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!item) notFound();

  if (item.tier_required === "mentee" && tier !== "mentee") {
    redirect("/planos?upgrade=mentee");
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/biblioteca"
        className="text-muted text-sm hover:text-text mb-6 inline-block"
      >
        ← Biblioteca
      </Link>
      <h1 className="text-text text-2xl font-semibold mb-2">
        {item.title}
      </h1>
      {item.description && (
        <p className="text-muted text-sm mb-8">{item.description}</p>
      )}

      {(item.type === "skill" ||
        item.type === "prompt" ||
        item.type === "template") &&
        item.content_markdown && (
          <MarkdownContent content={item.content_markdown} />
        )}

      {(item.type === "lesson" || item.type === "live") && item.youtube_url && (
        <YoutubeEmbed url={item.youtube_url} />
      )}

      {item.type === "repo" && item.external_url && (
        <a
          href={item.external_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-surface-1 border border-border rounded-lg px-5 py-4 text-text hover:border-border/80 transition-colors"
        >
          Acessar repositório →
        </a>
      )}
    </div>
  );
}
