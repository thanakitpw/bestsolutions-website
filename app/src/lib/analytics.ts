// Google Analytics tracking utilities

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
    dataLayer: any[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common tracking events
export const trackContactFormSubmit = (packageType: string) => {
  event({
    action: 'submit_contact_form',
    category: 'engagement',
    label: `package_${packageType}`,
  });
};

export const trackPackageSelect = (packageType: string) => {
  event({
    action: 'select_package',
    category: 'engagement',
    label: `package_${packageType}`,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'click_button',
    category: 'engagement',
    label: `${location}_${buttonName}`,
  });
};

export const trackExternalLink = (url: string) => {
  event({
    action: 'click_external_link',
    category: 'outbound',
    label: url,
  });
};
