import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <p className="FooterText">
                Made by <a href="https://github.com/taraskovaliv">Taras Kovaliv</a>
            </p>
            <p>You can find source code by this <a href="https://github.com/taraskovaliv/my_react_app">link</a></p>
        </div>
    );
}

export default Footer;