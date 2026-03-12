import React, { useEffect, useRef } from 'react';
import './Stats.css';

const stats = [
  { num: '1+', label: 'Years Experience' },
  { num: '10+', label: 'Projects Built' },
  { num: '4', label: 'Languages Mastered' },
  { num: '∞', label: 'Lines of Code Written' },
];

function Stats() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-strip">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="stat-item reveal"
          ref={el => refs.current[i] = el}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default Stats;
