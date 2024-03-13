import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components/NavbarStyles.js
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

export const NavbarLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;



function Navbar(){
    <div>
        <div className="navbar">
            <Link className="navbarMenu" to ={'/'}>Main</Link>
            <Link className="navbarMenu" to ={'/intro'}>센터소개</Link>
            <Link className="navbarMenu" to ={'/research'}>연구활동</Link>
            <Link className="navbarMenu" to ={'/information'}>알림공간</Link>
            <Link className="navbarMenu" to ={'/contract'}>문의</Link>
        </div>
    </div>
}

export default Navbar;
