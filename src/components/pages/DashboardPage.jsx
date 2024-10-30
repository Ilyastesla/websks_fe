import { Helmet } from "react-helmet-async"
import CardsSchool from "../molecules/CardsSchool"
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
        <CardsSchool />
        <Carousel />
        <CsButton />
        <Footer />
      </div>
    </>
  )
}

export default DashboardPage