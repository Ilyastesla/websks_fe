import { useState } from 'react'

const languages = [
  { code: 'id', lang: 'Bahasa Indonesia' },
  { code: 'en', lang: 'English' },
]

const DropdownNav = () => {

  const changeLanguage = () => {
    setIsOpen(!isOpen)
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" onClick={toggleDropdown} id='options-menu' aria-haspopup="true" aria-expanded="true" className="border-2 border-biruPrimary rounded-lg text-biruPrimary px-4 py-2.5 font-medium flex justify-between items-center gap-2 hover:shadow-md">
          <img src={`/images/ID.png`} alt="" />
          <img src="/images/dropdown.svg" alt="" />
        </button>
      </div>
      {/* Hamburger Button */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-biruPrimary overflow-hidden">
          <div
            className=""
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lng) => {
              return (
                <a
                  key={lng.code}
                  onClick={() => changeLanguage()}
                  href="#"
                  className={`duration-300 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-biruPrimary hover:font-semibold`}
                  role="menuitem"
                >
                  {lng.lang}
                </a>
              )
            })}
          </div>
        </div>

      )}
    </div>
  )
}

export default DropdownNav