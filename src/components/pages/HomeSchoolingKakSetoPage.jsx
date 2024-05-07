import { Helmet } from 'react-helmet'
import CsButton from '../atoms/CsButton'
import Footer from '../organisms/Footer'
import Testimoni from '../organisms/Testimoni'
import LocationSection from '../organisms/LocationSection'
import JadiBisaSection from '../organisms/JadiBisaSection'
import Navbar2 from '../molecules/Navbar2'
import SubProgramSection from '../organisms/SubProgramSection'
import HeroPage2 from '../templates/HeroPage1'
import image from "../../assets/heropage2/image1.png"
import cover from "../../assets/heropage2/cover.png"
import IconTanganTos from "../../assets/subprogram/Icon Tangan Tos.png"
import IconLampu from "../../assets/subprogram/Icon Lampu.png"
import { useTranslation } from 'react-i18next'

const HomeSchoolingKakSetoPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Home Schooling Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        {/* Navbar */}
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgbiru"
            title={`${t('herosection2.kenapa', { school: 'Homeschooling Kak Seto?' })}`}
            pointsLeft={[
              t('herosection2.hsks.line1'),
              t('herosection2.hsks.line2'),
              t('herosection2.hsks.line3'),
              t('herosection2.hsks.line4'),
            ]}
            pointsRight={[
              t('herosection2.hsks.line5'),
              t('herosection2.hsks.line6'),
              t('herosection2.hsks.line7'),
            ]}
            imageSrc={image}
            classNameImg="w - auto h-auto mb-0 mt-[-18.6rem]"
            cover={cover}
          />
        </div>
        {/* Card Sub Program */}
        <SubProgramSection school="HOMESCHOOLING KAK SETO" backgroundColour="text-biruPrimary" imgRight={IconTanganTos} imgLeft={IconLampu} />
        <JadiBisaSection theme={1} textColor="text-biruPrimary" />
        <Testimoni theme="bg-biruPrimary" />
        <LocationSection backgroundColor={'bg-biruPrimary'} borderColor={'border-[#05215D]'}>
          {t('locationsection.title', { location: 'HSKS' })}
        </LocationSection>
      </div>
      <CsButton />
      <Footer />
    </>
  )
}

export default HomeSchoolingKakSetoPage
