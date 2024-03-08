import elasticLogo from '../../assets/ElasticLogo.png'
import Perfot from '../../assets/Perfot.png'
import CreativeSolutions from '../../assets/CreativeSolutions.png'
import BsingWears from '../../assets/BsingWears.png'
import DigitalSolutions from '../../assets/DigitalSolutions.png'
import TandoriHotels from '../../assets/TandoriHotels.png'
import { useEffect, useState } from 'react'
import { useAuth } from '../utils/AuthContext'
import { GetAllFeaturedJobs } from '../../APIs/FeatureJobs'
import { Result } from 'postcss'
import { Link } from 'react-router-dom'

const FeatureJobs = () => {
  const [getAllFeatureJobs, setGetAllFeatureJobs] = useState()
  useEffect(() => {
    GetAllFeaturedJobs().then((result) => {
      setGetAllFeatureJobs(result)
    })
  }, [])

  return (
    <div className="text-[#001F3F] m-4">
      <div>
        <div className="flex justify-between mb-3 text-white">
          <h2 className=" font-semibold text-lg lg:text-2xl">Featured Jobs</h2>
          <button className="font-normal text-xl"></button>
        </div>
        <div className="w-full">
          <div className="bg-[#001F3F] py-9 gap-3 justify-center lg:grid grid-cols-3 w-full flex flex-col">
            {getAllFeatureJobs &&
              getAllFeatureJobs.map(({ job }) => {
                const { title, WorkMode, salary, jobType, location } = job
                return (
                  <FeatureJobsCard
                    title={title}
                    amount={`₦${salary}`}
                    WorkMode={WorkMode}
                    jobType={jobType}
                    companyLocation={location}
                  />
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureJobs

export const FeatureJobsCard = ({
  title,
  amount,
  WorkMode,
  jobType,
  CompanyLogo,
  companyName,
  companyLocation,
  dayLeft,
  sponsorship,
  jobUrl,
}) => {
  return (
    <>
      <div className="bg-[#0074CC] flex rounded-lg">
        <div className="bg-white space-y-4 p-4 border-[#FFBF00] border-[1px] flex flex-col justify-between rounded-lg flex-1">
          <h3 className="text-[#001F3F] font-bold lg:text-xl text-center">
            {title}
          </h3>
          <div className="flex gap-4 justify-between">
            <h4 className="text-[#0074CC] text-sm lg:text-base">
              {companyName}
            </h4>
            <span className=" font-medium">{jobType}</span>
          </div>
        </div>

        <div className="flex-3 p-2 space-y-4 flex items-end justify-between flex-col">
          <h4 className="text-white text-lg font-semibold">{WorkMode}</h4>

          <a href={jobUrl} target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer font-semibold text-sm text-white bg-[#001F3F] px-3 py-1 rounded-full my-3 block">
              Apply
            </span>
          </a>
        </div>
      </div>

      {/* <div className="JobCard cursor-pointer h-64 p-4 rounded-xl duration-500 bg-white hover:bg-[#0074CC]">
        <div className="flex justify-between h-full">
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col items-start">
              <h2 className="font-medium text-xl">{title}</h2>
              <p className="font-normal text-base">{amount}</p>
              <div className="flex items-start gap-1 mx-4">
                <button className="text-white bg-[#FFBF00] rounded-full px-2 py-[2px] text-xs font-medium">
                  {location}
                </button>
                <button className="text-white bg-[#001F3F] py-[2px] px-2 rounded-full text-xs">
                  {type}
                </button>
                {sponsorship}
              </div>
            </div>
            <div className="flex gap-2">
              <img src={CompanyLogo} />
              <div>
                <h4 className="font-medium text-base">{companyName}</h4>
                <p className="text-sm">{companyLocation}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <p className="font-medium text-sm">{dayLeft}</p>
          </div>
        </div>
      </div> */}
    </>
  )
}
