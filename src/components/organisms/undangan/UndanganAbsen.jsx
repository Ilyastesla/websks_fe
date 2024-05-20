import siswaLulus from '../../../../public/siswaLulus.json';

const UndanganAbsen = () => {
  const siswa = siswaLulus.RECORDS;
  console.log(typeof siswa[0].nis);
  return (
    <>
      <div>UndanganAbsen</div>
      {siswa.map((data, index) => {
        if (data.nis == '1512305003') {
          return <li key={index}>{data.nama}</li>;
        }
      })}
    </>
  );
};

export default UndanganAbsen;
