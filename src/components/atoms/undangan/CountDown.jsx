import { useState, useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

function calculateTimeLeft() {
  const eventDate = new Date(2024, 5, 20, 12, 0, 0) // Tanggal bulan tahun, bulan dimulai dari 0
  const now = new Date()
  const difference = eventDate - now

  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
      jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
      menit: Math.floor((difference / 1000 / 60) % 60),
      detik: Math.floor((difference / 1000) % 60)
    }
  } else {
    timeLeft = {
      hari: 0,
      jam: 0,
      menit: 0,
      detik: 0
    }
  }
  return timeLeft
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div data-aos="fade-up" className="flex flex-col items-center rounded-lg">
      <div className="text-[30px] font-mono mx-4">
        {`${timeLeft.hari}:${timeLeft.jam.toString().padStart(2, '0')}:${timeLeft.menit.toString().padStart(2, '0')}:${timeLeft.detik.toString().padStart(2, '0')}`}
      </div>
      <div className="text-sm xs:text-lg space-x-3 font-semibold">
        <span className="text-sm xs:text-md">Hari</span>
        <span className="text-sm xs:text-md">Jam</span>
        <span className="text-sm xs:text-md">Menit</span>
        <span className="text-sm xs:text-md">Detik</span>
      </div>
    </div>
  )
}

export default Countdown
