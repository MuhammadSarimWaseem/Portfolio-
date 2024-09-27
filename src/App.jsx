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
import { faCode, faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import Fab from '@mui/material/Fab';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { ClipLoader } from 'react-spinners';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  // Toggle the dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Handle scroll visibility for the 'scroll to top' button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Listen to window scroll event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate a loading period
  useEffect(() => {
    // This simulates a loading period of 2 seconds
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <Fragment>
      {/* Conditionally render the loading spinner */}
      {loading ? (
        <div className="loading-screen">
          <ClipLoader color="#3498db" loading={loading} size={50} />
          <Typography variant="h5" style={{ marginTop: '20px' }}>
            Loading, please wait...
          </Typography>
        </div>
      ) : (
        <div className={isDarkMode ? 'bright-mode' : 'dark-mode'}>
          <AppBar className={isDarkMode ? 'bright-mode Typography' : 'dark-mode Typography'}>
            <Toolbar className={isDarkMode ? 'bright-mode' : 'dark-mode'}>
              <Typography className="Typography" variant="h7" sx={{ flexGrow: 1 }}>
                <FontAwesomeIcon icon={faCode} /> Muhammad Sarim <FontAwesomeIcon icon={faCode} />
              </Typography>
              <Box sx={{ display: { sm: 'block' } }}>
                <Fab variant="extended" onClick={toggleTheme}>
                  {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
                </Fab>
              </Box>
            </Toolbar>
          </AppBar>

          {/* Main content of the app */}
          <Intro isDarkMode={isDarkMode} />
          <Skill isDarkMode={isDarkMode} />
          <Project isDarkMode={isDarkMode} />
          <Experience />
          <Contact />

          {/* Scroll to top button */}
          {showTopButton && (
            <button id="topButton" title="Go to top" onClick={scrollToTop}>
              <FontAwesomeIcon icon={faHandPointUp} />
            </button>
          )}
        </div>
      )}
    </Fragment>
  );
}

export default App;
