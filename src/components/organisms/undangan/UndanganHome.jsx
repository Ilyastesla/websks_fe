import { Link, useLocation } from "react-router-dom"

const UndanganHome = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const nama = searchParams.get('nama') || 'Nama Tamu'

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div className="mb-4">
        <p className="font-poly text-[20px]">Undangan</p>
        <p className="font-meryChristole text-[35px] leading-tight">LEPAS KENANG</p>
        <p className="font-poly text-[30px]">2024</p>
      </div>

      <div className="mb-10">
        <p className="text-[13px] max-w-[246px] mb-4">
          Bersama Sekolah Kak Seto, Siapkan dirimu menuju masa depan
        </p>
        <p className="text-[13px]">
          20 - JUNI - 2024
        </p>
      </div>

      <div className="mb-8">
        <p className="text-[12px]">
          Kepada Yth.
        </p>
        <p className="text-[20px] font-bold">
          {nama}
        </p>
        <p className="text-[12px] max-w-[186px]">
          Komunitas Reguler Homeschooling Kak Seto Pusat
        </p>
      </div>
      <Link to={'/undangan/acara'} className="text-[14px] font-semibold bg-krem2Undangan text-biruUndangan px-[20px] py-[15px] rounded-[5px]">
        Buka Undangan
      </Link>
    </div>
  )
}

export default UndanganHome
