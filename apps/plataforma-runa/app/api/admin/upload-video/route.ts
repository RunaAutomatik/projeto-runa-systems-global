import { auth } from "@clerk/nextjs/server";
import { createHmac } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();
  if (userId !== process.env.ARTHUR_CLERK_USER_ID)
    return NextResponse.json({}, { status: 403 });

  const { session_title } = await req.json();

  const libraryId = process.env.BUNNY_LIBRARY_ID!;
  const apiKey = process.env.BUNNY_API_KEY!;

  const createRes = await fetch(
    `https://video.bunnycdn.com/library/${libraryId}/videos`,
    {
      method: "POST",
      headers: {
        AccessKey: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: session_title ?? "Session recording" }),
    },
  );

  if (!createRes.ok) {
    const text = await createRes.text();
    return NextResponse.json({ error: text }, { status: 502 });
  }

  const { guid: bunnyVideoId } = await createRes.json();

  // HMAC expires in 6 hours — enough for any upload session
  const expire = Math.floor(Date.now() / 1000) + 6 * 3600;
  const signature = createHmac("sha256", apiKey)
    .update(libraryId + bunnyVideoId + expire)
    .digest("hex");

  return NextResponse.json({
    bunny_video_id: bunnyVideoId,
    tus_upload_url: "https://video.bunnycdn.com/tusupload",
    library_id: libraryId,
    auth_signature: signature,
    auth_expire: expire,
  });
}
