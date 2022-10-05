import styled, { css } from "styled-components";
import { v, b } from "../../assets/styles/variables";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

export const SHeaderHeight = styled.div`
  height: ${v.headerHeight};
`;

export const SHeaderFixed = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: ${v.headerHeight};
  background: ${({ scrollNav }) => (scrollNav ? "#f9f9f9" : "transparent")};
  z-index: 10;
`;

export const SHeader = styled.header`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  transition: 0.3s ease padding;
  padding: 0 ${v.mdSpacing};

  @media ${b.lg} {
    padding: 0 ${v.lgSpacing};
  }
  > div {
    flex: 1;
  }
`;

export const SLeft = styled.div`
  margin-right: 200px;

  @media ${b.md} {
    margin-right: 230px;
  }
`;

export const SCenter = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: none;
  flex-basis: 200px;

  @media ${b.md} {
    display: flex;
  }
`;
export const SRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 150px;

  @media screen and (max-width: 960px) {
    margin-left: 150px;
  }
`;

// Left
export const SLogoLink = styled(Link)`
  display: flex;
  width: 40px;
  color: inherit;
  text-decoration: none;
`;

export const SLogo = styled.img`
  width: 175px;
  height: 55px;
  justify-self: flex-start;
  display: flex;
  align-items: center;
`;

// Center
// nav

const btnReset = css`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  font-family: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  padding: 0;
`;

// Right
export const SCTAButton = styled.button`
  ${btnReset}
  background: #022135;
  color: #fff;
  margin-top: 215px;
  padding: calc(${v.smSpacing} - 2px) 13px;
  border-radius: ${v.borderRadius};
  display: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media ${b.md} {
    display: initial;
  }
`;

export const SMenuToggleButton = styled.button`
  ${btnReset}
  width: 32px;
  position: relative;
  z-index: 100;

  @media ${b.md} {
    display: none;
  }
`;

const iconStyles = css`
  display: block;
  width: 100%;
  height: 100%;
  color: #0d181b;
`;
export const SMenuIcon = styled(FaBars)`
  ${iconStyles}
`;
export const SCloseIcon = styled(IoMdClose)`
  ${iconStyles}
`;

// Menu
export const SMenu = styled.div`
  position: fixed;
  top: ${v.headerHeight};
  left: 100%;
  right: 0;
  bottom: 0;
  background: #f9f9f9;
  width: 100%;
  height: calc(100% - ${v.headerHeight});
  transition: 0.3s ease left;
  z-index: 10;
  padding: ${v.lgSpacing};

  @media ${b.md} {
    display: none;
  }
`;
