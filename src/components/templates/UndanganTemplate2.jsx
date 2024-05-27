import NavbarUndangan from '../molecules/NavbarUndangan'

const UndanganTemplate2 = ({ children }) => {
  return (
    <div className="relative h-screen max-w-[414px] flex flex-col justify-between mx-auto bg-biruUndangan text-krem2Undangan undangan pattern-undangan">
      <div className="flex justify-center mt-[25px] xs:mt-[41px]">
        <img src="/images/undangan/Logo+Tulisan1.svg" className="mb-4 w-[100px] xs:w-[160px]" alt="Logo+Tulisan1" />
      </div>
      <div className="absolute left-0 right-0 top-20 xs:top-40 mx-10 rounded-lg text-center z-50">{children}</div>
      <img src="/images/undangan/gedung1.png" alt="" className="absolute bottom-0" />
      <img src="/images/undangan/border2-left.svg" alt="" className="absolute h-screen left-0" />
      <img src="/images/undangan/border2-left.svg" alt="" className="absolute h-screen right-0" />
      <NavbarUndangan />
    </div>
  )
}

export default UndanganTemplate2
