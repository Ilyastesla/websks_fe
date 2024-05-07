import BagImage from "../../assets/gallery/bag.webp"
import TriangleRulerImage from "../../assets/gallery/triangel_ruler.webp"
import BrushImage from "../../assets/gallery/brush.webp"
import BookImage from "../../assets/gallery/book.webp"
import JadiBisaGallery from "../molecules/JadiBisaGallery"
import { useTranslation } from "react-i18next"

export default function JadiBisaSection({ theme, textColor }) {
  let backgroundImage = [BagImage, TriangleRulerImage]
  let firstWordTitle = "Jelajah"
  let backgroundColor = "bg-transparent"
  if (theme == 2) {
    backgroundImage = [BookImage, BrushImage]
    firstWordTitle = "Explore"
    backgroundColor = "bg-merahSecondary"
  }
  const { t } = useTranslation()
  return (
    <>
      <section className="my-20">
        <div className="relative">
          <div className="w-full -z-30 absolute flex justify-between px-2 md:px-3">
            <img
              src={backgroundImage[0]}
              alt="Background Image Bag"
              className="w-32 hidden md:block lg:w-40"
            />
            <img
              src={backgroundImage[1]}
              alt="Background Image Triangel Ruler"
              className="w-28 h-28 translate-y-4 hidden md:block lg:32"
            />
          </div>
          <div className="flex flex-col justify-center pb-10">
            <h1
              className={`${textColor} text-2xl leading-5 font-semibold text-center mt-6 md:mt-10 md:text-2xl lg:text-5xl`}
            >
              {firstWordTitle} #JadiBisa <br />
              {t('jadibisa.bersama')} Sekolah Kak Seto
            </h1>
            <JadiBisaGallery />
          </div>
        </div>
      </section>
    </>
  )
}
