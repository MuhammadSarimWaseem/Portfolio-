import React from 'react';
import './Experience.css';

const roles = [
  { company: 'Zero to One', role: 'Full Stack Developer', period: 'Oct 2025 — Present', detail: 'Contributing to 10+ full-stack products with React, Next.js, Node.js, Supabase, and MongoDB. Resolved 25+ issues while improving performance and user experience by 30%.', tags: ['Next.js', 'Node.js', 'Supabase'] },
  { company: 'Fortify', role: 'Frontend Developer Intern', period: 'Jul — Sep 2025', detail: 'Worked across frontend, backend, integrations, and end-to-end testing for the mobile app and website. Revamped the UI and resolved critical usability and performance issues.', tags: ['React', 'Integration', 'Testing'] },
  { company: 'DevRolin', role: 'Web Developer Intern', period: 'Aug — Oct 2024', detail: 'Developed full-stack MERN applications and used Firebase for real-time data synchronization, backend functionality, and secure hosting.', tags: ['MERN', 'Firebase', 'Full stack'] }
];

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-heading"><div><p className="section-kicker">Experience</p><h2>Shipping, improving, and learning.</h2></div><p>Professional roles spanning product development, integrations, testing, performance, and deployment.</p></div>
      <div className="timeline">
        {roles.map((item) => <article className="timeline-item" key={item.company}>
          <div className="timeline-dot" />
          <time>{item.period}</time>
          <div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.detail}</p><div className="role-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}
      </div>
      <div className="career-extras">
        <article><p className="section-kicker">Education</p><h3>BS Computer Science</h3><p>University of Karachi, DCS-UBIT</p><span>2023 — Present</span></article>
        <article><p className="section-kicker">Leadership</p><h3>Technical Team Lead</h3><p>GDG on Campus, University of Karachi</p><span>2025 — Present</span></article>
        <article><p className="section-kicker">Community</p><h3>Technical Lead</h3><p>Karachi ACM-W Professional Chapter</p><span>2024 — Present</span></article>
      </div>
    </section>
  );
}
export default Experience;
