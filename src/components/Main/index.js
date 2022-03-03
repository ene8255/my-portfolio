import React from 'react';
import Front from '../Front';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

function Main() {

    return (
        <main>
            <div id='main-container'>
                <Front />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}

export default Main;