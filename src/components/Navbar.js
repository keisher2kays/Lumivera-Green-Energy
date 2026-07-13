

import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../components/CartContext';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const { totalItems, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={'nav-wrapper' + (scrolled ? ' nav-wrapper--scrolled' : '')}>
        
        <button className="brand-pill-logo" onClick={() => scrollToSection('home')} aria-label="Lumivera Home">
          <svg 
            width="240" 
            height="55" 
            viewBox="0 0 560 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="brand-logo-svg"
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
            {/* "LUMI" - Crisp high contrast white */}
            <text x="130" y="58" fill="#FFFFFF" fontSize="46" fontWeight="900" fontFamily="'Montserrat', 'Arial Black', sans-serif" letterSpacing="0.04em">LUMI</text>
            
            {/* "VER" - Tracked forward to preserve spacing room for the "I" */}
            <text x="272" y="58" fill="#8DC63F" fontSize="46" fontWeight="900" fontFamily="'Montserrat', 'Arial Black', sans-serif" letterSpacing="0.04em">VER</text>
            
            {/* THE DISTINCT "A" AND ACCENT LEAF */}
            <g transform="translate(378, 23)">
              {/* Perfectly clear layout "A" structure */}
              <path d="M20 0 L36 35 L24 35 L20.3 26 L5.7 26 L2 35 L-10 35 Z" fill="#8DC63F" />
              {/* Internal window cutout matches navbar dark theme background */}
              <path d="M13 8 L8 19 L18 19 Z" fill="#111B2D" /> 
              
              {/* Leaf Element lowered and separated to prevent merging */}
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
        </button>

        <ul className="navbar-capsule">
          {navLinks.map((link) => (
            <li className="capsule-item" key={link.id}>
              <button onClick={() => scrollToSection(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <div className="nav-right-controls">
          <button className="cart-icon-btn" onClick={openCart} aria-label="Open cart">
            <ShoppingCart size={20} strokeWidth={2} />
            {totalItems > 0 && <span className="cart-icon-badge">{totalItems}</span>}
          </button>

          <button className="nav-cta-pill nav-cta-pill--desktop" onClick={() => scrollToSection('contact')}>
            Let's Start Now
          </button>

          <button className="hamburger-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* FULLSCREEN MENU OVERLAY */}
      <div className={'mobile-menu-overlay' + (menuOpen ? ' is-open' : '')}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <X size={26} strokeWidth={2} />
        </button>

        <nav className="mobile-menu-links">
          {navLinks.map((link, i) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{ transitionDelay: menuOpen ? (0.08 * i) + 's' : '0s' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button className="mobile-menu-cta" onClick={() => scrollToSection('contact')}>
          Let's Start Now
        </button>
      </div>
    </>
  );
};

export default Navbar;