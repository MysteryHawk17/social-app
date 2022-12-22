import { AppBar, Avatar, Badge, Divider, InputBase, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box, borderRadius, height, styled, width } from '@mui/system'
import React, { useState } from 'react'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Logout, Mail, Notifications, PersonAdd, Settings } from '@mui/icons-material';
const Navbar = () => {
  const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
    
  })
  const Search=styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
  }))
  const Icon=styled("div")(({theme})=>({
    display:'none',
    justifyContent:"center",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
      display:"flex"
    }
  }))
  const Userbox=styled(Box)(({theme})=>({
    display:'none',
    justifyContent:"center",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.down("sm")]:{
      display:"flex"
    }
    
  }))
  const [open,setOpen]=useState(false)
  const handleClick=()=>{
    setOpen(!open)
    console.log(open)
  }
  return (
    <AppBar style={{backgroundColor:"background.default" ,color:"text.primary"}} position='sticky'>
      <StyledToolbar>
          <Typography variant='h5' sx={{display:{xs:"none",sm:"block"}}} >SOCIAL APP</Typography>
          <ConnectWithoutContactIcon sx={{display:{xs:"block",sm:"none"}}}> </ConnectWithoutContactIcon>
          <Search><InputBase placeholder='search'></InputBase></Search>
          <Icon>
          <Badge badgeContent={4} color="error">
              <Mail color="white" />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications color="white" />
            </Badge>
            <Avatar onClick={handleClick}>Y</Avatar>
          </Icon>
          <Userbox  onClick={handleClick}>
          <Avatar>Y</Avatar>
          <Typography variant='h7'>Yash</Typography>
          </Userbox>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
       
        open={open}
        onClose={(e)=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar