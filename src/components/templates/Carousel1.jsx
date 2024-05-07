import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import gambar1 from "../../assets/carousel/picture1.png"
import gambar2 from "../../assets/carousel/picture2.png"
import gambar3 from "../../assets/carousel/picture3.png"
import gambar4 from "../../assets/carousel/picture4.png"
import gambar5 from "../../assets/carousel/picture5.png"
import MagnifGlassImage from "../../assets/carousel/magnif-glass.webp"
import BrushImage from "../../assets/carousel/brush.webp"
import { useTranslation } from "react-i18next"

// Komponen CustomSlides untuk mengatur gambar
function CustomSlides({ src, isCenter }) {
  const paddingClass = isCenter ? "mx-0" : "mx-8"
  const heightClass = isCenter ? "h-auto" : "h-[50%]" // Mengatur tinggi sesuai posisi
  const marginClass = isCenter ? "my-0" : "my-8"

  return (
    <div className={`flex justify-center mx-2 ${paddingClass} ${marginClass}`}>
      <img src={src} alt="Gambar" className={`rounded-xl ${heightClass}`} />
    </div>
  )
}

function Carousel1() {
  // Pengaturan slider
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const settings = {
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "15%",
    arrows: false,
    afterChange: (current) => setCurrentSlide(current), // Menyimpan slide saat ini
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "15%",
        },
      },
    ],
  }

  // Array gambar
  const images = [gambar1, gambar2, gambar3, gambar4, gambar5]
  const { t } = useTranslation()
  // Komponen carousel
  return (
    <>
      <div className="pt-14 relative">
        <div className="absolute w-full -z-50 flex justify-between pt-16 md:pt-0">
          <img
            src={MagnifGlassImage}
            alt="Background Image"
            className="h-16 md:h-28 lg:h-44"
          />
          <img
            src={BrushImage}
            alt="Background Image"
            className="h-20 md:h-32 lg:h-52"
          />
        </div>
        <div className="text-xl block text-center font-semibold p-10 md:text-3xl lg:text-5xl">
          <h1>
            <span className="bg-red-500 px-2 mx-2 text-white rounded-md text-bold">
              #JadiBisa
            </span>
            {t('jadibisa.bersama')} Sekolah Kak Seto
          </h1>
        </div>
        <div className="slider-container md:mt-5">
          <Slider {...settings}>
            {images.map((image, index) => (
              <CustomSlides
                key={index}
                src={image}
                isCenter={index === currentSlide}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Carousel1
