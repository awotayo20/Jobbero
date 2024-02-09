import React from 'react'
import { FeatureJobsCard } from '../../Components/Home_Sections/FeatureJobs'
import BsingWears from '../../assets/BsingWears.png'
import Perfot from '../../assets/Perfot.png'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'

const SearchResult = () => {
  return (
    <>
      <div className="grid grid-cols-7 items-center">
        <div className="grid gap-6 mx-4 max-w-[350px] col-span-2">
          <div className="border-black/50 border-[1px] rounded-xl">
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
          <div className=" border-black/50 border-[1px] rounded-xl">
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
          <div className=" border-black/50 border-[1px] rounded-xl">
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
          <div className=" border-black/50 border-[1px] rounded-xl">
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
        <JobDescription image={BsingWears} />
      </div>
      <div className="bg-[#001F3F] mt-6">
        <Footer />
      </div>
    </>
  )
}

export default SearchResult

export function JobDescription({ image }) {
  return (
    <div className="col-span-5 w-[95%] mx-auto">
      <div className="w-[80%] mx-auto">
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
              <div className="flex items-start gap-1 justify-center">
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
        <div className="my-4 flex justify-between">
          <button className="py-2 px-8 bg-[#001F3F] rounded-full text-white font-Poppins text-xl">
            <Link to={'/application'}>Apply</Link>
          </button>
          <div>{/* add to favourite and red flag  */}</div>
        </div>
      </div>

      <div className="py-6 px-8 border-black/50 border-[1px] rounded-xl">
        <div className="grid gap-5">
          <p>
            <span className="font-bold">Job Type:</span> Full Time
          </p>
          <p>
            <span className="font-bold">Job Industry:</span> Information
            Technology
          </p>
          <p>
            <span className="font-bold">Experience Level:</span> Entry Level
          </p>
          <p>
            <span className="font-bold">Minimum Year of Experience:</span> 1
            year(s)
          </p>
          <p>
            <span className="font-bold">Minimum Qualification:</span> Bachelor
            Degree
          </p>
          <p>
            <span className="font-bold">Location:</span>Abuja
          </p>
          <p>
            <span className="font-bold">Work Mode:</span> On-Site
          </p>
        </div>
        {/* Job briefing */}
        <div className="my-2">
          <h2 className="font-bold my-3">Job Brief</h2>
          <p className=" leading-8">
            We’re looking for a Junior Web Developer to work with us on a
            variety of web development projects. You will be responsible for the
            coding, designing, and debugging of websites and web applications.
            If you are a quick learner with a passion for web development, then
            we would love to have you on our team!
          </p>
        </div>
        {/* Job responsibilities */}
        <div className="my-2">
          <h2 className="font-bold my-3">Responsibilities</h2>
          <ol className=" list-decimal leading-8">
            <li>
              Develop and maintain websites, including developing and deploying
              web pages, integrating with third-party applications, and managing
              servers
            </li>
            <li>
              Design and develop websites using popular browsers and libraries
            </li>
            <li>
              Develop and maintain websites using popular frameworks, including
              AngularJS, Umbraco, Angular 2, JSF, and Spring MVC
            </li>
            <li>
              Develop and maintain large-scale, complex web applications using
              Java, Hibernate, and HTML5
            </li>
            <li>
              Write application code, build programs, use databases, organize
              code, and troubleshoot programs
            </li>
            <li>
              Work independently, as well as as part of a development team
            </li>
            <li>Draw inferences from data, and distinguish trends in data</li>
            <li>Identify security risks</li>
            <li>Work on and manage a web-based project from start to finish</li>
            <li>Participate in agile software development</li>
          </ol>
        </div>
        {/* important safety tips */}
        <div>
          <h2 className="font-bold my-3">Important Safety Tips:</h2>
          <ol className=" list-decimal leading-6">
            <li>
              Do not make any payment without confirming with the Jobbero
              Customer Support Team.
            </li>
            <li>
              If you think this advert is not genuine, please report it via the
              Report Job link below.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
