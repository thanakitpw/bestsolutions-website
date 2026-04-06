'use server';

import { contactService } from '@/lib/contactService';

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const email = formData.get('email') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  // Validate required fields
  if (!name || !phone) {
    return { success: false, message: 'กรุณากรอกชื่อและเบอร์โทรศัพท์ให้ครบถ้วน' };
  }

  try {
    // Store contact in database
    await contactService.add({
      name,
      phone,
      email,
      service,
      message
    });

    console.log('Contact message stored:', { name, phone, email, service, message });

    return { 
      success: true, 
      message: 'ส่งข้อความเรียบร้อย! เราจะติดต่อกลับภายใน 24 ชั่วโมง' 
    };

  } catch (error) {
    console.error('Error storing contact message:', error);
    
    return { 
      success: false, 
      message: 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง' 
    };
  }
}
