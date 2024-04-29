import TitleSubProgram from "../atoms/TitleSubProgram";
import CardSubProgram from "../molecules/CardSubProgram";

function SubProgramSection({school, backgroundColour}) {
    return(
        <div className="flex flex-col gap-10">
            <TitleSubProgram school={school} backgroundColour={backgroundColour}/>
            <CardSubProgram/>
        </div>
    )
};

export default SubProgramSection;