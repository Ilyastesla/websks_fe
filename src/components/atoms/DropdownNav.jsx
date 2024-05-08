import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'id', lang: 'Bahasa Indonesia' },
  { code: 'en', lang: 'English' },
]

const DropdownNav = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
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
          <img src={`/images/${i18n.language.toUpperCase()}.png`} alt="" />
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
              const active = i18n.language === lng.code ? 'bg-biruSecondary text-white' : 'text-gray-700'
              return (
                <a
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  href="#"
                  className={`duration-300 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-biruPrimary hover:font-semibold ${active}`}
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