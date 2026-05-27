import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/entrar(.*)",
  "/planos(.*)",
  "/pagamento(.*)",
]);
const isBibliotecaRoute = createRouteMatcher(["/biblioteca(.*)"]);
const isMenteeRoute = createRouteMatcher(["/:menteeSlug(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();
  const publicMetadata = sessionClaims?.public_metadata as
    | { tier?: "free" | "mentee"; menteeSlug?: string }
    | undefined;

  if (isPublicRoute(req)) return NextResponse.next();

  if (!userId) {
    const redirectUrl = new URL("/entrar", req.url);
    redirectUrl.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (isAdminRoute(req)) {
    if (userId !== process.env.ARTHUR_CLERK_USER_ID) {
      return NextResponse.redirect(new URL("/entrar", req.url));
    }
    return NextResponse.next();
  }

  if (isBibliotecaRoute(req)) {
    return NextResponse.next();
  }

  if (isMenteeRoute(req)) {
    const slugInUrl = req.nextUrl.pathname.split("/")[1];

    if (publicMetadata?.tier !== "mentee") {
      return NextResponse.redirect(new URL("/planos?upgrade=mentee", req.url));
    }

    if (publicMetadata?.menteeSlug !== slugInUrl) {
      return NextResponse.redirect(new URL("/planos?upgrade=mentee", req.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
