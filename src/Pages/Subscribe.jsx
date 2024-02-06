import React from 'react'
export function Subscribe({}) {
  return (
    <div>
      <div>
        <h4 className="font-semibold">
          Stay Ahead of the Curve: Subscribe to Our Job Alerts for Instant
          Career Opportunities!
        </h4>
        <p className="">
          Customize your job search experience by subscribing to our
          personalized alerts. Your career journey, your terms – get notified
          instantly about the opportunities that align with your goals.
          Subscribe now for a tailored job search experience!
        </p>
      </div>
      <div className="relative w-[90%] mx-auto py-6">
        <input
          type="text"
          name=""
          id=""
          placeholder="Type email"
          className="w-full py-6 px-4 rounded-xl border-[#001F3F] border-[1.5px] border-solid outline-none"
        />
        <button className="absolute bg-[#0074CC] text-white p-4 rounded-2xl right-2 top-1/2 -translate-y-1/2">
          Subscribe
        </button>
      </div>
    </div>
  )
}
