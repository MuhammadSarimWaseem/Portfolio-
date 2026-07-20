import React, { useEffect, useState } from 'react';
import './App.css';
import Intro from './Components/Intro';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import { FiArrowUp, FiMoon, FiSun } from 'react-icons/fi';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.section-heading, .about-panel, .skill-grid, .project-card, .timeline-item, .career-extras article, .contact-copy, .contact-form'
    );
    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal');
      target.style.setProperty('--reveal-delay', `${(index % 3) * 90}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -45px' });

    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Muhammad Sarim, home">
          <span className="brand-mark">MS</span>
          <span>Muhammad Sarim</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="icon-button theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      <main>
        <Intro />
        <Skill />
        <Project />
        <Experience />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>Designed and built by Muhammad Sarim</span>
        <span>Full-stack software engineer - Karachi, Pakistan</span>
      </footer>

      <button
        className={`icon-button back-to-top ${showTopButton ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        title="Back to top"
      >
        <FiArrowUp />
      </button>
    </div>
  );
}

export default App;
