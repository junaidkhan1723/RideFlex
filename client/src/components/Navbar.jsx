import React, { useEffect, useRef, useState } from 'react';
import { assets, menuLinks } from '../assets/assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ isLightMode, setIsLightMode, setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Blur overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-bg/30 backdrop-blur-sm z-40 sm:hidden transition-opacity duration-300"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-bg-dark text-text border-b border-border-muted ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4">
          {/* Logo */}
          <span className="flex items-center cursor-pointer">
            <img src={assets.Favicon} alt="logo" className="sm:h-8 h-5 mt-1" />
            <span className="text-xl sm:text-3xl font-semibold ms-2">
              Ride<span className="text-primary">Flex</span>
            </span>
          </span>

          {/* Navigation Links */}
          <div
            ref={menuRef}
            className={`text-xl max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-l border-border-muted max-sm:right-0 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
              open ? 'max-sm:translate-x-50' : 'max-sm:translate-x-full'
            }`}
          >
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`hover:text-primary transition duration-200 ${
                  location.pathname === link.path ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="hidden lg:flex items-center text-sm gap-2 border border-border-muted px-3 rounded-full mx-w-56">
              <input
                type="text"
                className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                placeholder="Search Vehicles"
              />
              <img src={assets.search_icon} alt="search" />
            </div>

            <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
              <button onClick={() => { navigate('/owner'); setOpen(false); }} className="cursor-pointer">
                Dashboard
              </button>
              <button
                onClick={() => { setShowLogin(true); setOpen(false); }}
                className="cursor-pointer px-8 py-2 bg-primary hover:bg-info transition-all rounded-lg text-shadow-lg"
              >
                Login
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              className="text-2xl cursor-pointer"
              onClick={() => setIsLightMode(!isLightMode)}
              title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {isLightMode ? (
                <i className="bi bi-highlights"></i>
              ) : (
                <i className="bi bi-highlights"></i>
              )}
            </button>
          </div>

{/* Animated Hamburger Menu Icon */}
<button
  className="relative w-8 h-6 flex flex-col justify-between items-center sm:hidden z-[999] cursor-pointer"
  aria-label="Toggle Menu"
  onClick={() => setOpen(!open)}
>
  <span
    className={`block h-0.5 w-full bg-text transition-transform duration-300 ease-in-out ${
      open ? 'transform rotate-45 translate-y-2' : ''
    }`}
  ></span>
  <span
    className={`block h-0.5 w-full bg-text transition-all duration-300 ease-in-out ${
      open ? 'opacity-0' : 'opacity-100'
    }`}
  ></span>
  <span
    className={`block h-0.5 w-full bg-text transition-transform duration-300 ease-in-out ${
      open ? 'transform -rotate-45 -translate-y-2' : ''
    }`}
  ></span>
</button>
        </div>
      </div>

      {/* Dummy spacer to push page content below navbar */}
      <div className="h-[80px] sm:h-[90px] lg:h-[96px]" />
    </>
  );
};

export default Navbar;
