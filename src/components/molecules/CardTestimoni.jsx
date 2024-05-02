const CardTestimoni = ({ ProfilePicture, name, position, comment }) => {
  return (
    <div className="xl:max-w-96 mx-6 xl:mx-auto">
      <img src={ProfilePicture} alt="" className="translate-y-1/2 mx-auto w-32 xl:w-auto" />
      <div className="bg-white pt-20 xl:pt-28 px-6 xl:px-12 pb-10 xl:pb-20 rounded-xl text-center shadow-xl">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">{name}</h2>
          <p className="text-gray-400">{position}</p>
        </div>
        <p className="text-gray-700">
          {comment}
        </p>
      </div>
    </div>
  )
}

export default CardTestimoni
