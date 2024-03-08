import Footer from '../../Components/Footer'
import SignupSvg from '../../assets/SignupSvg.svg'

const ResetPassword = () => {
  return (
    <>
      <form action="">
        <div className="lg:grid grid-cols-2 items-center max-w-[1024px] mx-auto gap-11">
          <div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="input-container">
              <label>Confirm Password</label>
              <input
                type="password"
                name="Confirm-Password"
                placeholder="Confirm Password"
              />
            </div>
            <button
              type="submit"
              className="my-6 w-[90%] py-6 text-white bg-[#001F3F] flex items-center justify-center rounded-[15px] mx-auto text-xl font-semibold font-Poppins"
            >
              Confirm
            </button>
          </div>
          <div className="flex">
            <img src={SignupSvg} alt="" />
          </div>
        </div>
      </form>

      <div className="bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default ResetPassword
