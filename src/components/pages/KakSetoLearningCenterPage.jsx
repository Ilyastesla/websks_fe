import { Helmet } from "react-helmet";
import LocationSection from "../organisms/LocationSection";
import JadiBisaSection from "../organisms/JadiBisaSection";
import Navbar2 from "../molecules/Navbar2";
import HeroPage2 from '../templates/HeroPage1';
import image from "../../assets/heropage2/image4.png"
import cover from "../../assets/heropage2/cover2.png"
import Footer from "../organisms/Footer";

const KakSetoLearningCenterPage = () => {
  return (
    <>
      <Helmet>
        <title>Kak Seto Learning Center - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgkuning"
            title="Kenapa Sih Pilih Learning Center Kak Seto?"
            pointsLeft={[
              "Berdiri sejak 2018",
              "Menggunakan TIK sebagai basis media pembelajaran ",
              "Menyediakan berbagai program kreatif, aplikatif & inovatif",
              "Nyaman dan ramah anak"
            ]}
            pointsRight={[
              "Mendorong berkembangnya minat bakat dan potensi anak",
              "Menanamkan karakter positif pada anak",
              "Sekolah Formal rasa homeschooling",
              "Pendekatan secara individual terhadap anak"
            ]}
            imageSrc={image}
            classNameImg="w-auto h-auto mb-0 mt-[-22.6rem]"
            cover={cover}
          />
        </div>
        <JadiBisaSection theme={2} textColor="text-merahSecondary" />
        <LocationSection
          backgroundColor={"bg-merahPrimary"}
          borderColor={"border-[#740939]"}
        >
          Lokasi KSS Pusat
        </LocationSection>
        <Footer />
      </div>
    </>
  );
};

export default KakSetoLearningCenterPage;
