import React from 'react';
import { ContactEnquirySection } from '../components/ContactEnquirySection';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaterTest: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <div className="py-12 bg-white">
      <ContactEnquirySection />
    </div>
  );
};
