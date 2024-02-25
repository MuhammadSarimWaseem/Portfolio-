import React, { Fragment, useState } from 'react';
import './App.css';
import Intro from './Components/Intro';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Fab from '@mui/material/Fab';

const navItems = ['Skills', 'Projects', 'Work Experience', 'Contact'];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Fragment>
      <div className={isDarkMode ? 'bright-mode' : 'dark-mode'}>
        <AppBar >
          <Toolbar className={isDarkMode ? 'bright-mode' : 'dark-mode'}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <FontAwesomeIcon icon={faCode} /> Muhammad Sarim <FontAwesomeIcon icon={faCode} />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}  >
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#171c28' }} className={isDarkMode ? 'bright-mode' : 'dark-mode'} >
                  {item}
                </Button>
              ))}
              <Fab variant="extended" onClick={toggleTheme}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </Fab>
            </Box>
          </Toolbar>
        </AppBar>
        <Intro />
        <Skill />
        <Project />
        <Experience />
        <Contact />
      </div>
    </Fragment>
  );
}

export default App;
