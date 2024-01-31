import { Link } from 'react-router-dom'

import smiley from '../assets/smiley.png'
import captcha from '../assets/captcha.png'
import '../css/login.css'
import Footer from '../HomePage/Sections/Footer'

const Login = () => {
  return (
    <>
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
            <div className="captcha-box">
              <label className="captcha check">
                <input type="checkbox" name="checkbox" />
                <img src={captcha} alt="" />
              </label>
            </div>
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
      <Footer />
    </>
  )
}

export default Login
