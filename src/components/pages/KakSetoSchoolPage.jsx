import { Helmet } from "react-helmet";
import LocationSection from "../organisms/LocationSection";
import SubProgramSection from "../organisms/SubProgramSection";
import JadiBisaSection from "../organisms/JadiBisaSection";
import Navbar2 from "../molecules/Navbar2";
import HeroPage2 from "../templates/HeroPage1";
import image from "../../assets/heropage2/image2.png";
import cover from "../../assets/heropage2/cover2.png";

const KakSetoSchoolPage = () => {
  return (
    <>
      <Helmet>
        <title>Kak Seto School - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgmerah"
            title="Kenapa Sih Pilih Homeschooling Kak Seto?"
            pointsLeft={[
              "Berdiri sejak 2007",
              "Tutor Ramah Anak dan Berpengalaman",
              "Mencetak Alumni ke PTN, PTS, dan PTLN",
              "Lingkungan sekolah yang supportif",
            ]}
            pointsRight={[
              "Terakreditasi A",
              "Metode Belajar yang Menyenangkan",
              "Tempat dan Waktu Belajar Fleksibel",
            ]}
            imageSrc={image}
            cover={cover}
          />
        </div>
        {/* Card Sub Program */}
        <SubProgramSection
          school="KAK SETO SCHOOL"
          backgroundColour="text-biruPrimary"
        />
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

export default KakSetoSchoolPage;
