import React from 'react';
import './detail.scss';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();

    return (
        <div id='detail'>
            <h2>프로젝트 이름</h2>
            <div>
                <img src='../images/music_main.png' alt='project main page'/>
            </div>
            <div>
                <h3>프로젝트 소개</h3>
                <p>프로젝트 설명.........................................</p>
                <p>
                    <strong>프로젝트 사용 기술: </strong> 
                    React, SCSS, .....
                </p>
                <p>
                    <strong>프로젝트 소요기간: </strong>
                    00일
                </p>
                <p>
                    <strong>프로젝트 기여도: </strong>
                    100%
                </p>
                <p>
                    <strong>프로젝트 사이트 주소: </strong>
                    <a href='https://www.naver.com' target='_blank' rel="noopener noreferrer">https://www.naver.com</a>
                </p>
                <p>
                    <strong>프로젝트 깃허브 주소: </strong>
                    <a href='https://www.google.com' target='_blank' rel="noopener noreferrer">https://www.google.com</a>
                </p>
            </div>
            <div>
                <h3>프로젝트 설명</h3>
                <div className='desc'>
                    <p>서버로부터 플레이리스트 목록을 불러 와서 보여줌</p>
                    <div>
                        <img src='../images/music1.gif' alt='project desc'/>
                    </div>
                </div>
                <div className='desc'>
                    <p>서버로부터 플레이리스트 목록을 불러 와서 보여줌</p>
                    <div>
                        <img src='../images/music2.gif' alt='project desc'/>
                    </div>
                </div>
                <div className='desc'>
                    <p>서버로부터 플레이리스트 목록을 불러 와서 보여줌</p>
                    <div>
                        <img src='../images/music3.gif' alt='project desc'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;