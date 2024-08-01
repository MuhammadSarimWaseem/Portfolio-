import React, { Fragment, useState, useEffect } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import Fab from '@mui/material/Fab';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment className={isDarkMode ? 'bright-mode' : 'dark-mode'}>
      <div className={isDarkMode ? 'bright-mode' : 'dark-mode'}  >
        <AppBar className="{isDarkMode ? 'bright-mode' : 'dark-mode'} Typography">
          <Toolbar className={isDarkMode ? 'bright-mode' : 'dark-mode'}>
            <Typography className='Typography' variant='h7' sx={{ flexGrow: 1 }}>
              <FontAwesomeIcon icon={faCode} /> Muhammad Sarim <FontAwesomeIcon icon={faCode} />
            </Typography>
            <Box sx={{ display: { sm: 'block' } }}>
              <Fab variant="extended" onClick={toggleTheme}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </Fab>
            </Box>
          </Toolbar>
        </AppBar>
        <Intro isDarkMode={isDarkMode} />
        <Skill isDarkMode={isDarkMode} />
        <Project isDarkMode={isDarkMode} />
        <Experience />
        <Contact />
        {showTopButton && (
          <button id="topButton" title="Go to top" onClick={scrollToTop} >
            <FontAwesomeIcon icon={faHandPointUp} />
          </button>
        )}
      </div>
    </Fragment>
  );
}

export default App;
