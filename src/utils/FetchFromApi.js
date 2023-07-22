import axios from "axios";

const API_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: API_URL,
    params: {
      maxResults:50
    },
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url) =>{
   const {data}= await 
   axios.get(`${API_URL}/${url}`,options);
   return data;


}  
