// src/components/AboutUs.js
import React from 'react';
import inverter from '../assets/inverter.jpg';
import battery from '../assets/battery.jpg';
import inverters from '../assets/inverters.jpg';

const AboutUs = () => {
    const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  // Split our shorter headline into individual words to animate safely
  const headlineText = "Scalable solar engineered for global energy demands.";
  const words = headlineText.split(" ");

  return (
    <section className="about-viewport">
      <div className="about-layout-container">
        
        {/* ROW 1: THE ASYMMETRIC HEADER SPLIT */}
        <div className="about-header-split">
          <div className="about-meta-tag animate-mask">/ About Us</div>
          <div>
            <h3 className="about-hero-statement">
              {words.map((word, index) => (
                <span key={index} className="word-mask">
                  <span 
                    className="animate-word" 
                    style={{ animationDelay: `${0.2 + index * 0.06}s` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h3>
          </div>
        </div>

        {/* ROW 2: MID-TIER DETAILED BREAKDOWN BLOCK */}
        <div className="about-mid-engine">
          <div className="about-square-asset animate-slide-blur delay-2">
            <img src={battery} alt="LumiVera Infrastructure Execution" />
          </div>
          
          <div className="about-text-columns animate-slide-blur delay-3">
            <p className="about-col-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
            </p>
            <p className="about-col-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integrity checked and precision certified. We combine clean innovation, reliable engineering, and eco-friendly deployment architectures to support sustainable standalone energy projects worldwide.
            </p>
            <button className="explore-inline-btn" onClick={scrollToProducts}>
  <div className="explore-icon-circle">↓</div> Explore More
</button>
          </div>
        </div>

        {/* ROW 3: DOUBLE CINEMATIC PHOTO GALLERY */}
        <div className="about-gallery-row animate-slide-blur delay-3">
          <div className="gallery-landscape-card">
            <img src={inverters} alt="Hardware Distribution Asset" />
          </div>
          <div className="gallery-landscape-card">
            <img src={inverter} alt="Renewable Grid Field Deployment" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;