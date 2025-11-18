import React from 'react';

function ParentingTools() {
  return (
    <div className="w-full">

      {/* Page Header */}
      <section className="w-full bg-red-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Parenting Tools & Resources</h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
          Curated educational tools, justice resources, and family-friendly learning guides.
          </p>
        </div>
      </section>

      {/* Resources & Websites */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-red-500 font-semibold text-xl mb-8 text-center md:text-left">
            Resources & Websites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Civic Education */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Civic Education</h3>
              <p className="text-black mb-4 leading-relaxed">
                Comprehensive civic education resources for teaching kids about government and democracy.
              </p>
              <a
                href="https://www.civiced.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>

            {/* Constitution 101 Curriculum */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Constitution 101 Curriculum</h3>
              <p className="text-black mb-4 leading-relaxed">
                Free educational resources from the Constitution Center to teach about the U.S. Constitution.
              </p>
              <a
                href="https://constitutioncenter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>

            {/* Teaching American History */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Teaching American History</h3>
              <p className="text-black mb-4 leading-relaxed">
                Free educator resources for teaching American history in engaging and meaningful ways.
              </p>
              <a
                href="https://teachingamericanhistory.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>

            {/* Learning for Justice */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Learning for Justice</h3>
              <p className="text-black mb-4 leading-relaxed">
                Educational resources to help teachers and schools educate children to be active participants in a diverse democracy.
              </p>
              <a
                href="https://www.learningforjustice.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Take Action */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-red-500 font-semibold text-xl mb-8 text-center md:text-left">
            Take Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Indivisible */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Indivisible</h3>
              <p className="text-black mb-4 leading-relaxed">
                Grassroots movement providing tools and resources for taking action in your community.
              </p>
              <a
                href="https://indivisible.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Take Action
              </a>
            </div>

            {/* NAACP */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">NAACP</h3>
              <p className="text-black mb-4 leading-relaxed">
                The nation's oldest and largest civil rights organization working for justice and equality.
              </p>
              <a
                href="https://www.naacp.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Take Action
              </a>
            </div>

            {/* One Million Rising */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">One Million Rising</h3>
              <p className="text-black mb-4 leading-relaxed">
                Global movement to end violence against women and girls. "No Kings" campaign for justice.
              </p>
              <a
                href="https://www.onemillionrising.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Take Action
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News & Ideas */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-red-500 font-semibold text-xl mb-8 text-center md:text-left">
            News & Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Center for American Progress */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Center for American Progress</h3>
              <p className="text-black mb-4 leading-relaxed">
                Progressive policy institute providing research and analysis on key issues affecting families and communities.
              </p>
              <a
                href="https://www.americanprogress.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>

            {/* NPR */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">NPR</h3>
              <p className="text-black mb-4 leading-relaxed">
                News, analysis, and arts coverage to stay informed about current events and cultural happenings.
              </p>
              <a
                href="https://www.npr.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Black History */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-red-500 font-semibold text-xl mb-8 text-center md:text-left">
            Black History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sankofa Kids Club */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Sankofa Kids Club</h3>
              <p className="text-black mb-4 leading-relaxed">
                Educational resources and activities to teach children about Black history and culture.
              </p>
              <a
                href="https://sankofakidsclub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Faith & Justice */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-red-500 font-semibold text-xl mb-8 text-center md:text-left">
            Faith & Justice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kairos Center */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Kairos Center</h3>
              <p className="text-black mb-4 leading-relaxed">
                Faith-based organization working for justice and building movements for social change.
              </p>
              <a
                href="https://kairoscenter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>

            {/* Sojourners */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">Sojourners</h3>
              <p className="text-black mb-4 leading-relaxed">
                Faith, politics, and culture magazine exploring the intersection of faith and social justice.
              </p>
              <a
                href="https://sojo.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Parenting & Child Development */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-red-500 font-semibold text-xl mb-8 text-center md:text-left">
            Parenting & Child Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* BabyCenter */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-red-500 mb-3">BabyCenter</h3>
              <p className="text-black mb-4 leading-relaxed">
                Comprehensive parenting resources and support. Sign up for age-specific monthly newsletters to track your child's development.
              </p>
              <a
                href="https://www.babycenter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300 inline-block text-center"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ParentingTools;