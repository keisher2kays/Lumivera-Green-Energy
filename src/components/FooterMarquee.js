import React from 'react';
import { Globe2, Phone, Mail, MapPin } from 'lucide-react';

const FooterMarquee = () => {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">

      <div className="footer-main">
        <div className="footer-main-container">

          <div className="footer-brand-col">
            <div className="footer-brand-logo-group">
              <svg 
                width="240" 
                height="55" 
                viewBox="0 0 560 120" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="footer-brand-svg"
              >
                {/* ROUND EMBLEM SYMBOL */}
                <g transform="translate(10, 5)">
                  <circle cx="55" cy="55" r="50" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.15" />
                  <circle cx="55" cy="55" r="46" stroke="#8DC63F" strokeWidth="0.75" opacity="0.2" />

                  {/* ENLARGED SUN */}
                  <circle cx="42" cy="38" r="18" fill="#FDB813" />
                  <g stroke="#FDB813" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="42" y1="14" x2="42" y2="7" />
                    <line x1="42" y1="62" x2="42" y2="69" />
                    <line x1="18" x2="11" y1="38" y2="38" />
                    <line x1="66" x2="73" y1="38" y2="38" />
                    <line x1="25" y1="21" x2="20" y2="16" />
                    <line x1="59" y1="55" x2="64" y2="60" />
                    <line x1="25" y1="55" x2="20" y2="60" />
                    <line x1="59" y1="21" x2="64" y2="16" />
                  </g>

                  {/* SOLAR PANEL GRID */}
                  <g transform="rotate(-15 55 55)">
                    <path d="M28 47 L82 47 L90 75 L20 75 Z" fill="#0B2240" stroke="#FFFFFF" strokeWidth="1" />
                    <g stroke="#FFFFFF" strokeWidth="1.2" opacity="0.95">
                      <line x1="41" y1="47" x2="37" y2="75" />
                      <line x1="55" y1="47" x2="55" y2="75" />
                      <line x1="69" y1="47" x2="73" y2="75" />
                      <line x1="26" y1="56" x2="84" y2="56" />
                      <line x1="23" y1="66" x2="87" y2="66" />
                    </g>
                  </g>

                  {/* DUAL SWEEPING GREEN LEAVES */}
                  <path d="M14 75 C14 55, 33 41, 58 47 C44 64, 30 86, 14 75 Z" fill="#1A532E" />
                  <path d="M14 75 C22 66, 42 55, 58 47" stroke="#8DC63F" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M28 86 C36 72, 55 64, 75 70 C61 81, 47 97, 28 86 Z" fill="#8DC63F" />
                  <path d="M28 86 C36 80, 53 75, 75 70" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
                </g>

                {/* TYPOGRAPHY IDENTITY TEXT */}
                <text x="130" y="58" fill="#FFFFFF" fontSize="46" fontWeight="900" fontFamily="'Montserrat', 'Arial Black', sans-serif" letterSpacing="0.04em">LUMI</text>
                <text x="272" y="58" fill="#8DC63F" fontSize="46" fontWeight="900" fontFamily="'Montserrat', 'Arial Black', sans-serif" letterSpacing="0.04em">VER</text>
                
                <g transform="translate(378, 23)">
                  <path d="M20 0 L36 35 L24 35 L20.3 26 L5.7 26 L2 35 L-10 35 Z" fill="#8DC63F" />
                  {/* Matches deep dark footer column backgrounds */}
                  <path d="M13 8 L8 19 L18 19 Z" fill="#0A1424" /> 
                  
                  <path d="M22 34 C22 34, 10 39, -14 43 C-1 50, 16 46, 24 43 Z" fill="#8DC63F" />
                  <path d="M3 39 C9 41, 17 42, 24 43" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                </g>

                {/* "GREEN ENERGY" */}
                <text x="290" y="84" fill="#8DC63F" fontSize="13.5" fontWeight="700" fontFamily="'Mono', 'Courier New', monospace" letterSpacing="0.44em" textAnchor="middle">GREEN ENERGY</text>
                
                {/* TAGLINE BLOCK */}
                <line x1="130" y1="100" x2="165" y2="100" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.3" />
                <text x="292" y="104" fill="#FFFFFF" fontSize="9.5" fontWeight="700" fontFamily="'Mono', 'Courier New', monospace" letterSpacing="0.22em" textAnchor="middle" opacity="0.7">POWERING A BRIGHTER TOMORROW</text>
                <line x1="420" y1="100" x2="455" y2="100" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.3" />
              </svg>
            </div>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Clean, reliable
              solar power for homes and businesses across Zimbabwe — funded with ease
              by loved ones abroad.
            </p>
          </div>

          <div className="footer-links-col">
            <h5>Quick Links</h5>
            <ul>
              <li><button onClick={() => goTo('home')}>Home</button></li>
              <li><button onClick={() => goTo('packages')}>Solutions</button></li>
              <li><button onClick={() => goTo('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5>Contact</h5>
            <ul className="footer-contact-list">
              <li>
                <Phone size={15} strokeWidth={2} />
                <a href="tel:+447909787374">+44 7909 787374</a>
              </li>
              <li>
                <Mail size={15} strokeWidth={2} />
                <a href="mailto:info@lumiveragreenenergy.com">info@lumiveragreenenergy.com</a>
              </li>
              <li>
                <MapPin size={15} strokeWidth={2} />
                <span>Serving UK Diaspora &amp; Homes Across Zimbabwe</span>
              </li>
            </ul>
          </div>

          <div className="footer-pipeline-col">
            <Globe2 size={26} color="#DDF23D" />
            <h5>From the UK to Zimbabwe</h5>
            <p className="footer-pipeline-quote">&ldquo;We light up your future.&rdquo;</p>
          </div>

        </div>
      </div>

      <div className="footer-bottom-bar">
        <span>© {new Date().getFullYear()} LumiVera Green Energy. All rights reserved.</span>
      </div>

    </footer>
  );
};

export default FooterMarquee;