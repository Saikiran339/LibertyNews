import React from "react";
import TopBar from "./components/topBar";
import TopMenu from "./menu/TopMenu";
import NavBar from "./navbar/navBar";
import Drawer from "./Slider/Swiper";
import NewsCard from "./cards/NewsCard";
import NewsDetail from "./cards/NewsDetail";
import Telangana from "./cards/TelanganaCard";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Divider } from "@mui/material";

function App() {
  return (
    <>
      {/* <Telangana /> */}
       {/* <NewsDetail />  */}
      <BrowserRouter>
      <TopBar />
      {/* <Divider /> */}
      <NavBar />
      <TopMenu />
      
        {/* <Routes>
          <Route path="/" element={<NewsCard />} />
          <Route path="/NewsDetail" element={<NewsDetail />} />
        </Routes> */}
      </BrowserRouter>
      {/* 
      <Drawer />

      <br />
      <br />
      <br />

      <NewsCard /> */}
    </>
  );
}

export default App;
