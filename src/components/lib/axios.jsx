import axios from 'axios'

export const axiosBaseUrl = axios.create({
  baseURL: "https://sik.sekolahkakseto.id/index.php/api"
  //baseURL: "http://localhost/sik/index.php/api"
})
