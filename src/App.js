import React from "react";
import TopBar from "./components/topBar";
import TopMenu from "./menu/TopMenu";
import NavBar from "./navbar/navBar";
import Drawer from "./Slider/Swiper";
import NewsCard from "./cards/NewsCard";
import NewsDetail from "./cards/NewsDetail";
import Telangana from "./cards/TelanganaCard";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (

    
    <div>
      {/* <Telangana /> */}
       {/* <NewsDetail />  */}
      <BrowserRouter>
      <TopBar />

      <NavBar />
      <TopMenu />
        <Routes>
          <Route path="/" element={<NewsCard />} />
          <Route path="/NewsDetail" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
      {/* 
      <Drawer />

      <br />
      <br />
      <br />

      <NewsCard /> */}
    </div>
  );
}

export default App;
