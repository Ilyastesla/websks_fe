import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import { useTranslation } from "react-i18next"


function TitleSubProgram({ school, backgroundColour, imgRight, imgLeft }) {
  useEffect(() => {
    AOS.init()
  }, [])
  const { t } = useTranslation()
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" className="relative w-full">
        <img
          src={`${imgRight}`}
          alt="Icon Right"
          className="hidden md:block w-56 xl:w-auto  md:-translate-y-16 right-0 absolute xl:-translate-y-40 z-30"
        />
        <img
          src={`${imgLeft}`}
          alt="Icon Left"
          className="hidden md:block w-40 xl:w-auto md:-translate-y-6 xl:-translate-y-44 left-0 absolute z-30" />
      </div>
      <h1 data-aos="fade-up" data-aos-duration="1000" className={`text-xl md:text-4xl xl:text-5xl ${backgroundColour} font-semibold flex text-center justify-center xl:w-[901px] mx-auto pb-12`}>{t('cardsubprogram.title', { school: school })}</h1>
    </>
  )
}

export default TitleSubProgram