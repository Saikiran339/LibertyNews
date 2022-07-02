import React from "react";
// import Swiper from "swiper";
import TopBar from "./components/topBar";
import TopMenu from "./menu/TopMenu";
import NavBar from "./navbar/navBar";
import Drawer from "./Slider/Swiper";
import NewsCard from "./cards/NewsCard";
import Practice from "./Slider/practice";
import Swipe from "./Slider/Slider";

function App() {
  return (
    <div>
      <TopBar />

      <NavBar />
      <TopMenu />
      <Drawer />
      {/* <Practice />  */}
      <br />
      <br />
      <br />

      <NewsCard />
      {/* <Swipe /> */}
    </div>
  );
}

export default App;
