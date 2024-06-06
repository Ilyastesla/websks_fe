import { Link, useLocation } from 'react-router-dom'
import siswaLulus from '../../../assets/siswaLulus.json'
import AOS from 'aos'
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
          <div data-aos="fade-up">
            <p className="text-[16px] xs:text-[20px] font-bold max-w-[320px]">{result.nama}</p>
            <p className="text-[10px] xs:text-[12px]">{result.sekolah}</p>
          </div>
        ) : (
          <p>Data Tidak Ditemukan</p>
        )}
      </div>
    )
  }

  const playAudio = () => {
    const audio = new Audio('../../../../public/music/graduate.mp3');
    audio.play();
  };

  return (
    <FullScreen handle={handle}>

      {/* <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/830375941&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div><a href="https://soundcloud.com/maxkomusic" title="MaxKoMusic" target="_blank">MaxKoMusic</a> · <a href="https://soundcloud.com/maxkomusic/happy-commercial-no-copyright-background-music-piano-free-download" title="Happy Commercial | No-Copyright Background Music | Piano (FREE DOWNLOAD)" target="_blank">Happy Commercial | No-Copyright Background Music | Piano (FREE DOWNLOAD)</a></div> */}

      <div className="flex flex-col justify-between items-center h-full">
        <img src="/images/undangan/LogoWarna.png" data-aos="fade-up" className="mb-4 h-[60px] xs:h-[90px]" alt="Logo+Tulisan1" />

        <div data-aos="fade-up" className="mb-4 xs:mt-5">
          <p className="font-poppins text-[20px] xs:text-[20px] xs:mb-2">UNDANGAN</p>
          <p className="font-cormorant text-[26px] xss:text-[30px] xs:text-[38px] font-semibold leading-tight">LEPAS KENANG</p>
          {/* <p className="font-poly text-[20px] xs:text-[30px]">2024</p> */}
        </div>

        <div data-aos="fade-up" className="mb-8 xs:mb-8">
          {/* <p className="text-[11px] xs:text-[13px] max-w-[246px] mb-4">Bersama Sekolah Kak Seto, Siapkan dirimu menuju masa depan</p> */}
          <p className="text-[11px] xs:text-[13px]">20&nbsp;&nbsp;&nbsp;JUNI&nbsp;&nbsp;&nbsp;2024</p>
        </div>

        <div data-aos='fade-up' className="mb-5 xs:mb-8">
          <p className="text-[10px] xs:text-[12px]">Yang Terhormat</p>
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
              playAudio();
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
