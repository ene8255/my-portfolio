import React from 'react';
import { useData } from '../../hooks/useData';
import { FaArrowUp } from "react-icons/fa";
import './detail.scss';
import styled from 'styled-components';

const DetailDiv = styled.div`
    background: ${({ theme }) => theme.detailBg};
    box-shadow: 0px 0px 30px 20px ${({ theme }) => theme.detailBox};
`;

function Detail() {
    // 스크롤 위치를 맨위로 올려주는 함수
    const handleClick = () => {
        window.scrollTo(0, 0);
    }
    
    const project = useData();

    if(!project) return (<div id='detail'><h2>데이터가 없습니다.</h2></div>);
    
    return (
        <DetailDiv id='detail'>
            <h2>{project.name}</h2>
            <div>
                <img src={`../images/${project.name}/main.png`} alt='project main page' />
            </div>
            <div id='upBtn' onClick={handleClick}>
                <FaArrowUp />
            </div>
            <div>
                <h3>프로젝트 개요</h3>
                <div id='projectDesc'>
                    {
                        project.desc.map((desc, idx) => 
                            <p key={idx}>{desc}</p>
                        )
                    }
                </div>
                <ul>
                    <li>
                        <strong>프로젝트 사용 기술: </strong>
                    </li>
                    <li>
                        {project.skills}
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>프로젝트 소요기간: </strong>
                    </li>
                    <li>
                        {project.days}일
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>프로젝트 기여도: </strong>
                    </li>
                    <li>
                        100%
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>프로젝트 사이트 주소: </strong>
                    </li>
                    <li>
                        <a href={project.site} target='_blank' rel="noopener noreferrer">
                            {project.site}
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <strong>프로젝트 깃허브 주소: </strong>
                    </li>
                    {
                        project.github.map((git, idx) => (
                            <li key={idx}>
                                <a href={git} target='_blank' rel="noopener noreferrer">
                                    {git}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3>프로젝트 세부사항</h3>
                {
                    project.functions.map(func => (
                        <div className='desc' key={func.no}>
                            <p>
                                <span>{func.no}. </span>
                                {func.desc}
                            </p>
                            <div>
                                {func.imgs.map(img => 
                                    <img key={img} src={`../images/${project.name}/${img}`} alt='project desc'/>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </DetailDiv>
    );
}

export default Detail;