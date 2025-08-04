import React, { useState, useEffect } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ isLightMode, setIsLightMode, setShowLogin }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [showBottomNav, setShowBottomNav] = useState(true)
  const navigate = useNavigate()
  let lastScrollY = 0

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowBottomNav(false)
      } else {
        setShowBottomNav(true)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  const isActive = (path) => location.pathname === path

  return (
    <>
      <div className="relative flex items-center justify-between mb-2 px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-bg-dark text-text border-b border-border-muted transition-all z-50">
        <span className='flex cursor-pointer'>
          <img src={assets.Favicon} alt="logo" className="sm:h-8 h-5 mt-1" />
          <span className='text-xl sm:text-3xl font-semibold ms-2 cursor-pointer'>
            Ride<span className='text-primary'>Flex</span>
          </span>
        </span>

        <div className="hidden sm:flex items-center gap-8">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`hover:text-primary transition duration-200 ${
                location.pathname === link.path ? 'text-primary font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className='hidden lg:flex items-center text-sm gap-2 border border-border-muted px-3 rounded-full max-w-56'>
            <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500' placeholder='Search Vehicles' />
            <img src={assets.search_icon} alt="search" />
          </div>

          <div className='flex items-center gap-6'>
            <button onClick={() => navigate('/owner')} className='cursor-pointer'>Dashboard</button>
            <button onClick={() => setShowLogin(true)} className='cursor-pointer px-8 py-2 bg-primary hover:bg-info transition-all rounded-lg text-shadow-lg'>Login</button>
          </div>

          <button
            className="text-2xl cursor-pointer"
            onClick={() => setIsLightMode(!isLightMode)}
            title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            <i className="bi bi-highlights"></i>
          </button>
        </div>

        <button
          className={`sm:hidden flex flex-col justify-between w-7 h-6 z-[999] transition-all duration-300 ${open ? 'open' : ''}`}
          aria-label='Menu'
          onClick={() => setOpen(!open)}
        >
          <span className="block h-0.5 bg-text transition-all duration-300 ease-in-out"></span>
          <span className="block h-0.5 bg-text transition-all duration-300 ease-in-out"></span>
          <span className="block h-0.5 bg-text transition-all duration-300 ease-in-out"></span>
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-full bg-bg-dark/80 backdrop-blur-xl transition-transform duration-300 ease-in-out flex flex-col justify-center items-center z-50 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className={`flex flex-col items-center gap-8 text-2xl font-semibold ${open ? 'animate-links' : ''}`}>
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`hover:text-primary transition duration-200 ${
                  location.pathname === link.path ? 'text-primary' : ''
                }`}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => { navigate('/owner'); setOpen(false); }}
              className="cursor-pointer"
              style={{ animationDelay: `${0.1 * (menuLinks.length + 1)}s` }}
            >
              Dashboard
            </button>
            <button
              onClick={() => { setShowLogin(true); setOpen(false); }}
              className="cursor-pointer px-6 py-2 bg-primary hover:bg-info transition-all rounded-lg text-shadow-lg"
              style={{ animationDelay: `${0.1 * (menuLinks.length + 2)}s` }}
            >
              Login
            </button>
            <button
              className="text-2xl cursor-pointer"
              onClick={() => { setIsLightMode(!isLightMode); setOpen(false); }}
              title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              style={{ animationDelay: `${0.1 * (menuLinks.length + 3)}s` }}
            >
              <i className="bi bi-highlights"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden fixed bottom-0 left-0 right-0 flex justify-around items-center bg-bg-dark text-text border-t border-border-muted py-3 z-40 transition-transform duration-300 ${showBottomNav ? 'translate-y-0' : 'translate-y-full'}`}>
        <Link to="/" className={`flex flex-col items-center text-sm ${isActive('/') ? 'text-primary translate-y-[-4px]' : ''}`}>
          <i className="bi bi-house-door-fill text-xl"></i>
          Home
        </Link>
        <Link to="/explore" className={`flex flex-col items-center text-sm ${isActive('/explore') ? 'text-primary translate-y-[-4px]' : ''}`}>
          <i className="bi bi-search text-xl"></i>
          Explore
        </Link>
        <button onClick={() => navigate('/bookings')} className={`flex flex-col items-center text-sm ${isActive('/bookings') ? 'text-primary translate-y-[-4px]' : ''}`}>
          <i className="bi bi-calendar-check text-xl"></i>
          My Bookings
        </button>
        <button onClick={() => navigate('/owner')} className={`flex flex-col items-center text-sm ${isActive('/owner') ? 'text-primary translate-y-[-4px]' : ''}`}>
          <i className="bi bi-person-circle text-xl"></i>
          Profile
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm sm:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <style>{`
        button.open span:nth-child(1) {
          transform: rotate(45deg) translateY(8px);
        }
        button.open span:nth-child(2) {
          opacity: 0;
        }
        button.open span:nth-child(3) {
          transform: rotate(-45deg) translateY(-8px);
        }

        .animate-links > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeSlideIn 0.4s forwards;
        }

        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
