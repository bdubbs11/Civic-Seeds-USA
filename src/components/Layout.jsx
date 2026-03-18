import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col text-black font-nunito overflow-x-hidden">
      <nav className="flex flex-row justify-start md:justify-between items-center p-2 md:p-4 px-3 md:px-6 my-auto w-full border-b border-black-200">
        <Link
          to="/"
          aria-label="Go to home"
          className="text-navy text-xl md:text-2xl hover:text-darkgreen ease-in-out duration-300 flex flex-row items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
        >
          <img
            src="/cslogo_revised.png"
            alt="Civic Seeds USA Logo"
            className="w-15 h-15 md:w-20 md:h-20"
          />
          Civic Seeds USA
        </Link>
        {/* this is too long i will need a drop down menu or something for this to be more realistic */}

        
        {/* <div className="flex flex-row gap-1 md:gap-4 text-xs md:text-base text-darkpurple">
          <Link className="hover:text-darkgreen ease-in-out duration-300 cursor-pointer" to="/frameworks">The Frameworks</Link>
          <Link className="hover:text-darkgreen ease-in-out duration-300" to="/schedule-services">Workshops, Speaking, & Coaching</Link>
          <Link className="hover:text-darkgreen ease-in-out duration-300" to="/parenting-tools">Resources</Link> */}
          {/* <Link className="hover:text-accent-secondary ease-in-out duration-300" to="/schedule-services">Schedule Services</Link> */}
          {/* <Link className="hover:text-accent-secondary ease-in-out duration-300" to="/parenting-tools">Parenting Tools and Resources</Link> */}
          {/* <Link className="hover:text-accent-secondary ease-in-out duration-300" to="/shops">Shops</Link> */}
          {/* <Link className="hover:text-darkgreen ease-in-out duration-300" to="/contact">Contact</Link>
        </div> */}
      </nav>

    <main className="flex-1">
      <Outlet />
    </main>

    <footer className="border-t border-darkpurple py-8">
      <div className="w-11/12 max-w-6xl mx-auto text-center">
        <p className="text-black text-lg font-bold">Civic Seeds USA</p>
        {/* <p className="text-gray-600 text-sm mt-1">support@pa4real.com</p> */}
        <p className="text-gray-600 text-sm mt-3">© 2025 Civic Seeds USA. All rights reserved.</p>
      </div>
    </footer>

    {/* <Footer /> */}

  </div>
  )
}
export default Layout;