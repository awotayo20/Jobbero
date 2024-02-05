import { useForm } from 'react-hook-form'
import Select from 'react-select'
import EmploymentPicture from '../../assets/Employerpicture.png'
import ReCAPTCHA from 'react-google-recaptcha'

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm({})
  const handleRegistration = (data) => console.log(data)

  const selectCustomStyles = {
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#001F3F80',
      padding: '12px 8px',
      boxShadow: state.isFocused ? null : null,
      fontSize: '16px',
    }),

    valueContainer: (provided, state) => ({
      ...provided,
    }),

    input: (provided, state) => ({
      ...provided,
    }),
    indicatorSeparator: (state) => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
    }),
  }

  const reCAPTCHAChange = (value) => {
    console.log('Captcha value:', value)
  }

  const location = [
    { value: 'Nigeria', label: 'Nigeria' },
    { value: 'Ghana', label: 'Ghana' },
    { value: 'South Africa', label: 'South Africa' },
  ]
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div className=" lg:grid lg:grid-cols-7 items-center">
        <div className=" lg:grid col-span-4 gap-5 w-full max-w-[650px] mx-auto">
          <div className="input-container">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              {...register('name')}
              placeholder="Name"
              required
            />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register('email')}
              placeholder="Name"
              required
            />
          </div>
          <div className="input-container">
            <label>Location</label>
            <Select
              options={location}
              defaultValue={''}
              name="location"
              {...register('location')}
              styles={selectCustomStyles}
            />
          </div>
          <div className="input-container">
            <label>Mobile Number</label>
            <input
              type="number"
              name="Mobile Number"
              {...register('Mobile Number')}
            />
          </div>

          <div className="input-container">
            <label>Date of Birth</label>
            <input type="date" name="Date of Birth" />
          </div>

          <div className="input-container">
            <label>Gender</label>
            <Select
              options={'gender'}
              name="Gender"
              className="w-full"
              styles={selectCustomStyles}
            />
          </div>

          <div className="input-container">
            <label>Highest Qualification</label>
            <Select options={'Education'} styles={selectCustomStyles} />
          </div>

          <div className="input-container">
            <label>Job Industry</label>
            <Select options={''} styles={selectCustomStyles} />
          </div>

          <div className="input-container">
            <label>Work Experience</label>
            <Select options={''} styles={selectCustomStyles} />
          </div>

          <div className="input-container">
            <label>Availability</label>
            <Select options={''} styles={selectCustomStyles} />
          </div>

          <div className="input-container">
            <label className="text-2xl text-[#001F3F] font-Poppins font-normal">
              Upload CV
            </label>
            <input
              type="file"
              name="CV"
              className="custom-file-input-cv block"
            />
          </div>

          <p className="text-[#001F3F] font-medium text-[18px] font-Poppins max-w-[450px] mx-auto pt-14 pb-5">
            Would you like your CV to meet international standard? Pricing
            starts from ₦8,000
          </p>

          <div className="my-4">
            <input type="checkbox" name="" id="" className="m-2" />
            <label className="font-medium text-[#001F3F]  text-[18px] font-Poppins">
              Yes I’m in ( A Rep will contact you)
            </label>
          </div>
        </div>
        <div className="hidden lg:block col-span-3">
          <div className="relative">
            <SignUpPicture />
          </div>
          <div className="flex justify-center flex-col items-center">
            <div className=" mt-10">
              <span className="text-center">Add Profile Picture</span>
            </div>
            <input
              type="file"
              name="Profile Picture"
              className="bg-white custom-file-input-profile"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-[68%] mx-auto mt-14">
            <textarea
              name=""
              id=""
              cols="35"
              rows="6"
              className="boreder-[#001F3F80] border-[2px] rounded-xl outline-none p-4"
            ></textarea>
            <div className="flex justify-between w-full">
              <p className="text-[#000000d2]">Profile Headline</p>
              <p className="text-[#001F3F80]">200 words max</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" scale-110 mt-12 mb-20">
          <ReCAPTCHA
            sitekey="Your client site key"
            onChange={reCAPTCHAChange}
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-[90%] max-w-96 py-6 text-white bg-[#001F3F] flex items-center justify-center rounded-[15px] mx-auto text-xl font-semibold font-Poppins"
      >
        Sign Up
      </button>
    </form>
  )
}

function SignUpPicture({}) {
  return (
    <div>
      <div className="relative z-30">
        <img src={EmploymentPicture} alt="" />
      </div>
      <BlueCircle />
      <YellowDotted />
      <YellowCap />
      <CurvedRectangle />

      <BarChart />
    </div>
  )
}

