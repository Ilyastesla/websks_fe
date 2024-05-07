import { useTranslation } from "react-i18next"
import ButtonCardSub from '../atoms/ButtonCardSub'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function ArticleSubProgram() {
  useEffect(() => {
    AOS.init()
  })

  const { t } = useTranslation()
  const cards = t('cardsubprogram.cards', { returnObjects: true })
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