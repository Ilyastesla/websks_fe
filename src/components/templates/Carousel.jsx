import { useState, useEffect } from 'react'
import gambar1 from "../../assets/carousel/picture1.png"
import gambar2 from "../../assets/carousel/picture2.png"
import gambar3 from "../../assets/carousel/picture3.png"
import gambar4 from "../../assets/carousel/picture4.png"
import gambar5 from "../../assets/carousel/picture5.png"

const gambar = [
  gambar1,
  gambar2,
  gambar3,
  gambar4,
  gambar5,
]

const Carousel = () => {
  const [indexAktif, setIndexAktif] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAktif((indexAktif) => (indexAktif + 1) % gambar.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='block text-center p-6 font-semibold'>
        <span className='text-2xl bg-red-500 text-white mx-2 rounded-md text-bold'>#JadiBisa</span>
        <span className='text-2xl'>Bersama Sekolah Kak Seto</span>
      </div>
      <div className=" px-auto relative w-full h-screen grid grid-cols-3 gap-4" style={{ gridTemplateColumns: '200px auto 200px' }}>

        <div className="col-span-1" style={{ overflow: 'hidden' }}>

          <img
            src={gambar[(indexAktif - 1 + gambar.length) % gambar.length]}
            alt={`Slide ${indexAktif}`}
            style={{ width: 200, height: 392 }}
            className="px-auto w-full h-auto object-cover"
          />
        </div>
        <div className="col-span-1">
          <img
            src={gambar[indexAktif]}
            alt={`Slide ${indexAktif + 1}`}
            style={{ width: 1028, height: 450 }}
            className="mx-auto w-full h-auto object-cover "
          />
          <div className="col-span-1 flex justify-center">
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              {gambar.map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: idx === indexAktif ? 'black' : 'gray',
                    margin: '0 5px',
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-end" style={{ overflow: 'hidden' }}>
          <img
            src={gambar[(indexAktif + 1) % gambar.length]}
            alt={`Slide ${indexAktif + 2}`}
            style={{ width: 200, height: 392 }}
            className="px-auto w-full h-auto object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default Carousel;

