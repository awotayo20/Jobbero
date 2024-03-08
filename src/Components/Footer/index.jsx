import FooterLogo from '../../assets/jobberoLogo2.png'
import FacebookIcon from '../../assets/Facebook.png'
import TwitterIcon from '../../assets/Twitter.png'
import InstagramIcon from '../../assets/Instagram.png'
import LinkedInIcon from '../../assets/LinkedInIcon.png'
import { DownloadApp } from '../Home_Sections/HappyJobbero'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-[#001F3F] py-5 mx-9 ">
      <div className="lg:flex justify-between mx-4 items-center">
        <div>
          <img
            src={FooterLogo}
            alt="Footer Logo"
            className="hover:cursor-pointer"
          />
          <div>
            <p className="text-center lg:text-left text-white font-Poppins font-normal text-lg max-w-[478px] mt-4">
              A centralized platform where user can seamlessly search for
              relevant job opportunities and apply with ease.
            </p>
            <div className="flex gap-7 mt-[24px] justify-center lg:justify-start">
              <a target="_blank" href={'https://twitter.com/jobberojobs'}>
                <img
                  src={TwitterIcon}
                  alt="facebook"
                  className=" hover:cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                href={
                  'https://www.instagram.com/jobberojobs?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'
                }
              >
                <img
                  src={InstagramIcon}
                  alt="facebook"
                  className=" hover:cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                href={'https://www.linkedin.com/company/jobberohq'}
              >
                <img
                  src={LinkedInIcon}
                  alt="facebook"
                  className=" hover:cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                href={'https://web.facebook.com/profile.php?id=100066241373517'}
              >
                <img
                  src={FacebookIcon}
                  alt="facebook"
                  className=" hover:cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <ul className="text-xl text-center lg:text-left">
            <li className="text-white font-Poppins font-normal py-3">
              <Link to={'/about'}>About Us</Link>
            </li>
            <li className="text-white font-Poppins font-normal py-3">
              <Link to={'/privacy-policy'}>Privacy policy</Link>
            </li>
            <li className="text-white font-Poppins font-normal py-3">
              <Link to={'/terms-condition'}>Terms </Link>
            </li>
            <li className="text-white font-Poppins font-normal py-3">
              <Link to="#">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-9">
        <DownloadApp />
      </div>
    </div>
  )
}

export default Footer
