import { useTranslation } from "react-i18next"

function ButtonCardSub() {
  const { t } = useTranslation()
  return (
    <>
      <a href="#">
        <button type="button" className="rounded-lg text-white px-12 py-3 text-sm font-medium bg-biruPrimary hover:shadow-lg hover:text-biruPrimary hover:bg-white hover:border-2 hover:border-biruPrimary">
          {t('cardsubprogram.btn')}
        </button>
      </a>
      <div className="mt-2">
        <a href="#" className="text-md font-medium text-biruPrimary hover:border-b-2 hover:border-biruPrimary">
          {t('cardsubprogram.desc')}
        </a>
      </div>
    </>
  )
}

export default ButtonCardSub