"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { deletePortfolio } from "../actions";

export function DeletePortfolioButton({ id, title }: { id: string; title: string }) {
    const [loading, setLoading] = useState(false);

    async function handleDelete() {
        if (!confirm(`ลบผลงาน "${title}" ใช่ไหม? ไม่สามารถกู้คืนได้`)) return;
        setLoading(true);
        const result = await deletePortfolio(id);
        if (!result.success) {
            alert(`เกิดข้อผิดพลาด: ${result.error}`);
        }
        setLoading(false);
    }

    return (
        <button
            onClick={handleDelete}
            disabled={loading}
            className="p-2 text-slate-600 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
            title="ลบ"
        >
            <Trash2 className="w-4 h-4" />
        </button>
    );
}
