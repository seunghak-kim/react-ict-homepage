import { React, useState } from "react";
import Navbar from "../components/Navbar";

function Main() {
  const [position, setPosition] = useState("fixed");
  return (
    <>
      <Navbar position={position}></Navbar>
    </>
  );
}
