import { React, useState } from "react";
import Navbar from "../components/Navbar";

function MainPage() {
  const [position, setPosition] = useState("fixed");
  return (
    <>
      <Navbar position={position}></Navbar>
      메인 페이지 구성
    </>
  );
}

export default MainPage;
