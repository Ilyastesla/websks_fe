import { Helmet } from 'react-helmet';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Testimoni from '../organisms/Testimoni';
import LocationSection from '../organisms/LocationSection';
import JadiBisaSection from '../organisms/JadiBisaSection';
import Navbar from '../molecules/Navbar';
import SubProgramSection from '../organisms/SubProgramSection';
import HeroPage2 from '../templates/HeroPage1';
import image from '../../assets/heropage2/image1.png';
import cover from '../../assets/heropage2/cover.png';
import IconTanganTos from '../../assets/subprogram/Icon Tangan Tos.png';
import IconLampu from '../../assets/subprogram/Icon Lampu.png';
import Tutor from '../organisms/Tutor';

const HomeSchoolingKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>HomeSchooling Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      <Navbar school="HSKS" />
      <div className="grid w-full place-items-center">
        <div className=" w-full">
          <div className="overflow-x-hidden overflow-y-hidden">
            {/* Navbar */}

            <div>
              <HeroPage2
                backgroundClass="bgbiru"
                title="Kenapa sih pilih Homeschooling Kak Seto?"
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
            <SubProgramSection
              school="HOMESCHOOLING KAK SETO"
              backgroundColour="text-biruPrimary"
              imgRight={IconTanganTos}
              imgLeft={IconLampu}
              company="1"
              limit="4"
            />
            <JadiBisaSection
              theme={1}
              textColor="text-biruPrimary"
              company="1"
              limit="6"
            />
            <Testimoni theme="bg-biruPrimary" company="1" limit="4" />
            <Tutor theme="bg-biruPrimary" company="1" limit="4" />
            <LocationSection
              backgroundColor={'bg-biruPrimary'}
              borderColor={'border-[#05215D]'}
            >
              Lokasi HSKS Pusat
            </LocationSection>
          </div>
          <CsButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeSchoolingKakSetoPage;
