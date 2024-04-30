import React from "react";
import BookImage from "../../assets/hero/book.webp";
import PencilImage from "../../assets/hero/pencil.webp";
import GlobeImage from "../../assets/hero/globe.webp";
import RulerImage from "../../assets/hero/ruler.webp";

export default function HeroSection1() {
  return (
    <div>
      <section id="heroPage1" className="mb-10">
        <div className="relative w-full">
          <div className="absolute w-full -z-50">
            <div className="w-full translate-y-7 flex flex-row justify-between px-10 md:px-24 lg:px-44">
              <img
                src={PencilImage}
                alt="Background Image Pencil"
                className="h-24 md:h-auto"
              />
              <img
                src={RulerImage}
                alt="Background Image Ruler"
                className="h-24 md:h-auto"
              />
            </div>
            <div className="w-full flex flex-row justify-between">
              <img
                src={GlobeImage}
                alt="Background Image Globe"
                className="hidden lg:block"
              />
              <img
                src={BookImage}
                alt="Background Image Book"
                className="hidden h-56 lg:block"
              />
            </div>
          </div>
          <div className="px-7 max-h-96 flex justify-center items-center pt-32 md:pt-32 lg:pt-56">
            <h1 className="text-lg font-semibold max-w-[950px] text-center md:text-4xl md:leading-[55px] lg:leading-[70px] lg:text-5xl">
              Sekolah{" "}
              <span className="px-2 bg-biruPrimary text-white rounded-md text-nowrap">
                Berkualitas, Ramah Anak,
              </span>
              <br className="hidden md:block" /> dan{" "}
              <span className="px-2 bg-biruPrimary text-white rounded-md text-nowrap">
                Mengembangkan Potensi Anak.
              </span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
