import React from 'react';
import ContactSection from '../components/ContactSection';

function Contact() {
  return (
    <div className="w-full min-h-screen">
      <ContactSection
        // Reuse the same Stay Connected heading and copy as the Home page
        showContactDetails
        email="hello@pa4real.com"
        web={{ label: 'Civic Seeds', url: '#' }}
      />
    </div>
  );
}

export default Contact;
