import NavbarUndangan from "../molecules/NavbarUndangan"

const UndanganTemplate = ({ children }) => {
  return (
    <div className="relative h-screen max-w-[414px] flex flex-col justify-between mx-auto bg-biruUndangan text-krem2Undangan pattern-undangan">
      <div className="absolute left-0 right-0 flex justify-center mt-[41px]">
        <img src="/images/undangan/Logo+Tulisan1.svg" width={160} className="mb-4" alt="Logo+Tulisan1" />
      </div>
      <div className="top-32 left-0 right-0 absolute mx-10 rounded-lg text-center z-50">
        {children}
      </div>
      <img src="/images/undangan/gedung1.png" alt="" className="absolute bottom-0" />
      <img src="/images/undangan/sampulkiri.png" alt="" className="absolute h-screen left-0" />
      <img src="/images/undangan/sampulkanan.png" alt="" className="absolute h-screen right-0" />
      <NavbarUndangan />
    </div>
  )
}

export default UndanganTemplate