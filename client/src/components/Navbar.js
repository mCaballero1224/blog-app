import React, {useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/images/android-chrome-192x192.png';
import SearchIcon from '../assets/icons/search-icon.png';

function Navbar() {
    return(
        <nav className="main_nav">
            <Link className="logo" to="/">
                <img className="icon" src={logo} alt="Future Gadget Lab" />
                <div>Future Gadget Lab</div>
            </Link>
            <ul className="menu">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/projects">Projects</Link></li>
                <li><Link className="link" to="/contact">Contact</Link></li>
                <li><Link className="link login_btn" to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
