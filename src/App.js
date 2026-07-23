

// src/App.js
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import OurProducts from './components/OurProducts';
import Packages from './components/Packages';
import OurTeam from './components/OurTeam';
import TestimonialsPage from './components/Testimonials';
import ContactView from './components/ContactView';
import FooterMarquee from './components/FooterMarquee';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './components/CartContext';
import AgriSolutions from './components/AgriSolutions';
import BackToTop from './components/BackToTop';
import BoreholeDrilling from './components/BoreholeDrilling';

function App() {
  return (
    <CartProvider>
      <div className="app-wrapper">
        <Navbar />

        <main className="main-content-flow">
          <section id="home"><Hero /></section>
          <section id="about"><AboutUs /></section>
          <section id='vision'><VisionMission/></section>
          <section id="services"><Services /></section>
          <section id="agri-solutions"><AgriSolutions /></section>
            <section id="Boreholedrilling"><BoreholeDrilling /></section>
          <section id="products"><OurProducts /></section>
          <section id="packages"><Packages /></section>
           <section id="team"><OurTeam /></section>
          <section id="TestimonialsPage"><TestimonialsPage /></section>
          <section id="contact"><ContactView /></section>
        </main>

        <FooterMarquee />
        <CartDrawer />
        <BackToTop />
      </div>
    </CartProvider>
  );
}

export default App;