function BlueCircle({}) {
  return (
    <div className="absolute -top-16 right-16 z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="187"
        height="187"
        viewBox="0 0 187 187"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M187 93.5C187 94.4383 186.986 95.3733 186.959 96.305H0.0412702C0.0138209 95.3733 0 94.4383 0 93.5C0 92.9795 0.00425235 92.4601 0.0127242 91.9417H186.987C186.996 92.4601 187 92.9795 187 93.5ZM0.559222 103.785C0.423596 102.545 0.312198 101.299 0.225513 100.045H186.774C186.688 101.299 186.576 102.545 186.441 103.785H0.559222ZM1.04486 107.525C1.23365 108.78 1.44737 110.027 1.68552 111.265H185.314C185.553 110.027 185.766 108.78 185.955 107.525H1.04486ZM3.44782 118.745C3.1019 117.508 2.78076 116.262 2.48498 115.005H184.515C184.219 116.262 183.898 117.508 183.552 118.745H3.44782ZM4.57956 122.485C4.98955 123.744 5.42551 124.99 5.88683 126.225H181.113C181.575 124.99 182.01 123.744 182.42 122.485H4.57956ZM9.06136 133.705C8.47369 132.473 7.91219 131.226 7.37757 129.965H179.622C179.088 131.226 178.526 132.473 177.939 133.705H9.06136ZM10.9497 137.445C11.6242 138.709 12.3268 139.956 13.0568 141.185H173.943C174.673 139.956 175.376 138.709 176.05 137.445H10.9497ZM17.9999 148.665C17.1037 147.441 16.2367 146.194 15.3997 144.925H171.6C170.763 146.194 169.896 147.441 169 148.665H17.9999ZM20.8844 152.405C21.9199 153.68 22.9882 154.927 24.0882 156.145H162.912C164.012 154.927 165.08 153.68 166.116 152.405H20.8844ZM31.6538 163.625C30.2854 162.417 28.9525 161.17 27.6571 159.885H159.343C158.047 161.17 156.715 162.417 155.346 163.625H31.6538ZM36.1674 167.365C37.8443 168.668 39.5667 169.916 41.3319 171.105H145.668C147.433 169.916 149.156 168.668 150.833 167.365H36.1674ZM54.6792 178.585C52.1807 177.443 49.7413 176.195 47.3667 174.845H139.633C137.259 176.195 134.819 177.443 132.321 178.585H54.6792ZM64.2236 182.325C73.433 185.359 83.2748 187 93.5 187C103.725 187 113.567 185.359 122.776 182.325H64.2236ZM0.147599 88.2017C0.217617 86.9482 0.312324 85.7014 0.431241 84.4617H186.569C186.688 85.7014 186.782 86.9482 186.852 88.2017H0.147599ZM1.45453 76.9817C1.23378 78.2201 1.03741 79.4669 0.865929 80.7217H186.134C185.963 79.4669 185.766 78.2201 185.545 76.9817H1.45453ZM2.20059 73.2417C2.47811 71.9853 2.78091 70.7384 3.10841 69.5016H183.892C184.219 70.7384 184.522 71.9853 184.799 73.2417H2.20059ZM5.43112 62.0217C4.98969 63.2565 4.57351 64.5034 4.18317 65.7617H182.817C182.426 64.5034 182.01 63.2565 181.569 62.0217H5.43112ZM6.85973 58.2817C7.37268 57.021 7.91233 55.7741 8.478 54.5417H178.522C179.088 55.7741 179.627 57.021 180.14 58.2817H6.85973ZM12.3292 47.0617C11.6243 48.291 10.9466 49.538 10.2968 50.8017H176.703C176.053 49.538 175.376 48.291 174.671 47.0617H12.3292ZM172.409 43.3217H14.5913C15.3991 42.0539 16.2367 40.8069 17.103 39.5816H169.897C170.763 40.8069 171.601 42.0539 172.409 43.3217ZM22.9823 32.1017C21.9198 33.3209 20.8884 34.568 19.8894 35.8417H167.111C166.112 34.568 165.08 33.3209 164.018 32.1017H22.9823ZM160.577 28.3617H26.4235C27.6695 27.0788 28.952 25.8316 30.2693 24.6217H156.731C158.048 25.8316 159.33 27.0788 160.577 28.3617ZM152.402 20.8817H34.5984C36.1984 19.5823 37.8421 18.3348 39.5271 17.1417H147.473C149.158 18.3348 150.802 19.5823 152.402 20.8817ZM141.761 13.4017C139.546 12.064 137.27 10.8157 134.94 9.66167H52.06C49.7298 10.8157 47.4545 12.064 45.2392 13.4017H141.761ZM93.5 0C105.048 0 116.107 2.0935 126.318 5.92167H60.6819C70.8931 2.0935 81.9521 0 93.5 0Z"
          fill="#0074CC"
        />
      </svg>
    </div>
  )
}

