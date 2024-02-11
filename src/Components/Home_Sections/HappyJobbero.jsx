import happyJobbero from '../../assets/happyJobbero.png'
import olubunmi from '../../assets/olubunmiPic.png'
import { Typewriter } from 'react-simple-typewriter'

import {
  AppleIcon,
  AppleText,
  CalendarIcon,
  GooglePlayIcon,
  GooglePlayText,
  NairaIcon,
  NotePadIcon,
  Periwinkle,
} from '../../assets/ExtermalSvgs'

export const HappyJobbero = () => {
  return (
    <div className="lg:grid grid-cols-6 items-center h-[100%] relative">
      <div className="text-white font-Poppins col-span-4 w-[90%] mx-auto">
        <div>
          <h2 className="font-bold text-center md:text-left text-3xl lg:text-5xl">
            Job Search Simplified
          </h2>
          <p className="text-center lg:text-left text-base lg:text-xl mt-2">
            One Platform, Countless Opportunities, Guaranteed{' '}
            <span className="text-[#FFBF00] font-semibold">
              <Typewriter
                words={['Success', 'Triumph', 'Breakthrough']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={150}
              />
            </span>
          </p>
        </div>
        <div className=" my-7 lg:pl-6  bg-white rounded-lg lg:rounded-[30px] px-4 py-2 lg:flex justify-between w-full">
          <div className="lg:flex gap-5 w-full">
            <div>
              <label className="text-[#001F3F] font-Poppins font-semibold text-base block mb-[5px]">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter location"
                className="w-full outline-none text-black"
              />
            </div>
            <div className="bg-black border-[1px] w-full lg:w-auto"></div>
            <div>
              <label className="text-[#001F3F] font-Poppins font-semibold text-base block mb-[5px]">
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="e.g Account, Web Design"
                className="w-full outline-none text-black"
              />
            </div>
          </div>
          <button className="bg-[#0074CC] mt-6 md:mt-0 text-lg font-semibold px-6 rounded-[18px] w-full lg:w-[200px] py-4 lg:py-0">
            <Link to={'/job-search-result'}>Explore Now</Link>
          </button>
        </div>
        <div className="my-4 hidden md:flex gap-2 text-xs lg:text-sm">
          <button className="py-[6px] px-4 rounded-full border-white border-[1.5px]">
            200+ Visa Sponsorship Jobs
          </button>
          <button className="py-[6px] px-4 rounded-full border-white border-[1.5px]">
            500+ Remote Opportunities
          </button>
          <button className="py-[6px] px-4 rounded-full border-white border-[1.5px]">
            1000+ Full Time Jobs
          </button>
        </div>
        <div>
          <p className="font-normal text-center md:text-left text-base md:text-xl max-w-[670px] mt-6 lg:mt-0">
            Centralized for your success! Apply confidently on our platform and
            experience a revolutionary approach to job hunting, ensuring your
            career advancement.
          </p>
        </div>
        <div className="absolute bottom-0 w-full max-w-[520px] h-32 ">
          <GoogleAds dataAdSlot="5263303847001041" />
        </div>
      </div>
      <HappyJobberoPic />
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAds from '../../AdsComponent/GoogleAdsComponent'

export const HappyJobberoPic = () => {
  return (
    <div className="hidden h-[100%]  lg:block -mr-14 relative col-span-2">
      <div className="z-[10] absolute bottom-0 left-0 size-[100%] flex">
        <img src={happyJobbero} alt="happyJobbero" />
      </div>

      <div className="absolute top-0 right-[25px]">
        <Periwinkle fill="white" />
      </div>
      <div className="absolute bottom-0 left-[-200px]">
        <Periwinkle fill="white" />
      </div>
      <div className="absolute bottom-0 -left-2 bg-[#FFBF00] z-10 px-5 py-2 rounded-3xl text-[#001F3F] font-normal">
        <div className="flex items-center gap-[11px]">
          <img src={olubunmi} alt="olubunmi" />
          <div>
            <h4 className="font-Poppins text-lg font-semibold">Olubunmi</h4>
            <p>Account Executive</p>
          </div>
        </div>
        <div className="border-[0.77px] border-[#001F3F59] w-[87%] mx-auto my-3"></div>
        <div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-[11px] items-center">
              <NotePadIcon /> <span>Accounting, Auditing & Finance</span>
            </li>
            <li className="flex gap-[11px] items-center">
              <NairaIcon /> <span>₦650 - 800k/Per Month</span>
            </li>
            <li className="flex gap-[11px] items-center">
              <CalendarIcon /> <span>Immediately</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function DownloadApp({}) {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex gap-3 bg-black px-[14px] py-2 rounded-md hover:cursor-pointer w-56 mx-auto lg:mx-0">
        <AppleIcon />
        <AppleText />
      </div>
      <div className="flex gap-3 bg-black px-[14px] py-2 rounded-md hover:cursor-pointer  w-56 mx-auto lg:mx-0">
        <GooglePlayIcon />
        <GooglePlayText />
      </div>
    </div>
  )
}
