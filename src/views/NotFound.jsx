import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col flex-1 min-h-[70vh]">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-16">
          <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
            <div className="flex flex-col justify-center items-center text-center min-h-[60vh] gap-6 py-16 md:py-24">
              <p className="text-sm md:text-base font-medium tracking-wide text-darkgreen uppercase">
                Error 404
              </p>
              <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold leading-snug text-navy font-cantata max-w-2xl">
                This page could not be found
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-nunito max-w-xl">
                The link may be broken or the page may have moved. You can head back home to keep
                exploring Civic Seeds USA.
              </p>
              <Link
                to="/"
                className="bg-2red text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium whitespace-nowrap hover:bg-darkgreen/80 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full -mt-1 overflow-hidden leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
          className="w-full h-auto"
        >
          <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#3664F2" />
        </svg>
      </div>

      <div className="w-full bg-blue py-12 md:py-16" aria-hidden="true" />
    </div>
  );
}

export default NotFound;
