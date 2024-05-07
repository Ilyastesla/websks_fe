import { useTranslation } from "react-i18next"

function ButtonNav() {
  const { t } = useTranslation()
  return (
    <>
      <a href="https://ereg.sekolahkakseto.id" target="_blank">
        <button
          type="button"
          className="border-2 py-1 border-biruPrimary rounded-lg text-biruPrimary px-4 leading-7 font-medium hover:bg-biruPrimary hover:text-white"
        >
          {t('navbar.register')}
        </button>
      </a>
    </>
  )
}

export default ButtonNav
