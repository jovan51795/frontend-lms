import React, { useState } from "react";
import {
  SNav,
  SNavLabel,
  SNavLabelContainer,
  SNavLink,
  SNavLinkContainer,
  SArrowContainer,
  SArrowIcon,
  SCTAButton,
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "../styles/Nav.styled";
import Dropdown from "./Dropdown";
import { FaBars, FaUserTie, FaUserGraduate } from "react-icons/fa";
import { RiAdminFill, RiParentFill } from "react-icons/ri";

const Nav = ({ navLinks, toggle }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const openDropdownHandler = (label) => {
    if (label === openDropdown) return setOpenDropdown(null);
    setOpenDropdown(label);
  };

  const onSelectCallback = () => {
    if (toggle) toggle();
    setOpenDropdown(null);
  };

  return (
    <>
      <SNav>
        {navLinks.map(({ id, label, link, tree }, index) => {
          const isOpen = openDropdown === label;
          return (
            <SNavLinkContainer key={index}>
              {link && (
                <SNavLink
                  to={id === null ? { link } : { id }}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-60}
                >
                  {label}
                </SNavLink>
              )}
              {!link && (
                <SNavLabelContainer onClick={() => openDropdownHandler(label)}>
                  <SNavLabel isOpen={isOpen}>{label}</SNavLabel>
                  <SArrowContainer isOpen={isOpen}>
                    <SArrowIcon />
                  </SArrowContainer>
                </SNavLabelContainer>
              )}
              {isOpen && (
                <Dropdown tree={tree} onSelectCallback={onSelectCallback} />
              )}
            </SNavLinkContainer>
          );
        })}

        <DropDownContainer>
          <SCTAButton onClick={toggling}>
            <FaBars style={{ marginBottom: "4px" }} />
            &nbsp;&nbsp;Access Modules
          </SCTAButton>
          {isOpen && (
            <DropDownListContainer>
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
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </SNav>
    </>
  );
};

Nav.defaultProps = {
  navLinks: [
    {
      id: null,
      label: "About ABC",
      link: null,
      tree: [
        {
          id: null,
          label: "Vision, Mision, Core Values, Strategic Goals",
          link: "/dashboard/admin",
          branches: null,
        },
        {
          id: null,
          label: "Contact Us",
          link: "/contact",
          branches: null,
        },
      ],
    },
    {
      id: null,
      label: "Admission",
      link: null,
      tree: [
        {
          id: "apply",
          label: "Apply Now!",
          link: "/apply",
          branches: null,
        },
        {
          id: null,
          label: "Admission Procedure",
          link: "/contact",
          branches: null,
        },
        {
          id: null,
          label: "Courses Offered",
          link: "/contact",
          branches: null,
        },
        {
          id: null,
          label: "Enrollment Procedure For Freshmen Students",
          link: "/contact",
          branches: null,
        },
        {
          id: null,
          label: "Estimated Tuition Fee",
          link: "/contact",
          branches: null,
        },
      ],
    },
    {
      id: "campus",
      label: "Campus Life",
      link: null,
      tree: [
        {
          id: null,
          label: "Campus Life",
          link: "/campus",
          branches: null,
        },
        {
          id: null,
          label: "Student Priviledges",
          link: "/priviledges",
          branches: null,
        },
      ],
    },
    {
      id: null,
      label: "University News",
      link: null,
      tree: [
        {
          id: null,
          label: "Latest News",
          link: "/latest-news",
          branches: null,
        },
        {
          id: null,
          label: "Bulletin",
          link: "/bulletin",
          branches: null,
        },
      ],
    },
  ],
};

export default Nav;
