import { RegisterForm } from './RegisterForm'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import Footer from '../../Components/Footer/index'
import { useAuth } from '../../Components/utils/AuthContext'

const SignUp = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      {user ? (
        <>
          <Navigate to={'/login'} />
        </>
      ) : (
        <>
          <div className="max-w-[1024px] mx-auto my-5 w-full">
            <div className="max-w-[1385px] mx-auto px-9 w-full">
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
          </div>
          <div className="w-full bg-[#001F3F]">
            <Footer />
          </div>
        </>
      )}
    </>
  )
}

export default SignUp
