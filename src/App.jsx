import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './HomePage/Home'
import AboutUs from './HomePage/Sections/AboutUs'
import { Header } from './HomePage/Sections/Header'
import SignUp from './SignUpPage/SignUp'
import Login from './LoginPage/Login'
import ForgetPassword from './LoginPage/ForgetPassword'
import ContactUs from './ContactPage/ContactUs'

function App() {
  return (
    <>
      <div className="bg-[#001F3F] w-full ">
        <div className="py-4 mx-4 px-9 bg-[#001F3F] rounded-full">
          <Header />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ForgetPassword />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
