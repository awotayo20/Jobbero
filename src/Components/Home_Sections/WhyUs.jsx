import { Periwinkle, Substract, VerifyMarked } from '../../assets/ExtermalSvgs'
import phonePic from '../../assets/Phone.png'
import JobberoSticker from '../../assets/jobberoSticker.png'
const WhyUs = () => {
  return (
    <div>
      <div className="my-56 relative bg-[#001F3F]">
        <div className="absolute">
          <Substract />
          <div className="absolute top-1/2 left-5">
            <Periwinkle fill="#FFBF00" />
          </div>
          <div className="absolute top-2/3 right-64">
            <Periwinkle fill="#FFBF00" />
          </div>
          <img
            src={JobberoSticker}
            alt="JobberoSticker"
            className="absolute top-2/3 left-1/4 z-10"
          />
        </div>
        <div className="relative z-20 top-5">
          <h2 className="font-bold text-4xl font-Poppins text-[#001F3F] text-center">
            WHY CHOOSE US?
          </h2>
          <p className="text-center font-normal text-[#001F3F] text-2xl max-w-[700px] mx-auto">
            Choose us because our centralized hub streamlines applications for
            guaranteed success in landing your ideal job.
          </p>
        </div>
        <div className="grid grid-cols-2 items-center relative top-28 ">
          <div className=" relative left-[50px] ">
            <img src={phonePic} alt="why us" />
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-6 relative right-[50px] ">
            <div className=" col-span-2">
              <WhyUsTab
                icon={<VerifyMarked />}
                text={
                  'We ensure that all job postings on the platform are verified and legitimate.'
                }
              />
            </div>
            <div className=" col-start-2 col-span-2">
              <WhyUsTab
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="74"
                    viewBox="0 0 52 74"
                    fill="none"
                  >
                    <path
                      d="M51.7081 25.6965C51.7097 21.2925 50.5743 16.9626 48.4118 13.126C46.2494 9.28943 43.133 6.0761 39.3645 3.79707C35.596 1.51805 31.3029 0.250523 26.9009 0.117196C22.4989 -0.0161305 18.137 0.989256 14.2374 3.03603C10.3379 5.08281 7.03279 8.10165 4.64209 11.8003C2.25138 15.499 0.856039 19.7522 0.591128 24.1483C0.326216 28.5444 1.20071 32.9344 3.12995 36.8934C5.0592 40.8524 7.97785 44.2463 11.6034 46.7466L0.544804 65.8963L8.7894 66.2361L13.2041 73.2053L25.8706 51.2636C25.9583 51.2636 26.0387 51.2782 26.1264 51.2782C26.2141 51.2782 26.2945 51.2672 26.3823 51.2636L39.0488 73.2053L43.5512 66.386L51.7081 65.8963L40.6495 46.7466C44.0614 44.3974 46.8508 41.2538 48.7773 37.5867C50.7038 33.9195 51.7097 29.8389 51.7081 25.6965ZM7.85384 25.6965C7.85384 22.0826 8.92551 18.5497 10.9333 15.5448C12.9411 12.5399 15.7949 10.1979 19.1338 8.81485C22.4727 7.43185 26.1467 7.06999 29.6912 7.77504C33.2358 8.48009 36.4916 10.2204 39.0471 12.7759C41.6026 15.3313 43.3429 18.5872 44.0479 22.1317C44.753 25.6763 44.3911 29.3503 43.0081 32.6892C41.6251 36.028 39.2831 38.8818 36.2782 40.8896C33.2732 42.8975 29.7404 43.9691 26.1264 43.9691C21.2802 43.9691 16.6325 42.044 13.2058 38.6172C9.77899 35.1904 7.85384 30.5427 7.85384 25.6965Z"
                      fill="white"
                    />
                    <path
                      d="M26.1266 36.6606C32.1817 36.6606 37.0902 31.7521 37.0902 25.6971C37.0902 19.6421 32.1817 14.7335 26.1266 14.7335C20.0716 14.7335 15.1631 19.6421 15.1631 25.6971C15.1631 31.7521 20.0716 36.6606 26.1266 36.6606Z"
                      fill="white"
                    />
                  </svg>
                }
                text={
                  'Our emphasis is on a user-friendly interface for both the website and mobile app'
                }
              />
            </div>
            <div className=" col-start-1 col-span-2">
              <WhyUsTab
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                  >
                    <path
                      d="M7.967 43.9597C5.95701 43.9597 4.23695 43.2446 2.80682 41.8145C1.37668 40.3844 0.660395 38.6631 0.657959 36.6507C0.657959 34.6407 1.37425 32.9206 2.80682 31.4905C4.23939 30.0604 5.95945 29.3441 7.967 29.3416C9.97698 29.3416 11.6983 30.0579 13.1308 31.4905C14.5634 32.9231 15.2785 34.6431 15.276 36.6507C15.276 38.6607 14.561 40.3819 13.1308 41.8145C11.7007 43.2471 9.97942 43.9621 7.967 43.9597ZM13.997 64.7905L8.88063 59.6741L24.7778 43.777L29.8941 48.8933L13.997 64.7905ZM24.9605 29.3416L9.06336 13.4445L14.1797 8.32814L30.0768 24.2253L24.9605 29.3416ZM37.2032 73.1959C35.1932 73.1959 33.4731 72.4808 32.043 71.0507C30.6128 69.6205 29.8966 67.8992 29.8941 65.8868C29.8941 63.8768 30.6104 62.1568 32.043 60.7266C33.4755 59.2965 35.1956 58.5802 37.2032 58.5778C39.2131 58.5778 40.9344 59.2941 42.367 60.7266C43.7996 62.1592 44.5146 63.8793 44.5122 65.8868C44.5122 67.8968 43.7971 69.6181 42.367 71.0507C40.9369 72.4832 39.2156 73.1983 37.2032 73.1959ZM37.2032 14.7235C35.1932 14.7235 33.4731 14.0085 32.043 12.5783C30.6128 11.1482 29.8966 9.42693 29.8941 7.41451C29.8941 5.40452 30.6104 3.68446 32.043 2.25433C33.4755 0.824191 35.1956 0.107905 37.2032 0.105469C39.2131 0.105469 40.9344 0.821755 42.367 2.25433C43.7996 3.6869 44.5146 5.40696 44.5122 7.41451C44.5122 9.42449 43.7971 11.1458 42.367 12.5783C40.9369 14.0109 39.2156 14.726 37.2032 14.7235ZM49.4458 29.5244L44.3295 24.2253L60.4094 8.32814L65.5257 13.4445L49.4458 29.5244ZM60.4094 64.7905L44.5122 48.8933L49.6285 43.777L65.5257 59.6741L60.4094 64.7905ZM66.4393 43.9597C64.4293 43.9597 62.7093 43.2446 61.2791 41.8145C59.849 40.3844 59.1327 38.6631 59.1303 36.6507C59.1303 34.6407 59.8466 32.9206 61.2791 31.4905C62.7117 30.0604 64.4318 29.3441 66.4393 29.3416C68.4493 29.3416 70.1706 30.0579 71.6031 31.4905C73.0357 32.9231 73.7508 34.6431 73.7484 36.6507C73.7484 38.6607 73.0333 40.3819 71.6031 41.8145C70.173 43.2471 68.4517 43.9621 66.4393 43.9597Z"
                      fill="white"
                    />
                  </svg>
                }
                text={
                  'Our team are responsive to address any concerns or inquiries promptly'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs

export const WhyUsTab = ({ icon, text }) => {
  return (
    <div className="flex">
      <div className="bg-[#001F3F] border-[1.5px] border-[#0074CC] py-4 px-12 flex items-center rounded-l-full">
        {icon}
      </div>
      <div className="bg-[#0074CC] py-3 pl-5 pr-12 rounded-r-full flex items-center">
        <p className="max-w-[170px] text-white font-Poppins font-normal text-sm">
          {text}
        </p>
      </div>
    </div>
  )
}
