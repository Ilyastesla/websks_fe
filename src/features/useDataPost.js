import { useEffect, useState } from "react"
import { axiosBaseUrl } from "../components/lib/axios"

export const useDataPost = ({company,limit,posttype}) => {
  const [dataPost, setDataPost] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchDataPost = async () => {
    setIsLoading(true);
    try {
      const PostResponse = await axiosBaseUrl.get(`/datapost/${company}/${limit}/${posttype}`);
      setDataPost(PostResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDataPost(); // Default: Fetch formal education data
  }, []);

  return {
    data: dataPost,
    isLoading,
    fetchDataPost, // Add this function for dynamic fetching
  }
}
