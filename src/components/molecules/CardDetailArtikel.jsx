import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';

const CardDetailArtikel = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full lg:h-[9em] max-w-lg grid grid-cols-3 gap-4 items-center">
      <div className="lg:col-span-1 md:col-span-3 w-24 h-24 overflow-hidden rounded-lg">
        <img src={imgSrc} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="lg:col-span-2 md:col-span-3 sm:col-span-3 xs:col-span-3">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-gray-500 text-sm mt-1">{description}</p>

        <Link
          to="/DetailArtikel"
          className="flex items-center text-biruPrimary mt-4 hover:underline"
        >
          <span className="mr-2 lg:text-[0.8em] md:text-[0.8em] sm:text-[0.8em] xs:text-[0.6em]">
            Selengkapnya
          </span>
          <HiOutlineArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default CardDetailArtikel;
