import Footer from '../../Components/Footer'
// import Navbar from '../../Components/Header/Navbar'
import EmailPng from '../../assets/Email.png'
import SignupSvg from '../../assets/SignupSvg.svg'

export default function ConfirmEmail({ email }) {
  email = 'samuel@gmail.com'
  return (
    <>
      <div className="lg:grid grid-cols-2 items-center max-w-[1024px] mx-auto gap-11 text-[#001F3F]">
        <div className=" text-center">
          <div className="envelop flex justify-center">
            <img src={EmailPng} alt="" className="w-24" />
          </div>
          <div>
            <h2 className="text-[#001F3F] font-semibold text-2xl my-4">
              Check your email
            </h2>
            <p className=" text-base font-normal">
              We sent an email <span className="text-[#FF0000] ">{email}</span>
              <span className=" font-medium">
                {' '}
                in order to reset you password
              </span>
            </p>
            <p className="my-6">
              Check your spam folder if you don’t see the email immediately
            </p>
            <p>
              If you have not received the email after 30 minutes,{' '}
              <span className="underline cursor-pointer">click here</span> to
              repeat the process.
            </p>
            <button className="w-[90%] max-w-96 py-6 my-6 text-white bg-[#001F3F] flex items-center justify-center rounded-[15px] mx-auto text-xl font-semibold font-Poppins">
              Log In
            </button>
          </div>
        </div>
        <div className="flex">
          <img src={SignupSvg} alt="" />
        </div>
      </div>
      <div className="bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}
