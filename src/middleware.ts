import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Legacy /course/* URLs are redirected in next.config.ts
  if (pathname.startsWith("/course/")) {
    return NextResponse.next();
  }

  // Allow the clavier page and Next.js internals
  if (pathname === "/clavier" || pathname.startsWith("/clavier/")) {
    return NextResponse.next();
  }
  if (pathname === "/arabe" || pathname.startsWith("/arabe/")) {
    return NextResponse.next();
  }
  if (pathname === "/nourania" || pathname.startsWith("/nourania/")) {
    return NextResponse.next();
  }
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // static files (favicon, images, etc.)
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to /clavier
  return NextResponse.redirect(new URL("/clavier", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
