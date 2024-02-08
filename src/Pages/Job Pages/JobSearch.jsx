import Select from 'react-select'
import SearchResult from './SearchResult'

const JobSearch = () => {
  const Industry = [
    { value: '', label: 'Job Industry' },
    { value: 'IT & Telecoms', label: 'IT & Telecoms' },
    { value: 'Education', label: 'Education' },
    { value: 'Construction', label: 'Construction' },
  ]
  const type = [
    { value: '', label: 'Job Type' },
    { value: 'No Experience', label: 'No Experience' },
    { value: 'Internship', label: 'Internship' },
    { value: 'Expert', label: 'Expert' },
  ]
  const work_mode = [
    { value: '', label: 'Work Mode' },
    { value: 'Remote', label: 'Remote' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'onsite', label: 'onsite' },
  ]
  const date = [
    { value: '', label: 'Job Date' },
    { value: 'Past 24 hours', label: 'Past 24 hours' },
    { value: 'Last week', label: 'Last week' },
    { value: 'last month', label: 'last month' },
  ]

  return (
    <>
      <div>
        <div className=" my-7 lg:pl-6  bg-white rounded-lg lg:rounded-[30px] px-4 py-2 lg:flex justify-between w-full max-w-[800px] mx-auto">
          <div className="lg:flex gap-5 w-full">
            <div>
              <label className="text-[#001F3F] font-Poppins font-semibold text-base block mb-[5px]">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter location"
                className="w-full outline-none text-black"
              />
            </div>
            <div className="bg-black border-[1px] w-full lg:w-auto"></div>
            <div>
              <label className="text-[#001F3F] font-Poppins font-semibold text-base block mb-[5px]">
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="e.g Account, Web Design"
                className="w-full outline-none text-black"
              />
            </div>
          </div>
          <button className="bg-[#0074CC] mt-6 md:mt-0 text-lg font-semibold px-6 rounded-[18px] w-full lg:w-[200px] py-4 lg:py-0 text-white">
            Explore Now
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6 max-w-[1024px] mx-auto">
          <div>
            <Select options={Industry} defaultValue={Industry[0]} />
          </div>
          <div>
            <Select options={type} defaultValue={type[0]} />
          </div>
          <div>
            <Select options={work_mode} defaultValue={work_mode[0]} />
          </div>
          <div>
            <Select options={date} defaultValue={date[0]} />
          </div>
        </div>
      </div>
      <div className="my-8">
        <h2 className=" font-Poppins font-semibold text-2xl">Search Result</h2>
        <div>
          <SearchResult />
        </div>
      </div>
    </>
  )
}

export default JobSearch
