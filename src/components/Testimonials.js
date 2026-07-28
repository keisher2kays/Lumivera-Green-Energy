import React from 'react';
import clouds from '../assets/clouds.jpg';
import i from '../assets/i.jpg'
import ii from '../assets/ii.jpg'
import iii from '../assets/iii.jpg'
import iv from '../assets/iv.jpg'
import v from '../assets/v.jpg'
import vi from '../assets/vi.jpg'
import vii from '../assets/vii.jpg'
import viii from '../assets/viii.jpg'
import viiii from '../assets/viiii.jpg'
import x from '../assets/x.jpg'

const testimonialData = [
  {
    stars: '★★★★★',
    text: '"The engineering precision delivered on our hybrid solar setup exceeded expectations. Navigating payment plans from abroad was seamless."',
    name: 'Joao M.',
    role: 'Diaspora Client (UK)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    stars: '★★★★★',
    text: '"Our private school facility needed a rugged, dependable backup system. The project was completed ahead of timeline with impeccable service."',
    name: 'Bruno K.',
    role: 'School Administrator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    stars: '★★★★★',
    text: '"Absolute transparency from initial consultation to installation. Exceptional communication, clean field execution, and 24/7 client support."',
    name: 'Lais A.',
    role: 'Commercial Partner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
  }
];

const TestimonialsPage = () => {
  return (
    <main className="testi-page-viewport">
      <div className="testi-page-container">

        {/* ROW 1: TAGGED ZONE — matches About / Services / Products / Team top alignment */}
        <div className="testi-tagged-row">
          <div className="testi-meta-tag animate-mask"> Testimonials</div>
          <h1 className="testi-bold-statement animate-slide-blur">
            Trusted by creatives and leaders across various industries.
          </h1>
        </div>

        {/* --- STAGGERED IMAGE COLLAGE --- */}
        <div className="testi-collage-grid">
          {/* Column 1: Left Outer (Hidden on Mobile) */}
          <div className="testi-collage-col hide-mobile">
            <div className="testi-img-box short"><img src={i} alt="Solar site" /></div>
            <div className="testi-img-box tall"><img src={ii} alt="Inverter setup" /></div>
          </div>

          {/* Column 2: Left Inner (Hidden on Mobile) */}
          <div className="testi-collage-col hide-mobile">
            <div className="testi-img-box tall"><img src= {clouds} alt="Rooftop install" /></div>
            <div className="testi-img-box short"><img src={iii} alt="Client relations" /></div>
          </div>

          {/* Column 3: Left Center (Visible) */}
          <div className="testi-collage-col">
            <div className="testi-img-box center-tall"><img src={iv} alt="Engineering office" /></div>
          </div>

          {/* Column 4: True Center Peak (Visible) */}
          <div className="testi-collage-col">
            <div className="testi-img-box center-peak"><img src= {v} alt="Corporate desk" /></div>
          </div>

          {/* Column 5: Right Center (Visible) */}
          <div className="testi-collage-col">
            <div className="testi-img-box center-tall"><img src={vi} alt="Modern structure" /></div>
          </div>

          {/* Column 6: Right Inner (Hidden on Mobile) */}
          <div className="testi-collage-col hide-mobile">
            <div className="testi-img-box short"><img src={vii} alt="Commercial panel" /></div>
            <div className="testi-img-box tall"><img src={viii} alt="Team meeting" /></div>
          </div>

          {/* Column 7: Right Outer (Hidden on Mobile) */}
          <div className="testi-collage-col hide-mobile">
            <div className="testi-img-box tall"><img src={viiii} alt="Technical review" /></div>
            <div className="testi-img-box short"><img src={x} alt="System monitoring" /></div>
          </div>
        </div>

        {/* --- REVIEW CARDS ROW --- */}
        <div className="testi-cards-row">
          {testimonialData.map((item, index) => (
            <div className="testi-review-card" key={index}>
              <div className="testi-stars">{item.stars}</div>
              <p className="testi-quote">{item.text}</p>
              <div className="testi-author-block">
                <img src={item.avatar} alt={item.name} className="testi-avatar" />
                <div className="testi-author-info">
                  <h4 className="testi-author-name">{item.name}</h4>
                  <span className="testi-author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default TestimonialsPage;