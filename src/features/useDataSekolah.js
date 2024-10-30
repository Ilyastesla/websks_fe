import { useEffect, useState } from "react"
import { axiosBaseUrl } from "../components/lib/axios"

export const useDataSekolah = () => {
  const [dataSekolah, setDataSekolah] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchDataSekolah = async () => {
    setIsLoading(true);
    try {
      const sekolahResponse = await axiosBaseUrl.get(`/datasekolah`);
      setDataSekolah(sekolahResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDataSekolah(); // Default: Fetch formal education data
  }, []);

  return {
    data: dataSekolah,
    isLoading,
    fetchDataSekolah, // Add this function for dynamic fetching
  }
}
