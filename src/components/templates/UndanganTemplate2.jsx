import { useEffect } from 'react'
import NavbarUndangan from '../molecules/NavbarUndangan'
import AOS from 'aos'

const UndanganTemplate2 = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])
  return (
    <div className="relative bg-slate-200 w-full">
      <div className="relative h-screen max-w-[414px] flex flex-col justify-between mx-auto bg-biruUndangan text-krem2Undangan undangan pattern-undangan overflow-hidden">
        <div data-aos="fade-up" className="absolute left-0 right-0 flex justify-center mt-[25px] xs:mt-[41px]">
          <img src="/images/undangan/Logo+Tulisan1.svg" className="mb-4 w-[100px] xs:w-[160px]" alt="Logo+Tulisan1" />
        </div>
        <div className="my-auto rounded-lg mx-10 text-center z-50">{children}</div>
        <img data-aos="fade-up" src="/images/undangan/gedung1.png" alt="" className="absolute bottom-0" />
        <img data-aos="fade-right" src="/images/undangan/border2-left.svg" alt="" className="absolute h-screen left-0" />
        <img data-aos="fade-left" src="/images/undangan/border2-left.svg" alt="" className="absolute h-screen right-0" />
        <NavbarUndangan />
      </div>
    </div>
  )
}

export default UndanganTemplate2
