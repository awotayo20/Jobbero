import Footer from '../Components/Footer'
import { UsSvgPng } from './AboutUs'
import { Subscribe } from './Subscribe'
import JobberoLogo from '../assets/jobberoLogo.png'

const Privacy = () => {
  return (
    <>
      <div className="my-11 w-[90%] max-w-[1024px] mx-auto">
        <UsSvgPng JobberoLogo={JobberoLogo} title={'PRIVACY POLICY'} />
        <div className="flex flex-col gap-6 my-9">
          <ListTemplate
            title={'1. Introduction'}
            subtitle={
              'Welcome to Jobbero, where your privacy is our priority. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your personal information. By using our services, you consent to the terms laid in this policy.'
            }
          />
          <ListTemplate
            title={'2. Information We Collect:'}
            subtitle={
              'We collect information you provide, including your name, contact details, resume, and job preferences. Additionally, our platform may automatically collect device information and usage data, enhancing your experience and improving our services.'
            }
          />
          <ListTemplate
            title={'3. How We Use Your Information:'}
            subtitle={
              "Your personal information is used to facilitate your job search, customize your experience, and communicate relevant job opportunities. We may also use aggregated data for analytics and to enhance our platform's functionality"
            }
          />
          <ListTemplate
            title={'4. Information Sharing:'}
            subtitle={
              'We may share your information with employers and recruiters as necessary for job placement. We prioritize the confidentiality of your data and do not disclose personal information for marketing purposes without your explicit consent.'
            }
          />
          <ListTemplate
            title={'5. Security Measures:'}
            subtitle={
              'We implement robust security measures, including encryption and secure protocols, to protect your information from unauthorized access, disclosure, alteration, and destruction.'
            }
          />
          <ListTemplate
            title={'6. Your Control:'}
            subtitle={
              'You have control over your personal information. You can review, update, or delete your account information and manage communication preferences. We respect your choices and aim to provide you with a transparent and user-friendly experience.'
            }
          />
          <ListTemplate
            title={'7. Policy Updates:'}
            subtitle={
              'This Privacy Policy may be updated periodically. We will notify you of significant changes, and your continued use of our platform after such updates indicates your acceptance of the revised policy.'
            }
          />
        </div>
        <Subscribe />
      </div>
      <div className="w-full bg-[#001F3F]">
        <Footer />
      </div>
    </>
  )
}

export default Privacy

export const ListTemplate = ({ title, subtitle }) => {
  return (
    <div className="font-Poppins">
      <h3 className="text-lg font-medium">{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}
