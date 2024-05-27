import { Link, useLocation } from 'react-router-dom'
import siswaLulus from '../../../../public/siswaLulus.json'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const UndanganHome = ({ setIsHidden }) => {
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const nis = searchParams.get('nis') || 'Nama Tamu'
  const siswa = siswaLulus.RECORDS

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div data-aos='fade-up' className="mb-4">
        <p className="font-poly text-[20px]">Undangan</p>
        <p className="font-meryChristole text-[35px] leading-tight">LEPAS KENANG</p>
        <p className="font-poly text-[30px]">2024</p>
      </div>

      <div data-aos='fade-up' className="mb-10">
        <p className="text-[13px] max-w-[246px] mb-4">Bersama Sekolah Kak Seto, Siapkan dirimu menuju masa depan</p>
        <p className="text-[13px]">20 - JUNI - 2024</p>
      </div>

      <div className="mb-8">
        <p data-aos='fade-up' className="text-[12px]">Kepada Yth.</p>
        {siswa.map((data, index) => {
          if (data.nis == nis) {
            return (
              <>
                <p key={index} className="text-[20px] font-bold">
                  {data.nama}
                </p>
                <p key={index} className="text-[12px] ">
                  {data.sekolah}
                </p>
              </>
            )
          }
        })}
      </div>
      <Link data-aos='fade-up' to={`/undangan/acara?nis=${nis}`} className="text-[14px] font-semibold bg-krem2Undangan text-biruUndangan px-[20px] py-[15px] rounded-[5px]">
        <button
          onClick={() => {
            setIsHidden(false)
          }}
        >
          Buka Undangan
        </button>
      </Link>
    </div>
  )
}

export default UndanganHome
