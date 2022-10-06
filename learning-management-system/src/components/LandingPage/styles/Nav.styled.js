import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { v, b } from '../assets/styles/variables'
import { IoMdArrowDropdown } from 'react-icons/io'

export const SNav = styled.nav`
  width: 900px;
  padding: ${v.mdSpacing};
  background: #f9f9f9;
  border-radius: ${v.borderRadius};
  color: black;

  @media screen and (max-width: 960px) {
    width: 700px;
  }

  @media ${b.md} {
    background: none;
    color: black;
    padding: 0;
    height: 100%;
    display: flex;
  }

  @media screen and (max-width: 865px) {
    width: 600px;
  }

  @media screen and (max-width: 712px) {
    width: 400px;
  }
`

export const SNavLinkContainer = styled.div`
  user-select: none;
  position: relative;
  width: 100%;
  justify-content: space-between;
  :not(:last-of-type) {
    margin-bottom: ${v.mdSpacing};
  }
  @media ${b.md} {
    display: flex;
    align-items: center;
    :not(:last-of-type) {
      margin-bottom: 0;
      margin-right: ${v.mdSpacing};
    }
  }
`

export const SNavLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #022135;
    padding: 5px 30px;
    background-color: #f5f5f5;
  }
`

export const SArrowContainer = styled.div`
  svg {
    color: ${({ isOpen }) => (!isOpen ? 'black' : '#000080')};
    transform: ${({ isOpen }) => (!isOpen ? 'rotate(-90deg)' : 'none')};
  }
`
export const SArrowIcon = styled(IoMdArrowDropdown)`
  display: block;
  margin-left: 4px;
`

export const SNavLabelContainer = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  cursor: pointer;
`

export const SNavLabel = styled.span`
  align-items: center;
  list-style: none;
  text-align: center;
  color: ${({ isOpen }) => (!isOpen ? 'black' : '#000080')};
`

export const DrpdownLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`

export const DropDownContainer = styled('div')`
  width: 69.5em;
  margin: 0 auto;
`

export const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 1em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #022135;
  background: #ffffff;
`

export const DropDownListContainer = styled('div')`
  width: 165px;
  margin-left: 32px;
`

export const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #f9f9f9;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #022135;
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  display: block;

  &:hover {
    padding: 0.2em 0.5em 0.2em 0.5em;
    background-color: #f5f5f5;
  }
`

export const SCTAButton = styled.button`
  background: #022135;
  color: #fff;
  margin-top: 10px;
  margin-left: 30px;
  padding: 5px 10px;
  border-radius: ${v.borderRadius};
  display: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #044e7f;
    color: #fff;
  }

  &:hover ${DropDownList} {
    display: block;
  }

  @media ${b.md} {
    display: initial;
  }
`
