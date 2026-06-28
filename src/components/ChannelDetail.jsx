import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchFromApi } from '../utlis/fetchFromApi';
import ChannelCard from './ChannelCard';
import Videos from './Videos';
function ChannelDetail() {
  const [viedos, setviedos] = useState([]);
  const [channelDetail, setchannelDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0]);
    });
    fetchFromApi(
      `search?channelId=${id}&part=snippet,id&order=date&maxResults=20`
    ).then((videosData) => {
      setviedos(videosData?.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard Channel={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={viedos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
