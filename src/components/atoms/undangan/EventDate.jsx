
function getTanggalAcara() {
    const eventDate = new Date(2024, 5, 20, 12, 0, 0); // Tanggal bulan tahun, bulan dimulai dari 0
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const tanggal = eventDate.toLocaleDateString('id-ID', options);
    const splitTanggal = tanggal.split(' ');
    const formattedTanggal = splitTanggal.join(' - ');
    return formattedTanggal.toUpperCase();
}


function EventDate() {
    const tanggalAcara = getTanggalAcara();

    return (
        <div className="text-center mb-5 xs:mb-8">
            <p className="text-sm xs:text-md mb-5 xs:mb-8 mt-6">{tanggalAcara} | 12:00 WIB</p>
            <p className="text-sm xs:text-md xs:mb-2">Lokasi Acara:</p>
            <p className="text-xs xs:text-md ">Graha Convention Hall Ronatama</p>
            <p className="text-xs xs:text-md ">Jl. Dahlia No. 16A, Depok, Jawa Barat</p>
        </div>
    );
}

export default EventDate;
