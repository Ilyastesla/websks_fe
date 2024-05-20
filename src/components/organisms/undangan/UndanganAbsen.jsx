import { useLocation } from 'react-router';
import siswaLulus from '../../../../public/siswaLulus.json';

const UndanganAbsen = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nis = searchParams.get('nis') || 'Nama Tamu';
  const siswa = siswaLulus.RECORDS;
  return (
    <>
      <h1 className='font-semibold text-2xl'>Scan Kehadiran</h1>
      {siswa.map((data, index) => {
        if (data.nis == nis) {
          return <img key={index} src={`/qr-code/lepaskenang2024-${data.nis}.png`} alt="" className='mx-auto my-10'/>;
        }
      })}
      <p className='text-sm'>Arahkan Barcode ke Scanner</p>
    </>
  );
};

export default UndanganAbsen;
