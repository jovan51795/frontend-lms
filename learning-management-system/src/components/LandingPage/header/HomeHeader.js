import React, { useState, useEffect } from 'react'
import {
  SHeaderHeight,
  SHeaderFixed,
  SHeader,
  SLeft,
  SLogoLink,
  SLogo,
  SCenter,
  SRight,
  SMenuToggleButton,
  SMenu,
  SMenuIcon,
  SCloseIcon,
} from '../styles/HomeHeader.styled'
import Nav from './Nav'
import logo from '../assets/images/ABCUlogo.png'
import { animateScroll as scroll } from 'react-scroll'

const HomeHeader = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
      <SHeaderHeight />
      <SHeaderFixed scrollNav={scrollNav}>
        <SHeader>
          <SLeft>
            <SLogoLink>
              <SLogo src={logo} alt="logo" onClick={toggleHome} />
            </SLogoLink>
          </SLeft>
          <SCenter>
            <Nav />
          </SCenter>
          <SRight>
            <SMenuToggleButton onClick={toggle}>
              {!isOpen ? <SMenuIcon /> : <SCloseIcon />}
            </SMenuToggleButton>
          </SRight>
        </SHeader>
      </SHeaderFixed>
      <SMenu style={isOpen ? { left: 0 } : {}}>
        <Nav toggle={toggle} />
      </SMenu>
    </>
  )
}

export default HomeHeader
