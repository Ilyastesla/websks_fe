const CardTutor = ({ bgImg, name }) => {
  return (
    <div className="shadow-xl my-5 mx-auto items-center rounded-2xl bg-cover text-white w-80 h-[400px]" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="flex flex-col justify-end w-full h-full bg-gradient-to-t from-black/80 from-10% to-red/50 to-90% px-5 py-10 rounded-2xl">
        <h1 className="text-2xl font-semibold mb-1 text-center">{name}</h1>
      </div>
    </div>
  )
}

export default CardTutor
