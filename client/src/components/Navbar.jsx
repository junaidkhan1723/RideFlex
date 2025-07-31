import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ isLightMode, setIsLightMode, setShowLogin }) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="relative flex items-center justify-between mb-2 px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-bg-dark text-text border-b border-border-muted transition-all">
      {/* Logo */}
      <span className='flex  cursor-pointer'><img src={assets.Favicon} alt="logo" className="sm:h-8 h-5 mt-1" />
      <span className='text-xl sm:text-3xl font-semibold ms-2 cursor-pointer'>Ride<span className='text-primary cursor-pointer'>Flex</span></span>
</span>
      <Link to="/">
      </Link>

      {/* Navigation Links */}
      <div
        className={`text-xl max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-border-muted max-sm:right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          open ? 'max-sm:translate-x-50' : 'max-sm:translate-x-full'
        }`}
      >
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

        <div className='hidden lg:flex items-center text-sm gap-2 border border-border-muted px-3 rounded-full mx-w-56'>
            <input type="text" className='py-1.5 w-full bg-transparent 
            outline-none placeholder-gray-500' placeholder='Search Vehicles' />
            <img src={assets.search_icon} alt="search" />
        </div>

        <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
            <button onClick={()=> navigate('/owner')} className='cursor-pointer'>Dashboard</button>
            <button onClick={()=> setShowLogin(true)} className='cursor-pointer px-8 py-2 bg-primary hover:bg-info transition-all 
            rounded-lg text-shadow-lg'>Login</button>
        </div>
         {/* Theme Toggle Button */}
      <button
        className="text-2xl cursor-pointer"
        onClick={() => setIsLightMode(!isLightMode)}
        title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      >
        {isLightMode ? <i className="bi bi-highlights"></i> : <i className="bi bi-highlights"></i>}
      </button>
      </div>
        <button className='sm:hidden cursor-pointer' aria-label='Menu' onClick={()=> setOpen(!open)}>
            <img src={open ? assets.close_icon : assets.menu_icon} alt="" />
        </button>     
    </div>
  )
}

export default Navbar
