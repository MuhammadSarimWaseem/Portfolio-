import React, { Fragment } from 'react';
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import 'aos/dist/aos.css';

function Skill() {
    return (
        <Fragment>
            <div data-aos="fade-right" className='Skill'>
                <div>
                    <img className='Skill-Image' src='https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif' alt=''></img>
                </div>
                <div >
                    <h2>What I do</h2>
                    <p className='Skill-Para'>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    <ul>
                        <li>⚡ Develop highly interactive front-end and user interfaces.</li>
                        <li>⚡ Proficient in building Progressive Web Applications (PWAs).</li>
                        <li>⚡ Experienced in Firebase for backend tasks like authentication and database management.</li>
                    </ul>
                </div>
            </div>
            <div className='Lang' data-aos="fade-right">
                <p><FontAwesomeIcon icon={faHtml5} /><br />Html5</p>
                <p><FontAwesomeIcon icon={faCss3Alt} /><br />CSS3</p>
                <p><FontAwesomeIcon icon={faBootstrap} /><br />Bootstrap</p>
                <p><FontAwesomeIcon icon={faJs} /><br />JavaScript</p>
                <p><FontAwesomeIcon icon={faReact} /><br />React</p>
                <p><FontAwesomeIcon icon={faPython} /><br />Python</p>
                <p><FontAwesomeIcon icon={faNodeJs} /><br />Nodejs</p>
            </div>
        </Fragment>
    );
}

export default Skill;
