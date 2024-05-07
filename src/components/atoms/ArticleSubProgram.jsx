import ButtonCardSub from '../atoms/ButtonCardSub';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function ArticleSubProgram() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      {/* Card 1 */}
      <article data-aos="fade-right" data-aos-duration="1000" className="rounded-2xl border-2 bg-white shadow-xl transition hover:shadow-2xl h-[780px] w-[318px]">
        <div className="flex flex-col gap-[251px] py-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-blackPrimary text-center">Komunitas</h3>
            <ul className="list-outside list-disc text-md leading-6 text-blackSecondary px-8 ml-2">
              <li>Program belajar secara klasikal.</li>
              <li>Exclusive class (10 peserta didik dalam satu kelas)</li>
              <li>Jadwal belajar seminggu 3x (tiga kali)</li>
              <li>Pembelajaran akademik dilaksanakan di kelas</li>
              <li>Kegiatan non-akademik dilaksanakan menyesuaikan dengan tema yang telah ditentukan.</li>
            </ul>
          </div>
          <div className="border-t-2 items-center text-center pt-7">
            <ButtonCardSub />
          </div>
        </div>
      </article>
      {/* Card 2 */}
      <article data-aos="fade-up" data-aos-duration="1000" className="rounded-2xl border-2 bg-white shadow-xl transition hover:shadow-2xl h-[780px] w-[318px]">
        <div className="flex flex-col gap-[94px] py-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-blackPrimary text-center">Komunitas Online Learning</h3>
            <ul className="list-outside list-disc text-md leading-6 text-blackSecondary px-8 ml-2">
              <li>Proses belajar menerapkan sistem pembelajaran Multi Channel Learning dengan menggunakan Learning Management System sebagai media pembelajaran</li>
              <li>Konten pembelajaran digital yang lebih beraneka ragam dan menarik</li>
              <li>Jadwal belajar seminggu 3x (tiga kali)</li>
              <li>Dua metode pembelajaran yaitu:</li>
              <ol className="list-decimal pt-[5px] text-xs font-normal">
                <li>Komunitas Online Learning Plus, menggunakan strategi pembelajaran personalized learning</li>
                <li>Komunitas Online Learning Reguler, menggunakan strategi pembelajaran group learning</li>
              </ol>
            </ul>
          </div>
          <div className="border-t-2 items-center text-center pt-7">
            <ButtonCardSub />
          </div>
        </div>
      </article>
      {/* Card 3 */}
      <article data-aos="fade-up" data-aos-duration="1000" className="rounded-2xl border-2 bg-white shadow-xl transition hover:shadow-2xl h-[780px] w-[318px]">
        <div className="flex flex-col gap-[275px] py-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-blackPrimary text-center">Distance Learning</h3>
            <ul className="list-outside list-disc text-md leading-6 text-blackSecondary px-8 ml-2">
              <li>Metode belajar mandiri</li>
              <li>Akan didukung kurikulum dan bahan ajar (modul belajar)</li>
              <li>Pendampingan belajar dilakukan oleh keluarga, tutor visit/bimbel</li>
              <li>Tempat dan waktu belajar fleksibel</li>
              <li>Orang tua dan murid dilibatkan dalam pemilihan jam belajar</li>
            </ul>
          </div>
          <div className="border-t-2 items-center text-center pt-7">
            <ButtonCardSub />
          </div>
        </div>
      </article>
      {/* Card 4 */}
      <article data-aos="fade-left" data-aos-duration="1000" className="rounded-2xl border-2 bg-white shadow-xl transition hover:shadow-2xl h-[780px] w-[318px]">
        <div className="flex flex-col gap-[220px] py-10">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-blackPrimary text-center">Distance Learning Tunggal</h3>
            <ul className="list-outside list-disc text-md leading-6 text-blackSecondary px-8 ml-2">
              <li>Metode belajar mandiri</li>
              <li>Dapat menggunakan kurikulum dan bahan ajar berdasarkan referensi yang dianjurkan oleh sekolah.</li>
              <li>Pendampingan belajar dilakukan oleh keluarga, tutor visit/bimbel</li>
              <li>Tempat dan waktu belajar fleksibel</li>
              <li>Hadir ke sekolah hanya pada saat evaluasi belajar.</li>
            </ul>
          </div>
          <div className="border-t-2 items-center text-center pt-7">
            <ButtonCardSub />
          </div>
        </div>
      </article>
    </>
  );
}

export default ArticleSubProgram;
