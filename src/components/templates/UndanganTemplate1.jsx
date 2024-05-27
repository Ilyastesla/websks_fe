import { cloneElement, useEffect, useState } from "react"
import NavbarUndangan from "../molecules/NavbarUndangan"
import AOS from "aos"
import 'aos/dist/aos.css'

const UndanganTemplate = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])
  const [isHidden, setIsHidden] = useState(true)
  return (
    <div className="relative bg-slate-200 w-full">
      <div className="relative h-screen max-w-[414px] flex flex-col justify-between mx-auto bg-biruUndangan text-krem2Undangan pattern-undangan overflow-hidden">
        <div data-aos="fade-up" className="absolute left-0 right-0 flex justify-center mt-[25px] xs:mt-[41px]">
          <img src="/images/undangan/Logo+Tulisan1.svg" className="mb-4 w-[100px] xs:w-[160px]" alt="Logo+Tulisan1" />
        </div>
        <div className="my-auto rounded-lg mx-10 text-center z-50">
          {cloneElement(children, { setIsHidden })}
        </div>
        <img data-aos="fade-up" src="/images/undangan/gedung1.png" alt="gedung1" className="absolute left-0 right-0 bottom-0" />
        <img data-aos="fade-right" src="/images/undangan/sampulkiri.png" alt="sampulkiri" className="absolute h-screen left-0" />
        <img data-aos="fade-left" src="/images/undangan/sampulkanan.png" alt="sampulkanan" className="absolute h-screen right-0" />
        <NavbarUndangan isHidden={isHidden} />
      </div>
    </div>
  )
}

export default UndanganTemplate