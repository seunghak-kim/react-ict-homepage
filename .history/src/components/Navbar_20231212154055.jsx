import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const navbar = styled.div`
    width: 100%;
    background-color: black;
    padding: 15px 0px;
    text-align: right;
`

const navbarMenu = styled.Link`
    color: white;
    margin: 8px;
    text-align : none;
`


function Navbar(){
    <div>
        <navbar>
            <Link className="navbarMenu" to ={'/'}>Main</Link>
            <Link className="navbarMenu" to ={'/intro'}>센터소개</Link>
            <Link className="navbarMenu" to ={'/research'}>연구활동</Link>
            <Link className="navbarMenu" to ={'/information'}>알림공간</Link>
            <Link className="navbarMenu" to ={'/contract'}>문의</Link>
        </navbar>
    </div>
}

export default Navbar;
