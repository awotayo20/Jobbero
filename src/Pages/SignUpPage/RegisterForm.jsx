import Select from 'react-select'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import SignupSvg from '../../assets/SignupSvg.svg'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Components/utils/AuthContext'
export const RegisterForm = () => {
  const [errMsg, setErrMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const { user, registerUser } = useAuth()

  const passwordRef = useRef()
  const ConfirmPasswordRef = useRef()

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    comfirmPassword: '',
    phoneNumber: '',
    email: '',
    role: '',
  })

  const handleRegistration = (e) => {
    e.preventDefault()

    setErrMsg('')
    const userInfo = userData
    registerUser(userInfo)
  }

  const selectCustomStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: '#001F3F80',
      padding: '12px 8px',
      boxShadow: state.isFocused ? null : null,
      fontSize: '16px',
    }),
  }

  const reCAPTCHAChange = (value) => {
    console.log('Captcha value:', value)
  }

  const role = [
    { value: 'JOB_SEEKER', label: 'JOB SEEKER' },
    { value: 'EMPLOYER', label: 'EMPLOYER' },
  ]
  return (
    <form onSubmit={handleRegistration}>
      <div className="AlertMsg fixed top-24 right-14 z-50">
        <div className={successMsg ? 'block' : 'hidden'}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {successMsg}
          </Alert>
        </div>

        <div className={errMsg ? 'block' : 'hidden'}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {errMsg}
          </Alert>
        </div>
      </div>
      <div className=" lg:grid lg:grid-cols-2 items-center my-6">
        <div className=" grid gap-5 w-full max-w-[650px] mx-auto">
          <div className="input-container">
            <input
              type="text"
              name="firstName"
              onChange={(e) => {
                setUserData({ ...userData, firstName: e.target.value })
              }}
              placeholder="First Name"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="lastName"
              onChange={(e) => {
                setUserData({ ...userData, lastName: e.target.value })
              }}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="Email"
              name="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Email Address"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="Password"
              ref={passwordRef}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value })
              }}
              placeholder="Password"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="Confirm Password"
              ref={ConfirmPasswordRef}
              onChange={(e) => {
                setUserData({ ...userData, comfirmPassword: e.target.value })
              }}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="number"
              name="phoneNumber"
              placeholder="Mobile Number"
              onChange={(e) => {
                setUserData({ ...userData, phoneNumber: e.target.value })
              }}
            />
          </div>

          <div className="input-container">
            <Select
              value={role.value}
              onChange={(value) => {
                setUserData({ ...userData, role: value.value })
              }}
              options={role}
              styles={selectCustomStyles}
              placeholder="Role"
            />
          </div>

          <p className="text-[#001F3F] font-medium text-[16px] font-Poppins max-w-[450px]">
            By signing up, you agree to our{' '}
            <Link to={'/privacy-policy'}>
              <span className=" font-semibold hover:cursor-pointer">
                Privacy Policy
              </span>
            </Link>
          </p>

          <div className="flex justify-center">
            <div className="">
              <ReCAPTCHA
                sitekey="Your client site key"
                onChange={reCAPTCHAChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[90%] max-w-96 py-6 text-white bg-[#001F3F] flex items-center justify-center rounded-[15px] mx-auto text-xl font-semibold font-Poppins"
          >
            Sign Up
          </button>
          <div className="flex flex-col justify-center text-center ">
            <p className="text-[#001F3F] font-Poppins font-normal text-xl">
              Already have an account?
              <span className="text-[#FFBF00] font-Poppins text-xl font-semibold mt-4">
                <Link to={'/login'}> Sign In</Link>
              </span>
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <img src={SignupSvg} alt="" />
          </div>
        </div>
      </div>
    </form>
  )
}
