import { useEffect, useState } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

const UndanganInfo = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]) // State untuk menyimpan status tiap accordion

  useEffect(() => {
    AOS.init({
      offset: -100,
      duration: 800,
      once: false
    })
  }, [])

  const toggleAccordion = (index) => {
    const newIsOpen = isOpen.map((item, i) => (i === index ? !item : item))
    setIsOpen(newIsOpen)
  }

  return (
    <div className="xxs:mt-8 xs:mt-32 xxs:h-[300px] xs:h-[500px] overflow-scroll hide-scrollbar">
      <div id="accordion-collapse" data-accordion="open">
        {/* Accordion 1 */}
        <div data-aos="fade-up" className="mb-5 border-krem2Undangan border rounded-md w-[90%] mx-auto">
          <h2 id="accordion-collapse-heading-1">
            <button
              onClick={() => toggleAccordion(0)}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-krem2Undangan gap-3 xxs:text-xs xs:text-base"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded={isOpen[0]}
              aria-controls="accordion-collapse-body-1"
            >
              <span>Susunan Acara</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="#FFE4C7" />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className={`${isOpen[0] ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="px-5">
              <p className="mb-2 text-krem2Undangan">
                <table className="text-left text-xs">
                  <tr>
                    <td className="pr-4">12:00</td>
                    <td>Registrasi</td>
                  </tr>
                  <tr>
                    <td className="pr-4">12:45</td>
                    <td>Pembukaan</td>
                  </tr>
                  <tr>
                    <td className="pr-4"></td>
                    <td>Menyanyikan lagu Indonesia Raya + SIBI</td>
                  </tr>
                  <tr>
                    <td className="pr-4">12:50</td>
                    <td>Sambutan-sambutan</td>
                  </tr>
                  <tr>
                    <td className="pr-4">13:00</td>
                    <td>Penampilan Wisudawan</td>
                  </tr>
                  <tr>
                    <td className="pr-4">13:10</td>
                    <td>Prosesi Wisuda</td>
                  </tr>
                  <tr>
                    <td className="pr-4">14:50</td>
                    <td>Simbolis ucapan terima kasih kepada Tutor</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:00</td>
                    <td>Penampilan peserta didik Bekasi</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:05</td>
                    <td>Penampilan peserta didik SD</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:15</td>
                    <td>Pengumuman Orang Tua Terkooperatif</td>
                  </tr>
                  <tr>
                    <td className="pr-4"></td>
                    <td>Sambutan perwakilan Orang Tua Terkooperatif</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:25</td>
                    <td>Penampilan peserta didik SMP</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:30</td>
                    <td>Pengumuman Peserta Didik Terbaik</td>
                  </tr>
                  <tr>
                    <td className="pr-4"></td>
                    <td>Penyampaian kesan pesan Peserta Didik terbaik.</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:40</td>
                    <td>Penampilan peserta didik SMA</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:50</td>
                    <td>Pembacaan do&apos;a</td>
                  </tr>
                  <tr>
                    <td className="pr-4">15:55</td>
                    <td>Penutup</td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </div>

        {/* Accordion 2 */}
        <div data-aos="fade-up" className="mb-5 border-krem2Undangan border rounded-md w-[90%] mx-auto">
          <h2 id="accordion-collapse-heading-2">
            <button
              onClick={() => toggleAccordion(1)}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-krem2Undangan gap-3 xxs:text-xs xs:text-base"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded={isOpen[1]}
              aria-controls="accordion-collapse-body-2"
            >
              <span>Teknis Pelaksanaan</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="#FFE4C7" />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className={`${isOpen[1] ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="ml-8 mr-5">
              <p className="mb-2 text-krem2Undangan">
                <ol className="text-left list-decimal text-xs">
                  <li className="">Undangan Digital wajib dibawa sebagai tanda registrasi</li>
                  <li className="">Undangan berlaku untuk satu wisudawan dan dua orang tua/wali.</li>
                  <li className="">Peserta dan tamu undangan menggunakan tema busana yang telah ditentukan.</li>
                  <li className="">Peserta dan tamu undangan diharapkan sudah makan siang sebelum kegiatan dimulai.</li>
                  <li className="">Peserta dan tamu undangan sudah melaksanakan salat zuhur.</li>
                  <li className="">Peserta dan tamu undangan tidak diperkenankan membawa makanan dari luar.</li>
                </ol>
              </p>

            </div>
          </div>
        </div>

        {/* Accordion 3 */}
        <div data-aos="fade-up" className="mb-5 border-krem2Undangan border rounded-md w-[90%] mx-auto">
          <h2 id="accordion-collapse-heading-3">
            <button
              onClick={() => toggleAccordion(2)}
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-krem2Undangan gap-3 xxs:text-xs xs:text-base"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded={isOpen[2]}
              aria-controls="accordion-collapse-body-3"
            >
              <span>Tema Busana</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10L12 15L17 10H7Z" fill="#FFE4C7" />
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className={`${isOpen[2] ? "" : "hidden"}`}
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="px-5 flex justify-between">
              {/* dresscode pria */}
              <div>
                <img src="/images/undangan/dresscode_pria.png" alt="dresscode_pria" />
              </div>
              {/* informasi */}
              <div className="mt-8 text-xs">
                <div className="ml-2 flex flex-col text-left">
                  <span>Peserta Laki-laki</span>
                  <span className="font-semibold">Setelan Jas</span>
                </div>
                <div className="ml-10 mt-5 flex flex-col text-right">
                  <span>Peserta Perempuan</span>
                  <span className="font-semibold">Kebaya</span>
                </div>
              </div>
              {/* dresscode wanita */}
              <div>
                <img src="/images/undangan/dresscode_wanita.png" alt="dresscode_wanita" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UndanganInfo
