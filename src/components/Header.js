import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import logo from "../images/logo1nobg.png"
import Nav from "../components/Nav"

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src={logo} className="logo" alt="MainBrandImage"/>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.contrastBlack};
  background-color: #0a0909;
  background-image: 
      radial-gradient(at 47% 33%, hsl(60.00, 27%, 8%) 0, transparent 59%), 
      radial-gradient(at 82% 65%, hsl(234.00, 28.000000000000004%, 14.000000002%) 0, transparent 55%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  // border-bottom: 0.1px groove yellow;
  border-bottom: 1px solid rgba(255, 255, 255, 0.125);

  .logo {
    height: 9rem;
  }
`;

export default Header;