import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (userId !== process.env.ARTHUR_CLERK_USER_ID)
    return NextResponse.json({}, { status: 403 });

  const { mentee_id, title, type, session_id, file_url, description } =
    await req.json();

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("deliverables")
    .insert({
      mentee_id,
      title,
      type,
      session_id: session_id ?? null,
      file_url: file_url ?? null,
      description: description ?? null,
    })
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
