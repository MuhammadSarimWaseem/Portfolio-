import React, { Fragment } from 'react';
import './Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

function Intro() {
    return (
        <Fragment>
            <div className='Intro'>
                <div>
                    <h1>Hi all, I'm Sarim<span className='wave-emoji'>
                        <img alt="👋" draggable="false"
                            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                            style={{
                                height: '1em',
                                width: '1em',
                                margin: '0px 0.05em 0px 0.1em',
                                verticalAlign: '-0.1em'
                            }}>
                        </img></span></h1>
                    <p className='Intro-Para'>A passionate Software Developer 🚀 with experience in building web aplications using JavaScript,
                        React.js, Firebase, and some other cool libraries and frameworks.</p><br />
                    <Link href="https://www.Linkedin.com/in/sarimwaseem/" sx={{ textDecorationLine: "none" }}> <FontAwesomeIcon icon={faLinkedin} style={{ color: "#fff", fontSize: "2em", marginRight: "0.3em" }} /> </Link>
                    <Link href="https://github.com/MuhammadSarimWaseem" sx={{ textDecorationLine: "none" }}> <FontAwesomeIcon icon={faGithub} style={{ color: "#fff", fontSize: "2em", marginRight: "0.3em" }} /> </Link>
                    <Link href="mailto:sarimwaseem84@gmail.com" sx={{ textDecorationLine: "none" }} > <FontAwesomeIcon icon={faEnvelope} style={{ color: "#fff", fontSize: "2em", marginRight: "0.3em" }} /> </Link>
                    <Link href="https://www.facebook.com/" sx={{ textDecorationLine: "none" }}> <FontAwesomeIcon icon={faFacebook} style={{ color: "#fff", fontSize: "2em", marginRight: "0.3em" }} /> </Link>
                    <Link href="https://www.instagram.com/" sx={{ textDecorationLine: "none" }}> <FontAwesomeIcon icon={faInstagram} style={{ color: "#fff", fontSize: "2em", marginRight: "0.3em" }} /> </Link><br />
                    <Link href='https://drive.google.com/file/d/1hX5hqB8F_eJtTbVSLlAevhVtJZqCU7ih/view?usp=sharing' sx={{ color: "#fff", textDecorationLine: "none" }}>
                        <Button className='button' sx={{ color: "#fff", backgroundColor: "#55198b", marginTop: "2em", fontSize: "1em", }} >See My Resume</Button>
                    </Link>
                </div>
                <div>
                    <img className='Intro-Image' src='https://design-system.w3.org/dist/assets/svg/illustration-1.svg' alt=''></img>
                </div>
            </div>
        </Fragment>
    );
}

export default Intro;