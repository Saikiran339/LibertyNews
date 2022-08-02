import React from "react";
// import Swiper from "swiper";
import TopBar from "./components/topBar";
import TopMenu from "./menu/TopMenu";
import NavBar from "./navbar/navBar";
import Drawer from "./Slider/Swiper";
import NewsCard from "./cards/NewsCard";
import Practice from "./Slider/practice";
import Swipe from "./Slider/Slider";
import NewsDetail from "./cards/NewsDetail";
import { Route,BrowserRouter,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <TopBar />

      <NavBar />
      <TopMenu />
      <Drawer />
      
      <br />
      <br />
      <br />

      <NewsCard />
      {/* <NewsDetail /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
