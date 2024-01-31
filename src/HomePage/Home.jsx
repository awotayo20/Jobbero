import { Header } from './Sections/Header'
import FooterDesign from '../assets/FooterDesigns.png'
import { HappyJobbero } from './Sections/HappyJobbero'
import Partnership from './Sections/Partnership'
import FeatureJobs from './Sections/FeatureJobs'
import Journey from './Sections/Journey'
import WhyUs from './Sections/WhyUs'
import Records from './Sections/Records'
import PostJob from './Sections/PostJob'
import Footer from './Sections/Footer'
import AboutUs from './Sections/AboutUs'
const Home = () => {
  return (
    <>
      <div className="bg-[#001F3F] w-full">
        <div className="max-w-[1385px] mx-auto">
          <div className="py-4 mx-4 px-9 bg-[#001F3F] rounded-2xl">
            <HappyJobbero />
          </div>

          <AboutUs />
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
