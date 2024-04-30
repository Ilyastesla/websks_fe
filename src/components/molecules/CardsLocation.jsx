import CardLocation from "../atoms/CardLocation"

const CardsLocation = () => {
  const location = [
    {
      bgImg: 'images/FotoCabangDepok.png',
      title: 'HSKS Cabang Depok',
      address: 'Jl. Putri Tunggal No.53, Harjamukti, Kec. Cimanggis, Kota Depok, Jawa Barat 16454',
      link: 'https://maps.app.goo.gl/Ahe8jfQK4oSq8jcf7'
    },
    {
      bgImg: 'images/FotoCabangPekanbaru.png',
      title: 'HSKS Cabang Pekanbaru',
      address: 'Jl. Letjend.S.Parman No.05, Suka Maju, Kec. Sail, Kota Pekanbaru, Riau 28131',
      link: 'https://maps.app.goo.gl/owXYKjkEDoXpCiwq6'
    },
    {
      bgImg: 'images/FotoCabangBekasi.png',
      title: 'HSKS Cabang Bekasi',
      address: 'Jl. Puncak Cikunir No.5-6, Jakasampurna, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17145',
      link: 'https://maps.app.goo.gl/zeBUpoPVPe9dnWh29'
    },
  ]
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 grid-flow-row gap-6 mx-12 mb-4">
      {location?.map((item, index) => (
        <CardLocation
          key={index}
          bgImg={item?.bgImg}
          title={item?.title}
          address={item?.address}
          link={item?.link}
        />
      ))}
    </div>
  )
}

export default CardsLocation