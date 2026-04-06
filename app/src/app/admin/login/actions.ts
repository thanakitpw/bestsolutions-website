"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(
    _prevState: { error: string } | null,
    formData: FormData
): Promise<{ error: string }> {
    const password = formData.get("password") as string;
    const from = (formData.get("from") as string) || "/admin";

    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";
    const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "";

    if (!ADMIN_PASSWORD || !SESSION_SECRET) {
        return { error: "Server ยังไม่ได้ตั้งค่า ADMIN_PASSWORD หรือ ADMIN_SESSION_SECRET" };
    }

    if (!password || password !== ADMIN_PASSWORD) {
        return { error: "รหัสผ่านไม่ถูกต้อง" };
    }

    const cookieStore = await cookies();
    cookieStore.set("admin_session", SESSION_SECRET, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 วัน
        path: "/",
    });

    redirect(from);
}

export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    redirect("/admin/login");
}
