function TitleSubProgram({school, backgroundColour}) {
    return(
        <>
            <h1 className={`text-5xl ${backgroundColour} font-semibold flex text-center justify-center w-[901px] mx-auto`}>PROGRAM UNGGULAN <br/> {school}</h1>
        </>
    )
};

export default TitleSubProgram;