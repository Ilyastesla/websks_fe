import NavbarUndangan from "../molecules/NavbarUndangan"

const UndanganTemplate = ({ children }) => {
  return (
    <div className="h-screen max-w-[441px] flex flex-col justify-between items-center mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-700 via bg-neutral-800 to-neutral-900 text-white">
      {children}
      <NavbarUndangan />
    </div>
  )
}

export default UndanganTemplate