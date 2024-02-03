import Header from '../Components/Header/Navbar'
import FooterDesign from '../assets/FooterDesigns.png'
import { HappyJobbero } from '../Components/Home_Sections/HappyJobbero'
import Partnership from '../Components/Home_Sections/Partnership'
import FeatureJobs from '../Components/Home_Sections/FeatureJobs'
import Journey from '../Components/Home_Sections/Journey'
import WhyUs from '../Components/Home_Sections/WhyUs'
import Records from '../Components/Home_Sections/Records'
import PostJob from '../Components/Home_Sections/PostJob'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <>
      <div className="bg-[#001F3F] w-full">
        <Header color="" />
        <div className="w-full pt-[8em] lg:p-0 mx-auto">
          <div className=" mx-4 px-9 bg-[#001F3F] rounded-2xl h-screen">
            <HappyJobbero />
          </div>

          <Partnership />
          <FeatureJobs />
          <Journey />
          <WhyUs />
          <Records />
          <PostJob />
          <div>
            <img src={FooterDesign} alt="Footer Design" />
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home
