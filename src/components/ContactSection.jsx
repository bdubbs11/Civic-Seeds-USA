import React from 'react';

/**
 * Reusable Stay Connected + Contact Details + Form section.
 * Left: plain text block (no card).
 * Right: light green contact form card.
 * Used on both Home and Contact pages.
 */
export default function ContactSection({
  email = 'hello@pa4real.com',
  web = { label: 'Civic Seeds', url: '#' },
}) {
  return (
    <div className="w-full py-16 px-6 md:px-8 mt-12">
      <div className="max-w-5xl mx-auto flex flex-col gap-10 lg:flex-row lg:gap-16 lg:items-start">
        {/* Left: plain Stay Connected text + contact details */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug">
            Stay Connected
          </h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-gray-700">
            Join our community of parents, educators, and community leaders exploring how family life
            shapes civic life. Sign up for insights, family activities, and ideas you can use right away.
          </p>

          <hr className="my-8 border-darkgreen" />

          <h3 className="text-lg font-semibold mb-3 text-gray-700">
            Contact Details
          </h3>
          <ul className="space-y-2 text-sm md:text-base list-none">
            <li>
              <span className="font-semibold text-gray-700">Email: </span>
              <a href={`mailto:${email}`} className="underline text-gray-700">
                {email}
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
        </div>

        {/* Right: form card */}
        <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
          <form className="rounded-2xl border border-violet-200/60 bg-white p-6 md:p-8 shadow-lg space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="contact-firstname" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="contact-firstname"
                  placeholder="First Name"
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
                  placeholder="Last Name"
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
                placeholder="Email"
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
                placeholder="Subject"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Type your message here."
                rows={4}
                className="w-full min-h-[80px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-darkgreen text-white px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-darkgreen/80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
