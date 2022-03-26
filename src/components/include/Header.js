import React from 'react';
import { Link } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';

function Header({ handleScroll, refs }) {
    let scrollY = useScroll();
    const innerH = window.innerHeight;

    return (
        <header>
            <h1>
                <Link to='/'>Inhye Kim</Link>
            </h1>
            <nav>
                <ul>
                    <li 
                        onClick={() => handleScroll(refs[0])} 
                        className={scrollY >= (innerH) && scrollY < (1.8 * innerH) ? 
                                    "on" : 
                                    null}
                    >
                        About me
                    </li>
                    <li 
                        onClick={() => handleScroll(refs[1])}
                        className={scrollY >= (1.8 * innerH) && scrollY < (2.8 * innerH) ? 
                                    "on" : 
                                    null}
                    >
                        Skills
                    </li>
                    <li 
                        onClick={() => handleScroll(refs[2])}
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