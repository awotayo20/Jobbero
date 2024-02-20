import ReCAPTCHA from 'react-google-recaptcha'
import SignupSvg from '../../assets/SignupSvg.svg'

import Footer from '../../Components/Footer/index.jsx'
import Navbar from '../../Components/Header/Navbar.jsx'

const ForgetPassword = () => {
  const reCAPTCHAChange = (value) => {
    console.log('Captcha value:', value)
  }

  return (
    <>
      <div className="lg:grid grid-cols-2 justify-center items-center my-16 lg:my-0 max-w-[1024px] mx-auto">
        <div className="w-[80%] mx-auto">
          <h3 className="text-[#001F3F] font-semibold text-2xl font-Poppins">
            Forgot Password
          </h3>
          <p className="text-[#001F3F] text-xl font-Poppins font-normal mt-3 mb-8">
            Enter your email address and we will send you a link to update your
            password
          </p>
          <div className="input-container">
            <input type="email" name="email" required placeholder="Email" />
          </div>
          <div className="mt-9">
            <div className="">
              <ReCAPTCHA
                sitekey="Your client site key"
                onChange={reCAPTCHAChange}
              />
            </div>
          </div>
          <div className=" lg:grid grid-cols-4 items-center mt-9">
            <div className=" col-span-3">
              <button
                type="submit"
                className="w-[90%] max-w-96 py-6 text-white bg-[#001F3F] flex items-center justify-center rounded-[15px] mx-auto text-xl font-semibold font-Poppins"
              >
                Send
              </button>
            </div>
            <div>
              <a href="/login">
                <button className="w-full mt-5 lg:mt-0  rounded-2xl text-[#0074CC] font-Poppins font-semibold text-2xl ">
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[90%] mx-auto">
          <img src={SignupSvg} alt="" />
        </div>
      </div>
      <div className="bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default ForgetPassword
