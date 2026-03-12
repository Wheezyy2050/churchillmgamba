import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  { icon: '🌐', name: 'HTML', desc: 'Semantic markup, accessibility, SEO-friendly structure, HTML5 APIs and modern document architecture.', pct: 90, width: 0.9 },
  { icon: '🎨', name: 'CSS', desc: 'Responsive layouts, animations, Flexbox & Grid, custom properties, and polished UI design.', pct: 85, width: 0.85 },
  { icon: '⚡', name: 'JavaScript', desc: 'DOM manipulation, async/await, fetch API, ES6+, event-driven programming and interactive UIs.', pct: 80, width: 0.8 },
  { icon: '☕', name: 'Java', desc: 'OOP principles, data structures, algorithms, backend logic and building robust server-side applications.', pct: 30, width: 0.3 },
];

function SkillCard({ skill, delay }) {
  const cardRef = useRef(null);
  const barRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          setTimeout(() => {
            if (barRef.current) barRef.current.style.width = (skill.width * 100) + '%';
          }, 300);
        }
      });
    }, { threshold: 0.3 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [skill.width]);

  return (
    <div
      className="skill-card reveal"
      ref={cardRef}
      style={{ transitionDelay: delay }}
    >
      <span className="skill-icon">{skill.icon}</span>
      <div className="skill-name">{skill.name}</div>
      <p className="skill-desc">{skill.desc}</p>
      <div className="skill-bar-bg">
        <div className="skill-bar" ref={barRef} />
      </div>
      <span className="skill-pct">{skill.pct}% Proficiency</span>
    </div>
  );
}

function Skills() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">01</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={`${i * 0.1}s`} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
