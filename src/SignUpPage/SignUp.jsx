import { RegisterForm } from './RegisterForm'
import JobberoLogo from '../assets/jobberoLogo.png'
import Footer from '../HomePage/Sections/Footer'

const SignUp = () => {
  return (
    <>
      <div className="max-w-[1385px] mx-auto px-9">
        <img src={JobberoLogo} alt="Jobbero Logo" />
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
        <p className="text-[#001F3F] font-Poppins font-normal text-4xl">
          Already have an account?
        </p>
        <button className="text-[#FFBF00] font-Poppins text-3xl font-semibold mt-4">
          Sign In
        </button>
      </div>
      <Footer />
    </>
  )
}

export default SignUp
