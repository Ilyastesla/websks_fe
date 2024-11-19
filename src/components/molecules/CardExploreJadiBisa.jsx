import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

const CardExploreJadiBisa = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-55 h-[22em] flex flex-col ">
      <div className="h-32 w-full overflow-hidden rounded-lg mb-2">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
      </div>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="text-gray-500 text-sm mt-1">
        Lorem ipsum dolor <br />
        sit amet <br />
        consectetur
      </p>

      <Link
        to="/DetailArtikel"
        className="flex items-center text-biruPrimary  my-2 pt-5 group-hover:text-white"
      >
        <span className="mr-2">Selengkapnya</span>
        <HiOutlineArrowRight />
      </Link>
    </div>
  );
};

export default CardExploreJadiBisa;
