import { Helmet } from 'react-helmet';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Testimoni from '../organisms/Testimoni';
import LocationSection from '../organisms/LocationSection';
import CenterComponent from './../organisms/CenterComponent';

const HomeSchoolingKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Home Schooling Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      {/* <CenterComponent /> */}
      <Testimoni />
      <div>
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
