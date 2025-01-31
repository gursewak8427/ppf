import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 w-full z-50">
      <div className="flex justify-between p-4 w-full max-w-[1440px]">
        <div className="flex">
          <img
            className="border-4 rounded-full border-primary h-14  w-14 object-cover"
            src="/images/profile.png"
            alt=" profile"
          />
        </div>
        <div className="flex px-5 gap-5 bg-navbar-gradient justify-between items-center text-primaryLightest rounded-full w-auto">
          <div className="cursor-pointer px-4 py-2 rounded-[40px] hover:bg-primaryLight hover:text-primaryDark transition duration-300">
            About
          </div>
          <div className="cursor-pointer px-4 py-2 rounded-[40px] hover:bg-primaryLight hover:text-primaryDark transition duration-300">
            Skills
          </div>
          <div className="cursor-pointer px-4 py-2 rounded-[40px] hover:bg-primaryLight hover:text-primaryDark transition duration-300">
            Projects
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="  w-10 h-10 object-cover"
            src="/images/chat.png"
            alt=" profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
