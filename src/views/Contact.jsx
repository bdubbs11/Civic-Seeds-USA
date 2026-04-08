import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { sendUniversalSubmission } from '../emailjsUniversal';

const emptyContactForm = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const supportEmail = 'deitra@civicseedsusa.org';
  const web = { label: 'Civic Seeds', url: '#' };
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [contactForm, setContactForm] = useState(emptyContactForm);

  const handleSubmitEmailSignup = async (e) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) return;
    const emailLower = newsletterEmail.toLowerCase().trim();

    try {
      const q = query(
        collection(db, 'email-signup-list'),
        where('email', '==', emailLower)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        alert("You're already signed up!");
        return;
      }

      await addDoc(collection(db, 'email-signup-list'), {
        email: emailLower,
        createdAt: Timestamp.now(),
      });
      // await sendUniversalSubmission({
      //   type: 'Newsletter Signup',
      //   user_email: emailLower,
      //   first_name: '',
      //   last_name: '',
      //   subject: '',
      //   message: 'User subscribed to updates',
      // });

      setNewsletterEmail('');
      alert('Thank you for signing up!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const handleSubmitContactForm = async (e) => {
    e.preventDefault();
    const firstName = contactForm.firstName.trim();
    const lastName = contactForm.lastName.trim();
    const formEmail = contactForm.email.trim();
    const subject = contactForm.subject.trim();
    const message = contactForm.message.trim();

    if (!firstName || !lastName || !formEmail || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await sendUniversalSubmission({
        type: 'Contact Form',
        first_name: firstName,
        last_name: lastName,
        user_email: formEmail,
        subject,
        message,
      });

      setContactForm({ ...emptyContactForm });
      alert('Thank you! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting contact form: ', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 lg:flex-row lg:gap-16 lg:items-start">
          {/* Left: Stay Connected text + contact details */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Contact Us
            </h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">
            Have a question or need help? Contact us directly and we’ll get back to you as soon as possible.
            </p>

            <hr className="my-8 border-darkgreen" />

            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Contact Details
            </h3>
            <ul className="space-y-2 text-sm md:text-base list-none">
              <li>
                <span className="font-semibold text-gray-700">Email: </span>
                <a href={`mailto:${supportEmail}`} className="underline text-gray-700">
                  {supportEmail}
                </a>
              </li>
              {web && web.url && (
                <li>
                  <span className="font-semibold text-gray-700">Web: </span>
                  <a
                    href={web.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-gray-700"
                  >
                    {web.label || 'Civic Seeds'}
                  </a>
                </li>
              )}
            </ul>

            <hr className="my-8 border-darkgreen" />

            <div className="space-y-3 text-center lg:text-left">
              <h3 className="text-lg font-semibold text-gray-700">
                Want to join our mailing list?
              </h3>
              {/* <p className="text-base leading-relaxed text-gray-700">
                Get insights, family activities, and ideas you can use right away—alongside parents,
                educators, and community leaders exploring how family life shapes civic life.
              </p> */}
              <form
                className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4 items-stretch sm:items-center justify-center lg:justify-start"
                onSubmit={handleSubmitEmailSignup}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  aria-label="Email for mailing list signup"
                  className="flex-1 min-w-0 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:border-darkgreen"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-full bg-darkgreen text-white px-6 py-2.5 text-sm font-medium whitespace-nowrap transition-colors hover:bg-darkgreen/80 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>

          {/* Right: form card */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
            <form
              className="rounded-2xl border border-violet-200/60 bg-white p-6 md:p-8 shadow-lg space-y-4"
              onSubmit={handleSubmitContactForm}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-firstname" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="contact-firstname"
                    name="firstName"
                    required
                    placeholder="First Name"
                    value={contactForm.firstName}
                    onChange={(e) =>
                      setContactForm((prev) => ({ ...prev, firstName: e.target.value }))
                    }
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-lastname" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="contact-lastname"
                    name="lastName"
                    required
                    placeholder="Last Name"
                    value={contactForm.lastName}
                    onChange={(e) =>
                      setContactForm((prev) => ({ ...prev, lastName: e.target.value }))
                    }
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="Subject"
                  value={contactForm.subject}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  placeholder="Type your message here."
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="w-full min-h-[80px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-y"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-darkgreen text-white px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-darkgreen/80 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
