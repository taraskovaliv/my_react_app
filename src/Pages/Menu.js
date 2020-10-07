import React from 'react';
import './Menu.css'

function Menu() {
    return (
        <div className="Menu">
            <h2>Menu</h2>
            <ul className="MenuList">
                {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                <li><a href="#">Menu 1</a></li>
                {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                <li><a href="#">Menu 2</a></li>
                {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                <li><a href="#">Menu 3</a></li>
                {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                <li><a href="#">Menu 4</a></li>
            </ul>
        </div>
    );
}

export default Menu;