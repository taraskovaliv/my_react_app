import React from 'react';
import './Header.css';
import Search from "./Search";

function Header() {
    return (
        <div className="Header">
            <p className="HeaderText">
                My news
            </p>
            <Search/>
        </div>
    );
}

export default Header;