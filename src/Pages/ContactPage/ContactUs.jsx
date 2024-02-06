import HijabLady from './HijabLady'
import Navbar from '../../Components/Header/Navbar'
import Footer from '../../Components/Footer'

const ContactUs = () => {
  return (
    <>
      <div className="h-[90px] bg-[#001F3F]">
        <Navbar />
      </div>
      <div className="lg:grid grid-cols-2 mt-12 items-center">
        <div className="w-[90%] max-w-[450px] mx-auto">
          <h2 className="text-[#001F3F] font-semibold text-2xl">Contact Us</h2>
          <div className="my-6">
            <ContactUsForm />
          </div>
        </div>
        <div className="hidden lg:block">
          <HijabLady />
        </div>
      </div>
      <div className="w-full mt-80 bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default ContactUs

export const ContactUsForm = () => {
  return (
    <>
      <form action="">
        <div className="flex flex-col gap-4">
          <div className="input-container">
            <label>Name</label>
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-container">
            <label className="">Email</label>
            <input type="email" placeholder="example@gmail.com" required />
          </div>
          <div className="input-container">
            <label>Subject</label>
            <input
              type="text"
              placeholder="I want to know more about applying for job"
              required
            />
          </div>
          <div className="input-container">
            <label>Message</label>
            <textarea
              name="message"
              rows="6"
              className="w-full"
              placeholder="Write your message"
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="mt-[76px] mb-9 bg-[#001F3F] px-56 py-6 text-2xl font-semibold text-white rounded-[20px]"
          >
            Send
          </button>
        </div>
      </form>
    </>
  )
}
