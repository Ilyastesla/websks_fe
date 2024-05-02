import BagImage from "../../assets/gallery/bag.webp"
import TriangleRulerImage from "../../assets/gallery/triangel_ruler.webp"
import BrushImage from "../../assets/gallery/brush.webp"
import BookImage from "../../assets/gallery/book.webp"
import JadiBisaGallery from "../molecules/JadiBisaGallery"

export default function JadiBisaSection({ theme, textColor }) {
  let backgroundImage = [BagImage, TriangleRulerImage]
  let firstWordTitle = "Jelajah"
  let backgroundColor = "bg-transparent"
  if (theme == 2) {
    backgroundImage = [BookImage, BrushImage]
    firstWordTitle = "Explore"
    backgroundColor = "bg-merahSecondary"
  }
  return (
    <>
      <section className="my-10">
        <div className="relative">
          <div className="w-full -z-30 absolute flex justify-between px-2 md:px-3">
            <img
              src={backgroundImage[0]}
              alt="Background Image Bag"
              className="w-16 md:w-32 lg:w-40"
            />
            <img
              src={backgroundImage[1]}
              alt="Background Image Triangel Ruler"
              className="w-14 h-14 translate-y-4 md:h-28 md:w-28 lg:32"
            />
          </div>
          {/* <div
            className={`${backgroundColor} absolute h-[45%] w-full -z-50 bottom-0`}
          ></div> */}
          <div className="flex flex-col justify-center pb-10">
            <h1
              className={`${textColor} text-xl leading-5 font-semibold text-center mt-6 md:mt-10 md:text-2xl lg:text-5xl`}
            >
              {firstWordTitle} #JadiBisa <br />
              Bersama Sekolah Kak Seto
            </h1>
            <JadiBisaGallery />
          </div>
        </div>
      </section>
    </>
  )
}
