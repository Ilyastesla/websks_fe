

export default function GalleryImageCard({ title, body, link, picture }) {
  return (
    <div className="rounded-md box-border overflow-hidden group-hover:border-4 hover:border-kuningPrimary relative group cursor-pointer">
      <img
        src={picture}
        alt="Gallery Content"
        className="duration-500 filter group-hover:brightness-[.28] group-hover:scale-125"
      />
      <div className="text-transparent group-hover:text-white group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none w-full text-center">
        <div className="text-2xl duration-500">{title}</div>
        <div className="text-xs font-normal group-hover:text-[#C2C2C2] duration-500 mb-4">{body}</div>
        <button className="group-hover:bg-biruPrimary duration-500 h-[32px] w-[148px] rounded-lg">
          <div className="flex items-center justify-center gap-1">
            <p>Selengkapnya</p>
            <svg className="fill-transparent group-hover:fill-white duration-500" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0156 6.13683C12.0156 6.31933 11.9477 6.47852 11.8118 6.61442L7.96778 10.4468C7.83188 10.5788 7.67851 10.6448 7.50766 10.6448C7.32905 10.6448 7.17956 10.5866 7.0592 10.4701C6.94271 10.3536 6.88447 10.208 6.88447 10.0332C6.88447 9.94394 6.9 9.86046 6.93106 9.78281C6.96601 9.70515 7.0126 9.6372 7.07085 9.57896L8.37548 8.26268L10.5479 6.28244L10.7518 6.65519L8.73075 6.77167H1.6543C1.46016 6.77167 1.30291 6.71343 1.18254 6.59695C1.06605 6.47658 1.00781 6.32321 1.00781 6.13683C1.00781 5.94657 1.06605 5.7932 1.18254 5.67672C1.30291 5.55635 1.46016 5.49617 1.6543 5.49617H8.73075L10.7518 5.61848L10.5479 5.99705L8.37548 4.01099L7.07085 2.68888C7.0126 2.63064 6.96601 2.56463 6.93106 2.49086C6.9 2.4132 6.88447 2.32778 6.88447 2.23459C6.88447 2.05986 6.94271 1.91426 7.0592 1.79777C7.17956 1.68129 7.32905 1.62305 7.50766 1.62305C7.59309 1.62305 7.67463 1.64052 7.75228 1.67547C7.82994 1.71041 7.90371 1.76283 7.9736 1.83272L11.8118 5.65925C11.9477 5.79514 12.0156 5.95434 12.0156 6.13683Z" fill="" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
