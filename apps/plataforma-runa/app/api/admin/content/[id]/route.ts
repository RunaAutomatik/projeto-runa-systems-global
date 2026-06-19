import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();
  if (userId !== process.env.ARTHUR_CLERK_USER_ID)
    return NextResponse.json({}, { status: 403 });

  const { id } = await params;
  const body = await req.json();
  const { title, slug, description, bunny_video_id, tier_required, category } =
    body;

  const supabase = createAdminClient();

  const { data: existing } = await supabase
    .from("content_items")
    .select("id")
    .eq("slug", slug)
    .neq("id", id)
    .single();

  if (existing)
    return NextResponse.json({ error: "Slug já existe" }, { status: 409 });

  const { error } = await supabase
    .from("content_items")
    .update({
      title,
      slug,
      description: description || null,
      bunny_video_id: bunny_video_id || null,
      tier_required: tier_required || "free",
      category: category || null,
    })
    .eq("id", id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { userId } = await auth();
  if (userId !== process.env.ARTHUR_CLERK_USER_ID)
    return NextResponse.json({}, { status: 403 });

  const { id } = await params;
  const supabase = createAdminClient();
  const { error } = await supabase.from("content_items").delete().eq("id", id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
