export type ContentItemMeta = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  type: "lesson" | "repo" | "skill" | "prompt" | "template" | "live";
  tier_required: "free" | "mentee";
  published_at: string | null;
};

export type ContentItemFull = ContentItemMeta & {
  content_markdown: string | null;
  youtube_url: string | null;
  external_url: string | null;
};
