import React, { useState } from "react";
import "./../App.css";
import HomeHero from "../components/hero/HomeHero";
import Info from "../components/info-section/Info";
import { homeData1, homeData2 } from "../components/info-section/Data";
import News from "../components/info-section/News";
import HomeHeader from "../components/header/HomeHeader";
import HomeSidebar from "../components/sidebar/HomeSidebar";
import HomeHeader2 from "../components/header/HomeHeader2";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Home">
        <HomeSidebar toggle={toggle} isOpen={isOpen} />
        <HomeHeader2 toggle={toggle} />
        {/* <HomeHeader toggle={toggle} isOpen={isOpen} /> */}
        <HomeHero />
        <Info {...homeData1} />
        <Info {...homeData2} />
        <News />
        <Footer />
      </div>
    </>
  );
};

export default Home;
