import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import crypto from "crypto";

describe("getBunnySignedUrl", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      BUNNY_LIBRARY_ID: "123456",
      BUNNY_SECURITY_KEY: "test-security-key",
    };
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00Z"));
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.useRealTimers();
  });

  test("returns a correctly formatted signed URL", async () => {
    const { getBunnySignedUrl } = await import("@/lib/bunny");
    const url = await getBunnySignedUrl("abc-video-id");

    expect(url).toMatch(
      /^https:\/\/iframe\.mediadelivery\.net\/embed\/123456\/abc-video-id\?token=.+&expires=\d+$/,
    );
  });

  test("token contains no base64 padding chars (+, /, =)", async () => {
    const { getBunnySignedUrl } = await import("@/lib/bunny");
    const url = await getBunnySignedUrl("test-vid");
    const token = new URL(url).searchParams.get("token")!;

    expect(token).not.toMatch(/[+/=]/);
  });

  test("expiry is exactly 3600 seconds from call time", async () => {
    const { getBunnySignedUrl } = await import("@/lib/bunny");
    const now = Math.floor(Date.now() / 1000);
    const url = await getBunnySignedUrl("expiry-test");
    const expires = Number(new URL(url).searchParams.get("expires"));

    expect(expires).toBe(now + 3600);
  });

  test("token matches expected SHA-256 HMAC calculation", async () => {
    const { getBunnySignedUrl } = await import("@/lib/bunny");
    const videoId = "known-video";
    const expiry = Math.floor(Date.now() / 1000) + 3600;

    const expectedToken = crypto
      .createHash("sha256")
      .update(`test-security-key${videoId}${expiry}`)
      .digest("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=/g, "");

    const url = await getBunnySignedUrl(videoId);
    const token = new URL(url).searchParams.get("token");

    expect(token).toBe(expectedToken);
  });

  test("throws if BUNNY_LIBRARY_ID is missing", async () => {
    delete process.env.BUNNY_LIBRARY_ID;
    vi.resetModules();
    const { getBunnySignedUrl } = await import("@/lib/bunny");

    await expect(getBunnySignedUrl("vid")).rejects.toThrow(
      "Bunny.net env vars missing",
    );
  });

  test("throws if BUNNY_SECURITY_KEY is missing", async () => {
    delete process.env.BUNNY_SECURITY_KEY;
    vi.resetModules();
    const { getBunnySignedUrl } = await import("@/lib/bunny");

    await expect(getBunnySignedUrl("vid")).rejects.toThrow(
      "Bunny.net env vars missing",
    );
  });
});
