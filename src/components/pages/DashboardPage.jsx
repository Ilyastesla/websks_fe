import { Helmet } from "react-helmet-async"
import CardsProgram from "../molecules/CardsProgram"
import HeroSection1 from "../organisms/HeroSection1"
import Navbar from "../molecules/Navbar"
import Carousel from "../templates/Carousel1"
import Footer from "../organisms/Footer"
import CsButton from "../atoms/CsButton"
import { useTranslation } from "react-i18next"

const DashboardPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
      </Helmet>
      <div>
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