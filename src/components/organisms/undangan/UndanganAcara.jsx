import { useEffect } from 'react'
import Countdown from '../../atoms/undangan/CountDown'
import EventDate from '../../atoms/undangan/EventDate'
import AOS from "aos"
import 'aos/dist/aos.css'

function UndanganAcara() {
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])
  return (
    <div className="flex flex-col items-center">
      <header data-aos="fade-up" className="text-center">
        <h2 className="text-xl font-bold">Lepas Kenang 2024</h2>
      </header>
      <Countdown />
      <EventDate />
      <div data-aos="fade-up" className="flex items-center">
        <a href="https://maps.app.goo.gl/WgLh8YY1qQwkv3Tc6" target="_blank" rel="noopener noreferrer" className="bg-krem2Undangan text-biruUndangan text-sm xs:text-md px-3 xs:px-6 py-2 xs:py-3 rounded-lg font-semibold flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="24" width="24">
            <path fill="#142b52" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
          <span className='underline px-1 font-bold'>Google Maps</span>
        </a>
      </div>


    </div>
  )
}

export default UndanganAcara
