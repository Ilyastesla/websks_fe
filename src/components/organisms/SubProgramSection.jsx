import TitleSubProgram from '../atoms/TitleSubProgram';
import CardSubProgram from '../molecules/CardSubProgram';

function SubProgramSection({ school, backgroundColour, imgRight, imgLeft }) {
  return (
    <div className="flex flex-col">
      <TitleSubProgram school={school} backgroundColour={backgroundColour} imgRight={imgRight} imgLeft={imgLeft} />
      <CardSubProgram />
    </div>
  );
}

export default SubProgramSection;
