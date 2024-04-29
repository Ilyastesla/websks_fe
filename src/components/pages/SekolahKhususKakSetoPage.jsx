import { Helmet } from "react-helmet"
import LocationSection from "../organisms/LocationSection"

const SekolahKhususKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Sekolah Khusus Kak Seto Page - Sekolah Kak Seto</title>
      </Helmet>
      <div>

        <LocationSection backgroundColor={'bg-merahPrimary'} borderColor={'border-[#740939]'}>
          Lokasi KSS Pusat
        </LocationSection>
      </div>
    </>
  )
}

export default SekolahKhususKakSetoPage