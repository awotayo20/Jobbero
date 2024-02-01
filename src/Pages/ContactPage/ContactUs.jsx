import HijabLady from './HijabLady'

const ContactUs = () => {
  return (
    <>
      <div className="lg:grid grid-cols-2 items-center">
        <div className="w-[90%] mx-auto">
          <h2 className="text-[#001F3F] font-semibold text-3xl">Contact Us</h2>
          <div>
            <ContactUsForm />
          </div>
        </div>
        <div className="hidden lg:block">
          <HijabLady />
        </div>
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
            <label>Email</label>
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
