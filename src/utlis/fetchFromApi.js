import axios from 'axios';

// let path =
//   '/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
export const baseUrl = 'https://youtube-v31.p.rapidapi.com';

const options = {
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_Y3_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
  },
};
export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${baseUrl}/${url}`, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
