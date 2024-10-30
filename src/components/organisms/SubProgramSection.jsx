import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDataPost } from '../../features/useDataPost';
import Loading from '../atoms/Loading';
import { useEffect } from 'react';
import TitleSubProgram from '../atoms/TitleSubProgram';
import ArticleSubProgram from '../atoms/ArticleSubProgram';

export default function SubProgramSection({
  school,
  backgroundColour,
  imgRight,
  imgLeft,
  company,
  limit,
  animate,
}) {
  const posttype = 'program';
  const {
    isLoading,
    data: dataPost,
    fetchDataPost,
  } = useDataPost({ company, limit, posttype });
  useEffect(() => {
    fetchDataPost();
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <TitleSubProgram
          school={school}
          backgroundColour={backgroundColour}
          imgRight={imgRight}
          imgLeft={imgLeft}
        />
        {/* <div className="flex flex-wrap justify-center items-center gap-12 z-40"> */}
        <div className="container mx-auto container-xl z-40">
          <div
            data-aos={animate}
            data-aos-duration="1000"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-10 object-cover"
          >
            {isLoading && <Loading />}

            {!isLoading &&
              dataPost.data &&
              dataPost.data.map((program, index) => (
                <ArticleSubProgram
                  key={program.idprogram}
                  title={program.title}
                  body={program.content}
                  link="#"
                  picture="images/KakSetoSchool.png"
                  animate=""
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
