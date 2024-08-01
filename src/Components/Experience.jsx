import React, { Fragment, useEffect } from 'react';
import './Experience.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3Alt, faHtml5, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({
            offset: 100,
            delay: 100,
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <Fragment>
            <h1 className='Experience-Heading'>EXPERIENCES</h1>
            <div className='Experience-Card-Component' >
                <Card data-aos="fade-right" className='Experience-Card' sx={{ maxWidth: 500, backgroundColor: "#171c28", color: "#fff" }}>
                    <CardActionArea sx={{ color: "#fff" }} >
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div" sx={{ color: "#fff" }}>
                                SYNC INTERN'S
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                Web Developer Intern
                            </Typography><br />
                            <Typography variant="body1" sx={{ color: "#fff" }}>
                                I've been instrumental in enhancing the functionality and user experience of React web applications as well as various static and dynamic websites.
                            </Typography>
                            <div className='Language'>
                                <p><FontAwesomeIcon icon={faHtml5} /></p>
                                <p><FontAwesomeIcon icon={faCss3Alt} /></p>
                                <p><FontAwesomeIcon icon={faBootstrap} /></p>
                                <p><FontAwesomeIcon icon={faJs} /></p>
                                <p><FontAwesomeIcon icon={faReact} /></p>
                                <p><FontAwesomeIcon icon={faNodeJs} /></p>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card data-aos="fade-right" className='Experience-Card' sx={{ maxWidth: 500, backgroundColor: "#171c28", color: "#fff" }}>
                    <CardActionArea sx={{ color: "#fff" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div" sx={{ color: "#fff" }}>
                                CODSOFT
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                Web Developer Intern
                            </Typography><br />
                            <Typography variant="body1" sx={{ color: "#fff" }}>
                                I've been instrumental in enhancing the functionality and user experience of React web applications as well as various static and dynamic websites.
                            </Typography>
                            <div className='Language'>
                                <p><FontAwesomeIcon icon={faHtml5} /></p>
                                <p><FontAwesomeIcon icon={faCss3Alt} /></p>
                                <p><FontAwesomeIcon icon={faBootstrap} /></p>
                                <p><FontAwesomeIcon icon={faJs} /></p>
                                <p><FontAwesomeIcon icon={faReact} /></p>
                                <p><FontAwesomeIcon icon={faNodeJs} /></p>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </Fragment>
    );
}

export default Experience;
