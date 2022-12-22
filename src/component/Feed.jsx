import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

import Post from './Post';

const Feed = () => {
  
  return (
    <Box flex={4} padding={4} >
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>

    </Box>
  )
}

export default Feed