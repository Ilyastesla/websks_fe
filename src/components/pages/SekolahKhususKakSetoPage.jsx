import { Helmet } from "react-helmet"
import LocationSection from "../organisms/LocationSection"
import Navbar2 from "../molecules/Navbar2"

const SekolahKhususKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Sekolah Khusus Kak Seto Page - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <Navbar2/>
        <LocationSection backgroundColor={'bg-merahPrimary'} borderColor={'border-[#740939]'}>
          Lokasi KSS Pusat
        </LocationSection>
      </div>
    </>
  )
}

export default SekolahKhususKakSetoPage