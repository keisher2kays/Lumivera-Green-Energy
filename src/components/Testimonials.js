import React from 'react';
import clouds from '../assets/clouds.jpg';


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
            <div className="testi-img-box short"><img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400&auto=format&fit=crop" alt="Solar site" /></div>
            <div className="testi-img-box tall"><img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=400&auto=format&fit=crop" alt="Inverter setup" /></div>
          </div>

          {/* Column 2: Left Inner (Hidden on Mobile) */}
          <div className="testi-collage-col hide-mobile">
            <div className="testi-img-box tall"><img src= {clouds} alt="Rooftop install" /></div>
            <div className="testi-img-box short"><img src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&w=400&auto=format&fit=crop" alt="Client relations" /></div>
          </div>

          {/* Column 3: Left Center (Visible) */}
          <div className="testi-collage-col">
            <div className="testi-img-box center-tall"><img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&auto=format&fit=crop" alt="Engineering office" /></div>
          </div>

          {/* Column 4: True Center Peak (Visible) */}
          <div className="testi-collage-col">
            <div className="testi-img-box center-peak"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop" alt="Corporate desk" /></div>
          </div>

          {/* Column 5: Right Center (Visible) */}
          <div className="testi-collage-col">
            <div className="testi-img-box center-tall"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop" alt="Modern structure" /></div>
          </div>

          {/* Column 6: Right Inner (Hidden on Mobile) */}
          <div className="testi-collage-col hide-mobile">
            <div className="testi-img-box short"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop" alt="Commercial panel" /></div>
            <div className="testi-img-box tall"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop" alt="Team meeting" /></div>
          </div>

          {/* Column 7: Right Outer (Hidden on Mobile) */}
          <div className="testi-collage-col hide-mobile">
            <div className="testi-img-box tall"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop" alt="Technical review" /></div>
            <div className="testi-img-box short"><img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop" alt="System monitoring" /></div>
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