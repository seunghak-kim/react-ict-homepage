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

function Footer() {
  return (
    <FooterContainer>
      <div>
        충청북도 충주시 대소원면 대학로50 W9 공동실험실습관 404호
        교통ICT융합연구센터 | Tel : 82-43-849-1661, Fax : 82-43-841-5685
      </div>
      <div>Copyright © 2023 | All Rights Reserved.</div>
    </FooterContainer>
  );
}

export default Footer;
