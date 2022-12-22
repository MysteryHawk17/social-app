import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { Favorite, FavoriteBorder } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const Post = () => {
    const styleAction={
        display:"flex",
        justifyContent:"space-between"
      }
  return (
    <div>
        

        <Card  style={{marginTop:"20px"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:"beige" }} aria-label="recipe">
            <img src="https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="10%"
        image="https://images.unsplash.com/photo-1671695157166-c4bbd8e6e94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
        // image="../assets/ruben-valenzuela-PBKG0UYM810-unsplash.jpg"
        alt="Paella dish"
       style={{height:"10%"}}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={styleAction}>
        <IconButton aria-label="add to favorites">
          {/* <ThumbUpOffAltIcon /> */}
          <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
          {/* <FavoriteIcon /> */}
          </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
    </div>
  )
}

export default Post