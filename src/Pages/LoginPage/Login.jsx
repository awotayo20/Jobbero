import { Link } from 'react-router-dom'

import smiley from '../../assets/smiley.png'
import captcha from '../../assets/captcha.png'
import Footer from '../../Components/Footer/index'
import Navbar from '../../Components/Header/Navbar'

const Login = () => {
  return (
    <>
      <div className=" h-[65px] md:h-[90px] w-full bg-[#001F3F] relative z-[9999]">
        <Navbar />
      </div>
      <div className="container">
        <section className="login-form">
          <h1>We are glad to see you again!</h1>
          <form className="form-container" action="">
            <div className="login-details">
              <label className="input-holder">
                <input type="email" name="email" placeholder="Email" />
              </label>
              <label className="input-holder">
                <input type="password" name="pass" placeholder="Password" />
              </label>
            </div>
            <div className="forgot-password">
              <Link to="/forgotPassword">Forgot password?</Link>
            </div>
            <label className="check">
              <input type="checkbox" name="checkbox" />
              <div>Remember me</div>
            </label>

            <button className="login-btn">Log In</button>
            <h3>
              Don't have an account?<span> Sign Up</span>
            </h3>
          </form>
        </section>
        <section className="loginImage">
          <img src={smiley} alt="" />
        </section>
      </div>
      <div className="w-full bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default Login
