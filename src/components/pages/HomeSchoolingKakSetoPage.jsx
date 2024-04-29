import { Helmet } from 'react-helmet';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Testimoni from '../organisms/Testimoni';
import LocationSection from '../organisms/LocationSection';
import JadiBisaSection from '../organisms/JadiBisaSection';
import Navbar2 from '../molecules/Navbar2';
import SubProgramSection from '../organisms/SubProgramSection';

const HomeSchoolingKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Home Schooling Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        {/* Navbar */}
        <Navbar2 />
        {/* Card Sub Program */}
        <SubProgramSection school="HOME SCHOOLING KAK SETO" backgroundColour="text-biruPrimary" />
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
