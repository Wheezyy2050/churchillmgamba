import React, { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    date: '2023 — Present',
    title: 'Web Developer',
    company: 'Freelance / Self-Employed',
    desc: 'Building responsive websites and web applications for clients. Delivering pixel-perfect implementations from design mockups, writing clean and maintainable HTML, CSS, and JavaScript code, and ensuring cross-browser compatibility and performance optimization.',
  },
  {
    date: '2022 — 2023',
    title: 'Junior Developer (Trainee)',
    company: 'Academic / Personal Projects',
    desc: 'Developed foundational skills through coursework and independent projects. Focused on mastering HTML, CSS, and JavaScript fundamentals while exploring Java for backend and algorithmic problem-solving.',
  },
  {
    date: '2022',
    title: 'Started Coding Journey',
    company: 'Self-Taught',
    desc: 'Began learning web development with HTML and CSS, quickly progressing to JavaScript and Java. Completed numerous online courses, tutorials, and personal projects that built a solid technical foundation.',
  },
];

function Experience() {
  const refs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    refs.current.forEach(el => el && observer.observe(el));
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">03</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={exp.date}
            className="timeline-item reveal"
            ref={el => refs.current[i] = el}
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            <div className="tl-date">{exp.date}</div>
            <div className="tl-title">{exp.title}</div>
            <div className="tl-company">{exp.company}</div>
            <p className="tl-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