function YellowDotted({}) {
  return (
    <div className="absolute top-0 left-10 z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="244"
        height="168"
        viewBox="0 0 244 168"
        fill="none"
      >
        <circle cx="3.47578" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="3.47578" r="3.47578" fill="#FFBF00" />
        <circle cx="3.47578" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="26.4274" r="3.47578" fill="#FFBF00" />
        <circle cx="3.47578" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="49.3791" r="3.47578" fill="#FFBF00" />
        <circle cx="3.47578" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="72.3303" r="3.47578" fill="#FFBF00" />
        <circle cx="3.47578" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="95.2819" r="3.47578" fill="#FFBF00" />
        <circle cx="3.47578" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="118.234" r="3.47578" fill="#FFBF00" />
        <circle cx="3.47578" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="141.185" r="3.47578" fill="#FFBF00" />
        <circle cx="3.47578" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="25.0256" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="46.5754" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="68.1252" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="89.675" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="111.225" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="132.775" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="154.324" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="175.874" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="197.425" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="218.974" cy="164.137" r="3.47578" fill="#FFBF00" />
        <circle cx="240.525" cy="164.137" r="3.47578" fill="#FFBF00" />
      </svg>
    </div>
  )
}

function YellowCap({}) {
  return (
    <div className="absolute top-1/2 left-16 z-40">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="148"
        height="77"
        viewBox="0 0 148 77"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M147.942 76.96C147.98 75.9781 148 74.9913 148 74C148 33.1309 114.869 0 74 0C33.1309 0 0 33.1309 0 74C0 74.9913 0.0194933 75.9781 0.0581174 76.96H147.942Z"
          fill="#FFBF00"
        />
      </svg>
    </div>
  )
}

function CurvedRectangle({}) {
  return (
    <div className="absolute top-5 left-16">
      <svg
        width="470"
        height="470"
        viewBox="0 0 470 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 180.95C0 81.0141 81.0141 0 180.95 0H470V235C470 364.787 364.787 470 235 470H0V180.95Z"
          fill="#001F3F"
        />
      </svg>
    </div>
  )
}

function BarChart({}) {
  return (
    <div className="absolute bottom-0 z-50 right-10">
      <svg
        width="257"
        height="257"
        viewBox="0 0 287 287"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="287" height="287" rx="17.22" fill="white" />
        <line
          x1="20.6638"
          y1="61.2413"
          x2="266.336"
          y2="61.2413"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="0.574"
        />
        <line
          x1="20.6636"
          y1="112.901"
          x2="266.336"
          y2="112.901"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="0.574"
        />
        <line
          x1="20.6636"
          y1="164.561"
          x2="266.336"
          y2="164.561"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="0.574"
        />
        <line
          x1="20.6636"
          y1="216.221"
          x2="266.336"
          y2="216.221"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="0.574"
        />
        <rect
          x="240.506"
          y="63.1401"
          width="13.202"
          height="203.196"
          fill="#001F3F"
        />
        <rect
          x="226.156"
          y="151.536"
          width="13.202"
          height="114.8"
          fill="#0074CC"
        />
        <rect
          x="177.366"
          y="48.2158"
          width="13.202"
          height="218.12"
          fill="#001F3F"
        />
        <rect
          x="163.017"
          y="126.28"
          width="13.202"
          height="140.056"
          fill="#0074CC"
        />
        <rect
          x="114.227"
          y="130.298"
          width="13.202"
          height="136.038"
          fill="#001F3F"
        />
        <rect
          x="99.877"
          y="186.55"
          width="13.202"
          height="79.786"
          fill="#0074CC"
        />
        <rect
          x="51.0859"
          y="93.562"
          width="13.202"
          height="172.774"
          fill="#001F3F"
        />
        <rect
          x="36.7358"
          y="151.536"
          width="13.202"
          height="114.8"
          fill="#0074CC"
        />
      </svg>
    </div>
  )
}

function ProfilePicture({}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="188"
        viewBox="0 0 217 228"
        fill="none"
      >
        <path
          d="M188.998 96.6326V211.139C188.998 217.796 183.849 223.192 177.498 223.192H16.4999C10.1487 223.192 5 217.796 5 211.139V42.3929C5 35.7358 10.1487 30.3396 16.4999 30.3396H122.089"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="8.27996"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M39.5024 157.084L74.002 108.686L91.2518 126.766L111.377 93.6191L154.501 157.084H39.5024Z"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="8.27996"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M166.001 30.3396H212.001"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="8.27996"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M188.967 5V53.213"
          stroke="#001F3F"
          stroke-opacity="0.5"
          stroke-width="8.27996"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  )
}
