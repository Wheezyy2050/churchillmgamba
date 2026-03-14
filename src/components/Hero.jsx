import React from 'react';
import './Hero.css';

function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="about">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="hero-left">
        <div className="hero-tag">Available for hire</div>
        <h1 className="hero-name">
          Churchill
          <span className="line2">Mgamba.</span>
        </h1>
        <p className="hero-title">Web Developer &amp; Frontend Engineer</p>
        <p className="hero-desc">
          I build clean, performant, and accessible web experiences.
          Specialising in modern frontend technologies — from pixel-perfect
          HTML/CSS to dynamic JavaScript and robust Java backends.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary" onClick={e => handleClick(e, '#projects')}>
            View Projects →
          </a>
          <a href="#contact" className="btn btn-outline" onClick={e => handleClick(e, '#contact')}>
            Let's Talk
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="terminal">
          <div className="terminal-header">
            <div className="dot dot-r" />
            <div className="dot dot-y" />
            <div className="dot dot-g" />
            <span className="terminal-title">churchill.json</span>
          </div>
          <div className="terminal-body">
            <span className="t-line t-brace">{'{'}</span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-key">"name"</span>: <span className="t-str">"Churchill Mgamba"</span>,</span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-key">"role"</span>: <span className="t-str">"Web Developer"</span>,</span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-key">"experience"</span>: <span className="t-str">"1+ years"</span>,</span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-key">"languages"</span>: <span className="t-arr">[</span></span>
            <span className="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"HTML"</span>, <span className="t-str">"CSS"</span>,</span>
            <span className="t-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"JavaScript"</span>, <span className="t-str">"Java"</span></span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-arr">]</span>,</span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-key">"passion"</span>: <span className="t-str">"Building great UX"</span>,</span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-key">"open_to_work"</span>: <span className="t-bool">true</span>,</span>
            <span className="t-line">&nbsp;&nbsp;<span className="t-key">"projects_built"</span>: <span className="t-num">10</span></span>
            <span className="t-line t-brace">{'}'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
