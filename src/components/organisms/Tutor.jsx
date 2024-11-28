import CardTutor from '../molecules/CardTutor';
import CsVirtual from '/images/Content-CS-VIRTUAL-768x424.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDataPost } from '../../features/useDataPost';
import Loading from '../atoms/Loading';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import CardTestimoni from '../molecules/CardTestimoni';

// const dataTutor = [
//   { bgImg: 'images/Foto-tutor1.png', name: 'Mirna Ferdiyawati, S.Pd., M.M.' },
//   { bgImg: 'images/Foto-tutor2.png', name: 'Imelda Julistiyanto Wahyunin, S.Pd.' },
//   { bgImg: 'images/Foto-tutor3.png', name: 'Ratih Puspita Sari, S.Pd.' },
//   { bgImg: 'images/Foto-tutor4.png', name: 'Aldiyan Saputra, S.Pd., M.M. ' },
// ];

const Tutor = ({ theme, company, limit }) => {
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
    <div className={`pattern ${theme}`}>
      <div className="container mx-auto container-xl">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="text-3xl mx-4 md:text-5xl font-semibold text-white text-center mb-8 -my-10"
        >
          Tutor Homeschooling Kak Seto
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:grid-cols-4 mx-10"
        >
          {isLoading && <Loading />}

          {!isLoading &&
            dataPost.data &&
            dataPost.data.map((tutor, index) => (
              <CardTutor
                key={tutor.idtutor}
                ProfilePicture={tutor.gambar}
                name={tutor.title}
                position={tutor.subtitle}
                comment={tutor.content}
              />
            ))}
        </div>
        <hr className="mt-8 border-4 border-white" />
        <div className="grid justify-items-end	" data-aos="fade-up">
          <Link
            className="bg-white text-3xl mr-[1.7em] p-4 rounded-b-2xl hover:text-biruPrimary"
            to="/PageTutor"
          >
            Selengkapnya
          </Link>
        </div>
        {/*--------------------------------------------------------------------------------------------------------*/}
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="relative max-w-max mx-auto "
        >
          <img
            src={CsVirtual}
            alt="Gambar"
            className="object-cover max-w-[320px] md:max-w-[680px] lg:max-w-[800px] my-16 pb-20"
          />
          <button className="absolute top-2/4 ml-4 md:ml-9 border-b border-blue-500 text-blue-500 hover:font-semibold text-xs md:text-xl mt-2 md:mt-5">
            Hubungi layanan pelanggan virtual &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tutor;
