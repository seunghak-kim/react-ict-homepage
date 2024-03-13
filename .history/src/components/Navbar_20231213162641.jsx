import { React, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { LinkItems } from "./LinkItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavbarContatiner = styled.nav`
  /*
    position fixed 필요 그외 페이지는 props static을 전달받음 
  */
  position: fixed;
  width: 100%;
  background-color: white;
  padding: 15px 0px;
  text-align: center;
  height: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; // 링크의 기본 색상 상속
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  /* max-width: 1340spx; */
  margin: -24px auto;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    height: 48px;
    position: relative;
  }
`;

const Logo = styled.div`
  width: 250px;
  height: 100px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Links = styled.ul`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 12px;

  li {
    list-style: none;
    text-decoration: none;
    padding: 12px 12px;
    opacity: 0.8;
  }

  .link {
    color: ${(props) => props.theme.lightGray};
    opacity: 0.8;
    &:hover {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    position: absolute;
    top: 48px;
    font-size: 15px;
    padding: 12px 0;
    top: ${(props) => (props.toggle ? "48px" : "-500px")};
    transition: all 1s cubic-bezier(0.32, 0.1, 0.24, 0.99);

    li {
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.lightGray};
    }
  }
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

function Navbar({ position }) {
  //메뉴버튼 토글생성
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <>
      <NavbarContatiner toggle={clicked} position={position}>
        <NavContent>
          <Link to={"/"}>
            <Logo />
          </Link>
          <Links toggle={clicked}>
            {LinkItems.map((item, index) => (
              <li key={index}>
                <StyledLink className="link" to={item.url}>
                  {item.title}
                </StyledLink>
              </li>
            ))}
            <StyledLink className="link" to={Login}>
              <FontAwesomeIcon />
              로그인
            </StyledLink>
          </Links>
          <MenuToggle onClick={onClick}>
            <FontAwesomeIcon icon={clicked ? faXmark : faBars} />
          </MenuToggle>
          {/*  */}
        </NavContent>
      </NavbarContatiner>
    </>
  );
}

export default Navbar;
