import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDataPost } from '../../features/useDataPost';
import Loading from '../atoms/Loading';
import { useEffect } from 'react';
import CardPageTutor from '../molecules/CardPageTutor';

const PageTutorSection = ({ company, limit, textColor }) => {
  const posttype = 'testimoni';
  const {
    isLoading,
    data: dataPost,
    fetchDataPost,
  } = useDataPost({ company, limit, posttype });
  useEffect(() => {
    fetchDataPost();
  }, []);

  return (
    <div className="pattern pb-6">
      <section className="">
        {/* Heading */}
        <h1
          className={`${textColor} text-2xl leading-5 font-semibold text-center lg:mt-[10rem] md:mt-[6rem] xs:mt-[6rem] md:text-2xl lg:text-5xl`}
        >
          Tutor Homeschooling <br />
          Kak Seto
        </h1>
        <p className="text-lg text-center mt-4 mb-10">
          Lorem ipsum dolor sit amet consectetur. Viverra eleifend <br />
          ac convallis aliquet lectus diam amet.
        </p>

        <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-6 xs:grid-cols-2 gap-4 mx-14 py-6 ">
          {['HSKS', 'SKKS', 'KSS', 'KSLC'].map((category) => (
            <button
              key={category}
              className=" w-auto px-2 py-1 rounded-full bg-white text-biruPrimary border border-biruPrimary hover:bg-biruPrimary hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 lg:grid-cols-4 mx-10"
        >
          {isLoading && <Loading />}

          {!isLoading &&
            dataPost.data &&
            dataPost.data.map((tutor, index) => (
              <CardPageTutor
                key={tutor.idtutor}
                ProfilePicture={tutor.gambar}
                name={tutor.title}
                position={tutor.subtitle}
                comment={tutor.content}
              />
            ))}
        </div>
      </section>
    </div>
  );
};

export default PageTutorSection;
