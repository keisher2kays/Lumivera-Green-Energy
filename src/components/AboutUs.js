// src/components/AboutUs.js
import React from 'react';
import inverter from '../assets/inverter.jpg';
import battery from '../assets/wheels.jpg';
import inverters from '../assets/inverters.jpg';

const AboutUs = () => {
    const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  // Split our shorter headline into individual words to animate safely
  const headlineText = "Accelerating the transition to clean, sustainable energy.";
  const words = headlineText.split(" ");

  return (
    <section className="about-viewport">
      <div className="about-layout-container">
        
        {/* ROW 1: THE ASYMMETRIC HEADER SPLIT */}
        <div className="about-header-split">
          <div className="about-meta-tag animate-mask"> About Us</div>
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
       
Lumivera Green Energy is a UK-based company with an expanding presence in the SADC region, delivering sustainable energy and agricultural solutions that empower communities and businesses. We supply high-quality solar panels, lithium batteries, inverters, and pumps alongside innovative agribusiness services that promote food security and sustainable farming.
            </p>
            <p className="about-col-para">
            Bridging international technology with local expertise, we build long-term partnerships across government, commercial, and community sectors. Driven by innovation and quality, our vision is to expand our clean energy and agricultural footprint across Africa, Europe, and Asia to power a greener, more prosperous future.
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