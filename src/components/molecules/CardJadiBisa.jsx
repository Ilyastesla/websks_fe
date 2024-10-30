const CardJadiBisa = ({ ProfilePicture }) => {
  return (
    <div className="place-content-start  my-1 mx-1  ">
      <div className="h-[308px]">
        <img
          src={ProfilePicture}
          alt=""
          className="object-none shadow-xl w-full h-full "
        />
      </div>
    </div>
  );
};

export default CardJadiBisa;
