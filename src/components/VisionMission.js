// src/components/VisionMission.js
import React from 'react';
import { Eye, Target } from 'lucide-react';

const coreValues = [
  'Sustainability',
  'Integrity',
  'Innovation',
  'Excellence',
  'Accountability',
  'Environmental Stewardship',
  'Customer Satisfaction',
  'Safety',
  'Partnership',
  'Continuous Improvement',
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
              To become a globally recognized leader in renewable energy by
              delivering innovative, sustainable, and reliable green energy
              solutions that empower communities and protect the environment
              for future generations.
            </p>
          </div>

          <div className="vision-card vision-card--accent animate-slide-blur delay-2">
            <div className="vision-card-icon">
              <Target size={26} strokeWidth={2} />
            </div>
            <h4>Mission</h4>
            <p>
              To provide affordable, efficient, and environmentally friendly
              energy solutions through innovation, technical excellence, and
              customer-focused service while contributing to global efforts
              toward reducing carbon emissions and promoting sustainable
              development.
            </p>
          </div>
        </div>

        {/* ROW 3: CORE VALUES */}
        <div className="vision-values-row animate-slide-blur delay-3">
          <span className="vision-values-label">Core Values</span>
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