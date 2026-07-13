
import { NextResponse } from "next/server";

export function middleware(request: {
    url: string,
    cookies: any,
    get: string
}) {
    const session = request.cookies.get("session")
    // const category = request.cookies.get("user")

    if (!session) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: '/dashboard/:path*'
}