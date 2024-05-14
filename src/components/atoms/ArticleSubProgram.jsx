import ButtonCardSub from '../atoms/ButtonCardSub'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function ArticleSubProgram() {
  useEffect(() => {
    AOS.init()
  })

  const cards = [{
    gap: "gap-[251px]",
    animate: "fade-right",
    title: "Komunitas",
    points: [
      "Program belajar secara klasikal.",
      "Exclusive class (10 peserta didik dalam satu kelas)",
      "Jadwal belajar seminggu 3x (tiga kali)",
      "Pembelajaran akademik dilaksanakan di kelas",
      "Kegiatan non-akademik dilaksanakan menyesuaikan dengan tema yang telah ditentukan."
    ]
  },
  {
    gap: "gap-[94px]",
    animate: "fade-up",
    title: "Komunitas Online Learning",
    points: [
      "Proses belajar menerapkan sistem pembelajaran Multi Channel Learning dengan menggunakan Learning Management System sebagai media pembelajaran",
      "Konten pembelajaran digital yang lebih beraneka ragam dan menarik",
      "Jadwal belajar seminggu 3x (tiga kali)",
      "Dua metode pembelajaran yaitu:"
    ],
    subpoints: [
      "Komunitas Online Learning Plus, menggunakan strategi pembelajaran personalized learning",
      "Komunitas Online Learning Reguler, menggunakan strategi pembelajaran group learning"
    ]
  },
  {
    gap: "gap-[275px]",
    animate: "fade-up",
    title: "Distance Learning",
    points: [
      "Metode belajar mandiri",
      "Akan didukung kurikulum dan bahan ajar (modul belajar)",
      "Pendampingan belajar dilakukan oleh keluarga, tutor visit/bimbel",
      "Tempat dan waktu belajar fleksibel",
      "Orang tua dan murid dilibatkan dalam pemilihan jam belajar"
    ]
  },
  {
    gap: "gap-[220px]",
    animate: "fade-left",
    title: "Distance Learning Tunggal",
    points: [
      "Metode belajar mandiri",
      "Dapat menggunakan kurikulum dan bahan ajar berdasarkan referensi yang dianjurkan oleh sekolah.",
      "Pendampingan belajar dilakukan oleh keluarga, tutor visit/bimbel",
      "Tempat dan waktu belajar fleksibel",
      "Hadir ke sekolah hanya pada saat evaluasi belajar."
    ]
  }]
  return (
    <>
      {cards?.map((card, index) => (
        <article data-aos={card.animate} data-aos-duration="1000" key={index} className="rounded-2xl border-2 bg-white shadow-xl transition hover:shadow-2xl h-[780px] w-[318px] ">
          <div className={`flex flex-col py-10 h-full justify-between`}>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold text-blackPrimary text-center">{card.title}</h3>
              <ul className="list-outside list-disc text-md leading-6 text-blackSecondary px-8 ml-2">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
                {card.subpoints && (
                  <ol className="list-decimal pt-[5px] text-xs font-normal">
                    {card.subpoints.map((subpoint, i) => (
                      <li key={i}>{subpoint}</li>
                    ))}
                  </ol>
                )}
              </ul>
            </div>
            <div className="border-t-2 items-center text-center pt-7">
              <ButtonCardSub />
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export default ArticleSubProgram