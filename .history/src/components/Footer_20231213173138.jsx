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
  return (
    <FooterContainer>
      <div>
        충청북도 충주시 대소원면 대학로50 W9 공동실험실습관 404호 | Tel :
        82-43-0000-0000, Fax : 82-43-841-5685
      </div>
      <div></div>
    </FooterContainer>
  );
}

export default Footer;
