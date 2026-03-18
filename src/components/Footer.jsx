import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
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
    <footer className="relative bg-transparent text-black py-10 border-t border-darkpurple">
      {/* Content wrapper */}
      <div className="relative z-10 w-11/12 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand / Contact */}
          <div className="text-center md:text-left">
            <h2 className="text-black text-2xl font-bold mb-2 hover:text-violet-800 ease-in-out duration-300">
              PA4REAL
            </h2>
            <p className="text-gray-600 text-sm">support@pa4real.com</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-black font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#civic-seeds" onClick={handleCivicSeedsClick} className="text-gray-600 hover:text-violet-700 ease-in-out duration-300">
                  Civic Seeds
                </a>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-violet-700 ease-in-out duration-300" to="/power-parenting-strategies">
                  Power Parenting Strategies
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-violet-700 ease-in-out duration-300" to="/parenting-tools">
                  Parenting Tools and Resources
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-violet-700 ease-in-out duration-300" to="/schedule-services">
                  Schedule Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-right">
            <h3 className="text-black font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-600 hover:text-violet-700 ease-in-out duration-300" to="/shops">
                  Shops
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-violet-700 ease-in-out duration-300" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-darkpurple pt-4">
          {/* Social Media */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-700 ease-in-out duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-700 ease-in-out duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-violet-700 ease-in-out duration-300">
              <FaTwitter size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © 2025 PA4REAL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

