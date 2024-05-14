import { Helmet } from "react-helmet-async"
import CardsProgram from "../molecules/CardsProgram"
import HeroSection1 from "../organisms/HeroSection1"
import Navbar from "../molecules/Navbar"
import Carousel from "../templates/Carousel1"
import Footer from "../organisms/Footer"
import CsButton from "../atoms/CsButton"

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Beranda - Sekolah Kak Seto</title>
      </Helmet>
      <div className='overflow-x-hidden'>
        <Navbar />
        <HeroSection1 />
        <CardsProgram />
        <Carousel />
        <CsButton />
        <Footer />
      </div>
    </>
  )
}

export default DashboardPage