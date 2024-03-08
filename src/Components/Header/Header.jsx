import JobberoLogo from '../../assets/jobberoLogo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet'
import { Button } from '@mui/material'
import { MdOutlineMenu } from 'react-icons/md'
import { useEffect, useState } from 'react'
const Header = () => {
  const { user, logoutUser, loginUser } = useAuth()
  const [currentUser, setCurrentUser] = useState()
  const [showDashboard, setShowDashboard] = useState()

  useEffect(() => {
    setCurrentUser(user)
    if (user) {
      setShowDashboard(user.role)
    } else {
      setShowDashboard('null')
    }
  }, [])

  console.log(showDashboard)

  return (
    <div className="bg-[#001F3F] flex items-center justify-between text-white h-16 px-4 lg:px-11">
      <Link to="/">
        <img src={JobberoLogo} alt="" className=" cursor-pointer" />
      </Link>
      <div className=" w-full gap-7 lg:gap-12 hidden lg:flex justify-center items-start font-Poppins">
        <ul className="flex gap-12">
          <li className="underline underline-offset-8 decoration-4 font-Poppins">
            <Link to="/">Home</Link>
          </li>
          <li className=" font-Poppins font-normal text-base">
            <Link
              to="/about"
              className="hover:underline underline-offset-8 decoration-4 duration-200"
            >
              About Us
            </Link>
          </li>
          <li className=" font-Poppins font-normal text-base">
            <Link
              to="/contact"
              className="hover:underline underline-offset-8 decoration-4 duration-200"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {currentUser ? (
        <>
          <button
            className="py-[6px] text-sm lg:flex hidden bg-[#0074CC] text-white px-4 border-[3px] border-[#0074CC] rounded-full"
            onClick={logoutUser}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="icon lg:flex hidden w-[27%] justify-around  items-center">
            <button className="py-[6px] text-sm px-4 lg:flex hidden border-[3px] border-[#0074CC] rounded-full">
              <Link to="/login">Login</Link>
            </button>
            <button className="py-[6px] text-sm lg:flex hidden bg-[#0074CC] text-white px-4 border-[3px] border-[#0074CC] rounded-full">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </>
      )}

      {showDashboard === 'SUPER_ADMIN' ? (
        <>
          <button
            className="mx-4 py-[6px] text-sm lg:flex hidden bg-[#0074CC] text-white px-4 border-[3px] border-[#0074CC] rounded-full"
            onClick={''}
          >
            <Link to={'/dashboard'}>Dashboard</Link>
          </button>
        </>
      ) : (
        <></>
      )}

      <div className=" block lg:hidden">
        <Sheet>
          <SheetTrigger>
            {' '}
            <MdOutlineMenu className="text-[3vh]" />
          </SheetTrigger>
          <SheetContent className="bg-[#001F3F] text-white">
            <SheetHeader>
              <div className=" flex flex-col justify-center items-center w-full h-[100vh] space-y-16">
                <h4>
                  <Link to={'#'}>Home</Link>
                </h4>
                <h4>
                  <Link to={'/about'}>About Us</Link>
                </h4>
                <h4>
                  <Link to={'/contact'}>Contact Us</Link>
                </h4>
                <h4>
                  <Link to={'/terms-condition'}>Terms</Link>
                </h4>
                <h4>
                  <Link to={'/privacy-policy'}>Privacy policy</Link>
                </h4>

                {currentUser ? (
                  <>
                    <button
                      className="py-[6px] text-sm lg:flex hidden bg-[#0074CC] text-white px-4 border-[3px] border-[#0074CC] rounded-full"
                      onClick={logoutUser}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="icon lg:flex hidden justify-between w-[60%]  items-center">
                      <button className="py-[6px] text-sm px-4 lg:flex hidden border-[3px] border-[#0074CC] rounded-full">
                        <Link to="/login">Login</Link>
                      </button>
                      <button className="py-[6px] text-sm lg:flex hidden bg-[#0074CC] text-white px-4 border-[3px] border-[#0074CC] rounded-full">
                        <Link to="/signup">Sign Up</Link>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Header
