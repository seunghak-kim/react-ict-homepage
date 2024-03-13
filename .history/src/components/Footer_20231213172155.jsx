import React from "react";
import styled from "styled-components";

const FooterContainer = styled.Footer`
  width: 100%;
  height: 120px;
  .li {
    list-style-type: none;
  }
  @font-face {
    font-family: "SC Dream";
    src: url("../fonts/SCDream1.otf") format("ttf");
  }
`;

function Footer() {
  return (
    <footer>
      <div></div>
    </footer>
  );
}

export default Footer;
