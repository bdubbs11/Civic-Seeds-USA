import React from 'react';
import {Outlet, Link, useLocation, useNavigate} from 'react-router-dom';

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
      <nav className="flex flex-row justify-between items-center p-4 px-6 my-auto w-screen">
        <Link className="text-2xl hover:text-violet-700 ease-in-out duration-300" to="/">PA4REAL</Link>
        <div className="flex flex-row gap-4">
        <a href="/#civic-seeds" onClick={handleCivicSeedsClick} className="hover:text-violet-700 ease-in-out duration-300 cursor-pointer">Civic Seeds</a>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/power-parenting-strategies">Power Parenting Strategies</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/schedule-services">Schedule Services</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/parenting-tools">Parenting Tools and Resources</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/shops">Shops</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/contact">Contact</Link>
        </div>
      </nav>

    <main>
      <Outlet />
    </main>
    
    <footer className="text-center p-4">
      <p>Copyright 2025 PA4REAL</p>
    </footer>

  </div>
  )
}
export default Layout;