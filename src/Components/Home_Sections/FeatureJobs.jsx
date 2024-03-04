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

const FeatureJobs = () => {
  const [getAllFeatureJobs, setGetAllFeatureJobs] = useState()
  console.log(getAllFeatureJobs)
  useEffect(() => {
    GetAllFeaturedJobs().then((result) => {
      setGetAllFeatureJobs(result)
    })
  }, [])

  return (
    <div className="text-[#001F3F] m-4">
      <div>
        <div className="flex justify-between mb-3 text-white">
          <h2 className=" font-semibold text-2xl">Featured Jobs</h2>
          <button className="font-normal text-xl">see more</button>
        </div>
        <div className="w-full">
          <div className="bg-[#001F3F] py-9 gap-3 justify-center lg:grid grid-cols-3 w-full flex flex-col">
            {getAllFeatureJobs &&
              getAllFeatureJobs.map(({ job }) => {
                const { title, WorkMode, salary, jobType, location } = job
                console.log(title, WorkMode, salary)
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

            {/* <FeatureJobsCard
              title={'HR Team Lead'}
              amount={'₦450 - 500k/Per Month'}
              location={'On-Site'}
              type={'Full Time'}
              CompanyLogo={elasticLogo}
              companyName={'Elastic Resources'}
              companyLocation={'Lagos, Nigeria'}
              dayLeft={<span className="text-[#FF0000]">3 Days left</span>}
            />
            <FeatureJobsCard
              title={'Human Resources Off.'}
              amount={'₦200 - 300k/Per Month'}
              location={'Hybrid'}
              type={'Full Time'}
              CompanyLogo={Perfot}
              companyName={'Perfot Travel Agency'}
              companyLocation={'Lagos, Nigeria'}
              dayLeft={'22 Days left'}
            />
            <FeatureJobsCard
              title={'Human Resources Mgr.'}
              amount={'₦300 - 400k/Per Month'}
              location={'On-Site'}
              type={'Full Time'}
              CompanyLogo={CreativeSolutions}
              companyName={'Creative Solutions'}
              companyLocation={'Lagos, Nigeria'}
              dayLeft={'18 Days left'}
            />
            <FeatureJobsCard
              title={'Fashion Designer'}
              amount={'₦300 - 400k/Per Month'}
              location={'On-Site'}
              type={'Full Time'}
              CompanyLogo={BsingWears}
              companyName={'Bsing Wears'}
              companyLocation={'Abuja, Ng'}
              dayLeft={'10 Days left'}
            />
            <FeatureJobsCard
              title={'UI/UX Designer'}
              amount={'₦600 - 800k/Per Month'}
              location={'On-Site'}
              type={'Full Time'}
              CompanyLogo={DigitalSolutions}
              companyName={'Digital Solutions'}
              companyLocation={'Brussels, BE'}
              dayLeft={'30 Days left'}
              sponsorship={
                <button className="bg-[#05C624] px-2 rounded-full text-sm font-medium text-white py-[2px]">
                  Visa Sponsorship
                </button>
              }
            />
            <FeatureJobsCard
              title={'Chef'}
              amount={'₦300 - 400k/Per Month'}
              location={'On-Site'}
              type={'Full Time'}
              CompanyLogo={TandoriHotels}
              companyName={'Tandori Hotels'}
              companyLocation={'London, UK'}
              dayLeft={'30 Days left'}
              sponsorship={
                <button className="bg-[#05C624] px-2 rounded-full text-xs font-medium text-white py-1">
                  Visa Sponsorship
                </button>
              }
            /> */}
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
          <h4 className="text-white text-lg font-semibold">{amount}</h4>
          <span className=" font-semibold text-sm text-white bg-[#001F3F] px-3 py-1 rounded-full my-3 block">
            {WorkMode}
          </span>
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
