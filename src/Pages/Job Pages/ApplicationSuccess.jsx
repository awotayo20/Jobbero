import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import AppliedSuccess from '../../assets/Application_Success.svg'

const ApplicationSuccess = () => {
  return (
    <>
      <div className="my-9">
        <div className="flex justify-center max-w-[250px] mx-auto">
          <img src={AppliedSuccess} alt="" />
        </div>
        <div className="my-6">
          <h2 className="font-bold text-2xl text-center">
            Your application was sent to Accenture
          </h2>
          <p className="text-center text-2xl max-w-[550px] mx-auto my-6">
            You can keep track of your application in the “Applied Jobs” tab on
            your dashboard
          </p>
        </div>
        <Link to={'/job-search-result'}>
          <div className="flex justify-center my-9">
            <button className="text-white font-bold text-2xl bg-[#001F3F] w-full max-w-[450px] h-[60px] rounded-2xl">
              Done
            </button>
          </div>
        </Link>
      </div>
      <div className="bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default ApplicationSuccess
