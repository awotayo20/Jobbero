import { Link } from 'react-router-dom'
import JobberoLogo from '../../assets/jobberoLogo.png'

export const Header = () => {
  return (
    <section>
      <div className="">
        <div className="font-semibold font-Poppins text-white flex items-center justify-between gap-9 ">
          <div>
            <Link to="/">
              <img src={JobberoLogo} alt="" className="" />
            </Link>
          </div>

          <div className="flex justify-between items-center w-full">
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
            <div className="flex gap-12">
              <button className="py-2 px-6 border-[3px] border-[#0074CC] rounded-full">
                <Link to="login">Login</Link>
              </button>
              <button className="py-2 bg-[#0074CC] px-6 border-[3px] border-[#0074CC] rounded-full">
                <Link to="signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
