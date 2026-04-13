import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden font-nunito text-black">
      <nav className="my-auto flex w-full flex-row items-center justify-between border-b border-black-200 px-3 py-2 md:p-4 md:px-6">
        <Link
          to="/"
          aria-label="Go to home"
          className="flex flex-row items-center gap-2 rounded text-xl text-navy hover:text-darkgreen duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:text-2xl"
        >
          <img
            src="/logocropped.PNG"
            alt="Civic Seeds USA Logo"
            className="h-15 w-25 md:h-20 md:w-30"
          />
          <span className="hidden md:inline">Civic Seeds USA</span>
        </Link>

        <div className="flex flex-row gap-2 text-base text-navy md:gap-4 md:text-lg">
          <Link className="hover:text-darkgreen duration-300 ease-in-out" to="/schedule-services">
            Schedule Services
          </Link>
          <Link className="hover:text-darkgreen duration-300 ease-in-out" to="/contact">
            Contact
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-darkpurple py-8">
        <div className="mx-auto w-11/12 max-w-6xl text-center">
          <p className="text-lg font-bold text-black">Civic Seeds USA</p>
          <p className="mt-3 text-sm text-gray-600">© 2025 Civic Seeds USA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
