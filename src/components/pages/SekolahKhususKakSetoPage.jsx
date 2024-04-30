import { Helmet } from "react-helmet";
import LocationSection from "../organisms/LocationSection";
import JadiBisaSection from "../organisms/JadiBisaSection";
import Navbar2 from "../molecules/Navbar2";
import HeroPage2 from "../templates/HeroPage1";
import image from "../../assets/heropage2/image3.png";
import cover from "../../assets/heropage2/cover.png";
import SubProgramSection from "../organisms/SubProgramSection";

const SekolahKhususKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Sekolah Khusus Kak Seto Page - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <Navbar2 />
        <div>
          <HeroPage2
            backgroundClass="bgbirusecond"
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
        <SubProgramSection
          school="SEKOLAH KHUSUS KAK SETO"
          backgroundColour="text-biruPrimary"
        />
        <JadiBisaSection theme={1} textColor="text-biruSecondary" />
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

export default SekolahKhususKakSetoPage;
