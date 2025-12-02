import React, { useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets.js";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
    user.image = URL.createObjectURL(image);
    setImage("");
  };

  return (
    <div
      className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full
    border-r border-border-muted text-sm bg-bg"
    >
      <div className="group relative">
        <label htmlFor="image">
          <img className="sm:w-24 w-12 rounded-full"
            src={
              image ? URL.createObjectURL(image) : user?.image || assets.logo
            }
            alt="user image"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />

          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-bg/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="" />
          </div>
        </label>
      </div>
      {image && (
        <button
          className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer"
          onClick={updateImage}
        >
          Save <img src={assets.check_icon} width={13} alt="" />
        </button>
      )}
      <p className="mt-2 font-semibold text-base max-md:hidden text-text ">{user?.name}</p>
      <div className="w-full">
        {ownerMenuLinks.map((link, index) => {
          return <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
              link.path === location.pathname
                ? "bg-primary/10 text-primary"
                : "text-text"
            }`}
          >
            <img src={link.path === location.pathname ? link.coloredIcon : link.icon} alt="Car icon"/>
            <span className="max-md:hidden">{link.name}</span>
            <div
              className={`${link.path === location.pathname && 'bg-primary'} w-1.5 rounded-l right-0 absolute`}
            ></div>
          </NavLink>
        })}
      </div>
    </div>
  );
};

export default Sidebar;
