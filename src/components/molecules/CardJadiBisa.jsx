const CardJadiBisa = ({ ProfilePicture, name }) => {
  return (
    <div className="relative h-[300px] my-1 mx-1 group">
      {/* Gambar */}
      <img src={ProfilePicture} alt="" className="object-cover shadow-xl w-full h-full" />

      {/* Overlay Nama */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-2xl font-semibold text-white bg-black bg-opacity-30 rounded-xl px-4 py-2 mb-6">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default CardJadiBisa;
