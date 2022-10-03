import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./../styles/HomeHeader.styled";
import { FaBars } from "react-icons/fa";

const HomeHeader = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">ABC University</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About ABC</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Admission</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Courses Offered</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/login">Campus Life</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/register">Access Module</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default HomeHeader;
