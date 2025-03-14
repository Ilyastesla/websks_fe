import { Helmet } from 'react-helmet';
import LocationSection from '../organisms/LocationSection';
import JadiBisaSection from '../organisms/JadiBisaSection';
import Navbar from '../molecules/Navbar';
import HeroPage2 from '../templates/HeroPage1';
import image from '../../assets/heropage2/image3.png';
import cover from '../../assets/heropage2/cover.png';
import SubProgramSection from '../organisms/SubProgramSection';
import Footer from '../organisms/Footer';
import CsButton from '../atoms/CsButton';
import IconTanganTos from '../../assets/subprogram/Icon Tangan Tos.png';
import IconLampu from '../../assets/subprogram/Icon Lampu.png';
import Testimoni from '../organisms/Testimoni';
import Tutor from '../organisms/Tutor';
const SekolahKhususKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Sekolah Khusus Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      <Navbar />
      <div className="grid w-full place-items-center">
        <div className=" container w-full">
          <div className="overflow-x-hidden">
            {/* <Navbar /> */}
            <div>
              <HeroPage2
                backgroundClass="bgbirusecond"
                title="Kenapa sih pilih Sekolah Khusus Kak Seto?"
                pointsLeft={[
                  'Sekolah formal berbasis vokasi dan lifeskill',
                  'Pengembangan minat dan bakat bagi peserta didik berkebutuhan khusus',
                  'Pengembangan pembelajaran akademik yang fungsional sesuai karakteristik',
                  'Mengedepankan budaya Community Builder dan Good Character',
                ]}
                pointsRight={[
                  'Pengalaman belajar secara langsung sebagai keterampilan hidup',
                  'Model pembelajaran variatif guna menunjang Projek P5 Pendidikan Khusus',
                  'Support Collaboration dalam perkembangan belajar peserta didik',
                  'Tempat dan Waktu Belajar Fleksibel',
                ]}
                imageSrc={image}
                classNameImg="w-auto h-auto mb-0 mt-[-26.6rem]"
                cover={cover}
              />
            </div>
            <SubProgramSection
              school="SEKOLAH KHUSUS KAK SETO"
              backgroundColour="text-biruSecondary"
              imgRight={IconTanganTos}
              imgLeft={IconLampu}
              company="3"
              limit="4"
            />
            <JadiBisaSection
              theme={1}
              textColor="text-biruSecondary"
              company="1"
              limit="6"
            />
            <Testimoni theme="bg-biruSecondary" company="3" limit="4" />
            <Tutor theme="bg-biruSecondary" company="1" limit="4" />
            <LocationSection
              backgroundColor={'bg-biruSecondary'}
              borderColor={'border-biruPrimary'}
            >
              Lokasi SKKS Pusat
            </LocationSection>
            <CsButton />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default SekolahKhususKakSetoPage;
