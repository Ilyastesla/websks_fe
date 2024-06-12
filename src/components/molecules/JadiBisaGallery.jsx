import GalleryImageCard from "../atoms/GalleryImageCard"

export default function JadiBisaGallery() {
  const galleryData = [
    {
      title: "Kegiatan EDUTRIP SMK",
      body: "EDUTRIP HSKS",
      link: "/images/jadi-bisa/content_1.webp",
    },
    {
      title: "Kegiatan Praktek Belajar",
      body: "Praktek Belajar HSKS",
      link: "/images/jadi-bisa/content_2.webp",
    },
    {
      title: "Kegiatan EDUCAMP",
      body: "Kegiatan Senam Pagi HSKS",
      link: "/images/jadi-bisa/content_3.webp",
    },
    {
      title: "Kegiatan Senam Pagi",
      body: "Belajar Pagi Hari HSKS",
      link: "/images/jadi-bisa/content_4.webp",
    },
    {
      title: "Kegiatan Belajar Pagi",
      body: "Belajar Pagi Hari HSKS",
      link: "/images/jadi-bisa/content_5.webp",
    },
    {
      title: "Kegiatan Fun Class",
      body: "Fun Class HSKS",
      link: "/images/jadi-bisa/content_6.webp",
    },
  ]
  return (
    <div>
      <div className="mx-auto mt-5 px-5 max-w-[75em] grid grid-cols-1 gap-1 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {galleryData?.map((item, index) => (
          <GalleryImageCard key={index} title={item?.title} body={item?.body} link={item?.link} />
        ))}
      </div>
    </div>
  )
}
