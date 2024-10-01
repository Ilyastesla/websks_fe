import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { useEffect } from 'react'
import Loading from './Loading'
import AOS from 'aos'
import 'aos/dist/aos.css'


const CardSchool = ({ img, title, tingkat, description, link, animate }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div data-aos={animate} data-aos-duration="1000" className="flex flex-col justify-between border-2 shadow rounded-2xl px-[26px] py-10 flex-grow flex-shrink basis-0 group hover:bg-biruPrimary md:hover:!scale-110 hover:text-white">
      <Link to={link} target="_blank">
        <img src={img} alt={title} className="mx-auto mb-[14px] w-full" />
      </Link>
      <Link to={link} target="_blank">
        <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      </Link>
      <p className="text-xl font-medium">{tingkat}</p>
      <p>{description}</p>
      <Link
        to={link}
        target="_blank"
        className="flex items-center text-biruPrimary text-xl font-semibold my-2 group-hover:text-white"
      >
        <span className="mr-2">Selengkapnya</span>
        <HiOutlineArrowRight />
      </Link>
    </div>
  )
}

export default CardSchool
