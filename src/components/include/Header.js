import React from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';

function Header() {
    let scrollY = useScroll();
    const innerH = window.innerHeight;

    const handleScroll = (e) => {
        if(e.target.id === 'aboutNav') {
            window.scrollTo(0, innerH);
        }else if(e.target.id === 'skillsNav') {
            window.scrollTo(0, innerH * 2);
        }else {
            window.scrollTo(0, innerH * 3);
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
                        className={scrollY >= (innerH) && scrollY < (1.8 * innerH) ? 
                                    "on" : 
                                    null}
                    >
                        About me
                    </li>
                    <li 
                        id='skillsNav'
                        className={scrollY >= (1.8 * innerH) && scrollY < (2.8 * innerH) ? 
                                    "on" : 
                                    null}
                    >
                        Skills
                    </li>
                    <li 
                        id='projectsNav'
                        className={scrollY >= (2.8 * innerH) && scrollY < (3.8 * innerH) ? 
                                    "on" : 
                                    null}
                    >
                        Projects
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;