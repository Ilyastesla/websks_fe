import { Helmet } from 'react-helmet';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Navbar from '../molecules/Navbar';
import DetailArtikelSection from '../organisms/DetailArtikelSection';

const DetailArtikelExploreJadiBisa = () => {
  return (
    <>
      <Helmet>
        <title>Detail Artikel</title>
      </Helmet>
      <Navbar />
      <div className="grid w-full place-items-center">
        <div className=" container w-full">
          <div className="overflow-x-hidden overflow-y-hidden ">
            {/* Card Sub Program */}
            <DetailArtikelSection
              theme={2}
              textColor="text-biruPrimary"
              company="1"
              limit="2"
              backgroundColor={'bg-biruPrimary'}
            />
          </div>
          <CsButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DetailArtikelExploreJadiBisa;
