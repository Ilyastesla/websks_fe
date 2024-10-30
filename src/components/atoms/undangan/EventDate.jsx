import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

// function getTanggalAcara() {
//   const eventDate = new Date(2024, 5, 20, 12, 0, 0) // Tanggal bulan tahun, bulan dimulai dari 0
//   const options = { day: '2-digit', month: 'long', year: 'numeric' }
//   const tanggal = eventDate.toLocaleDateString('id-ID', options)
//   const splitTanggal = tanggal.split(' ')
//   const formattedTanggal = splitTanggal.join(' - ')
//   return formattedTanggal.toUpperCase()
// }

function EventDate() {
  // const tanggalAcara = getTanggalAcara()
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])

  return (
    <div data-aos="fade-up" className="text-center mb-5 xs:mb-8 mt-3 xs:mt-5">
      <p className="text-sm xs:text-md xs:mb-2">Lokasi Acara:</p>
      <p className="text-xs xs:text-md ">Graha Convention Hall Ronatama</p>
      <p className="text-xs xs:text-md ">Jl. Dahlia No. 16A, Depok, Jawa Barat</p>
    </div>
  )
}

export default EventDate
