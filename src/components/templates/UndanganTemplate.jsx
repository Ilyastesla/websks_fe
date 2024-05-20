import NavbarUndangan from "../molecules/NavbarUndangan"

const UndanganTemplate = ({ children }) => {
  return (
    <div className="relative h-screen max-w-[414px] flex flex-col justify-between mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-700 via bg-neutral-800 to-neutral-900 text-white undangan">
      <div className="m-5 h-screen border-4 border-kremUndangan rounded-lg text-center">
        {children}
      </div>
      <img src="images/undangan/gudang1.png" alt="" />
      <NavbarUndangan />
    </div>
  )
}

export default UndanganTemplate