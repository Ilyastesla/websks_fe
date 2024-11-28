const CardPageTutor = ({ ProfilePicture, name }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-55 h-[32em] flex flex-col ">
      <div className="h-full w-full overflow-hidden rounded-lg mb-2">
        <img src={ProfilePicture} className="object-cover w-full h-full" />
      </div>
      <h2 className=" text-center text-lg font-bold text-gray-900">{name}</h2>
    </div>
  );
};

export default CardPageTutor;
