// import GalleryImageCard from '../atoms/GalleryImageCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDataPost } from '../../features/useDataPost';
// import Loading from '../atoms/Loading';
import { useEffect } from 'react';
// import CardTestimoni from '../molecules/CardTestimoni';
// import { Link } from 'react-router-dom';
import CardDetailArtikel from '../molecules/CardDetailArtikel';

const CardDetail = [
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
];
const DetailArtikelSection = ({ theme, company, limit, textColor }) => {
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

        <div className="grid grid-cols-6">
          <div className="col-span-4  ">
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
            <div className="">
              <h1
                className={`${textColor} text-2xl leading-5 font-semibold text-start mt-8 md:text-2xl lg:text-5xl`}
              >
                {firstWordTitle} #JadiBisa <br />
                bersama Sekolah Kak Seto
              </h1>
            </div>
            <div className="text-section mt-4 mb-8">
              <h2 className="text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur. Viverra eleifend ac convallis
                aliquet lectus diam amet.
              </h2>
              <p className=" mt-4">
                Lorem ipsum dolor sit amet consectetur. Nisi in elementum nisl sit
                tincidunt massa praesent. Tincidunt cursus neque malesuada consectetur
                senectus diam adipiscing. Malesuada justo amet vel aliquet nulla ut at.
                Fermentum eleifend auctor mauris ut. Mauris nisl risus sem ante. Diam diam
                imperdiet iaculis ligula nisi ac.
              </p>
              <p className=" mt-4">
                Bibendum pharetra blandit tristique etiam ipsum elementum. Sed tellus nunc
                gravida cum laoreet ac. Vulputate eleifend bibendum ac egestas purus.
                Posuere tincidunt eu turpis facilisis mauris proin feugiat. Egestas
                integer nunc at interdum nisl dui duis proin metus senectus. Imperdiet a
                nisi ac morbi. Nibh justo velit laoreet facilisi praesent risus luctus.
                Arcu turpis pharetra in velit. Pellentesque tristique suspendisse et
                varius commodo at et. Euismod massa massa congue adipiscing nisi.
              </p>
            </div>
          </div>
          <div className="grid col-span-2 lg:ml-8 ">
            <div className=" ml-5">
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
            <div className="sm:ml-5 md:ml-5">
              <div className="grid grid-cols-1 gap-6 md:mt-[1em] sm:-mt-[4em] xs:-mt-[40em]">
                {CardDetail.map((artikel) => (
                  <CardDetailArtikel
                    key={artikel.id}
                    imgSrc={artikel.imgSrc}
                    title={artikel.title}
                    description={artikel.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailArtikelSection;
