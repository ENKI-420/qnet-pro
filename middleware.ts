import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthPage = request.nextUrl.pathname.startsWith("/auth")
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin")

  // Redirect to login if accessing protected route without auth
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  // Redirect to dashboard if accessing auth pages while authenticated
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Check admin access
  if (isAdminPage && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Add security headers
  const response = NextResponse.next()
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
  )

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
