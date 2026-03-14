import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css';

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top  = e.clientY + 'px';
      }
      setVisible(true);
    };

    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    let animId;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px';
        ringRef.current.style.top  = ry.current + 'px';
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    // Hover detection on interactive elements
    const addHover = () => {
      document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };
    addHover();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`cursor ${visible ? 'cursor--visible' : ''} ${hovered ? 'cursor--hovered' : ''}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${visible ? 'cursor-ring--visible' : ''} ${hovered ? 'cursor-ring--hovered' : ''}`}
      />
    </>
  );
}

export default Cursor;
