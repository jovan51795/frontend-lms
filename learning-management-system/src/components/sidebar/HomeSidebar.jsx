import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideDropDownContainer,
  SideDropDownContainer2,
  SideDropDownListContainer,
  SideSCTAButton,
  SideBtnWrap,
  SidebarRoute,
} from "../styles/HomeSidebar.styled";
import {
  NavItem,
  NavLinks,
  SCTAButton,
  DropDownListContainer,
  DropDownListContainer2,
  DropDownList,
  ListItem,
} from "../styles/HomeHeader2.styled";
import Nav from "../header/Nav";
import { FaBars, FaUserTie, FaUserGraduate } from "react-icons/fa";
import { RiAdminFill, RiParentFill, RiArrowDownSFill } from "react-icons/ri";

const HomeSidebar = ({ isOpen, toggle, onSelectCallback }) => {
  const [ismenuOpen, setIsmenuOpen] = useState(false);
  const [isadmissionOpen, setIsadmissionOpen] = useState(false);
  const [isaboutOpen, setIsaboutOpen] = useState(false);

  const toggling = () => setIsmenuOpen(!ismenuOpen);
  const toggleadmission = () => setIsadmissionOpen(!isadmissionOpen);
  const toggleabout = () => setIsaboutOpen(!isaboutOpen);
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            {/* <SidebarLink> */}
            <Nav />
            {/* <SidebarLink>
              <SideDropDownContainer2>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                  onClick={toggleabout}
                >
                  About ABC <RiArrowDownSFill />
                </NavLinks>
                {isaboutOpen && (
                  <DropDownListContainer2>
                    <DropDownList>
                      <ListItem>
                        Vision, Mision, Core Values, Strategic Goals
                      </ListItem>
                      <ListItem>Contact Us</ListItem>
                    </DropDownList>
                  </DropDownListContainer2>
                )}
              </SideDropDownContainer2>
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
            <SidebarLink to="/login" onClick={toggle}>
              Login
            </SidebarLink> */}
            {/* </SidebarLink> */}
            <SideDropDownContainer onSelectCallback={onSelectCallback}>
              <SideSCTAButton onClick={toggling}>
                <FaBars style={{ marginBottom: "4px" }} />
                &nbsp;&nbsp;Access Modules
              </SideSCTAButton>
              {ismenuOpen && (
                <SideDropDownListContainer>
                  <DropDownList>
                    <ListItem>
                      <FaUserGraduate style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Student
                    </ListItem>
                    <ListItem>
                      <FaUserTie style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Faculty
                    </ListItem>
                    <ListItem>
                      <RiParentFill style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Parent
                    </ListItem>
                    <ListItem>
                      <RiAdminFill style={{ marginBottom: "2px" }} />
                      &nbsp;&nbsp;Administrator
                    </ListItem>
                  </DropDownList>
                </SideDropDownListContainer>
              )}
            </SideDropDownContainer>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default HomeSidebar;
