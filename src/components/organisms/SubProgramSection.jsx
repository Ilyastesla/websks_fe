import AOS from "aos"
import 'aos/dist/aos.css'
import { useDataPost } from '../../features/useDataPost'
import Loading from '../atoms/Loading'
import { useEffect } from 'react'
import TitleSubProgram from "../atoms/TitleSubProgram"
import ArticleSubProgram from "../atoms/ArticleSubProgram"

export default function SubProgramSection({ school,backgroundColour,imgRight, imgLeft,company,limit}) {
  const posttype="program"
  const { isLoading, data: dataPost, fetchDataPost } = useDataPost({company,limit,posttype})
  useEffect(() => {
    fetchDataPost()
  }, [])

  return (
    <>
    <div className="flex flex-col">
      <TitleSubProgram school={school} backgroundColour={backgroundColour} imgRight={imgRight} imgLeft={imgLeft} />
      <div className="flex flex-wrap justify-center items-center gap-12 z-40">
      {isLoading && (
          <Loading />
        )}
        
        {!isLoading &&
          dataPost.data &&
          dataPost.data.map((program, index) => (
            <ArticleSubProgram key={program.idprogram} title={program.title} body={program.content} link="#" picture="images/KakSetoSchool.png" animate=""/>
          ))
        }
      </div>
    </div>
    </>
  )

}
