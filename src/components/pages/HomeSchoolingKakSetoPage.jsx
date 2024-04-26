import { Helmet } from "react-helmet"
import LocationSection from "../organisms/LocationSection"

const HomeSchoolingKakSetoPage = () => {
  return (
    <>
      <Helmet>
        <title>Home Schooling Kak Seto - Sekolah Kak Seto</title>
      </Helmet>
      <div>
        <LocationSection backgroundColor={'bg-biruPrimary'} borderColor={'border-[#05215D]'}>
          Lokasi HSKS Pusat
        </LocationSection>
      </div>
    </>
  )
}

export default HomeSchoolingKakSetoPage