import React from 'react';
import { Link } from 'react-router-dom';

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


const Navbar = () => {
  return (
    <NavbarContainer ntainer>
      <NavbarLink as={Link} to="/">
        Home
      </NavbarLink>
      <NavbarLink as={Link} to="/about">
        About
      </NavbarLink>
      <NavbarLink as={Link} to="/contact">
        Contact
      </NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
