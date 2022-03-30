import React from 'react';
import Front from '../Front';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

function Main() {
    return (
        <main>
            <Front />
            <div id='main-container'>
                <About />
                <Skills />
                <Projects />
            </div>
        </main>
    );
}

export default Main;