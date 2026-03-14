import React, { useEffect, useState } from 'react';
import './Navbar.css';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#about" className="nav-logo" onClick={e => handleClick(e, '#about')}>
        CM<span>.</span>
      </a>
      <ul className="nav-links">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onClick={e => handleClick(e, `#${link.toLowerCase()}`)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
