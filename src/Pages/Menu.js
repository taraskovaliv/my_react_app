import React from 'react';
import './Menu.css'

function Menu() {
    return (
        <div className="Menu">
            <h2>Menu</h2>
            <ul className="MenuList">
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2</a></li>
                <li><a href="#">Menu 3</a></li>
                <li><a href="#">Menu 4</a></li>
            </ul>
        </div>
    );
}

export default Menu;