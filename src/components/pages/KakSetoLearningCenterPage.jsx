import { Helmet } from "react-helmet"
import LocationSection from "../organisms/LocationSection"
import JadiBisaSection from "../organisms/JadiBisaSection"
import Navbar2 from "../molecules/Navbar2"
import HeroPage2 from '../templates/HeroPage1'
import image from "../../assets/heropage2/image4.png"
import cover from "../../assets/heropage2/cover2.png"
import Footer from "../organisms/Footer"
import CsButton from "../atoms/CsButton"
import Testimoni from "../organisms/Testimoni"

const KakSetoLearningCenterPage = () => {
  return (
    <>
      <Helmet>
        <title>Kak Seto Learning Center - Sekolah Kak Seto</title>
      </Helmet>
      <div className='overflow-x-hidden landing-page'>
        <Navbar2 />
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgkuning"
            title="Kenapa sih pilih Learning Center Kak Seto?"
            pointsLeft={[
              'Guru Berkualitas & terbaik di bidangnya',
              'Fleksibel: Online dan Offline Learning',
              'Tutor Ramah Anak dan Berpengalaman',
              'Mengembangkan Keterampilan Sesuai Standar Nasional',
            ]}
            pointsRight={[
              'TO SNBT Online: Pintu ke Perguruan Tinggi Negeri',
              'Metode Belajar yang Menyenangkan',
              'Ekstrakurikuler terbaru',
              'Berijazah dan Bersertifkat',
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
          Lokasi HSKS Pusat Kak Seto Learning Center
        </LocationSection>
        <CsButton />
        <Footer />
      </div>
    </>
  )
}

export default KakSetoLearningCenterPage
