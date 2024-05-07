import { Helmet } from "react-helmet"
import LocationSection from "../organisms/LocationSection"
import JadiBisaSection from "../organisms/JadiBisaSection"
import Navbar2 from "../molecules/Navbar2"
import HeroPage2 from '../templates/HeroPage1'
import image from "../../assets/heropage2/image4.png"
import cover from "../../assets/heropage2/cover2.png"
import Footer from "../organisms/Footer"
import CsButton from "../atoms/CsButton"
import { useTranslation } from "react-i18next"
import Testimoni from "../organisms/Testimoni"

const KakSetoLearningCenterPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Kak Seto Learning Center - Sekolah Kak Seto</title>
      </Helmet>
      <div className='overflow-x-hidden'>
        <Navbar2 />
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgkuning"
            title={`${t('herosection2.kenapa', { school: 'Learning Center Kak Seto?' })}`}
            pointsLeft={[
              t('herosection2.kslc.line1'),
              t('herosection2.kslc.line2'),
              t('herosection2.kslc.line3'),
              t('herosection2.kslc.line4'),
            ]}
            pointsRight={[
              t('herosection2.kslc.line5'),
              t('herosection2.kslc.line6'),
              t('herosection2.kslc.line7'),
              t('herosection2.kslc.line8'),
            ]}
            imageSrc={image}
            classNameImg="w-auto h-auto mb-0 mt-[-22.6rem]"
            cover={cover}
          />
        </div>
        <JadiBisaSection theme={2} textColor="text-kuningPrimary" />
        <Testimoni theme='bg-kuningPrimary' />
        <LocationSection
          backgroundColor={"bg-kuningPrimary"}
          borderColor={"border-[#875900]"}
        >
          {t('locationsection.title', { location: 'Kak Seto Learning Center' })}
        </LocationSection>
        <CsButton />
        <Footer />
      </div>
    </>
  )
}

export default KakSetoLearningCenterPage
