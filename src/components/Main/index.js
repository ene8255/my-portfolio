import React from 'react';
import Front from '../Front';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';

function Main({ refs }) {
    return (
        <main>
            <div id='main-container'>
                <Front />
                <About aboutRef={refs[0]} />
                <Skills skillsRef={refs[1]} />
                <Projects projectsRef={refs[2]} />
            </div>
        </main>
    );
}

export default Main;