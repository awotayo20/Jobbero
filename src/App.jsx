import React from 'react'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { AuthProvider, useAuth } from './Components/utils/AuthContext'
import Navbar from './Components/Header/Navbar'
import Home from './Pages/Home'
import SignUp from './Pages/SignUpPage/SignUp'
import Login from './Pages/LoginPage/Login'
import ForgetPassword from './Pages/LoginPage/ForgetPassword'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactPage/ContactUs'
import ConfirmEmail from './Pages/LoginPage/ConfirmEmail'
import ResetPassword from './Pages/LoginPage/ResetPassword'
import Privacy from './Pages/Privacy'
import TermsAndCondition from './Pages/TermsAndCondition'
import JobSearch from './Pages/Job Pages/JobSearch'
import Application from './Pages/Job Pages/Application'
import ApplicationSuccess from './Pages/Job Pages/ApplicationSuccess'

/**
 * This function handles private routes in a React application.
 * It checks if the user is authenticated and returns the appropriate component based on the user's authentication status.
 *
 * @returns {JSX.Element} The component to render based on the user's authentication status.
 */
function PrivateRoutes() {
  const { user } = useAuth()
  return user ? <Outlet /> : <Navigate to="/login" />
}

function App() {
  return (
    <>
      <AuthProvider>
        <div className="h-[65px] md:h-[90px] w-full bg-[#001F3F] relative z-[9999]">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotPassword" element={<ForgetPassword />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-condition" element={<TermsAndCondition />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route path="job-search-result" element={<JobSearch />} />
            <Route path="application" element={<Application />} />
            <Route
              path="application-successful"
              element={<ApplicationSuccess />}
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
