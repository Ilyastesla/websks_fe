import React from 'react';
import LogoSKS from '../../assets/Logo-Sekolah-Kak-Seto-(White).png';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-biruPrimary py-16 mt-24 px-5">
      <div className="container container-lg mx-auto text-white py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 justify-between">
          <div className="flex flex-col gap-5">
            <img src={LogoSKS} alt="gambar" className="max-w-40 max-h-40" />
            <ul className="flex flex-col gap-3">
              <li>
                <h3 className="text-lg font-semibold">Kreatif</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold">Cerdas</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold">Ceria</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </li>
              <li className="flex gap-5 mt-7">
                <FaInstagram size={25}/>
                <FaFacebook  size={25}/>
                <FaYoutube   size={25}/>
                <FaTwitter   size={25}/>
                <FaWhatsapp  size={25}/>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold mb-4">Unit Sekolah</h2>
            <ul className="flex flex-col gap-4">
              <li>Home</li>
              <li>Artikel</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold mb-4">Program</h2>
            <ul className="flex flex-col gap-4">
              <li>Download</li>
              <li>Help Center</li>
              <li>Guides</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold mb-4">Tautan Bermanfaat</h2>
            <ul className="flex flex-col gap-4">
              <li>cskakseto@gmail.com</li>
              <li>+62 888-8888-8888</li>
              <li>Jl. Raya Parigi Lama No.3A, Parigi, Kec. Pd. Aren, Kota Tangerang Selatan, Banten</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container container-lg text-center flex justify-center text-white pt-10 border-t'>
        <p>Sekolah Kak Seto. - © 2023 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
