const Location = ({ children, backgroundColor, borderColor }) => {
  return (
    <div className="relative">
      <h1 className={`${backgroundColor} left-0 right-0 -top-20 md:-top-24 text-white text-3xl px-2 md:text-5xl font-semibold leading-[52.8px] text-center md:py-4 border-[3px] ${borderColor} md:w-[598px] max-w-[598px] mx-auto md:px-0 rounded-[12px] xl:rounded-[20px] w-fit z-[2] absolute`}>
        {children}
      </h1>
    </div>
  )
}

export default Location