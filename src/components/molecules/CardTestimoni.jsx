const CardTestimoni = ({ ProfilePicture, name, position, comment }) => {
  return (
    <div className="grid place-content-center mx-3">
      <div className="translate-y-1/2 rounded-full mx-auto w-40 h-40 xl:w-auto">
        <img src={ProfilePicture} alt="" className="object-cover w-40 h-40 rounded-full"/>
      </div>
      
      <div className="bg-white min-h-[500px] max-h-[500px] pt-24 px-5 pb-20 rounded-xl text-center shadow-xl ">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">{name}</h2>
          <p className="text-gray-400">{position}</p>
        </div>
        <div className="text-gray-700 h-[250px]  overflow-y-auto" dangerouslySetInnerHTML={{ __html: comment }} />

      </div>
    </div>
  )
}

export default CardTestimoni
