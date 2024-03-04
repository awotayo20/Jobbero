import { Link } from 'react-router-dom'

export function JobDescription({
  image,
  title,
  salary,
  jobType,
  companyName,
  location,
  WorkMode,
  jobIndustry,
  qualification,
  responsibilities,
  safetyTips,
  jobUrl,
  jobDetails,
}) {
  return (
    <div>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between p-6 border-black/50 border-[1px] rounded-xl">
          <div className="flex items-center gap-2">
            <img src={image} alt="" />
            <div>
              <h3 className=" font-semibold">{companyName}</h3>
              <h4 className="text-sm">{location}</h4>
            </div>
          </div>
          <div className="flex justify-between flex-col">
            <div>
              <h2 className=" font-semibold">{title}</h2>
              <div className="flex items-start gap-1 justify-center">
                <button className="text-white bg-[#FFBF00] rounded-full px-2 py-[2px] text-xs font-medium">
                  {WorkMode}
                </button>
                <button className="text-white bg-[#001F3F] py-[2px] px-2 rounded-full text-xs">
                  {jobType}
                </button>
              </div>
            </div>
            <div>
              <h4 className=" font-semibold">{salary}</h4>
            </div>
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <button className="py-2 px-8 bg-[#001F3F] rounded-full text-white font-Poppins text-xl">
            <a href={`${jobUrl}`} target="_blank" rel="noopener noreferrer">
              Apply
            </a>
          </button>
        </div>
      </div>

      <div className="py-6 px-8 border-black/50 border-[1px] rounded-xl">
        <div className="grid gap-5">
          <p>
            <span className="font-bold">Job Type:</span> {jobType}
          </p>
          <p>
            <span className="font-bold">Job Industry:</span> {jobIndustry}
          </p>

          <p>
            <span className="font-bold">Minimum Qualification:</span>{' '}
            {qualification}
          </p>
          <p>
            <span className="font-bold">Location:</span> {location}
          </p>
          <p>
            <span className="font-bold">Work Mode:</span> {WorkMode}
          </p>
        </div>
        {/* Job briefing */}
        <div className="my-2">
          <h2 className="font-bold my-3">Job Brief</h2>
          <p className=" leading-8">{jobDetails}</p>
        </div>
        {/* Job responsibilities */}
        <div className="my-2">
          <h2 className="font-bold my-3">Responsibilities</h2>
          <ol className=" list-decimal leading-8">
            <li>{responsibilities}</li>
          </ol>
        </div>
        {/* important safety tips */}
        <div>
          <h2 className="font-bold my-3">Important Safety Tips:</h2>
          <ol className=" list-decimal leading-6">
            <li>{safetyTips}</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
