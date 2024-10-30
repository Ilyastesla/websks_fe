import { useLocation } from 'react-router'
import siswaLulus from '../../../assets/siswaLulus.json'
import { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

const UndanganAbsen = () => {
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const nis = searchParams.get('nis') || 'NIS'
  const siswa = siswaLulus.RECORDS
  return (
    <>
      <h1 data-aos="fade-up" className='font-semibold text-xl xs:text-2xl'><i>QR Code</i> Presensi</h1>
      {siswa.map((data, index) => {
        if (data.nis == nis) {
          return <img data-aos="fade-up" key={index} src={`/qr-code/lepaskenang2024-${data.nis}.png`} alt="" className='mx-auto my-6 xs:my-10 w-[180px] xs:w-max' />
        }
      })}
      <p data-aos="fade-up" className='mx-auto text-xs xs:text-sm max-w-[270px]'>Perlihatkan kepada panitia di lokasi acara untuk dipindai sebagai presensi.</p>
    </>
  )
}

export default UndanganAbsen
