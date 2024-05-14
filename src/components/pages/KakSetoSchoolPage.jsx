import { Helmet } from 'react-helmet'
import LocationSection from '../organisms/LocationSection'
import SubProgramSection from '../organisms/SubProgramSection'
import JadiBisaSection from '../organisms/JadiBisaSection'
import Navbar2 from '../molecules/Navbar2'
import HeroPage2 from '../templates/HeroPage1'
import image from '../../assets/heropage2/image2.png'
import cover from '../../assets/heropage2/cover2.png'
import Footer from '../organisms/Footer'
import CsButton from '../atoms/CsButton'
import IconGlobe from '../../assets/subprogram/Icon Globe.png'
import IconKacaPembesar from '../../assets/subprogram/Icon Kaca Pembesar.png'
import Testimoni from '../organisms/Testimoni'

const KakSetoSchoolPage = () => {
  return (
    <>
      <Helmet>
        <title>Kak Seto School - Sekolah Kak Seto</title>
      </Helmet>
      <div className='overflow-x-hidden'>
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgmerah"
            title="Kenapa sih pilih Kak Seto School?"
            pointsLeft={[
              'Berdiri sejak 2018',
              'Menggunakan TIK sebagai basis media pembelajaran',
              'Menyediakan berbagai program kreatif, aplikatif & inovatif',
              'Nyaman dan ramah anak',
            ]}
            pointsRight={[
              'Mendorong berkembangnya minat bakat dan potensi anak',
              'Menanamkan karakter positif pada anak',
              'Sekolah Formal rasa homeschooling',
              'Pendekatan secara individual terhadap anak'
            ]}
            imageSrc={image}
            classNameImg="w-auto h-auto mb-0 mt-[-22.6rem]"
            cover={cover}
          />
        </div>
        {/* Card Sub Program */}
        <SubProgramSection
          school="KAK SETO SCHOOL"
          backgroundColour="text-merahSecondary"
          imgRight={IconGlobe}
          imgLeft={IconKacaPembesar}
        />
        <JadiBisaSection theme={2} textColor="text-merahSecondary" />
        <Testimoni theme='bg-merahSecondary' />
        <LocationSection backgroundColor={'bg-merahPrimary'} borderColor={'border-[#740939]'}>
          Lokasi SKS Pusat
        </LocationSection>
        <CsButton />
        <Footer />
      </div>
    </>
  )
}

export default KakSetoSchoolPage
