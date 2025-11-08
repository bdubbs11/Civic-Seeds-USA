import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col text-black"> 
      <nav className="flex flex-row justify-between items-center p-4 px-6 my-auto w-screen">
        <Link className="text-2xl hover:text-violet-700 ease-in-out duration-300" to="/">PA4REAL</Link>
        <div className="flex flex-row gap-4">
        <Link className="hover:text-violet-700 ease-in-out duration-300" to="/">Civic Seeds</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/power-parenting-strategies">Power Parenting Strategies</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/schedule-services">Schedule Services</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/parenting-tools">Parenting Tools and Resources</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/parenting-tools">Shops</Link>
          <Link className="hover:text-violet-700 ease-in-out duration-300" to="/contact">Contact</Link>
        </div>
      </nav>

    <main>
      <Outlet />
    </main>
    
    <footer>
      <p>Copyright 2025 PA4REAL</p>
    </footer>

  </div>
  )
}
export default Layout;