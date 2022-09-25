import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "6ce8fe6363dfcc789f95abfbd45c1990",
    language: "ko-KR",
  },
})

export default instance;