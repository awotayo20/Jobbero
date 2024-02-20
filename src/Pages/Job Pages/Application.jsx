import { useState } from 'react'
import BsingWears from '../../assets/BsingWears.png'
import CancelApplication from '../../assets/Cancel_application.svg'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

const Application = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col gap-14 w-[90%] mx-auto my-8">
        <Link to={'/job-search-result'}>
          <div className="flex items-center gap-2 text-2xl text-[#001F3F] hover:cursor-pointer">
            <img src={CancelApplication} alt="cancel" />
            <h2 className="font-bold">Apply</h2>
          </div>
        </Link>
        <div>
          <AppliedDetails image={BsingWears} />
        </div>
        <div>
          <h1 className="font-bold">Your Information</h1>
          <h2 className="font-bold">Awotayo Samuel</h2>
          <p>Web Developer</p>
        </div>
        <div>
          <h2>Cover Letter (Optional)</h2>
          <textarea
            name=""
            id=""
            rows="10"
            className="border-[1px] border-black w-full rounded-2xl"
            maxLength={2000}
            onChange={(e) => {
              setCount(e.target.value.length)
            }}
          ></textarea>
          <p className="text-end italic">{count}/2000</p>
        </div>
        <div>
          <h2 className="font-bold">Resume</h2>
          <p>Be sure to include an updated resume/CV</p>
        </div>
        <Link to={'/application-successful'}>
          <div className="flex justify-center text-white bg-[#001F3F] w-full max-w-[450px] h-[60px] rounded-2xl text-center items-center mx-auto cursor-pointer font-bold text-2xl">
            <button className="">Apply</button>
          </div>
        </Link>
      </div>
      <div className="bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default Application

function AppliedDetails({ image }) {
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className="flex justify-between p-6 border-black/50 border-[1px] rounded-xl">
        <div className="flex items-center gap-2">
          <img src={image} alt="" />
          <div>
            <h3 className=" font-semibold">Accenture</h3>
            <h4 className="text-sm">Abuja, NG</h4>
          </div>
        </div>
        <div className="flex justify-between flex-col">
          <div>
            <h2 className=" font-semibold">Junior Web Developer</h2>
            <div className="flex flex-col items-start gap-4 justify-center my-3">
              <button className="text-white bg-[#FFBF00] rounded-full px-2 py-[2px] text-xs font-medium">
                On-Site
              </button>
              <button className="text-white bg-[#001F3F] py-[2px] px-2 rounded-full text-xs">
                Full Time
              </button>
            </div>
          </div>
          <div>
            <h4 className=" font-semibold">₦300 - 400k / Per Month</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
