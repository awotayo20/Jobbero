import elasticLogo from '../../assets/ElasticLogo.png'
import Perfot from '../../assets/Perfot.png'
import CreativeSolutions from '../../assets/CreativeSolutions.png'
import BsingWears from '../../assets/BsingWears.png'
import DigitalSolutions from '../../assets/DigitalSolutions.png'
import TandoriHotels from '../../assets/TandoriHotels.png'
import { Favorite } from '../../assets/ExtermalSvgs'

const FeatureJobs = () => {
  return (
    <div className="text-[#001F3F]">
      <div>
        <div className="flex justify-between mx-9 mb-3 text-white">
          <h2 className=" font-semibold text-2xl">Featured Jobs</h2>
          <button className="font-normal text-xl">see more</button>
        </div>
        <div className="flex flex-col gap-9">
          <div className="bg-[#001F3F] flex py-9 px-9 gap-3 flex-wrap justify-between">
            <FeatureJobsCard
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
          </div>
          <div className="bg-[#001F3F] flex py-9 px-9 gap-3 flex-wrap justify-between">
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
              sponsorship={'Visa Sponsorship'}
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
              sponsorship={'Visa Sponsorship'}
            />
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
  location,
  type,
  CompanyLogo,
  companyName,
  companyLocation,
  dayLeft,
  sponsorship,
}) => {
  return (
    <div className="bg-white w-[415px] p-4 rounded-xl">
      <div className="flex justify-between h-full">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col items-start">
            <h2 className="font-medium text-2xl">{title}</h2>
            <p className="font-normal text-lg">{amount}</p>
            <div className="flex flex-col items-start gap-1">
              <button className="text-white bg-[#FFBF00] rounded-full px-4 py-[2px] text-sm font-medium">
                {location}
              </button>
              <button className="text-white bg-[#001F3F] py-[2px] px-5 rounded-full text-sm">
                {type}
              </button>
              {
                <button className="bg-[#05C624] px-2 rounded-full text-sm font-medium text-white">
                  {sponsorship}
                </button>
              }
            </div>
          </div>
          <div className="flex gap-2">
            <img src={CompanyLogo} alt="elasticLogo" />
            <div>
              <h4 className="font-medium text-lg">{companyName}</h4>
              <p>{companyLocation}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <Favorite />
          <p className="font-medium text-sm">{dayLeft}</p>
        </div>
      </div>
    </div>
  )
}
