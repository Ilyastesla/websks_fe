export default function GalleryImageCard({ source }) {
  return (
    <div className="rounded-md box-border overflow-hidden group-hover:border-4 hover:border-kuningPrimary relative group cursor-pointer">
      <img
        src={source}
        alt="Gallery Content"
        className="duration-500 filter group-hover:brightness-75 group-hover:scale-125"
      />
      <p className="text-transparent group-hover:text-white duration-500 group-hover:block text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        Lorem ipsum dolor.
      </p>
    </div>
  )
}
