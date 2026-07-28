

import React from 'react';
import liberty from '../assets/liberty.jpeg';
import moyo from '../assets/moyo.jpeg';
import ali from '../assets/ali.jpeg';

const team = [
 
 {
  image: liberty,
  name: 'Liberty Chizemo',
  role: 'Director & Shareholder',
  bio: 'Provides strategic leadership and supports the company\'s growth through sound governance, business development, and a commitment to advancing sustainable energy solutions.',
},
 {
  image: moyo,
  name: 'Elizabeth Moyo',
  role: 'Finance Director',
  bio: 'Oversees financial strategy, budgeting, and investment planning to ensure the company\'s renewable energy projects are built on a solid financial foundation. Brings strong expertise in stakeholder engagement and corporate governance, helping align financial decisions with the company\'s long-term vision for sustainable energy growth.',
},
  {
    image: ali,
    name: 'Mohammad Bolhasani',
    role: 'Director & Shareholder',
    bio: 'Drives business development and strategic growth, connecting LumiVera with new markets and long-term partners.',
  },
];

const OurTeam = () => {
  return (
    <section className="team-viewport">
      <div className="team-layout-container">

        {/* Left-Aligned Heading Block — matches About / Services / Products */}
        <div className="team-heading-block">
          <div className="team-meta-tag animate-mask"> Our Team</div>
          <h2 className="team-bold-statement animate-slide-blur">
            Engineered in Harare. Managed Globally.
          </h2>
        </div>

        {/* 2-Column Grid — two leaders per row */}
        <div className="team-grid">
          {team.map((member, i) => (
            <div
              className="team-card animate-slide-blur"
              key={member.name}
              style={{ animationDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className="team-card-image-section">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>

              <div className="team-card-text-section">
                <div className="team-card-meta-row">
                  <span className="team-card-role-tag">{member.role}</span>
                </div>
                <h4 className="team-card-name">{member.name}</h4>
                <p className="team-card-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;