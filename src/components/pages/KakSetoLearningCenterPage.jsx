import { Helmet } from "react-helmet"
import LocationSection from "../organisms/LocationSection"

const KakSetoLearningCenterPage = () => {
  return (
    <>
      <Helmet>
        <title>Kak Seto Learning Center - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <LocationSection backgroundColor={'bg-merahPrimary'} borderColor={'border-[#740939]'}>
          Lokasi KSS Pusat
        </LocationSection>
      </div>
    </>
  )
}

export default KakSetoLearningCenterPage