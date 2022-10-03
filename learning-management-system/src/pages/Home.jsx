import React, { useState } from "react";
import "./../App.css";
import HomeHeader from "../components/header/HomeHeader";
import HomeSidebar from "../components/sidebar/HomeSidebar";
import HomeHero from "../components/hero/HomeHero";
import Info from "../components/info-section/Info";
import { homeData1 } from "../components/info-section/Data";
import News from "../components/info-section/News";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Home">
        <HomeSidebar isOpen={isOpen} toggle={toggle} />
        <HomeHeader toggle={toggle} />
        <HomeHero />
        <Info {...homeData1} />
        <News />
      </div>
    </>
  );
};

export default Home;
