import jobberoCoworkers from '../../assets/jobberoCoworkers.png'
import GroupCircles from '../../assets/GroupCircles.png'

const PostJob = () => {
  return (
    <div className="relative h-screen overflow-hidden px-9 bg-white">
      <div className="lg:grid grid-cols-2 items-center h-full">
        <div className="flex flex-col text-center lg:text-left pt-4 lg:pt-0">
          <h3 className="w-[90%] mx-auto font-Poppins font-semibold text-4xl text-[#001F3F] my-4">
            Searching for right talent?
          </h3>
          <p className="font-normal text-[28px] font-Poppins pt-2">
            We have over 1 million job-seekers across all levels, right fit for
            your organisation!
          </p>
          <button className="bg-[#0074CC] py-1 px-20 rounded-full my-5 text-white text-xl font-semibold lg:w-72">
            Post a Job
          </button>
        </div>
        <div>
          <div className="relative -right-[35%]">
            <img src={GroupCircles} alt="GroupCircles" />
          </div>
          <div className="absolute -bottom-11">
            <img src={GroupCircles} alt="GroupCircles" />
          </div>
          <div className="relative -right-[35%] -top-[180px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="100" fill="#001F3F" />
            </svg>
          </div>
          <div className="relative -top-[290px]">
            <div className="bg-[#0074CC] rounded-full w-[70%] mx-auto">
              <img src={jobberoCoworkers} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div></div>
      </div>
    </div>
  )
}

export default PostJob
