import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../data/data.json';

function DetailHeader() {
    const { id } = useParams();
    
    return (
        <header>
            <h1>
                <Link to='/'>Inhye Kim</Link>
            </h1>
            <nav id='detailNav'>
                <ul>
                    {
                        data.projects.map(project => (
                            <li key={project.id} className={id == project.id ? "on" : null}>
                                <Link to={`/project/${project.id}`}>{project.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default DetailHeader;