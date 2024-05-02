import IconTanganTos from "../../assets/subprogram/Icon Tangan Tos.png"

function TitleSubProgram({school, backgroundColour}) {
    return(
        <>
            <div className="relative w-full">
                <img
                    src={IconTanganTos}
                    alt="Icon tangan tos"
                    className="hidden md:block w-56 xl:w-auto  md:-translate-y-16 right-0 absolute xl:-translate-y-40 -z-30"    
                />
            </div>
            <h1 className={`text-xl md:text-4xl xl:text-5xl ${backgroundColour} font-semibold flex text-center justify-center xl:w-[901px] mx-auto pb-12`}>PROGRAM UNGGULAN <br/> {school}</h1>
        </>
    )
};

export default TitleSubProgram;