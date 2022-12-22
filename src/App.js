// import React, { useState } from "react"
// import Sidebar from "./component/Sidebar";
// import Navbar from "./component/Navbar";
// import Rightbar from "./component/Rightbar";
// import Feed from "./component/Feed";
// import { Box, Stack } from "@mui/system";
// import Add from "./component/Add";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./component/Navbar";
import Add from "./component/Add";
import { useState } from "react";

function App() {
  const[mode,setMode]=useState("light")
 const  darkTheme=createTheme({
  palette:{
    mode:mode,
  }
 })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
     <Navbar/>
     <Stack direction={"row"} spacing={4} justifyContent={"space-between"}>

     <Sidebar setMode={setMode} mode={mode}/>
     <Feed/>
     <Rightbar/>
     </Stack>
     <Add/>
          </Box>
          </ThemeProvider>
  );
}

export default App;
