import React from "react";
import { assets, dummyUserData } from "../../assets/assets";
import { Link } from "react-router-dom";

const NavbarOwer = () => {
  const user = dummyUserData;

  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-4 bg-bg text-text border-b border-border-muted relative transition-all">
      <Link to="/">
               <span className='flex cursor-pointer'>
                 <img src={assets.Favicon} alt="logo" className="sm:h-6 h-5 mt-1" />
                 <span className='text-xl sm:text-2xl font-semibold ms-2 cursor-pointer'>
                   Ride<span className='text-primary'>Flex</span>
                 </span>
               </span>
      </Link>
      <p>Welcome, {user.name || 'Owner'}</p>
    </div>
  );
};

export default NavbarOwer;
