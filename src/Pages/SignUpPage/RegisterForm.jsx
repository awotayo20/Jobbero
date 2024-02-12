import Select from 'react-select'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef, useState } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import SignupSvg from '../../assets/SignupSvg.svg'
export const RegisterForm = () => {
  const [errMsg, setErrMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

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

    if (passwordRef !== ConfirmPasswordRef) {
      return setErrMsg('Password does not match')
    }
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
      <div className=" lg:grid lg:grid-cols-7 items-center">
        <div className=" lg:grid col-span-4 gap-5 w-full max-w-[650px] mx-auto">
          <div className="input-container">
            <label className="label">First Name</label>
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
            <label>Last Name</label>
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
            <label>Password</label>
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
            <label>Confirm Password</label>
            <input
              type="password"
              name="Confirm Password"
              ref={ConfirmPasswordRef}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value })
              }}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="input-container">
            <label>Mobile Number</label>
            <input
              type="number"
              name="phoneNumber"
              onChange={(e) => {
                setUserData({ ...userData, phoneNumber: e.target.value })
              }}
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="Email"
              name="email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label>Role</label>
            <Select
              value={role.value}
              onChange={(value) => {
                setUserData({ ...userData, role: value.value })
              }}
              options={role}
              styles={selectCustomStyles}
            />
          </div>

          <p className="text-[#001F3F] font-medium text-[18px] font-Poppins max-w-[450px] mx-auto pt-14 pb-5">
            Would you like your CV to meet international standard? Pricing
            starts from ₦8,000
          </p>

          <div className="my-4">
            <input type="checkbox" name="" id="" className="m-2" />
            <label className="font-medium text-[#001F3F]  text-[18px] font-Poppins">
              Yes I’m in ( A Rep will contact you)
            </label>
          </div>
        </div>
        <div className="hidden lg:block col-span-3">
          <div className="relative">
            <img src={SignupSvg} alt="" />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" scale-110 mt-12 mb-20">
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
    </form>
  )
}
