'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, Calendar, Search, Filter, Download } from "lucide-react";
import { contactService, type ContactMessage } from "@/lib/contactService";
import { ContactStatsCards } from "@/components/admin/ContactStatsCards";

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);

  // Load contacts from database on mount
  useEffect(() => {
    loadContacts();
  }, []);

  // Load contacts from database
  const loadContacts = async () => {
    const contacts = await contactService.getAll();
    setContacts(contacts);
  };

  // Refresh contacts
  const refreshContacts = () => {
    loadContacts();
  };

  // Filter contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.phone.includes(searchTerm) ||
                         contact.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Update contact status
  const updateStatus = async (id: string, newStatus: ContactMessage['status']) => {
    const success = await contactService.updateStatus(id, newStatus);
    if (success) {
      refreshContacts();
    }
  };

  // Get status color
  const getStatusColor = (status: ContactMessage['status']) => {
    switch (status) {
      case 'new': return 'bg-green-100 text-green-800 border-green-200';
      case 'read': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'replied': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Get status text
  const getStatusText = (status: ContactMessage['status']) => {
    switch (status) {
      case 'new': return 'ใหม่';
      case 'read': return 'อ่านแล้ว';
      case 'replied': return 'ตอบกลับแล้ว';
      default: return status;
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">ข้อมูลติดต่อลูกค้า</h1>
          </div>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            ส่งออกข้อมูล
          </Button>
        </div>

        {/* Stats Cards */}
        <ContactStatsCards contacts={contacts} />

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="ค้นหาชื่อ, เบอร์โทร, อีเมล..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">ทุกสถานะ</option>
                <option value="new">ใหม่</option>
                <option value="read">อ่านแล้ว</option>
                <option value="replied">ตอบกลับแล้ว</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contacts List */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left p-4 font-medium text-slate-700">ลูกค้า</th>
                  <th className="text-left p-4 font-medium text-slate-700">ติดต่อ</th>
                  <th className="text-left p-4 font-medium text-slate-700">บริการ</th>
                  <th className="text-left p-4 font-medium text-slate-700">เวลา</th>
                  <th className="text-left p-4 font-medium text-slate-700">สถานะ</th>
                  <th className="text-left p-4 font-medium text-slate-700">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-slate-900">{contact.name}</p>
                        {contact.email && (
                          <p className="text-sm text-slate-500">{contact.email}</p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-600">
                        {contact.service || 'ไม่ระบุ'}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        {contact.timestamp}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(contact.status)}`}>
                        {getStatusText(contact.status)}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedContact(contact)}
                          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                          ดูรายละเอียด
                        </button>
                        {contact.status === 'new' && (
                          <button
                            onClick={() => updateStatus(contact.id, 'read')}
                            className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                          >
                            อ่านแล้ว
                          </button>
                        )}
                        {contact.status === 'read' && (
                          <button
                            onClick={() => updateStatus(contact.id, 'replied')}
                            className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                          >
                            ตอบกลับแล้ว
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredContacts.length === 0 && (
            <div className="text-center py-12">
              <Mail className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">ไม่พบข้อมูลที่ตรงกับเงื่อนไข</p>
            </div>
          )}
        </div>

        {/* Contact Detail Modal */}
        {selectedContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">รายละเอียดการติดต่อ</h2>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">ชื่อ</p>
                    <p className="font-medium text-slate-900">{selectedContact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">เบอร์โทร</p>
                    <p className="font-medium text-slate-900">{selectedContact.phone}</p>
                  </div>
                  {selectedContact.email && (
                    <div>
                      <p className="text-sm text-slate-500 mb-1">อีเมล</p>
                      <p className="font-medium text-slate-900">{selectedContact.email}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-slate-500 mb-1">บริการที่สนใจ</p>
                    <p className="font-medium text-slate-900">
                      {selectedContact.service || 'ไม่ระบุ'}
                    </p>
                  </div>
                </div>
                
                {selectedContact.message && (
                  <div className="mb-6">
                    <p className="text-sm text-slate-500 mb-2">ข้อความ</p>
                    <div className="p-4 bg-slate-50 rounded-lg">
                      <p className="text-slate-700 whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    เวลา: {selectedContact.timestamp}
                  </p>
                  <div className="flex gap-2">
                    {selectedContact.status === 'new' && (
                      <button
                        onClick={() => {
                          updateStatus(selectedContact.id, 'read');
                          setSelectedContact(null);
                        }}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        ทำเครื่องอ่านแล้ว
                      </button>
                    )}
                    {selectedContact.status === 'read' && (
                      <button
                        onClick={() => {
                          updateStatus(selectedContact.id, 'replied');
                          setSelectedContact(null);
                        }}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        ทำเครื่องตอบกลับแล้ว
                      </button>
                    )}
                    <button
                      onClick={() => setSelectedContact(null)}
                      className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
                    >
                      ปิด
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
