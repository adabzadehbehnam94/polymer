
import { NextResponse } from "next/server";

export function middleware(request: {
    url: string,
    cookies: any,
    get: string
}) {
    const cookie = request.cookies.get("name")
    const category = request.cookies.get("user")

    if (!cookie) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: '/dashboard/:path*'
}