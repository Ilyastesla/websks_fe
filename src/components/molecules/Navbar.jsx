import ButtonNav from "../atoms/ButtonNav"
import DropdownNav from "../atoms/DropdownNav"
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className="border-b-2 bg-white/80 backdrop-blur-xl container fixed z-50 top-0">
                <div className="xl:mx-auto mx-4 max-w-screen-xl xl:h-32">
                    <div className="flex items-center justify-between xl:py-7 py-2">
                        <a className="" href="/">
                            <img className="xl:w-auto w-24" src="/src/assets/Logo Sekolah Kak Seto.png" alt="" /> 
                        </a>
                        <div className="hidden md:block">
                            <nav aria-label="global">
                                <ul className="flex items-center gap-7 text-lg">
                                    <li>
                                        <a className="text-blackSecondary hover:text-biruPrimary hover:font-semibold" href="#"> Seputar Sekolah</a>
                                    </li>
                                    <li>
                                        <a className="text-blackSecondary hover:text-biruPrimary hover:font-semibold" href="#"> Promo </a>
                                    </li>
                                    <ButtonNav/>
                                    <DropdownNav/>
                                </ul>
                            </nav>
                        </div>
                        <div className="md:hidden flex gap-2">
                            <DropdownNav/>
                            <div className="">
                                <button
                                    className="text-biruPrimary focus:outline-none"
                                    onClick={toggleNavbar}
                                >
                                    <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    {isOpen ? (
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    ) : (
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                        ></path>
                                    )}
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } md:hidden absolute top-16 left-0 w-full bg-biruPrimary`}
                        >
                            <ul className="flex flex-col space-y-4 p-4">
                                <li>
                                    <a href="#" className="text-white hover:text-gray-300">
                                        Seputar Sekolah
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-gray-300">
                                        Promo
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-gray-300">
                                        Daftar Peserta Didik Baru
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
