import React from 'react';
import LogoSKS from '../../assets/Logo-Sekolah-Kak-Seto-(White).png';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-biruPrimary py-16 mt-24">
      <div className="container container-lg mx-auto text-white py-20">
        <div className="lg:flex justify-between">
          <div className="flex flex-col gap-10">
            <img src={LogoSKS} alt="gambar" className="max-w-40 max-h-40" />
            <ul className="flex flex-col gap-6">
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
              <li className="flex gap-10 mt-5">
                <FaInstagram size={25}/>
                <FaFacebook  size={25}/>
                <FaYoutube   size={25}/>
                <FaTwitter   size={25}/>
                <FaWhatsapp  size={25}/>
              </li>
            </ul>
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col gap-10">
              <h2 className="text-2xl font-semibold">Unit Sekolah</h2>
              <ul className="flex flex-col gap-6">
                <li>Home</li>
                <li>Artikel</li>
              </ul>
            </div>
            <div className="flex flex-col gap-10">
              <h2 className="text-2xl font-semibold">Program</h2>
              <ul className="flex flex-col gap-6">
                <li>Download</li>
                <li>Help Center</li>
                <li>Guides</li>
              </ul>
            </div>
            <div className="flex flex-col gap-10 max-w-64">
              <h2 className="text-2xl font-semibold">Tautan Bermanfaat</h2>
              <ul className="flex flex-col gap-6">
                <li>cskakseto@gmail.com</li>
                <li>+62 888-8888-8888</li>
                <li>Jl. Raya Parigi Lama No.3A, Parigi, Kec. Pd. Aren, Kota Tangerang Selatan, Banten</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container container-lg mx-auto flex justify-center text-white pt-10 border-t'>
        <p>Sekolah Kak Seto. - © 2023 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
