import React from 'react';
import Front from '../Front';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

function Main({ isDarkModeOn }) {
    return (
        <main>
            <Front isDarkModeOn={isDarkModeOn} />
            <div id='main-container'>
                <About />
                <Skills />
                <Projects isDarkModeOn={isDarkModeOn} />
            </div>
        </main>
    );
}

export default Main;