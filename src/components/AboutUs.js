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
       
LumiVera Green Energy is an internationally registered renewable energy company, incorporated in both the Republic of Zimbabwe and the United Kingdom. We are committed to transforming the energy landscape by delivering sustainable, innovative, and cost-effective clean energy solutions that improve lives, strengthen economies, and protect the environment.
            </p>
            <p className="about-col-para">
              Driven by innovation, sustainability, and excellence, we develop and
              deliver environmentally responsible energy solutions for residential,
              commercial, industrial, agricultural, and public sector clients —
              aiming to become one of Africa's leading renewable energy providers
              while maintaining a strong international presence.
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