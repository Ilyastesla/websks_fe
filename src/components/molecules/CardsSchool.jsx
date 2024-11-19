import CardSchool from '../atoms/CardSchool';
import { useDataSekolah } from '../../features/useDataSekolah';
import Loading from '../atoms/Loading';
import { useEffect } from 'react';

const CardsSchool = () => {
  const { isLoading, data: dataSekolah, fetchDataSekolah } = useDataSekolah();
  useEffect(() => {
    fetchDataSekolah();
  }, []);
  const animatecardschool = ['fade-right', 'fade-up', 'fade-up', 'fade-left'];

  return (
    <div className="grid grid-cols-1 mx-12 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-6">
      {isLoading && <Loading />}

      {!isLoading &&
        dataSekolah.data &&
        dataSekolah.data.map((sekolah, index) => (
          <CardSchool
            key={sekolah.idsekolah}
            img="images/KakSetoSchool.png"
            title={sekolah.namasekolah}
            description={sekolah.description}
            link={sekolah.link}
            animate={animatecardschool[index]}
            index={index}
          />
        ))}
    </div>
  );
};
export default CardsSchool;
