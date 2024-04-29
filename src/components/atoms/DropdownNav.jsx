import React, { useState } from 'react';

function DropdownNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
        <div>
            <button type="button" onClick={toggleDropdown} id='options-menu' aria-haspopup="true" aria-expanded="true" className="border-2 border-biruPrimary rounded-lg text-biruPrimary px-4 py-1.5 font-medium flex justify-between items-center gap-2 hover:shadow-md">
                <img src="/src/assets/ID.png" alt="" />
                <img src="/src/assets/dropdown.svg" alt="" />
            </button>
        </div>
        {/* Hamburger Button */}
        {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-biruPrimary">
            <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-biruPrimary hover:font-semibold"
                role="menuitem"
                >
                Bahasa Indonesia
                </a>
                <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-biruPrimary hover:font-semibold"
                role="menuitem"
                >
                English
                </a>
            </div>
            </div>
        )}
        </div>
    );
};

export default DropdownNav;