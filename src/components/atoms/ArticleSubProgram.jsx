import ButtonCardSub from '../atoms/ButtonCardSub';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ArticleSubProgram({ title, body, link, picture, animate }) {
  return (
    <>
      <div
        className="
      bg-white min-h-[780px] pt-10 px-10 rounded-2xl border-2 shadow-xl md:max-h-[780px] md:overflow-y-auto	"
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-blackPrimary text-center pb-6">
              {title}
            </h3>
            <div className="list-disc " dangerouslySetInnerHTML={{ __html: body }} />
          </div>
          <div className="border-t-2 text-center pt-7 pb-8">
            <ButtonCardSub />
          </div>
        </div>
      </div>
    </>
  );
}
