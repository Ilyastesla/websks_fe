import { Helmet } from 'react-helmet';
import LocationSection from '../organisms/LocationSection';
import JadiBisaSection from '../organisms/JadiBisaSection';
import Navbar2 from '../molecules/Navbar2';
import HeroPage2 from '../templates/HeroPage1';
import image from '../../assets/heropage2/image3.png';
import cover from '../../assets/heropage2/cover.png';
import SubProgramSection from '../organisms/SubProgramSection';
import Footer from '../organisms/Footer';
import CsButton from '../atoms/CsButton';
import IconTanganTos from "../../assets/subprogram/Icon Tangan Tos.png"
import IconLampu from "../../assets/subprogram/Icon Lampu.png"

const SekolahKhususKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Sekolah Khusus Kak Seto Page - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgbirusecond"
            title="Kenapa Sih Pilih Sekolah Khusus Kak Seto?"
            pointsLeft={[
              "Sekolah formal berbasis vokasi dan lifeskill",
              "Pengembangan minat dan bakat bagi peserta didik berkebutuhan khusus",
              "Pengembangan pembelajaran akademik yang fungsional sesuai karakteristik",
              "Mengedepankan budaya Community Builder dan Good Character"
            ]}
            pointsRight={[
              "Pengalaman belajar secara langsung sebagai keterampilan hidup",
              "Model pembelajaran variatif guna menunjang Projek P5 Pendidikan Khusus",
              "Support Collaboration dalam perkembangan belajar peserta didik",
              "Tempat dan Waktu Belajar Fleksibel"
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
        <LocationSection backgroundColor={'bg-merahPrimary'} borderColor={'border-[#740939]'}>
          Lokasi KSS Pusat
        </LocationSection>
        <CsButton />
        <Footer />
      </div>
    </>
  );
};

export default SekolahKhususKakSetoPage;
