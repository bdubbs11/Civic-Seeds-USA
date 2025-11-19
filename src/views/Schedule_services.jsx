import React from 'react';
import { Link } from 'react-router-dom';

function ScheduleServices() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="w-full bg-violet-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Schedule Services</h1>
          <p className="text-base md:text-xl text-violet-100 max-w-3xl mx-auto">
            Book a coaching session, consultation, workshop, or speaking engagement.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {/* Coaching Session */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 flex flex-col">
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-violet-900 mb-3">Coaching Session</h2>
                <p className=" text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  One-on-one coaching to help you strengthen your parenting foundation and build powerful lifelong skills.
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-violet-700">Duration: </span>
                  <span className="text-sm gray-600">45 or 60 minutes</span>
                </div>
              </div>
              <button
                onClick={scrollToBooking}
                className="w-1/2 mx-auto bg-violet-700 text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-violet-800 transition-colors duration-300 mt-4"
              >
                Book Now
              </button>
            </div>

            {/* Consultation */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 flex flex-col">
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-violet-900 mb-3">Consultation</h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  A focused session to explore your goals, challenges, and next steps.
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-violet-700">Duration: </span>
                  <span className="text-sm text-gray-600">30 minutes</span>
                </div>
              </div>
              <button
                onClick={scrollToBooking}
                className="w-1/2 mx-auto bg-violet-700 text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-violet-800 transition-colors duration-300 mt-4"
              >
                Book Now
              </button>
            </div>

            {/* Workshops & Webinars */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 flex flex-col">
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-violet-900 mb-3">Workshops & Webinars</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Group learning experiences designed for parents, organizations, and schools.
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-violet-700">Duration: </span>
                  <span className="text-sm text-gray-600">Varies — upcoming dates or custom requests</span>
                </div>
              </div>
              <button
                onClick={scrollToBooking}
                className="w-1/2 mx-auto bg-violet-700 text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-violet-800 transition-colors duration-300 mt-4"
              >
                Book Now
              </button>
            </div>

            {/* Speaking Engagements */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 md:col-span-2 lg:col-span-1 flex flex-col">
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-violet-900 mb-3">Speaking Engagements</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Invite Deitra to speak at your school, church, or organization.
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-violet-700">Duration: </span>
                  <span className="text-sm text-gray-600">Custom</span>
                </div>
              </div>
              <button
                onClick={scrollToBooking}
                className="w-1/2 mx-auto bg-violet-700 text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-violet-800 transition-colors duration-300 mt-4"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar / Booking Section */}
      <section id="booking" className="w-full bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-xl min-h-[400px] flex items-center justify-center">
            <p className="text-gray-500 text-lg">Booking calendar goes here.</p>
            {/* this will be a google calendar... calendy */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4">
            Don't see what you need?{' '}
            <Link to="/contact" className="text-violet-700 font-semibold hover:text-violet-800 underline">
              Contact me
            </Link>
            {' '}for custom sessions.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ScheduleServices;