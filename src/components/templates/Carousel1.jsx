import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gambar1 from "../../assets/carousel/picture1.png";
import gambar2 from "../../assets/carousel/picture2.png";
import gambar3 from "../../assets/carousel/picture3.png";
import gambar4 from "../../assets/carousel/picture4.png";
import gambar5 from "../../assets/carousel/picture5.png";

// Komponen CustomSlides untuk mengatur gambar
function CustomSlides({ src, isCenter }) {
    const paddingClass = isCenter ? "mx-0" : "mx-8";
    const heightClass = isCenter ? "h-auto" : "h-[50%]"; // Mengatur tinggi sesuai posisi
    const marginClass = isCenter ? "my-0" : "my-8";

    return (
        <div className={`flex justify-center mx-2 ${paddingClass} ${marginClass}`}>
            <img src={src} alt="Gambar" className={`rounded-xl ${heightClass}`} />
        </div>
    );
}

function Carousel1() {
    // Pengaturan slider
    const [currentSlide, setCurrentSlide] = React.useState(0);

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
        afterChange: (current) => setCurrentSlide(current) // Menyimpan slide saat ini
    };

    // Array gambar
    const images = [gambar1, gambar2, gambar3, gambar4, gambar5];

    // Komponen carousel
    return (
        <>
        <div className="py-14">
            <div className='block text-center p-6 font-semibold p-10'>
                <span className='text-5xl bg-red-500 px-2 text-white mx-2 rounded-md text-bold'>#JadiBisa</span>
                <span className='text-5xl'>Bersama Sekolah Kak Seto</span>
            </div>
            <div className="slider-container">
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
    );
}

export default Carousel1;
