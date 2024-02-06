import { RegisterForm } from './RegisterForm'
import Footer from '../../Components/Footer/index'
import Navbar from '../../Components/Header/Navbar'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className=" h-[65px] md:h-[90px] w-full bg-[#001F3F] relative z-[9999]">
        <Navbar />
      </div>
      <div className="max-w-[1024px] mx-auto my-5 w-full">
        <div className="max-w-[1385px] mx-auto px-9 w-full">
          <h3 className="text-3xl font-Poppins font-semibold text-[#001F3F]">
            Let’s create your account!
          </h3>
          <div>
            <div className="text-white text-xl font-normal bg-[#001F3F] w-[172px] h-[63px] flex items-center justify-center rounded-2xl mx-auto">
              Job Seeker
            </div>
            <RegisterForm />
          </div>
        </div>
        <div className="flex flex-col justify-center text-center my-9">
          <p className="text-[#001F3F] font-Poppins font-normal text-xl">
            Already have an account?
            <span className="text-[#FFBF00] font-Poppins text-xl font-semibold mt-4">
              <Link to={'/login'}> Sign In</Link>
            </span>
          </p>
        </div>
      </div>
      <div className="w-full bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default SignUp
