import BagImage from "../../assets/gallery/bag.webp"
import TriangleRulerImage from "../../assets/gallery/triangel_ruler.webp"
import BrushImage from "../../assets/gallery/brush.webp"
import BookImage from "../../assets/gallery/book.webp"

import GalleryImageCard from "../atoms/GalleryImageCard"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useDataPost } from '../../features/useDataPost'
import Loading from '../atoms/Loading'
import { useEffect } from 'react'

export default function JadiBisaSection({ theme, textColor }) {
  let backgroundImage = [BagImage, TriangleRulerImage]
  let firstWordTitle = "Jelajah"

  const posttype="testimoni"
  const { isLoading, data: dataPost, fetchDataPost } = useDataPost({posttype})

  useEffect(() => {
    fetchDataPost()
  }, [])

  
  // let backgroundColor = "bg-transparent";
  if (theme == 2) {
    backgroundImage = [BookImage, BrushImage]
    firstWordTitle = "Explore"
    // backgroundColor = "bg-merahSecondary"
  }

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
              className="w-28 h-28 translate-y-4 hidden md:block lg:32 animate-wiggle-more animate-infinite"
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="flex flex-col justify-center pb-10">
            <h1
              className={`${textColor} text-2xl leading-5 font-semibold text-center mt-6 md:mt-10 md:text-2xl lg:text-5xl`}
            >
              {firstWordTitle} #JadiBisa <br />
              bersama Sekolah Kak Seto
            </h1>
            <div>
              <div className="mx-auto mt-5 px-5 max-w-[75em] grid grid-cols-1 gap-1 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
                {isLoading && (
                  <Loading />
                )}
                
                {!isLoading &&
                  dataPost.data &&
                  dataPost.data.map((news, index) => (
                    <GalleryImageCard key={news.idtestimoni} title={news.title} body={news.subtitle} link="#" picture="images/KakSetoSchool.png"/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
