import React from 'react';
import { Globe2, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';

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
              <img
                src={logoImg}
                alt="Lumivera Green Energy"
                className="footer-logo-img"
              />
            </div>

            <p>
             A forward-looking renewable energy company delivering sustainable, affordable
    solar solutions for homes, businesses, and communities across Zimbabwe, the
    UK, and beyond.
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
                <a href="mailto:info@lumiveragreenenergy.com">lumivera@lumiveragreenenergy.org</a>
              </li>
              <li>
                <MapPin size={15} strokeWidth={2} />
                <span>66 Paul Street,
                      England London
                      EC2A 4NA
                      GB
                </span>
              </li>
            </ul>
          </div>

          <div className="footer-pipeline-col">
            <Globe2 size={26} color="#F5A623" />
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