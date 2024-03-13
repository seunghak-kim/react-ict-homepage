import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const navbarContatiner = styled.div`
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

const MenuToggle = st;

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