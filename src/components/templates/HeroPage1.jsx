
import dot from '../../assets/heropage2/dot.svg'

const HeroPage2 = ({ backgroundClass, title, pointsLeft, pointsRight, imageSrc, cover }) => (
    <div className={backgroundClass}>
        <div>
            <h2 className="ml-12 pt-8 text-3xl font-bold text-white">{title}</h2>
        </div>
        <div className="ml-12 grid grid-cols-[40%_60%] text-white gap-2 mt-10">
            <ul className="text-xl">
                {pointsLeft.map((point, index) => (
                    <li key={index} className="mb-6">
                        <img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" />
                        {point}
                    </li>
                ))}
            </ul>
            <ul className="text-lg flex flex-col justify-between mb-0">
                {pointsRight.map((point, index) => (
                    <li key={index} className="mb-6">
                        <img src={dot} alt="dot" className="inline-block h-4 w-4 mr-2" />
                        {point}
                    </li>
                ))}
                <li className="flex justify-end">
                    <img src={imageSrc} alt="image" className="w-auto h-auto mb-0 mt-[-18.6rem]" />
                </li>
            </ul>
        </div>
        <div className="relative w-full h-full -mt-20">
            <img src={cover} alt="cover" className="w-full h-auto" />
        </div>
    </div>
)

export default HeroPage2