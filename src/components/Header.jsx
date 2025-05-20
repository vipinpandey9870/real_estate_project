import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaCircle } from "react-icons/fa6";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <>
      <nav
        className="flex bg-white justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30"
      >
        <div id="logo">
          <img
            src={logo}
            alt="company logo"
            className="lg:w-[150px] w-[120px]"
          />
        </div>
        <ul className="lg:flex justify-center items-center gap-8 hidden">
          {navItems.map(({ link, path }) => {
            return (
              <Link
                key={path}
                className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-blue-500 rounded-lg hover:bg-red-600 hover:text-white"
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
              >
                {link}
              </Link>
            );
          })}
        </ul>
        {/* mobile menu icon starts here */}

        <div
          className="flex justify-center items-center lg:hidden"
          onClick={toggleMenu}
        >
          <div>
            {isMenuOpen ? (
              <FaXmark className="text-white dark:text-black text-2xl cursor-pointer" />
            ) : (
              <FaBars className="text-white dark:text-black text-2xl cursor-pointer" />
            )}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center gap-2 w-full ">
            {navItems.map(({ link, path }) => {
              return (
                <Link
                  key={path}
                  to="path"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  className="text-white uppercase font-semibold cursor-pointer text-xl  p-3 text-center rounded-lg w-full "
                >
                  {link}
                </Link>
              );
            })}
            ;
          </ul>
        </div>
        
        <div className="flex justify-center items-center lg:gap-8 gap-3">
          <div className="flex justify-center items-center lg:gap-3 gap-3">
            <FaPhoneAlt className="size-5 text-gray-700" />
            <h1 className="lg:text-xl text-sm text-black dark:text-black font-semibold">
              708-884-3203
            </h1>
            <div className="lg:gap-3 gap-3">
              <FaUserCircle className="size-7 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
