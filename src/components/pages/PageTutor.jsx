import { Helmet } from 'react-helmet';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Navbar from '../molecules/Navbar';
import PageTutorSection from '../organisms/PageTutorSection';

const PageTutor = () => {
  return (
    <>
      <Helmet>
        <title>Detail Tutor</title>
      </Helmet>
      <Navbar />
      <div className="grid w-full place-items-center">
        <div className=" container w-full">
          <div className="overflow-x-hidden overflow-y-hidden ">
            {/* Card Sub Program */}
            <PageTutorSection
              textColor="text-biruPrimary"
              company="1"
              limit="4"
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

export default PageTutor;
