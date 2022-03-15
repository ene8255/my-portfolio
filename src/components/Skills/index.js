import React from 'react';
import './skills.scss';
import { IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiPhp, SiMysql, SiAmazonaws } from "react-icons/si";

function Skills() {
    return (
        <div id='skills' className='divBox'>
            <div className='sectionTitle'>
                <h2>Skills</h2>
            </div>
            <div className='sectionContent'>
                <div id='skillCont'>
                    <div>
                        <IoLogoHtml5 />
                        <p className='skillName'>HTML5</p>
                        <ul className='skillDesc'>
                            <li>HTML5 표준을 준수한 마크업을 할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <IoLogoCss3 />
                        <p className='skillName'>CSS3</p>
                        <ul className='skillDesc'>
                            <li>웹페이지에 스타일을 적용할 수 있습니다.</li>
                            <li>flex, grid 등 다양한 레이아웃을 활용할 수 있습니다.</li>
                            <li>요소에 hover, transform, animation 등 다양한 효과를 적용할 수 있습니다.</li>
                            <li>미디어 쿼리를 이용하여 반응형 웹페이지를 제작할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <IoLogoSass />
                        <p className='skillName'>SCSS</p>
                        <ul className='skillDesc'>
                            <li>SCSS 문법을 활용하여 웹사이트를 스타일링할 수 있습니다.</li>
                            <li>mixin, 변수, 함수 등을 활용할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <IoLogoJavascript />
                        <p className='skillName'>JavaScript</p>
                        <ul className='skillDesc'>
                            <li>JavaScript를 활용하여 동적인 웹사이트를 제작할 수 있습니다.</li>
                            <li>Carousel 슬라이더를 구현할 수 있고, canvas를 활용할 수 있습니다.</li>
                            <li>JSON 데이터와 api를 활용할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <IoLogoReact />
                        <p className='skillName'>React</p>
                        <ul className='skillDesc'>
                            <li>React를 사용하여 웹앱을 제작하고, 배포할 수 있습니다.</li>
                            <li>React를 활용한 CRUD 게시판을 제작할 수 있습니다.</li>
                            <li>다양한 React library와 Redux를 사용할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <IoLogoNodejs />
                        <p className='skillName'>Node.js</p>
                        <ul className='skillDesc'>
                            <li>간단한 웹서버를 생성하고 배포할 수 있습니다.</li>
                            <li>client 페이지와 연결하여 CRUD 기능을 구현할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <SiPhp />
                        <p className='skillName'>PHP</p>
                        <ul className='skillDesc'>
                            <li>PHP를 사용하여 CRUD 게시판을 제작하고, 배포할 수 있습니다.</li>
                            <li>로그인, 회원가입, 장바구니 등의 기능을 구현할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <SiMysql />
                        <p className='skillName'>MySQL</p>
                        <ul className='skillDesc'>
                            <li>기본적인 MySQL 쿼리문을 작성할 수 있습니다.</li>
                            <li>데이터베이스와 테이블을 생성, 삭제, 변경할 수 있습니다.</li>
                            <li>테이블에 데이터를 삽입, 삭제, 변경할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <SiAmazonaws />
                        <p className='skillName'>AWS</p>
                        <ul className='skillDesc'>
                            <li>Amazon RDS를 사용하여 MySQL 데이터베이스를 구축하고 활용할 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;