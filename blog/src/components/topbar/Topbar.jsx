import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import Button from "../UI/Button/Button.jsx";
import "../UI/Button/Button.css";
import logo from "../../assets/logo.png"

import "./Topbar.css";
import {Link} from "react-router-dom";
import {FaUser} from "react-icons/fa";

const Topbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [user, setUser]=useState(true)
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <nav className="navbar container" style={{maxWidth:"none"}}>
            <div className="logo">
                <Link to={'/'}><img src={logo} alt="Fancied Story Logo" className="logoImage"/></Link>
            </div>
            <menu>
                <ul
                    className="nav-links"
                    id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
                >
                    <li>
                        <Link onClick={()=>{setShowMenu(false)}} to={'/'}>Home</Link>
                        {/*<a href="/#">Home</a>*/}
                    </li>
                    <li>
                        <Link onClick={()=>{setShowMenu(false)}} to={'/post'}>Posts</Link>
                        {/*<a href="/#">Home</a>*/}
                    </li>
                    <li>
                        <Link onClick={()=>{setShowMenu(false)}} to={'/write'}>Write</Link>
                    </li>

                    {/*<li>*/}
                    {/*  <a href="#download">Download</a>*/}
                    {/*</li>*/}
                    <li>
                        <Link onClick={()=>{setShowMenu(false)}} to={'/settings'}><Button text={<FaUser/>} btnClass={"btn-dark"} href={""}></Button> </Link>
                    </li>

                    {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
                    <li className="nav-btn">
                        {user && <li className="topListItem"> <Button text={"Log Out"} btnClass={"btn-dark"} href={"#"} /></li>}
                    </li>
                </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {showMenu ? (
                    <RiCloseLine color="#fff" size={30} />
                ) : (
                    <AiOutlineBars color="#fff" size={27} />
                )}
            </div>
        </nav>
    );
};
export default Topbar