import DropdownNav from '../atoms/DropdownNav'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Navbar = ({ school }) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => { setIsOpen(!isOpen) }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <header className="border-b-2 bg-white/80 backdrop-blur-xl w-full fixed z-50 top-0">
      <div className="mx-auto max-w-screen-xl">
        <div data-aos="fade-down" data-aos-duration="1000" className="flex items-center justify-between py-2">
          <div className="scale-100">
            <div className="flex">
              <a className="pr-5 border-slate-300 border-r-2" href="/">
                <img className="w-24" src="/images/Logo Sekolah Kak Seto.png" alt="" />
              </a>

              <a className="pl-5" href="/">
                <img className="w-24" src="/images/Logo HSKS.png" alt="" />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="global">
              <ul className="flex items-center gap-7 text-sm">
                <li><a href="#" className="text-biruPrimary hover:text-gray-300">Seputar Sekolah</a></li>
                <li><a href="#" className="text-biruPrimary hover:text-gray-300">Promo</a></li>
                <li>
                <a href="https://ereg.sekolahkakseto.id" target="_blank">
                  <button
                    type="button"
                    className="border-2 py-1 border-biruPrimary rounded-lg text-biruPrimary px-4 leading-7 font-medium hover:bg-biruPrimary hover:text-white"
                  >
                    Daftar Peserta Didik Baru
                  </button>
                </a>
                </li>
                {/*
                <li><DropdownNav /></li>
                */}
                
                
              </ul>
            </nav>
          </div>  
        </div>
      </div>
    </header>
  );
};

export default Navbar
