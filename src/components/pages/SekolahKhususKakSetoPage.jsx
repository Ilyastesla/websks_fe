import { Helmet } from 'react-helmet'
import LocationSection from '../organisms/LocationSection'
import JadiBisaSection from '../organisms/JadiBisaSection'
import Navbar2 from '../molecules/Navbar2'
import HeroPage2 from '../templates/HeroPage1'
import image from '../../assets/heropage2/image3.png'
import cover from '../../assets/heropage2/cover.png'
import SubProgramSection from '../organisms/SubProgramSection'
import Footer from '../organisms/Footer'
import CsButton from '../atoms/CsButton'
import IconTanganTos from "../../assets/subprogram/Icon Tangan Tos.png"
import IconLampu from "../../assets/subprogram/Icon Lampu.png"
import { useTranslation } from 'react-i18next'
import Testimoni from '../organisms/Testimoni'

const SekolahKhususKakSetoPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Sekolah Khusus Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      <div className='overflow-x-hidden'>
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgbirusecond"
            title={`${t('herosection2.kenapa', { school: 'Sekolah Khusus Kak Seto?' })}`}
            pointsLeft={[
              t('herosection2.skks.line1'),
              t('herosection2.skks.line2'),
              t('herosection2.skks.line3'),
              t('herosection2.skks.line4'),
            ]}
            pointsRight={[
              t('herosection2.skks.line5'),
              t('herosection2.skks.line6'),
              t('herosection2.skks.line7'),
              t('herosection2.skks.line8'),
            ]}
            imageSrc={image}
            classNameImg="w-auto h-auto mb-0 mt-[-26.6rem]"
            cover={cover}
          />
        </div>
        <SubProgramSection
          school="SEKOLAH KHUSUS KAK SETO"
          backgroundColour="text-biruPrimary"
          imgRight={IconTanganTos}
          imgLeft={IconLampu}
        />
        <JadiBisaSection theme={1} textColor="text-biruSecondary" />
        <Testimoni theme="bg-biruSecondary" />
        <LocationSection
          backgroundColor={"bg-biruSecondary"}
          borderColor={"border-biruPrimary"}
        >
          {t('locationsection.title', { location: 'SKKS' })}
        </LocationSection>
        <CsButton />
        <Footer />
      </div>
    </>
  )
}

export default SekolahKhususKakSetoPage
