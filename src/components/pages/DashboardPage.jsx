import React from 'react';
import CsButton from '../atoms/CsButton';
import Footer from '../organisms/Footer';
import Testimoni from '../organisms/Testimoni';
import { Helmet } from 'react-helmet-async'
import CardsProgram from "../molecules/CardsProgram"

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Beranda - Sekolah Kak Seto</title>
      </Helmet>
      <div className="mx-12">
        <CardsProgram />
      </div>
      <Testimoni />
      <CsButton />
      <Footer />
    </>
  )
}

export default DashboardPage      