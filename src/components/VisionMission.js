// src/components/VisionMission.js
import React from 'react';
import { Eye, Target } from 'lucide-react';

const coreValues = [
  'Integrity',
  'Innovation',
  'Excellence',
  'Reliability',
  'Sustainability',
  'Customer Focus',
  'Partnership',
];

const VisionMission = () => {
  return (
    <section className="vision-viewport">
      <div className="vision-layout-container">

        {/* ROW 1: TAGGED ZONE — matches About / Services / Products */}
        <div className="vision-tagged-row">
          <div className="vision-meta-tag animate-mask"> Vision &amp; Mission</div>
          <h3 className="vision-bold-statement animate-slide-blur">
            What drives everything we build.
          </h3>
        </div>

        {/* ROW 2: VISION + MISSION SPLIT */}
        <div className="vision-split">
          <div className="vision-card animate-slide-blur delay-1">
            <div className="vision-card-icon">
              <Eye size={26} strokeWidth={2} />
            </div>
            <h4>Vision</h4>
            <p>
              To become Africa's leading provider of sustainable energy,
              agricultural technology, and construction solutions that
              improve and transform lives through innovation, reliability,
              and environmental stewardship.
            </p>
          </div>

          <div className="vision-card vision-card--accent animate-slide-blur delay-2">
            <div className="vision-card-icon">
              <Target size={26} strokeWidth={2} />
            </div>
            <h4>Mission</h4>
            <p>
              To deliver world-class renewable energy systems, smart
              agricultural technologies, and sustainable infrastructure
              that improves productivity, reduces energy costs, and
              supports economic development across Africa.
            </p>
          </div>
        </div>

        {/* ROW 3: CORE VALUES */}
        <div className="vision-values-row animate-slide-blur delay-3">
          <span className="vision-values-label">Core Values &mdash; Strongly Rooted in Ubuntu</span>
          <div className="vision-values-pills">
            {coreValues.map((value) => (
              <span className="vision-value-pill" key={value}>{value}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionMission;