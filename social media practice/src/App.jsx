import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Feed from "./components/Feed/Feed";
import RightBar from "./components/RightBar/RightBar";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import Add from './components/Add/Add'
import { useState } from "react";
function App() {
const [mode,setMode]=useState("dark");

const darkTheme=createTheme({
  palette:{
    mode:mode
  }

})

  return (
    <ThemeProvider theme={darkTheme}>
         <Box bgcolor={"background.default"} color={"text.primary"}>
       <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode}/>
        <Feed />
        <RightBar />
        <Add/>
      </Stack>
    </Box>
    </ThemeProvider>
 
  );
}
export default App;
