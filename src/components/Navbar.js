
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../components/CartContext';
import logoImg from '../assets/logo.png';

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
          <img
            src={logoImg}
            alt="Lumivera Green Energy"
            className="nav-logo-img"
          />
        </button>

        <ul className="navbar-capsule">
          {navLinks.map((link) => (
            <li className="capsule-item" key={link.id}>
              <button onClick={() => scrollToSection(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>

        <div className="nav-right-controls">
          <button className="cart-icon-btn" id="cart-icon-target" onClick={openCart} aria-label="Open cart">
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