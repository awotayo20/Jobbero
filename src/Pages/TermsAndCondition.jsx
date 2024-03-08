import Footer from '../Components/Footer'
import { UsSvgPng } from './AboutUs'
import { Subscribe } from './Subscribe'
import JobberoLogo from '../assets/jobberoLogo.png'
import { ListTemplate } from './Privacy'
const TermsAndCondition = () => {
  return (
    <>
      <div className="my-11 w-[90%] max-w-[1024px] mx-auto">
        <UsSvgPng JobberoLogo={JobberoLogo} title={'PRIVACY POLICY'} />
        <div className="flex flex-col gap-6 my-9">
          <ListTemplate
            title={'1. Acceptance of Agreement:'}
            subtitle={
              'By using Jobbero, users acknowledge and agree to the terms and conditions outlined in this agreement. If users do not agree, they should refrain from using the platform.'
            }
          />
          <ListTemplate
            title={'2. User Registration:'}
            subtitle={
              'Users must provide accurate and complete information during the registration process. Misrepresentation may result in the termination of the user account.'
            }
          />
          <ListTemplate
            title={'3. Intellectual Property:'}
            subtitle={
              'All content and intellectual property on Jobbero are owned by or licensed to us. Users may not reproduce, distribute, or use any content without explicitpermission.'
            }
          />
          <ListTemplate
            title={'4. Dispute Resolution:'}
            subtitle={
              'Any disputes arising from this agreement will be resolved through arbitration in accordance with the rules of the National Labour Law and judgment upon the award rendered may be entered in any court having jurisdiction thereof.'
            }
          />
          <ListTemplate
            title={'5. Indemnification:'}
            subtitle={
              'Users agree to indemnify and hold Jobbero harmless from any claims, losses, or damages arising from their use of the platform.'
            }
          />
          <ListTemplate
            title={'6. Amendments:'}
            subtitle={
              'Jobbero reserves the right to modify or update these terms at any time. Users will be notified of significant changes, and continued use constitutes acceptance of the revised terms.'
            }
          />
          <ListTemplate
            title={'7. Confidentiality:'}
            subtitle={
              'Users agree to keep confidential any non-public information obtained through the platform, including job listings and applicant information.'
            }
          />
          <ListTemplate
            title={'8. Governing Law:'}
            subtitle={
              'This agreement is governed by and construed in accordance with the laws of Nigeria. Users submit to the exclusive jurisdiction of the courts of Nigeria.'
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

export default TermsAndCondition
