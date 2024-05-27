import { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

const UndanganSalam = () => {
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])

  return (
    <div data-aos="fade-up">
      <p className="font-medium">Terima kasih atas kehadiran <br />
        <span>Bapak/Ibu/Saudara/i</span>
      </p>
      <p className="mt-5 text-sm">Hormat Kami</p>
      <p className="text-xl font-semibold">Atas Nama Panitia</p>
    </div>
  )
}

export default UndanganSalam