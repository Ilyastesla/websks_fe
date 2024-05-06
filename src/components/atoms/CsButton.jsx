import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const CsButton = () => {
  return (
    <a href="#" className="text-white bg-[#37B02D] flex gap-2 py-3 px-5 rounded-full fixed bottom-10 right-5 z-50">
      <FaWhatsapp size={30} className="text-white" /> <span className="my-auto text-lg">Hubungi Kami</span>
    </a>
  );
};

export default CsButton;
