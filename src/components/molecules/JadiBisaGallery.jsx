import React from "react";
import GalleryImageCard from "../atoms/GalleryImageCard";
import BASE_URL from "../../main";

export default function JadiBisaGallery() {
  const galleryData = [
    {
      link: BASE_URL + "images/jadi-bisa/content_1.webp",
    },
    {
      link: BASE_URL + "images/jadi-bisa/content_2.webp",
    },
    {
      link: BASE_URL + "images/jadi-bisa/content_3.webp",
    },
    {
      link: BASE_URL + "images/jadi-bisa/content_4.webp",
    },
    {
      link: BASE_URL + "images/jadi-bisa/content_5.webp",
    },
    {
      link: BASE_URL + "images/jadi-bisa/content_6.webp",
    },
  ];
  return (
    <div>
      <div className="mx-auto mt-5 px-5 max-w-[75em] grid grid-cols-1 gap-1 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {galleryData?.map((item, index) => (
          <GalleryImageCard key={index} source={item?.link} />
        ))}
      </div>
    </div>
  );
}
