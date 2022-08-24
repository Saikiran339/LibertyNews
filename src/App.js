import React from "react";
import TopBar from "./components/topBar";
import TopMenu from "./menu/TopMenu";
import NavBar from "./navbar/navBar";
import Drawer from "./Slider/Swiper";
import NewsCard from "./cards/NewsCard";
import NewsDetail from "./cards/NewsDetail";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <NewsDetail /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/newscard" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
      <TopBar />

      <NavBar />
      <TopMenu />
      <Drawer />

      <br />
      <br />
      <br />

      <NewsCard />
    </div>
  );
}

export default App;
