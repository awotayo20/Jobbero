import happyJobbero from '../../assets/happyJobbero.png'

import olubunmi from '../../assets/olubunmiPic.png'

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
    <div className="lg:grid grid-cols-6">
      <div className="text-white font-Poppins w-full col-span-4">
        <h2 className="font-bold text-4xl">Job Search Simplified</h2>
        <p className="text-2xl mt-2">
          One Platform, Countless Opportunities, Guaranteed Success
        </p>
        <div className="mt-9 bg-white rounded-[30px] px-4 py-4 flex justify-between">
          <div className="flex gap-7">
            <div>
              <label
                htmlFor="location"
                className="text-[#001F3F] font-Poppins font-semibold text-lg block mb-[14px]"
              >
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
            <div className="bg-black border-[1px]"></div>
            <div>
              <label
                htmlFor="location"
                className="text-[#001F3F] font-Poppins font-semibold text-xl block mb-[14px]"
              >
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
          <button className="bg-[#0074CC] text-lg font-semibold px-6 rounded-[18px]">
            Explore Now
          </button>
        </div>
        <div className="my-4 flex justify-center gap-3">
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
          <p className="font-normal text-xl max-w-[670px]">
            Centralized for your success! Apply confidently on our platform and
            experience a revolutionary approach to job hunting, ensuring your
            career advancement.
          </p>
        </div>
        <DownloadApp />
      </div>
      <div className="hidden lg:block -mr-14 relative col-span-2">
        <img
          src={happyJobbero}
          alt="happyJobbero"
          className="z-[10] absolute bottom-0 left-0 size-[100%]"
        />
        <div className="absolute top-0 right-[25px]">
          <Periwinkle fill="white" />
        </div>
        <div className="absolute bottom-0 left-[-200px]">
          <Periwinkle fill="white" />
        </div>
        <div className="absolute bottom-4 -left-4 bg-[#FFBF00] z-10 px-5 py-4 rounded-3xl text-[#001F3F] font-normal">
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
    </div>
  )
}

export function DownloadApp({}) {
  return (
    <div className="flex gap-4 mt-24 mb-14 ">
      <div className="flex gap-3 bg-black px-[14px] py-2 rounded-md hover:cursor-pointer">
        <AppleIcon />
        <AppleText />
      </div>
      <div className="flex gap-3 bg-black px-[14px] py-2 rounded-md hover:cursor-pointer">
        <GooglePlayIcon />
        <GooglePlayText />
      </div>
    </div>
  )
}
