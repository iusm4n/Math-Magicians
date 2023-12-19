import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="Nav-container">
            <h1>Math Magicians</h1>
            <ul className="Nav-items">
                <li><Link to="/home" className="nav-link">Home</Link></li>
                <li>|</li>
                <li><Link to="/calculator" className="nav-link">Calculator</Link></li>
                <li>|</li>
                <li><Link to="/about" className="nav-link">Quote</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;
