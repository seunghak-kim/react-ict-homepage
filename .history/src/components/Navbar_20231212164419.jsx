import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";

const navbarContatiner = styled.nav`
  /*
    position fixed 필요 그외 페이지는 props static을 전달받음 
  */
  position: fixed;
  width: 100%;
  background-color: black;
  height: 200px;
  padding: 15px 0px;
  text-align: center;
`;

const navContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    height: 48px;
    position: relative;
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 50px;
  background-image: url(${logo});
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
      <navbarContatiner>
        <navContent>
          <Logo></Logo>
        </navContent>
      </navbarContatiner>
    </>
  );
}

export default Navbar;
