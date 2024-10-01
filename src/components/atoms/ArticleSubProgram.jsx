import ButtonCardSub from '../atoms/ButtonCardSub'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function ArticleSubProgram({title,body,link,picture,animate}) {
  return (
    <>
        <div data-aos={animate} data-aos-duration="1000" className="rounded-2xl border-2 bg-white shadow-xl transition hover:shadow-2xl h-[780px] w-[318px] ">
          <div className={`flex flex-col py-10 h-full justify-between`}>
            <div className="flex flex-col gap-6 px-10">
              <h3 className="text-2xl font-semibold text-blackPrimary text-center">{title}</h3>
              <div className="list-disc" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <div className="border-t-2 items-center text-center pt-7">
              <ButtonCardSub />
            </div>
          </div>
        </div>
    </>
  )
}