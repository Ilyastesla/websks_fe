import dot from '../../assets/heropage2/dot.svg'

const HeroPage2 = ({ backgroundClass, title, pointsLeft, pointsRight, imageSrc, cover, classNameImg }) => (
  <div className={`${backgroundClass} mt-[80px] xl:mt-32`}>
    <div>
      <h2 className="pt-8 text-3xl font-bold text-white mx-10 sm:mx-12 ">{title}</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-[40%_60%] text-white gap-2 mt-10 ml-4 mr-4 sm:ml-12 sm:mr-0">
      <ul className="text-xl">
        {pointsLeft.map((point, index) => (
          <li key={index} className="flex items-center mb-6">
            <img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" />
            {point}
          </li>
        ))}
      </ul>
      <ul className="text-lg flex flex-col mb-0">
        {pointsRight.map((point, index) => (
          <li key={index} className="flex items-center mb-6 max-w-[400px]  max-md:mr-8">
            <img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" />
            {point}
          </li>
        ))}
        <li className="lg:flex justify-end hidden">
          <img src={imageSrc} alt="image" className={classNameImg} />
        </li>
      </ul>
    </div>
    <div className="relative w-full h-full -mt-4 lg:-mt-20 ">
      <img src={cover} alt="cover" className="w-full h-auto" />
    </div>
  </div>
)

export default HeroPage2
