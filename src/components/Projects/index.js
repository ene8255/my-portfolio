import React from 'react';
import data from '../../data/projects.json';
import Carousel from 'react-bootstrap/Carousel';
import './projects.scss';
import SectionTitle from '../include/SectionTitle';
import { Link } from 'react-router-dom';

function Projects({ isDarkModeOn }) {
    return (
        <div id='projects' className='divBox'>
            <SectionTitle title='Projects' />
            <div className='sectionContent'>
                <Carousel interval={null} variant={isDarkModeOn ? null : "dark"}>
                    {
                        data.projects.map(project => (
                            <Carousel.Item key={project.id}>
                                <Link to={`/project/${project.id}`}>
                                    <img
                                        className="d-block"
                                        src={`images/${project.name}/main.png`}
                                        alt={`${project.name} main`}
                                    />
                                </Link>
                                <Carousel.Caption>
                                    <h3>{project.name}</h3>
                                    <p>{project.desc[0]}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;