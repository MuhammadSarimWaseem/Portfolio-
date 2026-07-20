import React from 'react';
import './Skill.css';
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact, FaWordpress } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

const technologies = [
  ['HTML5', FaHtml5], ['CSS3', FaCss3Alt], ['JavaScript', FaJs], ['React', FaReact],
  ['Next.js', FaReact], ['Node.js', FaNodeJs], ['Python', FaPython], ['WordPress', FaWordpress]
];

function Skill() {
  return (
    <section className="section skills-section" id="about">
      <div className="section-heading">
        <div><p className="section-kicker">About & skills</p><h2>Building for people, not just browsers.</h2></div>
        <p>I enjoy translating complex requirements into interfaces that feel direct, responsive, and easy to use.</p>
      </div>
      <div className="skills-layout">
        <div className="about-panel reveal">
          <p className="about-lead">I work across the product, from polished interfaces to reliable APIs, databases, and production deployments.</p>
          <ul>
            <li><FiCheck /> Interactive, accessible user interfaces</li>
            <li><FiCheck /> React, Next.js, Redux, and Zustand</li>
            <li><FiCheck /> Node.js, Express, MongoDB, and Supabase</li>
            <li><FiCheck /> Authentication, payments, CI/CD, and deployment</li>
          </ul>
        </div>
        <div className="skill-grid reveal">
          {technologies.map(([name, Icon], index) => (
            <div className="skill-item" key={name} style={{ '--delay': `${index * 55}ms` }}>
              <Icon /><span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skill;
