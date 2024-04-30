import React from 'react';
import CardTestimoni from './../molecules/CardTestimoni';
import CardTutor from '../molecules/CardTutor';
import CsVirtual from '../../../public/images/Content-CS-VIRTUAL-768x424.png';

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
];

const dataTutor = [
  { bgImg: 'images/Foto-tutor1.png', name: 'Mirna Ferdiyawati, S.Pd., M.M.' },
  { bgImg: 'images/Foto-tutor2.png', name: 'Imelda Julistiyanto Wahyunin, S.Pd.' },
  { bgImg: 'images/Foto-tutor3.png', name: 'Ratih Puspita Sari, S.Pd.' },
  { bgImg: 'images/Foto-tutor4.png', name: 'Aldiyan Saputra, S.Pd., M.M. ' },
];

const Testimoni = () => {
  return (
    <div className="pattern bg-biruPrimary pb-32 mt-24">
      <div className="-translate-y-1/2 border-2 border-black bg-biruPrimary text-white px-10 py-6 mx-auto max-w-[598px] rounded-xl">
        <h1 className="text-4xl font-semibold text-center">Pengalaman Dari Orang Tua dan Peserta Didik </h1>
      </div>
      <div className="container mx-auto container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {dataTestimoni.map((data) => (
            <CardTestimoni ProfilePicture={data.ProfilePicture} name={data.name} position={data.position} comment={data.comment} />
          ))}
        </div>
      </div>
      <div className="container mx-auto container-xl mt-32">
        <h1 className="text-5xl font-semibold text-white text-center mb-8">Tutor Homeschooling Kak Seto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center">
          {dataTutor.map((data) => (
            <CardTutor bgImg={data.bgImg} name={data.name} />
          ))}
        </div>
        <div className="relative max-w-max mx-auto mt-24">
          <img src={CsVirtual} alt="Gambar" className="h-auto" />
          <button className="absolute top-2/4 ml-9 border-b border-blue-500 text-blue-500 hover:font-semibold text-xl mt-5">Hubungi layanan pelanggan virtual &#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
