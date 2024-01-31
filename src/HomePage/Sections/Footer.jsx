import FooterLogo from '../../assets/jobberoLogo2.png'
import FacebookIcon from '../../assets/Facebook.png'
import TwitterIcon from '../../assets/Twitter.png'
import InstagramIcon from '../../assets/Instagram.png'
import LinkedInIcon from '../../assets/LinkedInIcon.png'
import { DownloadApp } from './HappyJobbero'

const Footer = () => {
  return (
    <div className="bg-[#001F3F]">
      <div>
        <img
          src={FooterLogo}
          alt="Footer Logo"
          className="hover:cursor-pointer"
        />
        <div className="flex justify-between mx-9">
          <div>
            <p className="text-white font-Poppins font-normal text-2xl max-w-[478px]">
              A centralized platform where user can seamlessly search for
              relevant job opportunities and apply with ease.
            </p>
            <div className="flex gap-7 mt-[36px]">
              <div className="bg-white rounded-full flex items-center justify-center px-[10px]">
                <img src={TwitterIcon} alt="facebook" />
              </div>
              <div className="bg-white rounded-full flex items-center justify-center px-[10px]">
                <img src={InstagramIcon} alt="facebook" />
              </div>
              <img src={LinkedInIcon} alt="facebook" />
              <img src={FacebookIcon} alt="facebook" />
            </div>
          </div>
          <div>
            <ul className="px-9">
              <li className="text-white font-Poppins font-normal text-2xl py-3">
                <a href="#">About Us</a>
              </li>
              <li className="text-white font-Poppins font-normal text-2xl py-3">
                <a href="#">Privacy policy</a>
              </li>
              <li className="text-white font-Poppins font-normal text-2xl py-3">
                <a href="#">Terms</a>
              </li>
              <li className="text-white font-Poppins font-normal text-2xl py-3">
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-9 pb-9">
          <DownloadApp />
        </div>
      </div>
    </div>
  )
}

export default Footer
