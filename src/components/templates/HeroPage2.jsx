import dot from '../../assets/heropage2/dot.svg'
import image from '../../assets/heropage2/image1.png'
import cover from '../../assets/heropage2/cover.png'

const HeroPage2 = () => {
  return (
    <div className="bgbiru">
      <div>
        <h2 className="ml-12 pt-8 text-3xl font-bold text-white">Kenapa Sih Pilih Homeschooling Kak Seto?</h2>
      </div>
      <div className=" ml-12 grid grid-cols-[40%_60%] text-white gap-2 mt-10">
        <ul className="text-xl">
          <li className='mb-6'><img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" /> Berdiri sejak 2007</li>
          <li className='mb-6'><img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" /> Tutor Ramah Anak dan Berpengalaman</li>
          <li className='mb-6'><img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" /> Mencetak Alumni ke PTN, PTS, dan PTLN</li>
          <li className='mb-6'><img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" /> Lingkungan sekolah yang supportif</li>
        </ul>
        <ul className="text-lg flex flex-col justify-between mb-0">
          <li className='mb-6'><img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" /> Terakreditasi A</li>
          <li className='mb-6'><img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" /> Metode Belajar yang Menyenangkan</li>
          <li className='mb-6'><img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" /> Tempat dan Waktu Belajar Fleksibel</li>
          <li className="flex justify-end">
            <img src={image} alt="image" className="w-auto h-auto mb-0 mt-[-18.6rem]" />
          </li>
        </ul>
      </div>
      <div className="relative w-full h-full -mt-20">
        <img src={cover} alt="cover" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default HeroPage2
