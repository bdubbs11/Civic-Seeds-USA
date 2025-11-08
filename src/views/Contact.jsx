import React from 'react';

function Contact() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-violet-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-violet-200 mb-4">
            Let’s Connect
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Reach out and grow powerful citizens with us
          </h1>
          <p className="text-lg md:text-xl text-violet-100">
            Whether you’re looking for workshops, coaching, or resources for your family or community,
            we’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-violet-700 mb-4">Get in touch</h2>
              <p className="text-gray-600 leading-relaxed">
                We’re here to answer questions about programs, speaking engagements, partnerships,
                and how we can support the parents and educators in your community.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-violet-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-violet-800 mb-2">Email</h3>
                <p className="text-gray-700">hello@pa4real.com</p>
              </div>

              <div className="bg-violet-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-violet-800 mb-2">Phone</h3>
                <p className="text-gray-700">(555) 123-4567</p>
              </div>

              <div className="bg-violet-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-violet-800 mb-2">Speaking + Workshops</h3>
                <p className="text-gray-700">
                  Tell us about your event or school and we’ll tailor a civic engagement experience for your families.
                </p>
              </div>
            </div>

            <div className="bg-white border border-violet-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-violet-800 mb-2">Mailing Address</h3>
              <p className="text-gray-700 leading-relaxed">
                Civic Seeds Initiative<br />
                123 Liberty Avenue<br />
                Philadelphia, PA 19103
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-violet-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-violet-800 mb-6">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col text-left text-sm font-semibold text-violet-800">
                  First Name
                  <input
                    type="text"
                    className="mt-2 rounded-lg border border-violet-200 bg-white px-4 py-2 text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                    placeholder="Jane"
                  />
                </label>
                <label className="flex flex-col text-left text-sm font-semibold text-violet-800">
                  Last Name
                  <input
                    type="text"
                    className="mt-2 rounded-lg border border-violet-200 bg-white px-4 py-2 text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                    placeholder="Doe"
                  />
                </label>
              </div>

              <label className="flex flex-col text-left text-sm font-semibold text-violet-800">
                Email
                <input
                  type="email"
                  className="mt-2 rounded-lg border border-violet-200 bg-white px-4 py-2 text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                  placeholder="you@example.com"
                />
              </label>

              <label className="flex flex-col text-left text-sm font-semibold text-violet-800">
                Organization (Optional)
                <input
                  type="text"
                  className="mt-2 rounded-lg border border-violet-200 bg-white px-4 py-2 text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
                  placeholder="School, PTA, Community Group"
                />
              </label>

              <label className="flex flex-col text-left text-sm font-semibold text-violet-800">
                How can we help?
                <textarea
                  rows={5}
                  className="mt-2 rounded-lg border border-violet-200 bg-white px-4 py-3 text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200 resize-none"
                  placeholder="Share details about your request..."
                />
              </label>

              <div className="text-left">
                <button
                  type="submit"
                  className="bg-violet-700 text-white px-6 py-3 rounded-full hover:bg-violet-800 transition-transform duration-300 hover:scale-[1.02]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-violet-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-violet-900">
            Stay rooted in community and civic action
          </h2>
          <p className="text-lg text-gray-700">
            Join the Civic Seeds newsletter for monthly tools, activities, and inspiration that help your
            family grow as powerful citizens.
          </p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-violet-300 px-4 py-3 text-gray-700 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
            <button
              type="submit"
              className="bg-violet-700 text-white px-6 py-3 rounded-full hover:bg-violet-800 transition-transform duration-300 hover:scale-[1.02]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact;