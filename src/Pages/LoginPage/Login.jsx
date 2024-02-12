import { Link } from 'react-router-dom'
import SmileySvg from '../../assets/SmileySvg.svg'
import Footer from '../../Components/Footer/index'
import Navbar from '../../Components/Header/Navbar'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className=" h-[65px] md:h-[90px] w-full bg-[#001F3F] relative z-[9999]">
        <Navbar />
      </div>
      <form action="">
        <div className="lg:grid grid-cols-2 gap-11 items-center max-w-[1024px] mx-auto my-6">
          <div className="container max-w-[650px] w-[90%] mx-auto">
            <h1 className="mb-6 text-2xl font-Poppins font-semibold text-[#001F3F]">
              We are glad to see you again!
            </h1>
            <div className="input-container">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="flex justify-between mt-2">
              <div>
                <input type="checkbox" name="checkbox" />
                <span> Remember me</span>
              </div>
              <div className="text-[#001F3F] font-Poppins font-normal text-base ">
                <Link to="/forgotPassword">Forgot password?</Link>
              </div>
            </div>
            <div className=" mt-6 flex flex-col gap-6">
              <button className="w-[90%] max-w-96 py-6 text-white bg-[#001F3F] flex items-center justify-center rounded-[15px] mx-auto text-xl font-semibold font-Poppins">
                Log In
              </button>
              <p className="text-[#001F3F] font-Poppins font-normal text-xl">
                Don't have an account?
                <span className=" cursor-pointer text-[#FFBF00] font-Poppins text-xl font-semibold mt-4">
                  {' '}
                  <Link to={'/signup'}> Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
          <div className="hidden lg:flex">
            <img src={SmileySvg} alt="" />
          </div>
        </div>
      </form>
      <div className="w-full bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default Login
