import { Link, useLocation } from 'react-router-dom';
import siswaLulus from '../../../../public/siswaLulus.json';
import { useEffect, useState } from 'react';

const UndanganHome = ({ setIsHidden }) => {
  const [isButtonShow, setIsButtonShow] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nis = searchParams.get('nis') || 'NIS';
  const siswa = siswaLulus.RECORDS;

  const result = siswa.find((data) => data.nis === nis);
  useEffect(() => {
    if (!result) {
      setIsButtonShow(false);
    } else {
      setIsButtonShow(true);
    }
  }, [result]);
  
  const renderContent = () => {
    return (
      <div>
        {result ? (
          <>
            <p className="text-[20px] font-bold">{result.nama}</p>
            <p className="text-[12px]">{result.sekolah}</p>
          </>
        ) : (
          <p>Data Tidak Ditemukan</p>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div className="mb-4">
        <p className="font-poly text-[20px]">Undangan</p>
        <p className="font-meryChristole text-[35px] leading-tight">LEPAS KENANG</p>
        <p className="font-poly text-[30px]">2024</p>
      </div>

      <div className="mb-10">
        <p className="text-[13px] max-w-[246px] mb-4">Bersama Sekolah Kak Seto, Siapkan dirimu menuju masa depan</p>
        <p className="text-[13px]">20 - JUNI - 2024</p>
      </div>

      <div className="mb-8">
        <p className="text-[12px]">Kepada Yth.</p>
        {nis === 'NIS' ? (
          <>
            <p>Data Tidak Ditemukan</p>
          </>
        ) : (
          renderContent()
        )}
      </div>
      <Link to={`/undangan/acara?nis=${nis}`} className={`${isButtonShow ? '' : 'hidden'} text-[14px] font-semibold bg-krem2Undangan text-biruUndangan px-[20px] py-[15px] rounded-[5px]`}>
        <button
          onClick={() => {
            setIsHidden(false);
          }}
        >
          Buka Undangan
        </button>
      </Link>
    </div>
  );
};

export default UndanganHome;
