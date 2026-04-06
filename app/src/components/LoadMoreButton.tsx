'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const LoadMoreButton = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    if (!showMore) {
      const testimonial3 = document.getElementById('testimonial-3');
      if (testimonial3) {
        testimonial3.classList.remove('hidden');
        setShowMore(true);
      }
    } else {
      window.location.href = '/about';
    }
  };

  return (
    <div className="mt-12 text-center">
      <button 
        id="load-more-testimonials" 
        className="inline-flex items-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-[var(--color-primary-end)] to-[var(--color-primary-start)] rounded-full hover:shadow-lg hover:-translate-y-1 group"
        onClick={handleClick}
      >
        <span id="testimonials-button-text">{showMore ? 'ดูเรื่องราวทั้งหมด' : 'โชว์เพิ่มเติม'}</span>
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
