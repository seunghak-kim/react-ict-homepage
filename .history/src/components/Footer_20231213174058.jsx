import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 120px;
  background-color: #020721;
  .li {
    list-style-type: none;
  }
`;
const Text = styled.text`
  text-align: center;
  @font-face {
    font-family: "SC Dream";
    font-style: none;
    font-size: 0.8em;
    src: url("../fonts/SCDream1.otf") format("otf");
  }
`;
function Footer() {
  return (
    <FooterContainer>
      <Text>
        충청북도 충주시 대소원면 대학로50 W9 공동실험실습관 404호
        교통ICT융합연구센터 | Tel : 82-43-849-1661, Fax : 82-43-841-5685
      </Text>
      <Text>Copyright © 2023 | All Rights Reserved.</Text>
    </FooterContainer>
  );
}

export default Footer;
