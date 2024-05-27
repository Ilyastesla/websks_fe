import { useLocation } from 'react-router'
import siswaLulus from '../../../../public/siswaLulus.json'
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
  const nis = searchParams.get('nis') || 'Nama Tamu'
  const siswa = siswaLulus.RECORDS
  return (
    <>
      <h1 data-aos="fade-up" className='font-semibold text-2xl'>Scan Kehadiran</h1>
      {siswa.map((data, index) => {
        if (data.nis == nis) {
          return <img data-aos="fade-up" key={index} src={`/qr-code/lepaskenang2024-${data.nis}.png`} alt="" className='mx-auto my-10' />
        }
      })}
      <p data-aos="fade-up" className='text-sm'>Arahkan Barcode ke Scanner</p>
    </>
  )
}

export default UndanganAbsen
