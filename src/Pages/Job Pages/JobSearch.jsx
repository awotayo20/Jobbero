import React from 'react'

const JobSearch = () => {
  return (
    <>
      <div className=" my-7 lg:pl-6  bg-white rounded-lg lg:rounded-[30px] px-4 py-2 lg:flex justify-between w-full max-w-[800px] mx-auto">
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
        <button className="bg-[#0074CC] mt-6 md:mt-0 text-lg font-semibold px-6 rounded-[18px] w-full lg:w-[200px] py-4 lg:py-0 text-white">
          Explore Now
        </button>
      </div>
    </>
  )
}

export default JobSearch