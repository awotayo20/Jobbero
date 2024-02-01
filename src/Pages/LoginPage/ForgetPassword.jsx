import ReCAPTCHA from 'react-google-recaptcha'
import SmileySVG from './SmileySVG.jsx'
import Footer from '../../Components/Footer/index.jsx'

const ForgetPassword = () => {
  const reCAPTCHAChange = (value) => {
    console.log('Captcha value:', value)
  }

  return (
    <>
      <div className="lg:grid grid-cols-2 justify-center items-center my-16 lg:my-0">
        <div className="w-[80%] mx-auto">
          <h3 className="text-[#001F3F] font-semibold text-3xl font-Poppins">
            Forgot Password
          </h3>
          <p className="text-[#001F3F] text-2xl font-Poppins font-normal mt-3 mb-8">
            Enter your email address and we will send you a link to update your
            password
          </p>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="rounded-[20px] border-[#001F3F80] border-[1.5px] p-4 w-full"
            />
          </div>
          <div className="mt-20 mx-12">
            <div className=" scale-110">
              <ReCAPTCHA
                sitekey="Your client site key"
                onChange={reCAPTCHAChange}
              />
            </div>
          </div>
          <div className=" grid grid-cols-4 items-center mt-9">
            <div className=" col-span-3">
              <button
                type="submit"
                className="w-full p-8 bg-[#001F3F] rounded-2xl text-white font-Poppins font-semibold text-2xl "
              >
                Send
              </button>
            </div>
            <div>
              <a href="/login">
                <button className="w-full  rounded-2xl text-[#0074CC] font-Poppins font-semibold text-2xl ">
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[90%] mx-auto">
          <SmileySVG />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ForgetPassword
