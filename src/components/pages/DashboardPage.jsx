import { Helmet } from 'react-helmet-async'
import CardsProgram from "../molecules/CardsProgram"

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Beranda - Sekolah Kak Seto</title>
      </Helmet>
      <div className="mx-12">
        <CardsProgram />
      </div>
    </>
  )
}

export default DashboardPage