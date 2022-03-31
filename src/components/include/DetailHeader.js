import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import data from '../../data/data.json';
import { useScroll } from '../../hooks/useScroll';

const DHeader = styled.header`
    background-color: ${({ theme }) => theme.detailBox};
`;

function DetailHeader() {
    const { id } = useParams();
    const numId = Number(id);
    
    let scrollY = useScroll();
    
    return (
        <DHeader className={ scrollY > 30 ? 'on' : null }>
            <h1>
                <Link to='/'>Inhye Kim</Link>
            </h1>
            <nav id='detailNav'>
                <ul>
                    {
                        data.projects.map(project => (
                            <li 
                                key={project.id} 
                                className={numId === project.id ? "hoverEffect on" : "hoverEffect"}
                            >
                                <Link to={`/project/${project.id}`}>{project.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </DHeader>
    );
}

export default DetailHeader;