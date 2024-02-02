import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import JobberoLogo from "../../assets/jobberoLogo.png";
import SideNavMobile from "./sidenavmobile";

const Navbar = ({ children }) => {
  const [showmenu, setShowmenu] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hideMenu = useCallback(() => {
    setShowmenu(false);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`${
        isScrolled || sideNav
          ? "bg-white text-[#0074CC]"
          : "bg-transparent text-white"
      } fixed h-[65px] md:h-[90px] w-full z-50 flex flex-col`}
    >
      <nav className="navbar px-3 md:px-[3em] md:pt-5 pt-1 top-[10vh] self-center">
        <Link to="/">
          <img src={JobberoLogo} alt="" className="" />
        </Link>

        <div className="w-full gap-7 lg:gap-12 hidden md:flex justify-center items-start">
          <ul className="flex gap-12">
            <li className="underline underline-offset-8 decoration-4">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="about"
                className="hover:underline underline-offset-8 decoration-4 duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="hover:underline underline-offset-8 decoration-4 duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="icon md:flex hidden w-[27%] justify-around  items-center">
          <button className="py-2 px-6 md:flex hidden border-[3px] border-[#0074CC] rounded-full">
            <Link to="login">Login</Link>
          </button>
          <button className="py-2 md:flex hidden bg-[#0074CC] text-white px-6 border-[3px] border-[#0074CC] rounded-full">
            <Link to="signup">Sign Up</Link>
          </button>
        </div>

        <div onClick={() => setSideNav(!sideNav)} className="flex md:hidden">
          {sideNav ? (
            <IoCloseSharp className="text-[3vh]" />
          ) : (
            <MdOutlineMenu className="text-[3vh]" />
          )}
        </div>
        {sideNav && <SideNavMobile />}
      </nav>
    </div>
  );
};

export default Navbar;
