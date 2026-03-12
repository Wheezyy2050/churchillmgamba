import React from 'react';
import './Footer.css';

function Footer() {
  const scrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-copy">
        © 2024 <span>Churchill Mgamba</span>. Built with React &amp; passion.
      </div>
      <a href="#about" className="footer-up" onClick={scrollTop}>↑</a>
    </footer>
  );
}

export default Footer;
