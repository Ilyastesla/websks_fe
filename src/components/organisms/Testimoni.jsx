import CardTestimoni from './../molecules/CardTestimoni';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDataPost } from '../../features/useDataPost';
import Loading from '../atoms/Loading';
import { useEffect } from 'react';

/*
const dataTestimoni = [
  {
    ProfilePicture: 'images/Ellipse-102.png',
    name: 'Bunda Lubna',
    position: 'Orang Tua Murid Kak Seto School',
    comment:
      'Alhamdulillah, tak terbendung kebahagiaan yang kami rasakan setelah ananda masuk di Kak Seto School di program inklusi, ananda menjadi lebih fokus dan banyak sekali perubahan positif nya. Terlebih dengan para kakak tutor yang selalu sabar dalam mendampingi ananda belajar dan berinteraksi. Sekolah yang ramah anak, ananda lebih ceria dan Alhamdulillah ananda Lubna di kelas 2 ini sudah tidak di program inklusi berkat kakak tutor dan kakak pendamping inklusi. Terima kasih Kak Seto School.',
  },
  {
    ProfilePicture: 'images/Ellipse-103.png',
    name: 'Bunda Rere',
    position: 'Orang Tua Murid Kak Seto School',
    comment:
      'Alhamdulillah Wasyukurillah setelah pencarian sekian tahun lamanya akhirnya kami menemukan sekolah terbaik dalam hidup 🥰 Sekolah yang tidak hanya bagus dalam pendidikan, pembelajaran, pembentukan character, emosi, dan akhlak akan tetapi juga didukung oleh para pengajar yang begitu luar biasa sabar, santun dan terpelajar. Kemajuan pesat Ananda Racher disegala sisi membuat kami bersyukur tiada henti. Sejak bersekolah di Kak Seto School, Ananda Racher pergi dan pulang sekolah selalu dalam keadaan ceria dan bahagia. Tiada hari tanpa semangat ke sekolah. Terima kasih Kak Seto School 💕',
  },
  {
    ProfilePicture: 'images/Ellipse-104.png',
    name: 'Bunda Sheenan',
    position: 'Orang Tua Murid Kak Seto School',
    comment:
      'Sheehan bergabung di Kak Seto School, pada pertengahan semester 1 di kelas 1. Saat itu, Sheehan adalah murid baru. Tiga bulan bergabung di Kak Seto School, sudah terlihat progres yang sangat meningkat dari Sheehan. Kemampuan bicara, motorik halus, kemandirian, rentang fokus, bersosialisasi dengan banyak teman, dan kreatifitas serta ide-ide Sheehan yang terlihat “significant” dari sebelumnya. Saat ini Sheehan kelas 2. Bersyukur menemukan sekolah yang sangat fokus dan detail untuk perkembangan anak, tidak hanya secara akademik tapi juga',
  },
]
*/

const Testimoni = ({ theme, company, limit }) => {
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
    <div className={`pattern ${theme} pb-32`}>
      <div
        className={`-translate-y-1/2 border-2 border-black ${theme} text-white mx-auto w-fit py-4 rounded-xl xl:px-10 xl:py-6`}
      >
        <h1 className="text-4xl font-semibold text-center m-2">
          Pengalaman Dari <br />
          Orang Tua dan Peserta Didik
        </h1>
      </div>
      <div className="container mx-auto container-xl -mt-28">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-10"
        >
          {isLoading && <Loading />}

          {!isLoading &&
            dataPost.data &&
            dataPost.data.map((testimoni, index) => (
              <CardTestimoni
                key={testimoni.idtestimoni}
                ProfilePicture={testimoni.gambar}
                name={testimoni.title}
                position={testimoni.subtitle}
                comment={testimoni.content}
              />
            ))}
        </div>
        <hr className="mt-8 border-4 border-white" />
        <div className="grid justify-items-end	" data-aos="fade-up">
          <a
            href=""
            className="bg-white text-3xl mr-[1.7em] p-4 rounded-b-2xl hover:text-biruPrimary"
          >
            Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
