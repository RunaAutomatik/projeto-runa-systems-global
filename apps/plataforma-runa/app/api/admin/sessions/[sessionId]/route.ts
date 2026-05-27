import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ sessionId: string }> },
) {
  const { userId } = await auth();
  if (userId !== process.env.ARTHUR_CLERK_USER_ID)
    return NextResponse.json({}, { status: 403 });

  const { sessionId } = await params;
  const body = await req.json();
  const { title, session_date, duration_minutes, summary, bunny_video_id } =
    body;

  const update: Record<string, unknown> = {};
  if (title !== undefined) update.title = title;
  if (session_date !== undefined) update.session_date = session_date;
  if (duration_minutes !== undefined)
    update.duration_minutes = duration_minutes;
  if (summary !== undefined) update.summary = summary;
  if (bunny_video_id !== undefined) update.bunny_video_id = bunny_video_id;

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("sessions")
    .update(update)
    .eq("id", sessionId)
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
