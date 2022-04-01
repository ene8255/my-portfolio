import React from 'react';
import { BsEnvelope, BsGithub } from "react-icons/bs";
import './about.scss';
import styled from 'styled-components';
import SectionTitle from '../include/SectionTitle';

const LinkDiv = styled.div`
    svg {
        fill: ${({theme}) => theme.color};
    }
`;

function About() {
    return (
        <div id='about' className='divBox'>
            <SectionTitle title='About me' />
            <div className='sectionContent'>
                <div id='intro'>
                    <p>안녕하세요.</p>
                    <p>제 이름은 김인혜라고 합니다.</p>
                    <p>함께 성장하는 좋은 프론트엔드 개발자가 되기 위해<br/> 오늘도 노력 중입니다.</p>
                    <p id='email'>
                        <BsEnvelope/> 
                        <span>ene8255@gmail.com</span>
                    </p>
                    <LinkDiv id='links'>
                        <a href='https://github.com/ene8255' target='_blank' rel="noopener noreferrer">
                            <BsGithub/>
                        </a>
                        <a href='https://enne.tistory.com/' target='_blank' rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                                <title>티스토리 로고</title>
                                <g><path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"/></g>
                            </svg>
                        </a>
                    </LinkDiv>
                </div>
                <div id='emoji'>
                    <img src='images/memoticon.png' alt='memoji' />
                </div>
            </div>
        </div>
    );
}

export default About;