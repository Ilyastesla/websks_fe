import React from 'react';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Testimoni from '../organisms/Testimoni';

const DashboardPage = () => {
  return (
    <>
      {/* <div>DashboardPage</div> */}
      <Testimoni />
      <CsButton />
      <Footer />
    </>
  );
};

export default DashboardPage;
