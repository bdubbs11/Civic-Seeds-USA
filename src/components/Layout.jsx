import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col text-black font-nunito overflow-x-hidden">
      <nav className="flex flex-row justify-center md:justify-between items-center p-2 md:p-4 px-3 md:px-6 my-auto w-full border-b border-black-200">
        <Link className=" text-navy text-xl md:text-2xl hover:text-darkgreen ease-in-out duration-300 flex flex-row items-center gap-2" to="/"> <img src="/cslogo_revised.png" alt="Civic Seeds USA Logo" className="w-30 h-30"/> Civic Seeds USA</Link>
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

    <main>
      <Outlet />
    </main>
    
    <Footer />

  </div>
  )
}
export default Layout;