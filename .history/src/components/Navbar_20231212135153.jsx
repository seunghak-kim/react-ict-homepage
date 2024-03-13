import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    <div>
        <div className="navbar">
            <Link className="navbarMenu" to ={'/'}>Main</Link>
            <Link className="navbarMenu" to ={'/intro'}>센터소개</Link>
            <Link className="navbarMenu" to ={'/research'}>연구활동</Link>
            <Link className="navbarMenu" to ={'/information'}>알림공간</Link>
            <Link className="navbarMenu" to ={'/contract'}>문의</Link>
        </div>
    </div>
}

export default Navbar;
