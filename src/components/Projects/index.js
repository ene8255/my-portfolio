import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './projects.scss';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div id='projects' className='divBox'>
            <div className='sectionTitle'>
                <h2>Projects</h2>
            </div>
            <div className='sectionContent'>
                <Carousel interval={null} variant="dark">
                    <Carousel.Item>
                        <Link to='/project/1'>
                            <img
                            className="d-block"
                            src="images/Music/main.png"
                            alt="music main"
                            />
                        </Link>
                        <Carousel.Caption>
                            <h3>Music</h3>
                            <p>React로 생성한 음악 플레이리스트 사이트</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to='/project/2'>
                            <img
                            className="d-block"
                            src="images/Green Book/main.png"
                            alt="book main"
                            />
                        </Link>
                        <Carousel.Caption>
                            <h3>Green Book</h3>
                            <p>PHP로 생성한 온라인 서점 사이트</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to='/project/3'>
                            <img
                            className="d-block"
                            src="images/Bewegen clone/main.png"
                            alt="bewegen main"
                            />
                        </Link>
                        <Carousel.Caption>
                            <h3>Bewegen clone 사이트</h3>
                            <p>Vanilla JavaScript로 구현한 Bewegen 클론 사이트</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to='/project/4'>
                            <img
                            className="d-block"
                            src="images/.png"
                            alt="portfolio main"
                            />
                        </Link>
                        <Carousel.Caption>
                            <h3>Inhye's Portfolio</h3>
                            <p>React로 생성한 포트폴리오 사이트</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;