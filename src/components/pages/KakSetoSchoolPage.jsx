import { Helmet } from "react-helmet"
import LocationSection from "../organisms/LocationSection"
import SubProgramSection from "../organisms/SubProgramSection"
import Navbar2 from "../molecules/Navbar2"

const KakSetoSchoolPage = () => {
  return (
    <>
      <Helmet>
        <title>Kak Seto School - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <Navbar2/>
        {/* Card Sub Program */}
        <SubProgramSection school='KAK SETO SCHOOL' backgroundColour='text-biruPrimary'/>
        <LocationSection backgroundColor={'bg-merahPrimary'} borderColor={'border-[#740939]'}>
          Lokasi KSS Pusat
        </LocationSection>
      </div>
    </>
  )
}

export default KakSetoSchoolPage;