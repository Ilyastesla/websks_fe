import { useTranslation } from "react-i18next"
import ButtonCardSub from "../atoms/ButtonCardSub"

function ArticleSubProgram() {
  const { t } = useTranslation()
  const cards = t('cardsubprogram.cards', { returnObjects: true })
  return (
    <>
      {cards?.map((card, index) => (
        <article key={index} className="rounded-2xl border-2 bg-white shadow-xl transition hover:shadow-2xl h-[780px] w-[318px]">
          <div className={`flex flex-col ${card.gap} py-10`}>
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