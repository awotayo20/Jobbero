import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SideNavMobile = ({ children }) => {
  const hideMenu = useCallback(() => {
    setShowmenu(false)
  }, [])

  return (
    <div className="w-full h-[439px] z-[9999] top-[6.8vh] right-0 absolute flex md:hidden bg-[#001F3F] m-auto justify-center items-center">
      <nav className="md:navbar mx-auto self-center pt-[7vh] justify-center items-center">
        <ul className="flex flex-col w-full gap-8 text-white justify-center items-center">
          <li className="underline underline-offset-8 decoration-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" font-Poppins">
            <Link to="about">About Us</Link>
          </li>
          <li className=" font-Poppins">
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>
        <div className="icon flex flex-col gap-6 mx-auto mt-12 justify-center items-center">
          <button className="py-2 px-6 flex md:hidden border-[3px] border-[#0074CC] rounded-full">
            <Link to="login">Login</Link>
          </button>
          <button className="py-2 flex md:hidden bg-[#0074CC] text-white px-6 border-[3px] border-[#0074CC] rounded-full">
            <Link to="signup">Sign Up</Link>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SideNavMobile
