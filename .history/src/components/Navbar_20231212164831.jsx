import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const NavbarContatiner = styled.nav`
  /*
    position fixed 필요 그외 페이지는 props static을 전달받음 
  */
  position: fixed;
  width: 100%;
  background-color: black;
  padding: 15px 0px;
  text-align: center;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    height: 48px;
    position: relative;
  }
`;

const Logo = styled.div`
  width: 500px;
  height: 200px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
`;

const MenuToggle = styled.div`
  display: none;
  position: absolute;
  right: 22px;
  top: 14px;
  opacity: 0.8;
  cursor: pointer;
  & :hover {
    opacity: 1;
    transition: opacity 0.3s;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  //메뉴버튼 토글생성
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <>
      <NavbarContatiner>
        <NavContent>
          <Logo></Logo>
        </NavContent>
      </NavbarContatiner>
    </>
  );
}

export default Navbar;
