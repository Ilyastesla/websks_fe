import React from "react";

export default function GalleryImageCard({ source }) {
  return (
    <div className="rounded-md overflow-hidden hover:border-4 hover:border-kuningPrimary">
      <img
        src={source}
        alt="Gallery Content"
        className="transition duration-500 hover:scale-125"
      />
    </div>
  );
}
