import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

export async function GET() {
  const { userId } = await auth();
  if (userId !== process.env.ARTHUR_CLERK_USER_ID)
    return NextResponse.json({}, { status: 403 });

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("content_items")
    .select(
      "id, title, slug, description, bunny_video_id, tier_required, category, created_at",
    )
    .order("created_at", { ascending: false });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data ?? []);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (userId !== process.env.ARTHUR_CLERK_USER_ID)
    return NextResponse.json({}, { status: 403 });

  const body = await req.json();
  const { title, slug, description, bunny_video_id, tier_required, category } =
    body;

  const supabase = createAdminClient();

  const { data: existing } = await supabase
    .from("content_items")
    .select("id")
    .eq("slug", slug)
    .single();

  if (existing)
    return NextResponse.json({ error: "Slug já existe" }, { status: 409 });

  const { data, error } = await supabase
    .from("content_items")
    .insert({
      title,
      slug,
      description: description || null,
      bunny_video_id: bunny_video_id || null,
      tier_required: tier_required || "free",
      category: category || null,
    })
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 201 });
}
