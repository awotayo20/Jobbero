import { AdminGetAllJobList } from '@/APIs/AdminGetAllJobList'
import { AdminPostJob } from '@/APIs/AdminPostJob'
import { Button } from '@/Components/ui/button'
import { SeparatorHorizontal } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const PostJobs = () => {
  const [jobLists, setJobLists] = useState()

  useEffect(() => {
    AdminGetAllJobList().then((result) => {
      setJobLists(result.data.data)
    })
  }, [])

  return (
    <div>
      <h2 className="text-center py-6 font-semibold text-3xl">List of Jobs</h2>
      <div>
        <div className="grid grid-cols-5 justify-between">
          <div>
            <h2 className=" font-semibold ">Company</h2>
          </div>
          <div>
            <h2 className=" font-semibold ">Job Title</h2>
          </div>
          <div>
            <h2 className=" font-semibold ">Job Description</h2>
          </div>
          <div>
            <h2 className=" font-semibold ">Location</h2>
          </div>
          <div>
            <h2 className=" font-semibold ">Action</h2>
          </div>
        </div>

        {jobLists &&
          jobLists.map(({ job, id }) => {
            const { companyName, title, jobDetails, location } = job
            return (
              <div
                key={id}
                className="w-full grid grid-cols-5 gap-y-12 justify-between space-y-4"
              >
                <div>
                  <h2>{companyName}</h2>
                </div>
                <div>
                  <h2>{title}</h2>
                </div>
                <div>
                  <h2>{jobDetails}</h2>
                </div>
                <div>
                  <h2>{location}</h2>
                </div>
                <div className="space-x-4">
                  <Button>
                    <button
                      onClick={() => {
                        AdminPostJob(id)
                      }}
                    >
                      POST
                    </button>
                  </Button>
                  <Button className="bg-red-500">DELETE</Button>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default PostJobs

export const PostJobTable = () => {
  return <></>
}
