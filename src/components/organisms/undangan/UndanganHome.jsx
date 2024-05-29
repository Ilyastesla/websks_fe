import { Link, useLocation } from 'react-router-dom'
import siswaLulus from '../../../assets/siswaLulus.json'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen"

const UndanganHome = ({ setIsHidden }) => {
  const handle = useFullScreenHandle()

  const [isButtonShow, setIsButtonShow] = useState(false)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const nis = searchParams.get('nis') || 'NIS'
  const siswa = siswaLulus.RECORDS

  const result = siswa.find((data) => data.nis === nis)
  useEffect(() => {
    if (!result) {
      setIsButtonShow(false)
    } else {
      setIsButtonShow(true)
    }
    AOS.init({
      offset: -100,
      duration: 800,
      once: false,
    })

  }, [result, isButtonShow])

  const renderContent = () => {
    return (
      <div>
        {result ? (
          <div data-aos='fade-up'>
            <p className="text-[16px] xs:text-[20px] font-bold">{result.nama}</p>
            <p className="text-[10px] xs:text-[12px]">{result.sekolah}</p>
          </div>
        ) : (
          <p>Data Tidak Ditemukan</p>
        )}
      </div>
    )
  }

  return (
    <FullScreen handle={handle}>
      <div className="flex flex-col justify-between items-center h-full">
        <div data-aos='fade-up' className="mb-4">
          <p className="font-poly text-[20px] xs:text-[30px] xs:mb-2">UNDANGAN</p>
          <p className="font-meryChristole text-[26px] xs:text-[35px] leading-tight">LEPAS KENANG</p>
          <p className="font-poly text-[20px] xs:text-[30px]">2024</p>
        </div>

        <div data-aos='fade-up' className="mb-8 xs:mb-10">
          <p className="text-[11px] xs:text-[13px] max-w-[246px] mb-4">Bersama Sekolah Kak Seto, Siapkan dirimu menuju masa depan</p>
          <p className="text-[11px] xs:text-[13px]">20 - JUNI - 2024</p>
        </div>

        <div data-aos='fade-up' className="mb-5 xs:mb-8">
          <p className="text-[10px] xs:text-[12px]">Kepada Yth.</p>
          {nis === 'NIS' ? (
            <>
              <p>Data Tidak Ditemukan</p>
            </>
          ) : (
            renderContent()
          )}
        </div>
        <Link data-aos="fade-up" to={`/undangan/lokasi?nis=${nis}`} className={`${isButtonShow ? '' : 'hidden'} text-[12px] xs:text-[14px] font-semibold bg-krem2Undangan text-biruUndangan px-[20px] py-[15px] rounded-[5px]`}>
          <button id='buttonFullscreen'
            onClick={() => {
              setIsHidden(false)
              handle.enter()
            }}
          >
            Buka Undangan
          </button>
        </Link>
      </div>
    </FullScreen>
  )
}

export default UndanganHome
