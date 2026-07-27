


// // src/components/Hero.js
// import React from 'react';
// import panels from '../assets/panels.jpg';

// const Hero = () => {
//   const scrollToPackages = () => {
//     const el = document.getElementById('packages');
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   const scrollToContact = () => {
//     const el = document.getElementById('contact');
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="cinematic-hero">
//       <div
//         className="hero-bg-canvas"
//         style={{
//           backgroundImage: `linear-gradient(180deg, rgba(18,56,33,0.35) 0%, rgba(18,56,33,0.85) 100%), url(${panels})`
//         }}
//       ></div>

//       <div className="hero-layout-engine hero-layout-engine--banner">
//         <div className="hero-main-text animate-reveal">
//           <div className="hero-origin-badge animate-reveal">
//             🇬🇧 UK Registered Company &nbsp;•&nbsp; Serving Zimbabwe 🇿🇼
//           </div>

//           <h2>
//             POWERING A <span className="neon-highlight">SUSTAINABLE</span> FUTURE.
//           </h2>

//           <p className="hero-sub-line animate-reveal-delayed">
//             A UK-based renewable energy company delivering trusted solar solutions
//             to homes, businesses, and communities across Zimbabwe — funded with ease
//             by loved ones abroad.
//           </p>

//           <div className="hero-btn-row">
//             <button className="action-capsule-btn animate-reveal-delayed" onClick={scrollToPackages}>
//               Explore Solutions <span>→</span>
//             </button>
//             <button className="hero-btn-outline animate-reveal-delayed" onClick={scrollToContact}>
//               Get a Free Quote
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// src/components/Hero.js
import React from 'react';
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
          backgroundImage: `linear-gradient(180deg, rgba(18,56,33,0.35) 0%, rgba(18,56,33,0.85) 100%), url(${panels})`
        }}
      ></div>

      <div className="hero-layout-engine hero-layout-engine--banner">
        <div className="hero-main-text animate-reveal">
          <div className="hero-origin-badge animate-reveal">
            <img 
              src="https://flagcdn.com/w20/gb.png" 
              alt="UK Flag" 
              style={{ width: '18px', height: 'auto', verticalAlign: 'middle', marginRight: '6px' }} 
            />
            UK Registered Company &nbsp;•&nbsp; Serving Zimbabwe 
            <img 
              src="https://flagcdn.com/w20/zw.png" 
              alt="Zimbabwe Flag" 
              style={{ width: '18px', height: 'auto', verticalAlign: 'middle', marginLeft: '6px' }} 
            />
          </div>

          <h2>
            POWERING A <span className="neon-highlight">SUSTAINABLE</span> FUTURE.
          </h2>

          <p className="hero-sub-line animate-reveal-delayed">
            A UK-based renewable energy company delivering trusted solar solutions
            to homes, businesses, and communities across Zimbabwe — funded with ease
            by loved ones abroad.
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