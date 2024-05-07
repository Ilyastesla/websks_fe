import { useTranslation } from 'react-i18next'
import LogoSKS from '../../assets/Logo-Sekolah-Kak-Seto-(White).png'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const { t } = useTranslation()
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  return (
    <div className="bg-biruPrimary py-4 mt-24 px-5 pattern">
      <div className="container mx-auto text-white py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 justify-between">
          <div className="flex flex-col gap-5">
            <img src={LogoSKS} alt="gambar" className="max-w-40 max-h-40" />
            <ul className="flex flex-col gap-3">
              <li>
                <h3 className="text-lg font-semibold">Cerdas</h3>
              </li>
              <li>
                <h3 className="text-lg font-semibold">Kreatif</h3>
              </li>
              <li>
                <h3 className="text-lg font-semibold">Ceria</h3>
              </li>
              <li className="flex gap-5 mt-7">
                <a href="">
                  <FaInstagram size={25} className="hover:scale-110" />
                </a>
                <a href="">
                  <FaFacebook size={25} className="hover:scale-110" />
                </a>
                <a href="">
                  <FaYoutube size={25} className="hover:scale-110" />
                </a>
                <a href="">
                  <FaTwitter size={25} className="hover:scale-110" />
                </a>
                <a href="">
                  <FaWhatsapp size={25} className="hover:scale-110" />
                </a>
              </li>
              <li>
                <p>
                  Contact Person: <br /> Tlp (021) 22211078 <br /> WhatsApp 0811-9511-844
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold mb-4">{t('footer.unit')}</h2>
            <ol className="flex flex-col gap-4">
              <li className="hover:text-biruSecondary">Homeschooling Kak Seto</li>
              <li className="hover:text-biruSecondary">Kak Seto School</li>
              <li className="hover:text-biruSecondary">Sekolah Khusus Kak Seto</li>
              <li className="hover:text-biruSecondary">Kak Seto Learning Center</li>
            </ol>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold mb-4">Program</h2>
            <ol className="flex flex-col gap-4">
              <li className="hover:text-biruSecondary">{t('footer.pendidikan', { education: 'Formal' })}</li>
              <li className="hover:text-biruSecondary">{t('footer.pendidikan', { education: 'Nonformal' })}</li>
              <li className="hover:text-biruSecondary">{t('footer.pendidikan', { education: 'Informal' })}</li>
              <li className="hover:text-biruSecondary">{t('footer.pendidikanSLB')}</li>
            </ol>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold mb-4">{t('footer.tautan')}</h2>
            <ol className="flex flex-col gap-4">
              <li className="hover:text-biruSecondary">{t('footer.unduh')}</li>
              <li className="hover:text-biruSecondary">{t('footer.daftar')}</li>
              <li className="hover:text-biruSecondary">{t('footer.karya')}</li>
              <li className="hover:text-biruSecondary">{t('footer.karir')}</li>
              <li className="hover:text-biruSecondary">{t('footer.layanan')}</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container container-lg text-center flex justify-center text-white pt-10 border-t mx-auto">
        <p>Sekolah Kak Seto. - &copy; {year} All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
