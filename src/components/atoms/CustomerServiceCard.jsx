import React from "react";

export default function CustomerServiceCard({ title, avatarUrl, redirectUrl }) {
  return (
    <div>
      <a
        href={redirectUrl}
        className="flex gap-8 items-center border border-gray-300 shadow-lg py-5 px-8 w-full bg-white rounded-2xl transition-all duration-150 hover:shadow-2xl hover:scale-[102%] hover:border-biruPrimary lg:w-[35rem]"
      >
        <img src={avatarUrl} className="w-16" alt="Avatar Image" />
        <h1 className="font-semibold text-biruPrimary leading-6 text-xl mg:text-2xl">
          {title}
        </h1>
      </a>
    </div>
  );
}
