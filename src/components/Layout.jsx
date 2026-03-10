import React from 'react';
import {Outlet, Link, useLocation, useNavigate} from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCivicSeedsClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const civicSeedsSection = document.getElementById('civic-seeds');
      if (civicSeedsSection) {
        civicSeedsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home with hash
      navigate('/#civic-seeds');
      // Scroll after navigation completes
      setTimeout(() => {
        const civicSeedsSection = document.getElementById('civic-seeds');
        if (civicSeedsSection) {
          civicSeedsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="flex flex-col text-black"> 
      <nav className="flex flex-row justify-between items-center p-2 md:p-4 px-3 md:px-6 my-auto w-screen border-b border-black-200">
        <Link className=" text-xl md:text-2xl hover:text-violet-700 ease-in-out duration-300 flex flex-row items-center gap-2" to="/"> <img src="/civic_seeds_logo.png" alt="Civic Seeds USA Logo" className="w-20 h-20"/> Civic Seeds USA</Link>
        {/* this is too long i will need a drop down menu or something for this to be more realistic */}
        <div className="flex flex-row gap-1 md:gap-4 text-xs md:text-base">
          <Link href="/#civic-seeds" onClick={handleCivicSeedsClick} className="hover:text-violet-700 ease-in-out duration-300 cursor-pointer">The Frameworks</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/power-parenting">Workshops, Speaking, & Coaching</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/parenting-tools">Resources</Link>
          {/* <Link className="hover:text-violet-700 ease-in-out duration-300" to="/schedule-services">Schedule Services</Link> */}
          {/* <Link className="hover:text-violet-700 ease-in-out duration-300" to="/parenting-tools">Parenting Tools and Resources</Link> */}
          {/* <Link className="hover:text-violet-700 ease-in-out duration-300" to="/shops">Shops</Link> */}
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/contact">Contact</Link>
        </div>
      </nav>

    <main>
      <Outlet />
    </main>
    
    <Footer />

  </div>
  )
}
export default Layout;