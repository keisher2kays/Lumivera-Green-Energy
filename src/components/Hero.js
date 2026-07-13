

// src/components/Hero.js
import React from 'react';
import panels from '../assets/panels.jpg'
// import lithium from '../assets/lithium.jpg'
import clouds from '../assets/clouds.jpg'

const Hero = () => {
  const scrollToPackages = () => {
    const el = document.getElementById('packages');
    if (el) el.scrollIntoVaiew({ behavior: 'smooth' });
  };

  return (
    <section className="cinematic-hero">
      <div
        className="hero-bg-canvas"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6,17,33,0.4) 0%, rgba(6,17,33,0.8) 100%), url(${clouds})`
        }}
      ></div>

      <div className="hero-layout-engine">

        <div className="hero-main-text animate-reveal">
          <h2>
            Where Clean <br />
            <span className="neon-highlight">Solar Energy</span> Shapes <br />
            Tomorrow.
          </h2>
          <button className="action-capsule-btn animate-reveal-delayed" onClick={scrollToPackages}>
            How It Works <span>→</span>
          </button>
        </div>

        <div className="floating-pip-card">
          <div className="pip-image-placeholder">
            <img
              src={panels}
              alt="LumiVera Mini Grid"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="pip-content">
            <h4>Where Sustainability Meets Style.</h4>
            <p>
              Clean energy solutions that balance absolute global performance, premium infrastructure design, and multi-generational responsibility.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;