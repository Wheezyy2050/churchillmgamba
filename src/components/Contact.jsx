import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

function Contact() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const headerRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    [leftRef, rightRef, headerRef].forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header reveal" ref={headerRef}>
        <span className="section-num">04</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      <div className="contact-grid">
        <div className="reveal" ref={leftRef}>
          <h3 className="contact-tagline">
            Let's build something <span>great</span> together.
          </h3>
          <p className="contact-sub">
            I'm currently open to new opportunities — freelance projects, internships, or full-time roles.
            If you have a project that needs a dedicated developer, let's talk.
          </p>
          <div className="contact-links">
            <a href="mailto:churchill.mgamba@email.com" className="contact-link">
              <span className="cl-icon">✉</span>
              <div className="cl-info">
                <div className="cl-label">Email</div>
                <div className="cl-val">wheezyy65@email.com</div>
              </div>
              <span className="cl-arrow">→</span>
            </a>
            <a href="https://github.com/Wheezyy2050" target="_blank" rel="noreferrer" className="contact-link">
              <span className="cl-icon">⌥</span>
              <div className="cl-info">
                <div className="cl-label">GitHub</div>
                <div className="cl-val">github.com/Wheezyy2050</div>
              </div>
              <span className="cl-arrow">→</span>
            </a>
            <a href="https://linkedin.com/in/churchillmgamba" target="_blank" rel="noreferrer" className="contact-link">
              <span className="cl-icon">◈</span>
              <div className="cl-info">
                <div className="cl-label">LinkedIn</div>
                <div className="cl-val">linkedin.com/in/churchillmgamba</div>
              </div>
              <span className="cl-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="reveal" ref={rightRef} style={{ transitionDelay: '0.2s' }}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="form-label">Your Name</label>
              <input className="form-input" type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn-send">
              {sent ? 'Message Sent ✓' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
