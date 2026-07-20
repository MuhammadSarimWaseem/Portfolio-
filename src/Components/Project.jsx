import React from 'react';
import './Project.css';
import { Data } from './ProjectData';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function Project() {
  return (
    <section className="projects-band" id="projects">
      <div className="section projects-inner">
        <div className="section-heading">
          <div><p className="section-kicker">Selected work</p><h2>Projects built to solve real problems.</h2></div>
          <a className="text-link" target="_blank" rel="noreferrer" href="https://github.com/MuhammadSarimWaseem">All projects <FiGithub /></a>
        </div>
        <div className="project-grid">
          {Data.map((project, index) => (
            <a className="project-card" href={project.link} target="_blank" rel="noreferrer" key={project.id} aria-label={`Open ${project.name} project`}>
              <div className="project-number">0{index + 1}</div>
              <FiArrowUpRight className="project-arrow" />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
