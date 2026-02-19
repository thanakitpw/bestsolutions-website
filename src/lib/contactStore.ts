// Simple in-memory storage for contact messages
// In production, replace with database storage

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  timestamp: string;
  status: 'new' | 'read' | 'replied';
}

class ContactStore {
  private contacts: ContactMessage[] = [];

  // Add new contact
  add(contact: Omit<ContactMessage, 'id' | 'timestamp' | 'status'>): ContactMessage {
    const newContact: ContactMessage = {
      ...contact,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString('th-TH'),
      status: 'new'
    };
    
    this.contacts.unshift(newContact); // Add to beginning (newest first)
    return newContact;
  }

  // Get all contacts
  getAll(): ContactMessage[] {
    return [...this.contacts];
  }

  // Update contact status
  updateStatus(id: string, status: ContactMessage['status']): boolean {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contacts[index].status = status;
      return true;
    }
    return false;
  }

  // Get contacts by status
  getByStatus(status: ContactMessage['status']): ContactMessage[] {
    return this.contacts.filter(c => c.status === status);
  }

  // Search contacts
  search(query: string): ContactMessage[] {
    const lowerQuery = query.toLowerCase();
    return this.contacts.filter(contact => 
      contact.name.toLowerCase().includes(lowerQuery) ||
      contact.phone.includes(query) ||
      contact.email?.toLowerCase().includes(lowerQuery) ||
      contact.service?.toLowerCase().includes(lowerQuery) ||
      contact.message?.toLowerCase().includes(lowerQuery)
    );
  }

  // Get statistics
  getStats() {
    return {
      total: this.contacts.length,
      new: this.contacts.filter(c => c.status === 'new').length,
      read: this.contacts.filter(c => c.status === 'read').length,
      replied: this.contacts.filter(c => c.status === 'replied').length
    };
  }
}

// Singleton instance
export const contactStore = new ContactStore();
