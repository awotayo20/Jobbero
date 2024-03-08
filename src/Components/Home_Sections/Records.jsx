import JobApplied from './../../assets/JobApplied.svg'
import Companies from './../../assets/Companies.svg'
import JobFound from './../../assets/JobFound.svg'
import JobPost from './../../assets/JobPost.svg'
import Groupjobposted from './../../assets/Groupjobposted.svg'

const Records = () => {
  return (
    <div className="bg-[#001F3F] py-9">
      <h3 className="text-white font-Poppins text-xl lg:text-2xl text-center py-14">
        Jobbero helps millions of job seekers and employers find the right fit
        every day.
      </h3>
      <div className="lg:flex justify-around flex-row space-y-6">
        <RecordCard img={Companies} counts={'200+'} subject={'Companies'} />
        <RecordCard img={JobApplied} counts={'900+'} subject={'Jobs Applied'} />
        <RecordCard img={JobFound} counts={'2000+'} subject={'Jobs Found'} />
        <RecordCard img={JobPost} counts={'2500+'} subject={'Job Posted'} />
        <RecordCard
          img={Groupjobposted}
          counts={'2500+'}
          subject={'Jobs Posted'}
        />
      </div>
    </div>
  )
}

export default Records

export const RecordCard = ({ img, counts, subject }) => {
  return (
    <div>
      <div className="bg-white flex flex-col justify-between items-center py-5 px-5 lg:gap-1 mx-4 rounded-full">
        <div className=" w-6">
          <img src={img} alt="" />
        </div>
        <h4 className="text-[#0074CC] font-Poppins font-bold text-lg text-center w-full">
          {counts}
        </h4>
        <p className="text-[#001F3F] font-semibold text-sm text-center">
          {subject}
        </p>
      </div>
    </div>
  )
}
