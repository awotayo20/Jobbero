import JobberoLogo from '../assets/jobberoLogo.png'

const AboutUs = () => {
  return (
    <div className=" my-24">
      <div className="aboutUsSvg rounded-full flex items-center justify-center relative mx-auto">
        <div className="aboutusLogo">
          <AboutUsSvg />
          <div className="absolute top-1/2 -translate-y-1/2">
            <img src={JobberoLogo} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-4xl text-center my-3">OUR STORY</h1>
        <p className="max-w-[1024px] mx-auto font-normal text-2xl">
          Welcome to Jobbero, where the pursuit of meaningful careers is more
          than just a mission—it's our heartbeat. Born from the belief that
          every professional journey is a personal odyssey, we strive to be more
          than a job search platform; we aim to be your ally in navigating the
          winding paths of your career.
        </p>
      </div>

      <div className="AboutUsIllustrator w-full max-w-[900px] h-[590px] mx-auto rounded-[50px] my-16 relative">
        <div className="bg-[#0074CC] max-w-[570px] p-4 pr-7 text-white absolute bottom-0 right-0 rounded-ee-[50px]">
          <h3 className="text-3xl font-semibold">
            Your Career, Our Commitment:{' '}
          </h3>
          <p className="text-xl font-normal">
            Unleash Your Potential with Guaranteed Interviews!
          </p>
        </div>
      </div>

      <div className="flex max-w-[900px] justify-between mx-auto">
        <div className="flex max-w-[420px] items-center border-[#0074CC] border-[0.6px] rounded-[19px]">
          <div className="bg-[#0074CC] px-5 py-9 rounded-s-[20px]">
            <YJourneySvg />
          </div>
          <div className="text-xl px-3  ">
            <h6 className="font-semibold">Empowering Your Journey: </h6>
            <p className="font-normal">
              Your Aspirations Are at the Heart of Our Platform. Your Success Is
              Our Success.
            </p>
          </div>
        </div>

        <div className="flex max-w-[420px] items-center border-[#0074CC] border-[0.6px] rounded-[20px]">
          <div className="bg-[#0074CC] px-5 py-9 rounded-s-[19px]">
            <YSafetySvg />
          </div>
          <div className="text-xl px-3  ">
            <h6 className="font-semibold">Verified for Your Safety: </h6>
            <p className="font-normal">
              Our Promise to Protect You from Job Scams by Validating Every
              Employer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

export const AboutUsSvg = () => {
  return (
    <div>
      <svg
        width="189"
        height="190"
        viewBox="0 0 189 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="94.4992" cy="94.7438" r="94.3937" fill="#001F3F" />
      </svg>
    </div>
  )
}

export const YJourneySvg = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="61"
        height="67"
        viewBox="0 0 61 67"
        fill="none"
      >
        <path
          d="M33.6139 6.03956C45.294 6.03956 54.6862 15.492 54.6862 27.1118C54.6862 35.5407 49.7794 42.7354 42.6449 46.1069V60.2253H21.5727V51.1944H18.5624C15.2209 51.1944 12.5417 48.5152 12.5417 45.1737V36.1428H8.02624C6.7619 36.1428 6.03942 34.6376 6.7619 33.7044L12.5417 26.0883C12.8069 20.6796 15.1433 15.5804 19.0665 11.8478C22.9897 8.11518 28.1988 6.03538 33.6139 6.03956ZM33.6139 0.0189209C19.7966 0.0189209 8.35737 10.3142 6.70169 23.8004L2.0056 30.1221H1.91529L1.85508 30.2124C0.199406 32.5003 -0.0113162 35.5106 1.28312 38.0092C2.36684 40.0863 4.29344 41.5312 6.52108 41.9828V45.1737C6.52108 50.7428 10.3743 55.469 15.552 56.8237V66.2459H48.6655V49.6892C56.1913 44.662 60.7068 36.3234 60.7068 27.1118C60.7068 12.1505 48.5451 0.0189209 33.6139 0.0189209ZM45.6552 23.5897C45.6552 28.2256 41.5612 31.9283 35.3599 37.5576L33.6139 39.1531L31.868 37.5576C25.6667 31.9283 21.5727 28.2256 21.5727 23.5897C21.5727 19.9773 24.4626 16.9971 28.075 16.967H28.1954C30.2725 16.967 32.2593 17.9002 33.6139 19.4656C34.9686 17.9002 36.9554 16.967 39.0325 16.967C42.6449 16.9369 45.6552 19.8569 45.6552 23.4693V23.5897Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

export const YSafetySvg = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="67"
        viewBox="0 0 72 67"
        fill="none"
      >
        <path
          d="M71.332 6.17659C50.0952 -1.37301 27.0118 -1.99657 5.39841 4.3955C4.5393 4.60109 3.73042 4.97768 3.02007 5.5028C2.30972 6.02792 1.71247 6.69079 1.26398 7.45184C0.815485 8.21289 0.524945 9.05651 0.409705 9.93233C0.294465 10.8081 0.35689 11.6982 0.59325 12.5494C1.7762 17.2967 3.50169 22.7512 5.57407 27.6964C5.60965 27.812 5.66524 27.7564 5.66524 27.6408C5.36506 25.3216 7.14837 22.3932 10.6461 21.3281C27.4551 15.9785 45.5449 16.218 62.2065 22.0107C62.821 22.2209 63.4714 22.3059 64.1194 22.2608C64.7673 22.2156 65.3997 22.0411 65.9791 21.7477C66.5585 21.4542 67.0734 21.0477 67.4932 20.5521C67.913 20.0565 68.2294 19.4819 68.4236 18.8621C70.496 12.1914 71.332 7.66194 71.5388 6.52791C71.5744 6.31667 71.3876 6.2344 71.332 6.17659ZM20.0941 20.8522C17.5481 21.3837 14.0281 22.2197 11.3865 23.0958C6.10551 24.9169 6.3501 31.3431 9.16293 33.3932C9.36972 32.2014 10.6461 30.5804 12.0692 30.0334C17.3413 27.961 23.0025 26.7225 28.726 26.2111C25.8176 25.0303 22.9803 23.3382 20.1319 20.85L20.0941 20.8522ZM62.1353 33.7179C54.5482 30.153 46.3235 28.1453 37.9472 27.8134C29.5709 27.4815 21.2131 28.8322 13.3677 31.7856C10.8529 32.735 9.27856 35.7947 10.8529 38.6987C13.6031 43.6709 16.7242 48.4288 20.1897 52.9318C19.6916 51.2063 20.5721 48.011 23.952 46.966C33.2999 44.0931 43.1081 45.3116 49.6277 47.951C51.4688 48.6915 54.0748 48.2423 55.5357 46.0543C58.0271 42.2165 60.293 38.237 62.3221 34.1359C62.4132 33.9513 62.3221 33.8135 62.1353 33.7179ZM46.9883 56.7542C44.2537 55.3733 41.7529 53.5718 39.5771 51.4153C38.5698 50.4081 37.0867 48.9605 35.5235 47.235C31.9546 47.235 28.4903 47.593 24.7858 48.776C21.3459 49.8522 21.0235 53.8257 22.5289 55.8981C25.0749 59.0711 26.8604 60.7833 29.7088 63.7273C31.2183 65.2079 33.2455 66.0419 35.3599 66.0523C37.4743 66.0627 39.5095 65.2486 41.0335 63.7829C43.2571 61.5593 44.6246 60.0762 47.1372 57.2278C47.2862 57.0766 47.2306 56.812 46.9883 56.7542Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
