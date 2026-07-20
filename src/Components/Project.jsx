import React from 'react';
import './Project.css';
import { Data } from './ProjectData';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function Project() {
  const featuredProjects = Data.filter(project => project.featured);
  const otherProjects = Data.filter(project => !project.featured);

  const ProjectCard = ({ project, index, featured = false }) => (
    <a className={`project-card ${featured ? 'featured-card' : 'compact-card'}`} href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} project`}>
      <div className="project-number">0{index + 1}</div>
      <FiArrowUpRight className="project-arrow" />
      {featured && <span className="featured-label">Featured project</span>}
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </a>
  );

  return (
    <section className="projects-band" id="projects">
      <div className="section projects-inner">
        <div className="section-heading">
          <div><p className="section-kicker">Selected work</p><h2>Projects built to solve real problems.</h2></div>
          <a className="text-link" target="_blank" rel="noreferrer" href="https://github.com/MuhammadSarimWaseem">All projects <FiGithub /></a>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => <ProjectCard project={project} index={index} featured key={project.id} />)}
        </div>
        <div className="more-work-heading">
          <h3>More selected work</h3>
          <span>{otherProjects.length} projects</span>
        </div>
        <div className="project-grid compact-grid">
          {otherProjects.map((project, index) => <ProjectCard project={project} index={featuredProjects.length + index} key={project.id} />)}
        </div>
      </div>
    </section>
  );
}
