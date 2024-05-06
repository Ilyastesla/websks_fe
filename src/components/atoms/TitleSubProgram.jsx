function TitleSubProgram({school, backgroundColour, imgRight, imgLeft}) {
    return(
        <>
            <div className="relative w-full">
                <img
                    src={`${imgRight}`}
                    alt="Icon Right"
                    className="hidden md:block w-56 xl:w-auto  md:-translate-y-16 right-0 absolute xl:-translate-y-40 z-30"    
                />
                <img 
                    src={`${imgLeft}`} 
                    alt="Icon Left" 
                    className="hidden md:block w-40 xl:w-auto md:-translate-y-6 xl:-translate-y-44 left-0 absolute z-30"  />
            </div>
            <h1 className={`text-xl md:text-4xl xl:text-5xl ${backgroundColour} font-semibold flex text-center justify-center xl:w-[901px] mx-auto pb-12`}>PROGRAM UNGGULAN <br/> {school}</h1>
        </>
    )
};

export default TitleSubProgram;