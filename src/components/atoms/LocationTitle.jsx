const Location = ({ children, backgroundColor, borderColor }) => {
  return (
    <div>
      <h1 className={`${backgroundColor} text-white text-5xl font-semibold leading-[52.8px] text-center py-4 rounded-[20px] border-[3px] ${borderColor} max-w-[598px] mx-auto relative left-0 right-0 z-[2]`}>
        {children}
      </h1>
    </div>
  )
}

export default Location