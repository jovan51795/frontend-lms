import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "../styles/HomeHero.styled";
import { Button } from "../styles/Button.styled";
import Video from "../../assets/videos/video1.mp4";

const HomeHero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>ATANASOFF-BERRY COMPUTER UNIVERSITY</HeroH1>
        <HeroP>Be an Atanasoff-Berry Student.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Apply Now! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HomeHero;
