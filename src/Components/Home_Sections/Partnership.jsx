import piggyLogo from '../../assets/piggyvestLogo.png'
import wakanowLogo from '../../assets/wakanowLogo.png'
import heyfoodLogo from '../../assets/heyfoodLogo.png'
import paystackLogo from '../../assets/paystackLogo.png'
import andelaLogo from '../../assets/andelaLogo.png'
import farymmyLogo from '../../assets/farymmyLogo.png'

const Partnership = () => {
  return (
    <div className="bg-white rounded-full my-9">
      <h4 className="text-[#001F3F] font-semibold text-3xl text-center pt-5">
        The fastest-growing companies use Jobbero
      </h4>
      <div className="flex flex-wrap justify-around items-center">
        <PartnershipPic img={piggyLogo} alt={'piggyLogo'} />
        <PartnershipPic img={wakanowLogo} alt={'wakanowLogo'} />
        <PartnershipPic img={heyfoodLogo} alt={'heyfoodLogo'} />
        <PartnershipPic img={paystackLogo} alt={'paystackLogo'} />
        <PartnershipPic img={andelaLogo} alt={'andelaLogo'} />
        <PartnershipPic img={farymmyLogo} alt={'farymmyLogo'} />
      </div>
    </div>
  )
}

export default Partnership

export const PartnershipPic = ({ img, alt }) => {
  return (
    <>
      <img src={img} alt={alt} />
    </>
  )
}
