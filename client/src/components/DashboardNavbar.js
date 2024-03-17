import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserIcon from '../assets/icons/user-icon.png';
import SearchIcon from '../assets/icons/search-icon.png';

function DashboardNavbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            navigate('/');
        }
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return(
        <nav className="dashboard_nav">
            <div className="user_icon" onClick={toggleDropdown}>
                <img className="icon" src={UserIcon}/>
                {isDropdownOpen && (
                    <div className="dropdown_menu">
                        <Link to="/profile-settings" className="dropdown_item">Profile Settings</Link>
                        <div className="dropdown_item logout_btn" onClick={handleLogout}>Logout</div>
                    </div>
                )}
            </div>
            {/*
            <div className="search_box">
                <input 
                    type="text"
                    placeholder="Search"
                />
                <input className="search_icon" type="image" src={SearchIcon} alt="Search"/>
            </div>
            */}
            <ul class="menu">
                <li><Link className="link" to="/dashboard">Dashboard</Link></li>
                <li><Link className="link" to="/content">Content</Link></li>
                <li><Link className="link" to="/editor">Editor</Link></li>
                <li><div className="link logout_btn" onClick={handleLogout}>Logout</div></li>
            </ul>
        </nav>
    );
}

export default DashboardNavbar;
