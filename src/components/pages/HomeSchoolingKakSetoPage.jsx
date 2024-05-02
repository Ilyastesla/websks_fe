import { Helmet } from 'react-helmet';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Testimoni from '../organisms/Testimoni';
import LocationSection from '../organisms/LocationSection';
import JadiBisaSection from '../organisms/JadiBisaSection';
import Navbar2 from '../molecules/Navbar2';
import SubProgramSection from '../organisms/SubProgramSection';
import HeroPage2 from '../templates/HeroPage1';
import image from "../../assets/heropage2/image1.png"
import cover from "../../assets/heropage2/cover.png"

const HomeSchoolingKakSetoPage = () => {
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
            title="Kenapa Sih Pilih Homeschooling Kak Seto?"
            pointsLeft={[
              "Berdiri sejak 2007",
              "Tutor Ramah Anak dan Berpengalaman",
              "Mencetak Alumni ke PTN, PTS, dan PTLN",
              "Lingkungan sekolah yang supportif"
            ]}
            pointsRight={[
              "Terakreditasi A",
              "Metode Belajar yang Menyenangkan",
              "Tempat dan Waktu Belajar Fleksibel"
            ]}
            imageSrc={image}
            cover={cover}
          />
        </div>
        {/* Card Sub Program */}
        <SubProgramSection school="HOMESCHOOLING KAK SETO" backgroundColour="text-biruPrimary" />
        <JadiBisaSection theme={1} textColor="text-biruPrimary" />
        <Testimoni />
        <LocationSection backgroundColor={'bg-biruPrimary'} borderColor={'border-[#05215D]'}>
          Lokasi HSKS Pusat
        </LocationSection>
      </div>
      <CsButton />
      <Footer />
    </>
  );
};

export default HomeSchoolingKakSetoPage;
