import React from "react";
import { Link } from 'react-scroll';
import './navbarcss.css';
import contactImg from '../../src/assets/contact.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="" />
            <div className="desktopMenu">
                <Link className="ListItem">Home</Link>
                <Link className="ListItem">About</Link>
                <Link className="ListItem">Portfolio</Link>
                <Link className="ListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me

            </button>

        </nav>
    );
}

export default Navbar;
