// src/components/Hero.js
import React from 'react';
// import clouds from '../assets/clouds.jpg';
// import banner from '../assets/banner.jpg';
import panels from '../assets/panels.jpg';

const Hero = () => {
  const scrollToPackages = () => {
    const el = document.getElementById('packages');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cinematic-hero">
      <div
        className="hero-bg-canvas"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6,17,33,0.35) 0%, rgba(6,17,33,0.85) 100%), url(${panels})`
        }}
      ></div>

      <div className="hero-layout-engine hero-layout-engine--banner">
        <div className="hero-main-text animate-reveal">
          <h2>
            POWERING A <span className="neon-highlight">SUSTAINABLE</span> FUTURE.
          </h2>

          <p className="hero-sub-line animate-reveal-delayed">
            Renewable energy solutions for homes, businesses, and agriculture —
            funded with ease by loved ones abroad.
          </p>

          <div className="hero-btn-row">
            <button className="action-capsule-btn animate-reveal-delayed" onClick={scrollToPackages}>
              Explore Solutions <span>→</span>
            </button>
            <button className="hero-btn-outline animate-reveal-delayed" onClick={scrollToContact}>
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;