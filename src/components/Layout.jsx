import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const MotionNav = motion.nav;

function Layout() {
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const prev = lastScrollY.current;
      if (y > prev && y > 100) setNavVisible(false);
      else setNavVisible(true);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHome = () => {
    if (pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden font-nunito text-black">
      <MotionNav
        initial={false}
        animate={{ y: navVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-blue/25 bg-white/95 shadow-md backdrop-blur-lg"
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:max-w-[88rem] 2xl:max-w-[100rem] 2xl:px-10">
          <button
            type="button"
            onClick={goHome}
            aria-label="Go to home"
            className="group flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-darkgreen focus-visible:ring-offset-2 md:gap-3"
          >
            <img
              src="/logocropped.PNG"
              alt="Civic Seeds USA Logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 md:h-12"
            />
            <span className="hidden font-cantata text-lg font-bold text-navy transition-colors duration-200 group-hover:text-darkgreen sm:inline md:text-xl">
              Civic Seeds USA
            </span>
          </button>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-6">
            <Link
              to="/schedule-services"
              className="text-sm font-medium text-navy transition-colors duration-200 hover:text-darkgreen md:text-base"
            >
              Schedule Services
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-navy transition-colors duration-200 hover:text-darkgreen md:text-base"
            >
              Contact
            </Link>
            <Link
              to="/schedule-services"
              className="rounded-full bg-dred px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-darkgreen/80 md:px-6 md:py-2.5"
            >
              Book Now
            </Link>
          </div>
        </div>
      </MotionNav>

      <main className="flex-1 pt-20">
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
