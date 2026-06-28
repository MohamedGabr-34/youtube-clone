import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import { fetchFromApi } from '../utlis/fetchFromApi';
import VideoCard from './VideoCard';

function PlaylistDetail() {
  const [playlistDetail, setPlaylistDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`playlists?part=snippet&id=${id}`).then((data) => {
      setPlaylistDetail(data?.items[0]);
    });

    fetchFromApi(
      `playlistItems?part=snippet&playlistId=${id}&maxResults=20`
    ).then((data) => {
      setVideos(data?.items);
    });
  }, [id]);

  if (!playlistDetail?.snippet) return <div>Loading...</div>;

  return (
    <Box minHeight="95vh" p={2}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Playlist Info */}
        <Box sx={{ width: { xs: '100%', md: '300px' }, flexShrink: 0 }}>
          <img
            src={playlistDetail?.snippet?.thumbnails?.high?.url}
            alt={playlistDetail?.snippet?.title}
            style={{ width: '100%', borderRadius: '12px' }}
          />
          <Typography variant="h6" color="white" mt={2} fontWeight="bold">
            {playlistDetail?.snippet?.title}
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            {playlistDetail?.snippet?.channelTitle}
          </Typography>
          <Typography variant="body2" color="gray" mt={1}>
            {playlistDetail?.snippet?.description}
          </Typography>
        </Box>

        {/* Playlist Videos */}
        <Box flex={1}>
          <Typography variant="h5" color="white" mb={2} fontWeight="bold">
            Videos
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={2}>
            {videos?.map((item, idx) => (
              <Box key={idx}>
                {item?.snippet?.resourceId?.videoId && (
                  <VideoCard
                    video={{
                      id: { videoId: item?.snippet?.resourceId?.videoId },
                      snippet: item?.snippet,
                    }}
                  />
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default PlaylistDetail;
