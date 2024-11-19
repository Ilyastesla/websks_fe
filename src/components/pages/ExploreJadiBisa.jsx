import { Helmet } from 'react-helmet';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Navbar2 from '../molecules/Navbar2';

import ExploreJadiBisaSection from '../organisms/ExploreJadiBisaSection';

const ExploreJadiBisa = () => {
  return (
    <>
      <Helmet>
        <title>Explore Jadi Bisa</title>
      </Helmet>
      <Navbar2 />
      <div className="grid w-full place-items-center">
        <div className=" container w-full">
          <div className="overflow-x-hidden overflow-y-hidden ">
            {/* Card Sub Program */}
            <ExploreJadiBisaSection
              theme={2}
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

export default ExploreJadiBisa;
