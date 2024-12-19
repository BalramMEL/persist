import React, { useState } from "react";
import arrowup from "../../public/svg/arrowup.svg";

const NavBar = () => {
  const navItems = ["Home", "About", "Our Services", "Benefits", "Blogs", "Contact"];
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div className="fixed flex justify-center z-50 top-10 sm:inset-x-6 font-orbitron">
      <div className="relative max-w-[1100px] w-full h-[83px] rounded-full backdrop-blur-[100px] border border-gray-800 transition-all duration-700 bg-[#0F0F0FA6] px-4 sm:px-6">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <img src="/Images/logo.png" alt="logo" className="w-[142px]" />
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex gap-3 relative">
            {navItems.map((item, index) => {
              if (item === "Our Services") {
                return (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setIsDropdownVisible(true)}
                    onMouseLeave={() => setIsDropdownVisible(false)}
                  >
                    <button
                      className="nav-hover-btn text-[#96979C] font-medium hover:text-red-500 transition-all duration-300 text-[18px] flex items-center gap-2"
                    >
                      {item}
                      <span className="text-xs ">
                        <img src={arrowup} alt="arrowup" />
                      </span>
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-[110%] left-3 bg-[#131312] text-white rounded-lg shadow-lg border border-gray-700 w-48 p-2 flex flex-col gap-2 z-50 transition-all duration-300 ${
                        isDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <a
                        href="#workout-plan"
                        className="hover:text-red-500 transition-all duration-300 text-[16px] px-4 py-1 rounded-lg"
                      >
                        Workout Plan
                      </a>
                      <a
                        href="#diet-plan"
                        className="hover:text-red-500 transition-all duration-300 text-[16px] px-4 py-1 rounded-lg"
                      >
                        Diet Plan
                      </a>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn text-[#96979C] font-medium hover:text-red-500 transition-all duration-300 text-[18px]"
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Join Us Button */}
          <button className="py-3 px-6 rounded-full bg-red-500 font-medium text-white hover:bg-red-600 transition-all duration-300">
            Join us now
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
