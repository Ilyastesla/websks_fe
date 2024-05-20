import React from "react";
import { Helmet } from "react-helmet";
import CustomerServiceCards from "../molecules/CustomerServiceCards";

export default function LinktreePage() {
  return (
    <>
      <Helmet>
        <title>Customer Service - Sekolah Kak Seto</title>
      </Helmet>
      <div className="bg-[#EEEBE3] pattern lg:h-full">
        <div className="max-w-[80rem] mx-auto px-5 py-24 md:py-24 flex flex-col items-center">
          <img
            src="/images/Logo Sekolah Kak Seto.png"
            alt="Logo Sekolah Kak Seto"
            className="w-36"
          />
          <h1 className="font-bold text-3xl mt-5">Sekolah Kak Seto</h1>
          <p className="leading-5 max-w-[24rem] text-xl text-center mt-2">
            Diskusi dengan CS Sekolah Kak Seto klik tombol dibawah ini
          </p>
          <CustomerServiceCards />
        </div>
      </div>
    </>
  );
}
