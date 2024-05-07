import { useTranslation } from "react-i18next"
import CardProgram from "../atoms/CardProgram"

const CardsProgram = () => {
  const { t } = useTranslation()
  const program = [
    {
      img: "images/HomeSchoolingKakSeto.png",
      tingkat: "TK SD SMP SMA",
      title: "Homeschooling Kak Seto",
      description: t('cardsprogram.program1'),
      link: "homeschooling-kak-seto",
      animate: "fade-right"
    },
    {
      img: "images/KakSetoSchool.png",
      title: "Kak Seto School",
      description: t('cardsprogram.program2'),
      link: "kak-seto-school",
      animate: "fade-up"
    },
    {
      img: "images/SekolahKhususKakSeto.png",
      title: "Sekolah Khusus Kak Seto",
      description: t('cardsprogram.program3'),
      link: "sekolah-khusus-kak-seto",
      animate: "fade-up"
    },
    {
      img: "images/KakSetoLearningCenter.png",
      title: "Kak Seto Learning Center",
      description: t('cardsprogram.program4'),
      link: "kak-seto-learning-center",
      animate: "fade-left"
    },
  ]

  return (
    <div className="grid grid-cols-1 mx-12 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-6">
      {program?.map((item, index) => (
        <CardProgram key={index} img={item?.img} title={item?.title} description={item?.description} link={item?.link} animate={item.animate} />
      ))}
    </div>
  )
}
export default CardsProgram
