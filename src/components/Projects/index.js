import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './projects.scss';

function Projects() {
    return (
        <div id='projects' className='divBox'>
            <div className='sectionTitle'>
                <h2>Projects</h2>
            </div>
            <div className='sectionContent'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/music_main.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Music</h3>
                            <p>React로 생성한 음악 플레이리스트 사이트</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;