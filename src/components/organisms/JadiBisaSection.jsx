import React from "react";
import BagImage from "../../assets/gallery/bag.webp";
import TriangleRulerImage from "../../assets/gallery/triangel_ruler.webp";
import JadiBisaGallery from "../molecules/JadiBisaGallery";

export default function JadiBisaSection() {
  return (
    <div>
      <section className="mt-10">
        <div className="relative">
          <div className="w-full -z-50 absolute flex justify-between px-2 md:px-3">
            <img
              src={BagImage}
              alt="Background Image Bag"
              className="w-16 md:w-32 lg:w-40"
            />
            <img
              src={TriangleRulerImage}
              alt="Background Image Triangel Ruler"
              className="w-14 h-14 translate-y-4 md:h-28 md:w-28 lg:32"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-biruPrimary text-xl leading-5 font-semibold text-center mt-6 md:mt-10 md:text-2xl lg:text-4xl">
              Jelajah #JadiBisa <br />
              Bersama Sekolah Kak Seto
            </h1>
            <JadiBisaGallery />
          </div>
        </div>
      </section>
    </div>
  );
}
