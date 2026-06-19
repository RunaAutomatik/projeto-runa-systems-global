import crypto from "crypto";

export async function getBunnySignedUrl(videoId: string): Promise<string> {
  const libraryId = process.env.BUNNY_LIBRARY_ID;
  const securityKey = process.env.BUNNY_SECURITY_KEY;

  if (!libraryId || !securityKey) {
    throw new Error(
      "Bunny.net env vars missing: BUNNY_LIBRARY_ID, BUNNY_SECURITY_KEY",
    );
  }

  const expiry = Math.floor(Date.now() / 1000) + 3600;

  const token = crypto
    .createHash("sha256")
    .update(`${securityKey}${videoId}${expiry}`)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");

  return `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?token=${token}&expires=${expiry}`;
}
