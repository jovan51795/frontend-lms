import React, { useState } from 'react'
import 'src/components/LandingPage/assets/css/App.css'
import HomeHero from 'src/components/LandingPage/hero/HomeHero'
import Info from 'src/components/LandingPage/info-section/Info'
import { homeData1, homeData2 } from 'src/components/LandingPage/info-section/Data'
import News from 'src/components/LandingPage/info-section/News'
import HomeHeader from 'src/components/LandingPage/header/HomeHeader'
import HomeSidebar from 'src/components/LandingPage/sidebar/HomeSidebar'
import HomeHeader2 from 'src/components/LandingPage/header/HomeHeader2'
import Footer from 'src/components/LandingPage/footer/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

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
  )
}

export default Home
