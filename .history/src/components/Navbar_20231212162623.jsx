import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const navbarContatiner = styled.nav`
  /*
    position fixed 필요 그외 페이지는 props static을 전달받음 
  */
  width: 100%;
  background-color: black;
  padding: 15px 0px;
  text-align: right;
`;
const navbarMenu = styled.a`
  color: white;
  margin: 8px;
  text-decoration: none;
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
    <div>
      <navbarContatiner>
        <navbarMenu as={Link} to="/">
          Main
        </navbarMenu>
        <navbarMenu as={Link} to="/intro">
          센터소개
        </navbarMenu>
        <navbarMenu as={Link} to="/research">
          연구활동
        </navbarMenu>
        <navbarMenu as={Link} to="/information">
          알림공간
        </navbarMenu>
        <navbarMenu as={Link} to="/contract">
          문의
        </navbarMenu>
      </navbarContatiner>
    </div>
  );
}

export default Navbar;
