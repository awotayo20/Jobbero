import {
  InterviewedIcon,
  LatestJob,
  NotificationIcon,
  YellowBall,
  YellowNet,
} from '../../assets/ExtermalSvgs'
import workingLap from '../../assets/workingLap.png'

const Journey = () => {
  return (
    <>
      <div className="relative mt-6 mb-20 hidden lg:block">
        <div className="absolute right-14 top-10 z-20 flex flex-col gap-3">
          <YellowNet />
          <YellowNet />
        </div>
        <div className="absolute z-20 bottom-20 right-[450px]">
          <YellowBall />
        </div>
        <div className="flex justify-around items-center relative">
          <div className="relative z-20">
            <div>
              <h2 className="font-bold text-5xl text-white">Jobbero</h2>
              <h4 className="text-white font-normal text-2xl">
                Your Job Search Journey Starts and Ends Here!
              </h4>
            </div>
            <div className="mt-10">
              <p className="text-xl text-white max-w-[500px]">
                Create a free account, complete your profile, and get matched
                with your dream job.
              </p>
              <button className="bg-white px-16 py-1 rounded-full font-semibold text-xl mt-5">
                Sign Up
              </button>
            </div>
          </div>
          <div className="relative z-20 -top-5 -right-10">
            <img src={workingLap} alt="workingLap" className="" />
          </div>
        </div>
        <div></div>
        <div className="rounded-2xl bg-[#001F3F] top-20 bottom-10 right-0 left-0 absolute z-10 max-w-[1385px] mx-9"></div>
        <div className="absolute -bottom-20 z-20 bg-[#0074CC] py-9 px-6 rounded-b-2xl">
          <div className="flex gap-6 items-center justify-around">
            <JourneyFooter
              icon={<LatestJob />}
              title={'Be the first to see latest jobs'}
              subtitle={
                'Sign up for job alerts and be first in line for the latest jobs that match your profile.'
              }
            />
            <JourneyFooter
              icon={<NotificationIcon />}
              title={'Get noticed by employers'}
              subtitle={
                'With a complete profile, your applications and profile are noticed by top employers.'
              }
            />
            <JourneyFooter
              icon={<InterviewedIcon />}
              title={'Guaranteed Interview'}
              subtitle={
                'Our CV review and writing service guarantees you an interview with a high chance of acceptance.'
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Journey

export const JourneyFooter = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div className="text-white font-Poppins text-base">
        <h3 className="font-semibold">{title}</h3>
        <p className="">{subtitle}</p>
      </div>
    </div>
  )
}
