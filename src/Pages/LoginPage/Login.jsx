import { Link, Navigate, useNavigate } from 'react-router-dom'
import SmileySvg from '../../assets/SmileySvg.svg'
import Footer from '../../Components/Footer/index'
import { useAuth } from '../../Components/utils/AuthContext'
import { useEffect, useRef } from 'react'

const Login = () => {
  const navigate = useNavigate()
  const { user, loginUser } = useAuth()
  console.log(user)

  const loginForm = useRef(null)

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    const userInfo = { email, password }
    loginUser(userInfo)
  }

  return (
    <>
      {user ? (
        <>
          <Navigate to={'/'} />
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit} ref={loginForm}>
            <div className="lg:grid grid-cols-2 gap-11 items-center max-w-[1024px] mx-auto my-6">
              <div className="container max-w-[650px] w-[90%] mx-auto">
                <h1 className="mb-6 text-2xl font-Poppins font-semibold text-[#001F3F]">
                  We are glad to see you again!
                </h1>
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="input-container">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
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
                  <button
                    type="submit"
                    className="w-[90%] max-w-96 py-6 text-white bg-[#001F3F] flex items-center justify-center rounded-[15px] mx-auto text-xl font-semibold font-Poppins"
                  >
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

          <ActionAlerts errorMsgText={'Failed to Login'} />
        </>
      )}
    </>
  )
}

export default Login
