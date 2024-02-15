import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import SignUp from './Pages/SignUpPage/SignUp'
import Login from './Pages/LoginPage/Login'
import ForgetPassword from './Pages/LoginPage/ForgetPassword'
import ContactUs from './Pages/ContactPage/ContactUs'
import ConfirmEmail from './Pages/LoginPage/ConfirmEmail'
import ResetPassword from './Pages/LoginPage/ResetPassword'
import Privacy from './Pages/Privacy'
import TermsAndCondition from './Pages/TermsAndCondition'
import JobSearch from './Pages/Job Pages/JobSearch'
import Application from './Pages/Job Pages/Application'
import ApplicationSuccess from './Pages/Job Pages/ApplicationSuccess'
import PrivateRoutes from './Components/utils/PrivateRoutes'
import { AuthProvider } from './Components/utils/AuthContext'
import Navbar from './Components/Header/Navbar'

function App() {
  return (
    <>
      <AuthProvider>
        <div className=" h-[65px] md:h-[90px] w-full bg-[#001F3F] relative z-[9999]">
          <Navbar />
        </div>
        <Routes>
          <Route path="about" element={<AboutUs />} />
          <Route path="forgotPassword" element={<ForgetPassword />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="confirm-email" element={<ConfirmEmail />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="privacy-policy" element={<Privacy />} />
          <Route path="terms-condition" element={<TermsAndCondition />} />
          <Route path="job-search-result" element={<JobSearch />} />

          <Route element={<PrivateRoutes />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
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
