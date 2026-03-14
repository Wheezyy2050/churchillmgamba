import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    tag: 'Featured Project',
    title: 'E-Commerce Storefront',
    desc: 'A fully responsive online store with product filtering, cart management, and checkout flow. Focused on performance and smooth user experience across all devices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage API'],
    featured: true,
    visual: 'pv-1',
  },
  {
    id: 2,
    tag: 'Web App',
    title: 'Task Manager Dashboard',
    desc: 'Interactive task management app with drag-and-drop, priority tags, and local data persistence.',
    tech: ['JavaScript', 'CSS Grid', 'HTML5'],
    visual: 'pv-2',
  },
  {
    id: 3,
    tag: 'UI / Auth',
    title: 'Login Page UI',
    desc: 'A sleek, secure login page with form validation, password toggle visibility, animated error states, and responsive layout for all screen sizes.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Form Validation'],
    visual: 'pv-3',
    isLogin: true,
  },
  {
    id: 4,
    tag: 'API Integration',
    title: 'Weather App',
    desc: 'Real-time weather application that fetches live data via a public weather API. Features city search, temperature units toggle, and dynamic weather icons.',
    tech: ['JavaScript', 'Fetch API', 'OpenWeather API', 'CSS'],
    visual: 'pv-4',
    isWeather: true,
  },
];

function LoginPreview() {
  return (
    <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'6px', padding:'16px 20px', width:'130px' }}>
        <div style={{ width:'32px', height:'32px', background:'rgba(232,255,71,0.15)', borderRadius:'50%', margin:'0 auto 10px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px' }}>🔐</div>
        <div style={{ height:'6px', background:'rgba(255,255,255,0.07)', borderRadius:'2px', marginBottom:'6px' }} />
        <div style={{ height:'6px', background:'rgba(255,255,255,0.07)', borderRadius:'2px', marginBottom:'10px' }} />
        <div style={{ height:'8px', background:'rgba(232,255,71,0.3)', borderRadius:'2px' }} />
      </div>
    </div>
  );
}

function WeatherPreview() {
  return (
    <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', gap:'12px' }}>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontSize:'28px', marginBottom:'4px' }}>⛅</div>
        <div style={{ fontFamily:'Syne,sans-serif', fontSize:'18px', fontWeight:'800', color:'#e8ff47', lineHeight:1 }}>24°</div>
        <div style={{ fontSize:'9px', color:'#555', letterSpacing:'0.1em', textTransform:'uppercase' }}>Partly Cloudy</div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'9px', color:'#555' }}>💧 <span>68%</span></div>
        <div style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'9px', color:'#555' }}>💨 <span>12 km/h</span></div>
        <div style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'9px', color:'#555' }}>👁 <span>10 km</span></div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (project.featured) {
    return (
      <div className="project-card project-card--featured reveal" ref={ref}>
        <div>
          <div className="project-tag">{project.tag}</div>
          <h3 className="project-title project-title--featured">{project.title}</h3>
          <p className="project-desc">{project.desc}</p>
          <div className="project-tech">
            {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
          </div>
          <a href="#" className="project-link">View Project →</a>
        </div>
        <div className={`project-visual ${project.visual}`}>
          <div className="pv-num">01</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-card reveal"
      ref={ref}
      style={{ transitionDelay: delay }}
    >
      <div className={`project-visual ${project.visual}`} style={{ marginBottom:'32px', aspectRatio:'16/7', position:'relative', overflow:'hidden' }}>
        {project.isLogin  && <LoginPreview />}
        {project.isWeather && <WeatherPreview />}
        {!project.isLogin && !project.isWeather && <div className="pv-num">0{project.id}</div>}
        <div className="pv-num" style={{ position:'absolute', bottom:'-10px', right:'10px', opacity:'0.06' }}>0{project.id}</div>
      </div>
      <div className="project-tag">{project.tag}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tech">
        {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>
      <a href="#" className="project-link">View Project →</a>
    </div>
  );
}

function Projects() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">02</span>
        <h2 className="section-title">Projects</h2>
        <div className="section-line" />
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={`${i * 0.1}s`} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
