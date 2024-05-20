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

const HomeSchoolingKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>HomeSchooling Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      <div className='overflow-x-hidden overflow-y-hidden'>
        {/* Navbar */}
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgbiru"
            title="Kenapa sih pilih HomeSchooling Kak Seto?"
            pointsLeft={[
              'Berdiri sejak 2007',
              'Tutor Ramah Anak dan Berpengalaman',
              'Mencetak Alumni ke PTN, PTS, dan PTLN',
              'Lingkungan sekolah yang supportif',
            ]}
            pointsRight={[
              'Terakreditasi A',
              'Metode Belajar yang Menyenangkan',
              'Tempat dan Waktu Belajar Fleksibel',
            ]}
            imageSrc={image}
            classNameImg="w-auto h-auto mb-0 mt-[-18.6rem]"
            cover={cover}
          />
        </div>
        {/* Card Sub Program */}
        <SubProgramSection school="HOMESCHOOLING KAK SETO" backgroundColour="text-biruPrimary" imgRight={IconTanganTos} imgLeft={IconLampu} />
        <JadiBisaSection theme={1} textColor="text-biruPrimary" />
        <Testimoni theme="bg-biruPrimary" />
        <LocationSection backgroundColor={'bg-biruPrimary'} borderColor={'border-[#05215D]'}>
          Lokasi HSKS Pusat
        </LocationSection>
      </div>
      <CsButton />
      <Footer />
    </>
  )
}

export default HomeSchoolingKakSetoPage
