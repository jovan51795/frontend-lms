import React, { useState } from 'react'
import {
  NavItem,
  NavLinks,
  SCTAButton,
  DropDownContainer,
  DropDownContainer2,
  DropDownListContainer,
  DropDownListContainer2,
  DropDownList,
  ListItem,
} from '../styles/HomeHeader2.styled'
import { FaBars, FaUserTie, FaUserGraduate } from 'react-icons/fa'
import { RiAdminFill, RiParentFill, RiArrowDownSFill } from 'react-icons/ri'

const HeaderMenu = () => {
  const [ismenuOpen, setIsmenuOpen] = useState(false)
  const [isadmissionOpen, setIsadmissionOpen] = useState(false)
  const [isaboutOpen, setIsaboutOpen] = useState(false)

  const toggling = () => setIsmenuOpen(!ismenuOpen)
  const toggleadmission = () => setIsadmissionOpen(!isadmissionOpen)
  const toggleabout = () => setIsaboutOpen(!isaboutOpen)

  return (
    <div>
      <NavItem>
        <DropDownContainer2>
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
                <ListItem>Vision, Mision, Core Values, Strategic Goals</ListItem>
                <ListItem>Contact Us</ListItem>
              </DropDownList>
            </DropDownListContainer2>
          )}
        </DropDownContainer2>
      </NavItem>
      <NavItem>
        <DropDownContainer2>
          <NavLinks
            to="apply"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-60}
            onClick={toggleadmission}
          >
            Admission <RiArrowDownSFill />
          </NavLinks>
          {isadmissionOpen && (
            <DropDownListContainer2>
              <DropDownList>
                <ListItem>Admission Procedure</ListItem>
                <ListItem>Enrollment Procedure For Freshmen Students</ListItem>
                <ListItem>Estimated Tuition Fee</ListItem>
              </DropDownList>
            </DropDownListContainer2>
          )}
        </DropDownContainer2>
      </NavItem>
      <NavItem>
        <NavLinks to="courses" smooth={true} duration={500} spy={true} exact="true" offset={-60}>
          Courses Offered
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="campus" smooth={true} duration={500} spy={true} exact="true" offset={-45}>
          Campus Life
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="news" smooth={true} duration={500} spy={true} exact="true" offset={-25}>
          University News
        </NavLinks>
      </NavItem>
      <NavItem>
        <DropDownContainer>
          <SCTAButton onClick={toggling}>
            <FaBars style={{ marginBottom: '4px' }} />
            &nbsp;&nbsp;Access Modules
          </SCTAButton>
          {ismenuOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem>
                  <FaUserGraduate style={{ marginBottom: '2px' }} />
                  &nbsp;&nbsp;Student
                </ListItem>
                <ListItem>
                  <FaUserTie style={{ marginBottom: '2px' }} />
                  &nbsp;&nbsp;Faculty
                </ListItem>
                <ListItem>
                  <RiParentFill style={{ marginBottom: '2px' }} />
                  &nbsp;&nbsp;Parent
                </ListItem>
                <ListItem>
                  <RiAdminFill style={{ marginBottom: '2px' }} />
                  &nbsp;&nbsp;Administrator
                </ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </NavItem>
    </div>
  )
}

export default HeaderMenu
