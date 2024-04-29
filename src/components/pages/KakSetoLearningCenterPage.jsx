import { Helmet } from "react-helmet";
import LocationSection from "../organisms/LocationSection";
import JadiBisaSection from "../organisms/JadiBisaSection";
import Navbar2 from "../molecules/Navbar2";

const KakSetoLearningCenterPage = () => {
  return (
    <>
      <Helmet>
        <title>Kak Seto Learning Center - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <Navbar2/>
        <JadiBisaSection theme={2} textColor="text-merahSecondary" />
        <LocationSection
          backgroundColor={"bg-merahPrimary"}
          borderColor={"border-[#740939]"}
        >
          Lokasi KSS Pusat
        </LocationSection>
      </div>
    </>
  );
};

export default KakSetoLearningCenterPage;
