const Info = ({ isActive }) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 mb-2  ${isActive ? 'text-biruUndangan' : 'text-krem2Undangan'} group-hover:text-biruUndangan`}
      aria-hidden="true"
      fill="currentColor">
      <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clipRule="evenodd" />
    </svg>
  )
}

export default Info