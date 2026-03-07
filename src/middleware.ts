import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // อนุญาตให้เข้าหน้า login ได้เสมอ
    if (pathname.startsWith("/admin/login")) {
        // ถ้า login อยู่แล้ว ให้ redirect ไป /admin
        const session = request.cookies.get("admin_session")?.value;
        if (session && SESSION_SECRET && session === SESSION_SECRET) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
        return NextResponse.next();
    }

    // ป้องกันทุก route ใน /admin/*
    const session = request.cookies.get("admin_session")?.value;

    if (!session || !SESSION_SECRET || session !== SESSION_SECRET) {
        const loginUrl = new URL("/admin/login", request.url);
        if (pathname !== "/admin") {
            loginUrl.searchParams.set("from", pathname);
        }
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*",
};
