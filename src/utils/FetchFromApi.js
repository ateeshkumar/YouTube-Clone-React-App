import axios from "axios";

const API_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: API_URL,
    params: {
      maxResults:50
    },
    headers: {
      'X-RapidAPI-Key': '87648d455emsh7e63da395d1231bp17f3cfjsnddf15b45c446',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url) =>{
   const {data}= await 
   axios.get(`${API_URL}/${url}`,options);
   return data;


}  