'use client';

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { contactService, type ContactMessage } from "@/lib/contactService";

interface ContactStatsCardsProps {
  contacts: ContactMessage[];
}

export function ContactStatsCards({ contacts }: ContactStatsCardsProps) {
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    read: 0,
    replied: 0
  });

  useEffect(() => {
    // Calculate stats from contacts prop (for immediate update)
    const calculatedStats = {
      total: contacts.length,
      new: contacts.filter(c => c.status === 'new').length,
      read: contacts.filter(c => c.status === 'read').length,
      replied: contacts.filter(c => c.status === 'replied').length
    };
    setStats(calculatedStats);
  }, [contacts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">ทั้งหมด</p>
            <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
          </div>
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-slate-600" />
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">ใหม่</p>
            <p className="text-2xl font-bold text-green-600">{stats.new}</p>
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">อ่านแล้ว</p>
            <p className="text-2xl font-bold text-blue-600">{stats.read}</p>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">ตอบกลับแล้ว</p>
            <p className="text-2xl font-bold text-gray-600">{stats.replied}</p>
          </div>
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
