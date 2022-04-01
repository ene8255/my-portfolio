import React from 'react';
import data from '../../data/skills.json';
import './skills.scss';
import SectionTitle from '../include/SectionTitle';
import { IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiPhp, SiMysql, SiAmazonaws, SiGit, SiGithub } from "react-icons/si";

const logos = [<IoLogoHtml5 />, <IoLogoCss3 />, <IoLogoSass />, <IoLogoJavascript />, <IoLogoReact />,
               <IoLogoNodejs />, <SiPhp />, <SiMysql />, <SiAmazonaws />, <SiGit />, <SiGithub />];

function Skills() {
    return (
        <div id='skills' className='divBox'>
            <SectionTitle title='Skills' />
            <div className='sectionContent'>
                <div id='skillCont'>
                    {
                        data.skills.map(skill => (
                            <div key={skill.id}>
                                {logos[skill.id]}
                                <p className='skillName'>{skill.name}</p>
                                <ul className='skillDesc'>
                                    {skill.lists.map((list, idx) => <li key={idx}>{list}</li>)}
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Skills;