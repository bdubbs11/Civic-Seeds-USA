import React from 'react';
import ContactSection from '../components/ContactSection';

function Contact() {
  return (
    <div className="w-full min-h-screen">
      <ContactSection
        title="Contact Us"
        description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
        showContactDetails
        email="hello@pa4real.com"
        web={{ label: 'Civic Seeds', url: '#' }}
      />
    </div>
  );
}

export default Contact;
