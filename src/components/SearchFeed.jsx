import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromApi } from '../utlis/fetchFromApi';
import Videos from './Videos';
function SearchFeed() {
  const [videos, setvideos] = useState([]);
  const { searchterm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchterm}&maxResults=20`).then(
      (data) => {
        setvideos(data.items);
        console.log(data);
      }
    );
  }, [searchterm]);
  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}> {searchterm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
}

export default SearchFeed;
