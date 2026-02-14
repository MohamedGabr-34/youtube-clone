import { Box, Stack } from '@mui/material';
import React from 'react';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

function Videos({ videos, direction }) {
  if (!videos?.length) return <div>hi</div>;
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard Channel={item} />}
          </Box>
        );
      })}
    </Stack>
  );
}

export default Videos;
