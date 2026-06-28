import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { demoThumbnailUrl } from '../utlis/constants';

export function PlaylistCard({
  playlist: {
    id: { playlistId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={playlistId ? `/playlist/${playlistId}` : '/'}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60)}
        </Typography>
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle}
        </Typography>
      </CardContent>
    </Card>
  );
}
