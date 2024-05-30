import { NavLink, useLocation } from 'react-router-dom'
import Sampul from '../../assets/undangan/Sampul'
import Salam from '../../assets/undangan/Salam'
import QrCode from '../../assets/undangan/QrCode'
import Lokasi from '../../assets/undangan/Lokasi'
import Info from '../../assets/undangan/Info'

const NavbarUndangan = ({ isHidden }) => {
  const activeClassName = 'text-biruUndangan bg-krem2Undangan'
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const nis = searchParams.get('nis') || 'NIS'
  return (
    <nav className={`${isHidden ? 'hidden' : ''} fixed w-full max-w-[414px] bottom-0 h-16 bg-biruUndangan border-gray-200 rounded-t-2xl shadow-[0px_-5px_30px_0px_#252525]`}>
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <NavLink
          unstable_viewTransition
          to={`/undangan?nis=${nis}`}
          end
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} rounded-full inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group`
              : 'text-gray-500 inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group duration-300 rounded-full'
          }
        >
          {({ isActive }) => (
            <>
              <Sampul isActive={isActive} />
              <span className={`text-xs font-semibold group-hover:text-biruUndangan ${isActive ? 'text-biruUndangan' : ''}`}>Sampul</span>
            </>
          )}
        </NavLink>
        <NavLink
          unstable_viewTransition
          to={`/undangan/lokasi?nis=${nis}`}
          end
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} rounded-full inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group`
              : 'text-gray-500 inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group duration-300 rounded-full'
          }
        >
          {({ isActive }) => (
            <>
              <Lokasi isActive={isActive} />
              <span className={`text-xs font-semibold group-hover:text-biruUndangan ${isActive ? 'text-biruUndangan' : ''}`}>Lokasi</span>
            </>
          )}
        </NavLink>
        <NavLink
          unstable_viewTransition
          to={`/undangan/info?nis=${nis}`}
          end
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} rounded-full inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group`
              : 'text-gray-500 inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group duration-300 rounded-full'
          }
        >
          {({ isActive }) => (
            <>
              <Info isActive={isActive} />
              <span className={`text-xs font-semibold group-hover:text-biruUndangan ${isActive ? 'text-biruUndangan' : ''}`}>Info</span>
            </>
          )}
        </NavLink>
        <NavLink
          unstable_viewTransition
          to={`/undangan/qrcode?nis=${nis}`}
          end
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} rounded-full inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group`
              : 'text-gray-500 inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group duration-300 rounded-full'
          }
        >
          {({ isActive }) => (
            <>
              <QrCode isActive={isActive} />
              <span className={`text-xs font-semibold group-hover:text-biruUndangan ${isActive ? 'text-biruUndangan' : ''}`}>QR</span>
            </>
          )}
        </NavLink>
        <NavLink
          unstable_viewTransition
          to={`/undangan/salam?nis=${nis}`}
          end
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} rounded-full inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group`
              : 'text-gray-500 inline-flex flex-col items-center justify-center px-5 hover:bg-krem2Undangan group duration-300 rounded-full'
          }
        >
          {({ isActive }) => (
            <>
              <Salam isActive={isActive} />
              <span className={`text-xs font-semibold group-hover:text-biruUndangan ${isActive ? 'text-biruUndangan' : ''}`}>Salam</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  )
}

export default NavbarUndangan