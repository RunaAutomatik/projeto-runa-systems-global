import { describe, test, expect, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";

const mockState = vi.hoisted(() => ({
  userId: null as string | null,
  publicMetadata: {} as Record<string, unknown>,
}));

vi.mock("@clerk/nextjs/server", () => ({
  clerkMiddleware:
    (handler: (auth: () => Promise<unknown>, req: NextRequest) => unknown) =>
    (req: NextRequest) =>
      handler(
        () =>
          Promise.resolve({
            userId: mockState.userId,
            sessionClaims: mockState.userId
              ? { public_metadata: mockState.publicMetadata }
              : null,
          }),
        req,
      ),
  createRouteMatcher: (patterns: string[]) => (req: NextRequest) => {
    const p = req.nextUrl.pathname;
    return patterns.some((pat) => {
      if (pat === "/") return p === "/";
      const re = pat.replace(/\(\.\*\)/g, ".*").replace(/:\w+/, "[^/]+");
      return new RegExp(`^${re}(/.*)?$`).test(p);
    });
  },
}));

import middleware from "../proxy";

const ARTHUR_ID = "user_arthur_clerk_test_id";

function makeRequest(pathname: string): NextRequest {
  return new NextRequest(new URL(`http://localhost:3001${pathname}`));
}

beforeEach(() => {
  mockState.userId = null;
  mockState.publicMetadata = {};
  process.env.ARTHUR_CLERK_USER_ID = ARTHUR_ID;
});

describe("middleware tier-gating", () => {
  test("unauthenticated → /entrar with redirect param", async () => {
    const res = await middleware(makeRequest("/biblioteca"));
    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/entrar");
    expect(location).toContain("redirect=");
  });

  test("free tier → /biblioteca allowed", async () => {
    mockState.userId = "user_free";
    mockState.publicMetadata = { tier: "free" };
    const res = await middleware(makeRequest("/biblioteca"));
    expect(res.status).toBe(200);
  });

  test("free tier → /lucas-pesto/home → /planos?upgrade=mentee", async () => {
    mockState.userId = "user_free";
    mockState.publicMetadata = { tier: "free" };
    const res = await middleware(makeRequest("/lucas-pesto/home"));
    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/planos");
    expect(location).toContain("upgrade=mentee");
  });

  test("mentee (own slug) → /lucas-pesto/home allowed", async () => {
    mockState.userId = "user_lucas";
    mockState.publicMetadata = { tier: "mentee", menteeSlug: "lucas-pesto" };
    const res = await middleware(makeRequest("/lucas-pesto/home"));
    expect(res.status).toBe(200);
  });

  test("mentee (wrong slug) → /[other]/home → /planos?upgrade=mentee", async () => {
    mockState.userId = "user_lucas";
    mockState.publicMetadata = { tier: "mentee", menteeSlug: "lucas-pesto" };
    const res = await middleware(makeRequest("/maria-silva/home"));
    expect(res.status).toBe(307);
    const location = res.headers.get("location") ?? "";
    expect(location).toContain("/planos");
    expect(location).toContain("upgrade=mentee");
  });

  test("admin user → /admin/dashboard allowed", async () => {
    mockState.userId = ARTHUR_ID;
    const res = await middleware(makeRequest("/admin/dashboard"));
    expect(res.status).toBe(200);
  });

  test("non-admin user → /admin/dashboard → /entrar", async () => {
    mockState.userId = "user_other";
    const res = await middleware(makeRequest("/admin/dashboard"));
    expect(res.status).toBe(307);
    expect(res.headers.get("location")).toContain("/entrar");
  });

  test("public route / → allowed without auth", async () => {
    const res = await middleware(makeRequest("/"));
    expect(res.status).toBe(200);
  });

  test("public route /planos → allowed without auth", async () => {
    const res = await middleware(makeRequest("/planos"));
    expect(res.status).toBe(200);
  });
});
