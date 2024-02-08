import React from 'react'
import { FeatureJobsCard } from '../../Components/Home_Sections/FeatureJobs'
import BsingWears from '../../assets/BsingWears.png'
import Perfot from '../../assets/Perfot.png'

const SearchResult = () => {
  return (
    <>
      <div className="grid gap-6 mx-4">
        <div className="max-w-[350px] border-black/50 border-[1px] rounded-xl hover:bg-[#0074CC] duration-500 focus:bg-[#0074CC]">
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
        </div>
        <div className="max-w-[350px] border-black/50 border-[1px] rounded-xl hover:bg-[#0074CC] duration-500 focus:bg-[#0074CC]">
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
        </div>
        <div className="max-w-[350px] border-black/50 border-[1px] rounded-xl hover:bg-[#0074CC] duration-500 focus:bg-[#0074CC]">
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
        </div>
        <div className="max-w-[350px] border-black/50 border-[1px] rounded-xl hover:bg-[#0074CC] duration-500 focus:bg-[#0074CC]">
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
        </div>
      </div>
    </>
  )
}

export default SearchResult
