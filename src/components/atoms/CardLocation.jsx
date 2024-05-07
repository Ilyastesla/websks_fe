import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const CardLocation = ({ bgImg, title, address, link }) => {
  const { t } = useTranslation()
  return (
    <div className='items-center rounded-2xl h-[600px] bg-cover text-white' style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="flex flex-col  justify-end w-full h-full bg-gradient-to-t from-black/80 from-10% to-red/50 to-90% px-5 py-10 rounded-2xl">
        <h1 className="text-2xl font-semibold mb-1">{title}</h1>
        <p className="text-lg font-normal mb-4">{address}</p>
        <Link to={link} className="bg-biruPrimary px-4 py-3 rounded-lg font-semibold border border-white text-center w-fit" target="_blank">{t('locationsection.btntext')}</Link>
      </div>
    </div>
  )
}

export default CardLocation