import React, { Fragment } from 'react';
import './Project.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Link } from '@mui/material';
import { Data } from './ProjectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Project() {
    return (
        <Fragment>
            <h1 className='Project-Heading'>PROJECTS</h1>
            <div className='Card-Component'  >
                {Data.map((val) => (
                    <Card key={val.id} className='Card' sx={{ maxWidth: 345, backgroundColor: "#171c28", color: "#fff" }}>
                        <Link href={val.link} sx={{ color: "#fff", textDecorationLine: "none" }} >
                            <CardActionArea sx={{ color: "#fff" }} >
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "#fff" }}>
                                        <FontAwesomeIcon icon={faCode} /> {val.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: "#fff" }}>
                                        {val.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                ))}
                <div>
                    <Link href='https://github.com/MuhammadSarimWaseem'>
                        <Button className='button' sx={{ color: "#fff", backgroundColor: "#55198b", marginTop: "2em", fontSize: "1em", marginBottom: "6em" }} >MORE PROJECTS</Button>
                    </Link>
                </div>
            </div>

        </Fragment>
    );
}