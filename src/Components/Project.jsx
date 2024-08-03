import React, { Fragment, useEffect } from 'react';
import './Project.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Link } from '@mui/material';
import { Data } from './ProjectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project(props) {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <Fragment >
            <h1 className='Project-Heading'>PROJECTS</h1>
            <div className='Card-Component'>
                {Data.map((val) => (
                    <Card data-aos="fade-up" key={val.id} className='Card' sx={{ maxWidth: 345, backgroundColor: "#171c28", color: "#fff" }}>
                        <Link target="_blank" href={val.link} sx={{ color: "#fff", textDecoration: "none" }} >
                            <CardActionArea sx={{ color: "#fff" }}  >
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                        <FontAwesomeIcon icon={faCode} /> {val.name}
                                    </Typography>
                                    <Typography className='.Card-para' variant="body1" sx={{ color: "#fff" }}>
                                        {val.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                ))}
                <div>
                    <Link className='project' target="_blank" href='https://github.com/MuhammadSarimWaseem'>
                        <Button sx={{ color: "#fff", backgroundColor: "#55198b", marginTop: "2em", fontSize: "1em", marginBottom: "6em" }} >MORE PROJECTS</Button>
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}