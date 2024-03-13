import React from "react";
import styled from "styled-components";

const FooterContainer = styled.Footer`
  width: 100%;
  height: 120px;
  color: #020721;
  .li {
    list-style-type: none;
  }
  @font-face {
    font-family: "SC Dream";
    font-style: none;
    font-size: 0.8em;
    src: url("../fonts/SCDream1.otf") format("ttf");
  }
`;

function Footer() {
  return <FooterContainer></FooterContainer>;
}

export default Footer;
