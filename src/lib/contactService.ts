import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
  created_at?: string;
}

export class ContactService {
  // Get all contacts
  async getAll(): Promise<ContactMessage[]> {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching contacts:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching contacts:', error);
      return [];
    }
  }

  // Add new contact
  async add(contact: Omit<ContactMessage, 'id' | 'timestamp' | 'created_at' | 'status'>): Promise<ContactMessage | null> {
    try {
      const newContact = {
        ...contact,
        timestamp: new Date().toLocaleString('th-TH'),
        status: 'new' as const
      };

      const { error } = await supabase
        .from('contacts')
        .insert(newContact);

      if (error) {
        console.error('Error adding contact:', error);
        return null;
      }

      return newContact as ContactMessage;
    } catch (error) {
      console.error('Error adding contact:', error);
      return null;
    }
  }

  // Update contact status
  async updateStatus(id: string, status: ContactMessage['status']): Promise<boolean> {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status })
        .eq('id', id);

      if (error) {
        console.error('Error updating contact status:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Error updating contact status:', error);
      return false;
    }
  }

  // Search contacts
  async search(query: string): Promise<ContactMessage[]> {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .or(`name.ilike.%${query}%,phone.ilike.%${query}%,email.ilike.%${query}%,service.ilike.%${query}%,message.ilike.%${query}%`)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error searching contacts:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error searching contacts:', error);
      return [];
    }
  }

  // Get contacts by status
  async getByStatus(status: ContactMessage['status']): Promise<ContactMessage[]> {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .eq('status', status)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching contacts by status:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error fetching contacts by status:', error);
      return [];
    }
  }

  // Get statistics
  async getStats() {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('status');

      if (error) {
        console.error('Error fetching contact stats:', error);
        return {
          total: 0,
          new: 0,
          read: 0,
          replied: 0
        };
      }

      const stats = {
        total: data?.length || 0,
        new: data?.filter(c => c.status === 'new').length || 0,
        read: data?.filter(c => c.status === 'read').length || 0,
        replied: data?.filter(c => c.status === 'replied').length || 0
      };

      return stats;
    } catch (error) {
      console.error('Error fetching contact stats:', error);
      return {
        total: 0,
        new: 0,
        read: 0,
        replied: 0
      };
    }
  }
}

export const contactService = new ContactService();
