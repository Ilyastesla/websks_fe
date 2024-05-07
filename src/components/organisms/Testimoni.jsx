import CardTestimoni from './../molecules/CardTestimoni'
import CardTutor from '../molecules/CardTutor'
import CsVirtual from '/images/Content-CS-VIRTUAL-768x424.png'
import { useTranslation } from 'react-i18next'

const dataTutor = [
  { bgImg: 'images/Foto-tutor1.png', name: 'Mirna Ferdiyawati, S.Pd., M.M.' },
  { bgImg: 'images/Foto-tutor2.png', name: 'Imelda Julistiyanto Wahyunin, S.Pd.' },
  { bgImg: 'images/Foto-tutor3.png', name: 'Ratih Puspita Sari, S.Pd.' },
  { bgImg: 'images/Foto-tutor4.png', name: 'Aldiyan Saputra, S.Pd., M.M. ' },
]

const Testimoni = ({ theme }) => {
  const { t } = useTranslation()
  const dataTestimoni = t('testimoni.datatestimoni', { returnObjects: true })

  return (
    <div className={`pattern ${theme} pb-32 mt-24`}>
      <div className={`-translate-y-1/2 border-2 border-black ${theme} text-white xl:px-10 py-4 xl:py-6 mx-auto w-fit max-w-[598px] rounded-xl`}>
        <h1 className="text-3xl md:text-5xl font-semibold text-center">{t('testimoni.title')}</h1>
      </div>
      <div className="container mx-auto container-xl">
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3">
          {dataTestimoni.map((data, index) => (
            <CardTestimoni key={index} ProfilePicture={data.ProfilePicture} name={data.name} position={data.position} comment={data.comment} />
          ))}
        </div>
      </div>
      <div className="container mx-auto container-xl mt-32">
        <h1 className="text-3xl mx-4 md:text-5xl font-semibold text-white text-center mb-8">Tutor Homeschooling Kak Seto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center">
          {dataTutor.map((data, index) => (
            <CardTutor key={index} bgImg={data.bgImg} name={data.name} />
          ))}
        </div>
        <div className="relative max-w-max mx-auto mt-24">
          <img src={CsVirtual} alt="Gambar" className="h-auto" />
          <button className="absolute top-2/4 ml-9 border-b border-blue-500 text-blue-500 hover:font-semibold text-xl mt-5">Hubungi layanan pelanggan virtual &#8594;</button>
        </div>
      </div>
    </div>
  )
}

export default Testimoni
