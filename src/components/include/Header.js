import React from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

function Header({ isDarkModeOn, toggleDarkMode }) {
    let scrollY = useScroll();

    const innerH = window.innerHeight;

    // nav 메뉴 클릭시 각 섹션의 위치로 이동하게 하는 함수
    const handleScroll = (e) => {
        if(e.target.id === 'aboutNav') {
            window.scrollTo(0, 0);
        }else if(e.target.id === 'skillsNav') {
            window.scrollTo(0, innerH);
        }else if(e.target.id === 'projectsNav') {
            window.scrollTo(0, innerH * 2);
        }
    };

    return (
        <header>
            <h1>
                <Link to='/'>Inhye Kim</Link>
            </h1>
            <nav>
                <ul onClick={handleScroll}>
                    <li 
                        id='aboutNav'
                        className={scrollY >= 0 && scrollY < (0.8 * innerH) ? 
                                    "hoverEffect on" : 
                                    "hoverEffect"}
                    >
                        About me
                    </li>
                    <li 
                        id='skillsNav'
                        className={scrollY >= (0.8 * innerH) && scrollY < (1.8 * innerH) ? 
                                    "hoverEffect on" : 
                                    "hoverEffect"}
                    >
                        Skills
                    </li>
                    <li 
                        id='projectsNav'
                        className={scrollY >= (1.8 * innerH) && scrollY < (2.8 * innerH) ? 
                                    "hoverEffect on" : 
                                    "hoverEffect"}
                    >
                        Projects
                    </li>
                    <li onClick={toggleDarkMode}>
                        {isDarkModeOn ? <RiMoonClearLine /> : <RiSunLine />}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;