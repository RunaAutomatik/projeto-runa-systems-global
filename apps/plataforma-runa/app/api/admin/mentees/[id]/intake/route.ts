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
  const { answers } = await req.json();

  const supabase = createAdminClient();
  const { data: profile } = await supabase
    .from("profiles")
    .select("mentee_context")
    .eq("id", id)
    .single();

  const existing = (profile?.mentee_context as Record<string, unknown>) ?? {};
  const intake = answers.reduce(
    (acc: Record<string, string>, answer: string, i: number) => {
      acc[`q${i + 1}`] = answer;
      return acc;
    },
    {} as Record<string, string>,
  );
  intake.completed_at = new Date().toISOString();

  const { error } = await supabase
    .from("profiles")
    .update({ mentee_context: { ...existing, intake } })
    .eq("id", id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
