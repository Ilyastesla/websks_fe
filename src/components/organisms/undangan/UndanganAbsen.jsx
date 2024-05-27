import { useLocation } from 'react-router';
import siswaLulus from '../../../assets/siswaLulus.json';

const UndanganAbsen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nis = searchParams.get('nis') || 'NIS';
  const siswa = siswaLulus.RECORDS;
  return (
    <>
      <h1 className='font-semibold text-xl xs:text-2xl'>Scan Kehadiran</h1>
      {siswa.map((data, index) => {
        if (data.nis == nis) {
          return <img key={index} src={`/qr-code/lepaskenang2024-${data.nis}.png`} alt="" className='mx-auto my-6 xs:my-10 w-[180px] xs:w-max'/>;
        }
      })}
      <p className='text-xs xs:text-sm'>Arahkan Barcode ke Scanner</p>
    </>
  );
};

export default UndanganAbsen;
