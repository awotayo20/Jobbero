import React, { useCallback, useEffect, useState } from 'react'
import { FeatureJobsCard } from '../../Components/Home_Sections/FeatureJobs'
import BsingWears from '../../assets/BsingWears.png'
import Perfot from '../../assets/Perfot.png'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { JobSeekerGetAvailableJobs } from '@/APIs/JobSeekerGetAvailableJobs'
import { JobDescription } from './JobDescription'

const SearchResult = () => {
  const [availableJobs, setAvailableJobs] = useState([])
  const [currentJob, setCurrentJob] = useState()
  useEffect(() => {
    JobSeekerGetAvailableJobs().then((result) => {
      setAvailableJobs(result)
      setCurrentJob(availableJobs[0])
    })
  }, [])

  const handleJobClick = useCallback(
    (index) => {
      setCurrentJob(availableJobs[index])
      console.log(currentJob)
    },
    [availableJobs, currentJob]
  )

  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-8 items-start gap-4">
        <div className="grid gap-6 mx-4 w-full  col-span-3">
          {availableJobs &&
            availableJobs.map((availableJob, index) => {
              const { title, WorkMode, salary, jobType, companyName, jobUrl } =
                availableJob
              return (
                <div className=" space-y-14">
                  <div
                    onClick={() => handleJobClick(index)}
                    className=" cursor-pointer"
                  >
                    <FeatureJobsCard
                      title={title}
                      amount={`₦${salary}`}
                      WorkMode={WorkMode}
                      jobType={jobType}
                      CompanyLogo={BsingWears}
                      companyName={companyName}
                    />
                  </div>
                </div>
              )
            })}
        </div>
        <div className="col-span-5 w-[95%] mx-auto hidden md:block">
          {currentJob ? (
            <>
              <JobDescription {...currentJob} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="bg-[#001F3F] mt-6">
        <Footer />
      </div>
    </>
  )
}

export default SearchResult
