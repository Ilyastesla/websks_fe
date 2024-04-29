import React from 'react';

const CardTestimoni = ({ProfilePicture, name, position, comment}) => {
  return (
    <div className="max-w-96 mx-auto">
      <img src={ProfilePicture} alt="" className="translate-y-1/2 mx-auto" />
      <div className="bg-white pt-28 px-12 pb-20 rounded-xl text-center shadow-xl">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">{name}</h2>
          <p className="text-gray-400">{position}</p>
        </div>
        <p className="text-gray-700">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default CardTestimoni;
