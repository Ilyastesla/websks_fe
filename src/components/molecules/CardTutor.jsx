const CardTutor = ({ ProfilePicture, name }) => {
  return (
    <div className="grid place-content-center mx-3">
      <div className="h-[500px]">
        <img
          src={ProfilePicture}
          alt=""
          className="bg-white object-none  w-full h-full rounded-xl text-center shadow-xl"
        />
        <h2 className="text-2xl font-semibold text-center text-white -mt-20 mb-14">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CardTutor;
