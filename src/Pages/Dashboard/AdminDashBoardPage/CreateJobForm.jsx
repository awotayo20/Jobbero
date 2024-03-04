import AdminCreateJob from '@/APIs/AdminCreateJob'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const CreateJobForm = () => {
  const [featured, setFeatured] = useState(false)
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  })

  const onSubmit = async (data) => {
    AdminCreateJob(data)
  }
  return (
    <div>
      <h2 className="text-center ">CREATE A JOB</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-8 max-w-[730px] mx-auto">
          <div className="input-container">
            <h3>Title</h3>
            <input
              type="text"
              {...register('title', { required: 'Job title is required' })}
              placeholder="Job title"
            />
          </div>

          <div className="input-container">
            <h3>Company Name</h3>
            <input
              type="text"
              {...register('companyName')}
              placeholder="Job title"
            />
          </div>

          <div className="input-container">
            <h3>Country</h3>
            <input
              type="text"
              {...register('country')}
              placeholder="Country"
              required
            />
          </div>

          <div className="input-container">
            <h3>State</h3>
            <input type="text" {...register('state')} placeholder="State" />
          </div>

          <div className="input-container">
            <h3>City</h3>
            <input type="text" {...register('city')} placeholder="City" />
          </div>

          <div className="input-container">
            <h3>Salary</h3>
            <input type="text" {...register('salary')} />
          </div>

          <div className="">
            <h3>Job Type</h3>
            <div className=" flex gap-8">
              <div>
                <input
                  type="radio"
                  name="jobType"
                  value={'FULL_TIME'}
                  {...register('jobType')}
                />
                <span className="mx-2">Full time</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="jobType"
                  value={'PART_TIME'}
                  {...register('jobType')}
                />
                <span className="mx-2">Part time</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="jobType"
                  value={'FREELANCE'}
                  {...register('jobType')}
                />
                <span className="mx-2">Freelance</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="jobType"
                  value={'INTERNSHIP'}
                  {...register('jobType')}
                />
                <span className="mx-2">Internship</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="jobType"
                  value={'CONTRACT'}
                  {...register('jobType')}
                />
                <span className="mx-2">Contract</span>
              </div>
            </div>
          </div>

          <div className="">
            <h3>Work Mode</h3>
            <div className=" flex gap-8">
              <div>
                <input
                  type="radio"
                  name="WorkMode"
                  value={'HYBRID'}
                  {...register('WorkMode')}
                />
                <span className="mx-2">Hybrid</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="WorkMode"
                  value={'REMOTE'}
                  {...register('WorkMode')}
                />
                <span className="mx-2">Remote</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="WorkMode"
                  value={'ONSITE'}
                  {...register('WorkMode')}
                />
                <span className="mx-2">On-Site</span>
              </div>
            </div>
          </div>

          <div className="input-container">
            <h3>Qualification</h3>
            <input type="text" {...register('qualification')} />
          </div>

          <div className="input-container">
            <h3>Job Description</h3>
            <textarea
              name="jobDetails"
              id=""
              rows="7"
              {...register('jobDetails')}
            />
          </div>

          <div className="input-container">
            <h3>Job Industry</h3>
            <input
              type="text"
              placeholder="Company Name"
              {...register('jobIndustry', {
                required: 'Job Industry is required',
              })}
            />
          </div>

          <div className="input-container">
            <h3>Gender Preference</h3>

            <input type="text" {...register('genderPreference')} />
          </div>

          <div className="input-container">
            <h3>Responsibilities</h3>
            <textarea
              name="jobDetails"
              id=""
              rows="7"
              {...register('responsibilities')}
            />
          </div>

          <div className="input-container">
            <h3>safety Tips</h3>
            <textarea
              name="safetyTips"
              id=""
              rows="7"
              {...register('safetyTips')}
            />
          </div>

          <div className="">
            <h3>Feature</h3>
            <div className=" flex gap-8">
              <div>
                <input
                  type="radio"
                  name="Featured"
                  value={true}
                  onClick={() => {
                    setFeatured(true)
                  }}
                />
                <span className="mx-2">Featured</span>
              </div>

              <div>
                <input
                  type="radio"
                  name="Featured"
                  value={false}
                  onClick={() => {
                    setFeatured(false)
                  }}
                />
                <span className="mx-2">Not Feautured</span>
              </div>
            </div>
          </div>

          <div className="input-container">
            <h3>Link</h3>
            <input
              type="text"
              {...register('jobUrl', { required: 'Job link is required' })}
              placeholder="Job title"
            />
          </div>

          {/* <div className="input-container">
            <h3>Company</h3>
            <input type="text" placeholder="Company Name" />
          </div>

          <div className="input-container">
            <h3>Required Experience</h3>
            <input type="text" />
          </div> */}

          <button className="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CreateJobForm
