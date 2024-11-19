// import GalleryImageCard from '../atoms/GalleryImageCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDataPost } from '../../features/useDataPost';
// import Loading from '../atoms/Loading';
import { useEffect } from 'react';
// import CardTestimoni from '../molecules/CardTestimoni';
// import { Link } from 'react-router-dom';
import CardExploreJadiBisa from '../molecules/CardExploreJadiBisa';

const exploreCards = [
  {
    id: 1,
    imgSrc: 'src/assets/gallery/content_4.webp',
    title: 'Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 2,
    imgSrc: 'src/assets/gallery/content_6.webp',
    title: 'Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
  {
    id: 3,
    imgSrc: 'src/assets/gallery/content_2.webp',
    title: 'Title 3',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },

  {
    id: 4,
    imgSrc: 'src/assets/gallery/content_3.webp',
    title: 'Title 4 ',
    description: 'Lorem ipsum dolor sit amet consectetur.',
  },
];
const ExploreJadiBisaSection = ({ theme, company, limit, textColor }) => {
  const posttype = 'testimoni';
  const {
    isLoading,
    data: dataPost,
    fetchDataPost,
  } = useDataPost({ company, limit, posttype });
  useEffect(() => {
    fetchDataPost();
  }, []);

  let firstWordTitle = 'Jelajah';
  // let backgroundColor = "bg-transparent";
  if (theme == 2) {
    firstWordTitle = 'Explore';
    // backgroundColor = "bg-merahSecondary"
  }
  const popularItems = [
    { line1: 'Lorem ipsum dolor sit amet', line2: 'consectetur.' },
    { line1: 'Lorem ipsum dolor sit amet', line2: 'consectetur.' },
    { line1: 'Lorem ipsum dolor sit amet', line2: 'consectetur.' },
    { line1: 'Lorem ipsum dolor sit amet', line2: 'consectetur.' },
    { line1: 'Lorem ipsum dolor sit amet', line2: 'consectetur.' },
  ];

  return (
    <div className="pattern pb-6">
      <section className="mx-10">
        {/* Heading */}
        <h1
          className={`${textColor} text-2xl leading-5 font-semibold text-center lg:mt-[10rem] md:mt-[6rem] xs:mt-[6rem] md:text-2xl lg:text-5xl`}
        >
          {firstWordTitle} #JadiBisa <br />
          bersama Sekolah Kak Seto
        </h1>
        <p className="text-lg text-center mt-4 mb-10">
          Lorem ipsum dolor sit amet consectetur. Viverra eleifend <br />
          ac convallis aliquet lectus diam amet.
        </p>

        <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-6 xs:grid-cols-2 gap-4 ">
          {/* <div className="gap-4"> */}
          {['HSKS', 'SKKS', 'KSS', 'KSLC'].map((category) => (
            <button
              key={category}
              className=" w-auto px-4 py-1 rounded-full bg-white text-biruPrimary border border-biruPrimary hover:bg-biruPrimary hover:text-white transition"
            >
              {category}
            </button>
          ))}
          {/* </div> */}
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-4 pt-6 ">
            <div className="relative ">
              <button className="absolute top-4 left-4 px-4 py-2 bg-biruPrimary text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-biruPrimary transition">
                Headline
              </button>
              <img
                src="src/assets/gallery/content_1.webp"
                alt="Headline"
                className="w-full h-[30em] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4  left-4 text-white">
                <h2 className="text-2xl font-bold mb-1">EDUTRIP Home</h2>
                <p className="text-md">
                  Lorem ipsum dolor sit amet consectetur. Sit nisi <br />
                  est vivamus neque.
                </p>
              </div>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 pt-6 gap-4"
            >
              {exploreCards.map((card) => (
                <CardExploreJadiBisa
                  key={card.id}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
          <div className="grid col-span-2 lg:ml-8 ">
            <div className=" ml-5 mt-6">
              <h1 className="lg:text-2xl sm:text-sm mb-4 font-semibold text-biruPrimary ">
                Terpopuler
              </h1>
              <ul>
                {popularItems.map((item, index) => (
                  <p key={index} className="lg:text-2xl md:text-l text-biruPrimary">
                    #{index + 1} <span>{item.line1}</span>
                    <br />
                    <span>{item.line2}</span>
                  </p>
                ))}
              </ul>
              <button className="mt-4 lg:px-[10em] md:px-[4em] sm:px-[2em] lg:py-[1em] md:py-[0.4em] sm:py-[0.2em] sm:text-sm bg-biruPrimary text-white hover:bg-white border border-biruPrimary hover:text-biruPrimary transition rounded-lg items-center ">
                Terpopuler Lainnya
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreJadiBisaSection;
