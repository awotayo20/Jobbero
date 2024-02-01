import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import SignUp from './Pages/SignUpPage/SignUp'
import Login from './Pages/LoginPage/Login'
import ForgetPassword from './Pages/LoginPage/ForgetPassword'
import ContactUs from './Pages/ContactPage/ContactUs'

function App() {
  return (
    <>
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
