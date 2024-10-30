import BagImage from '../../assets/gallery/bag.webp';
import TriangleRulerImage from '../../assets/gallery/triangel_ruler.webp';
import BrushImage from '../../assets/gallery/brush.webp';
import BookImage from '../../assets/gallery/book.webp';

// import GalleryImageCard from '../atoms/GalleryImageCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDataPost } from '../../features/useDataPost';
import Loading from '../atoms/Loading';
import { useEffect } from 'react';
// import CardTestimoni from '../molecules/CardTestimoni';
import CardJadiBisa from '../molecules/CardJadiBisa';

const JadiBisaSection = ({ theme, company, limit, textColor }) => {
  const posttype = 'testimoni';
  const {
    isLoading,
    data: dataPost,
    fetchDataPost,
  } = useDataPost({ company, limit, posttype });
  useEffect(() => {
    fetchDataPost();
  }, []);

  let backgroundImage = [BagImage, TriangleRulerImage];
  let firstWordTitle = 'Jelajah';
  // let backgroundColor = "bg-transparent";
  if (theme == 2) {
    backgroundImage = [BookImage, BrushImage];
    firstWordTitle = 'Explore';
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
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex flex-col justify-center pb-10"
          >
            <h1
              className={`${textColor} text-2xl leading-5 font-semibold text-center mt-6 md:mt-10 md:text-2xl lg:text-5xl`}
            >
              {firstWordTitle} #JadiBisa <br />
              bersama Sekolah Kak Seto
            </h1>
            <div className="grid grid-cols-10 mx-12 pt-10">
              <div className="col-span-9">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:-mr-[5.2em]"
                >
                  {isLoading && <Loading />}
                  {!isLoading &&
                    dataPost.data &&
                    dataPost.data.map((news, index) => (
                      <CardJadiBisa
                        key={news.idtutor}
                        ProfilePicture={news.gambar}
                        name={news.title}
                        position={news.subtitle}
                        comment={news.content}
                      />
                    ))}
                </div>
              </div>
              <div className="flex place-items-center" data-aos="fade-up">
                <a
                  href=""
                  className="bg-biruPrimary writing-mode-vertical-rl text-white text-3xl rounded-t-2xl p-2 h-[60px] rotate-90 -ml-[3em] lg:-ml-[0.2em] hover:text-blackPrimary"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JadiBisaSection;
