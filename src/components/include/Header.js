import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>
                <Link to='/'>Inhye Kim</Link>
            </h1>
            <nav>
                <ul>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;