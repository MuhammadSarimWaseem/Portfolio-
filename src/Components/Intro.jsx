import React from 'react';
import './Intro.css';
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Intro() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="availability"><span /> Available for new opportunities</div>
        <p className="eyebrow">Full-stack software engineer</p>
        <h1>I turn ideas into <span>production-ready products.</span></h1>
        <p className="hero-description">I’m Muhammad Sarim, a full-stack engineer building user-focused web applications and scalable backends with React, Next.js, Node.js, and Supabase.</p>
        <div className="hero-actions">
          <a className="button primary-button" href="#projects">View my work <FiArrowDownRight /></a>
          <a className="button secondary-button" target="_blank" rel="noreferrer" href={`${process.env.PUBLIC_URL}/Muhammad-Sarim-Resume.pdf`}>Resume <FiDownload /></a>
        </div>
        <div className="social-links" aria-label="Social links">
          <a href="https://www.linkedin.com/in/sarimwaseem/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="https://github.com/MuhammadSarimWaseem" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="mailto:sarimwaseem84@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="code-window">
          <div className="window-bar"><i /><i /><i /><span>portfolio.jsx</span></div>
          <pre><code><b>const</b> developer = {'{'}{`\n`}  name: <em>'Muhammad Sarim'</em>,{`\n`}  craft: [<em>'React'</em>, <em>'Node'</em>],{`\n`}  mindset: <em>'always learning'</em>{`\n`}{'}'};{`\n\n`}<b>function</b> buildIdea(idea) {'{'}{`\n`}  <b>return</b> idea.toProduct();{`\n`}{'}'}</code></pre>
          <div className="code-status"><span>JavaScript</span><span>Ready to build</span></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
