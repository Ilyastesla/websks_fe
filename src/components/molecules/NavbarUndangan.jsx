import { NavLink } from 'react-router-dom'

// const NavbarUndangan = () => {
//   return (
//     <nav className="max-w-[441px] w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 overflow-x-auto hide-scrollbar">
//       <div className="flex h-full min-w-max mx-auto font-medium">
//         <Button icon="Opening" label="opening" to="/undangan" />
//         <Button icon="Acara" label="Wallet" to="/undangan/wallet" />
//         <Button icon="RSVP" label="Settings" to="/undangan/setting" />
//         <Button icon="Thanks" label="Profile" to="/undangan/profile" />
//       </div>
//     </nav>
//   )
// }

const NavbarUndangan = () => {
  const menu = ['Opening', 'Acara', 'RSVP', 'Thanks']
  return (
    <nav className="max-w-[441px] w-full h-20 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {menu?.map((item, index) => {
          const url = item === 'Opening' ? '/undangan' : `/undangan/${item.toLowerCase()}`
          return (
            <Button
              key={index}
              icon={item.toLowerCase()}
              label={item.toLowerCase()}
              to={url} />
          )
        })}
      </div>
    </nav>
  )
}

const activeClassName = 'text-blue-600 dark:text-blue-500 bg-gray-50 dark:bg-gray-800 '

const Button = ({ icon, label, to }) => (
  <NavLink to={to} end className={({ isActive }) => isActive ? `${activeClassName} rounded-2xl inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group` : 'text-gray-500 dark:text-gray-400 inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group duration-300 rounded-2xl'} >
    {({ isActive }) => (
      <>
        <Icon name={icon} isActive={isActive} />
        <span className={`text-sm font-light group-hover:text-blue-600 group-hover:dark:text-blue-500 ${isActive ? "text-blue-600 dark:text-blue-500" : ""}`}>{label}</span>
      </>
    )}
  </NavLink>
)

const Icon = ({ name, isActive }) => {
  const icons = {
    opening: <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />,
    acara: <>
      <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
      <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
    </>,
    rsvp: <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
    ,
    thanks: <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
  }

  return (
    <svg className={`w-5 h-5 mb-2  ${isActive ? 'text-blue-600 dark:text-blue-500' : ''} group-hover:text-blue-600 dark:group-hover:text-blue-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      {icons[name]}
    </svg>
  )
}

export default NavbarUndangan
