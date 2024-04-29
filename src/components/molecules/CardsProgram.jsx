import CardProgram from "../atoms/CardProgram"

const CardsProgram = () => {
  const program = [
    {
      img: 'images/HomeSchoolingKakSeto.png',
      tingkat: 'TK SD SMP SMA',
      title: 'Homeschooling Kak Seto',
      description: 'Proses pembelajaran yang fleksibel, menyenangkan, dan berbasis at home yang dilakukan dimana saja, kapan saja, dan dengan siapa saja melalui 4 (empat) pilihan program belajar untuk jenjang SD, SMP, dan SMA.',
      link: 'homeschooling-kak-seto'
    },
    {
      img: 'images/KakSetoSchool.png',
      title: 'Kak Seto School',
      description: 'Proses pembelajaran jenjang SD berbasis TIK dan ramah anak dalam mengembangkan potensi dan karakter positif yang sesuai dengan keunikan serta kebutuhan anak yang diselenggarakan berdasarkan prinsip-prinsip pendidikan.',
      link: 'kak-seto-school'
    },
    {
      img: 'images/SekolahKhususKakSeto.png',
      title: 'Sekolah Khusus Kak Seto',
      description: 'Pendidikan berbasis Vokasi,  Life Skill, dan aplikatif untuk mengembangkan potensi peserta didik berkebutuhan khusus, baik Jenjang SD maupun SMP dengan Supporting Program Inklusi & Remedial Perilaku.',
      link: 'sekolah-khusus-kak-seto'
    },
    {
      img: 'images/KakSetoLearningCenter.png',
      title: 'Kak Seto Learning Center',
      description: 'Lembaga Bimbingan Belajar dan Kursus yang diselenggarakan secara offline/online, baik individual maupun grup untuk meningkatkan keterampilan dan minat bakat peserta didik.',
      link: 'kak-seto-learning-center'
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-6">
      {program?.map((item, index) => (
        <CardProgram
          key={index}
          img={item?.img}
          title={item?.title}
          description={item?.description}
          link={item?.link}
        />
      ))}
    </div>
  )
}
export default CardsProgram