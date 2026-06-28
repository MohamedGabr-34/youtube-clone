import axios from 'axios';

export const baseUrl = 'https://www.googleapis.com/youtube/v3';

export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/${url}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
