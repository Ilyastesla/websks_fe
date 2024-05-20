import { Link, useLocation } from "react-router-dom"

const UndanganHome = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const nama = searchParams.get('nama') || 'Nama Tamu'

  return (
    <div className="!font-opensans flex flex-col justify-center items-center h-full">
      <h1 className=" text-[40px] leading-10 font-normal font-dm_serif_display">
        GRADUATION{" "}
        <span className="text-2xl leading-6 font-dm_serif_display">INVITATION</span>
      </h1>
      <h2 className="text-3xl italic mb-4 font-birthstone text-[80px] leading-[128px]">Ceremony</h2>
      <p className="text-base mb-2 font-opensans">20 - DEC - 2023</p>
      <p className="text-sm mb-4 font-opensans">Kepada Yth.</p>
      <p className="text-lg font-bold mb-8 font-opensans">{nama}</p>
      <Link to={'/undangan/acara'} className="text-sm bg-kremUndangan text-black py-2 px-4 rounded-full font-opensans">
        Buka Undangan
      </Link>
    </div>
  )
}

export default UndanganHome
