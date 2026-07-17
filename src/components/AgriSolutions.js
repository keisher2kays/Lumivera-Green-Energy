// src/components/AgriSolutions.js
import React from 'react';
import { Sprout, Plane, Thermometer, Droplets, ScanEye, SprayCan } from 'lucide-react';
import greenhouseImg from '../assets/greenhouse.jpg';
import droneImg from '../assets/drone.jpg';

const AgriSolutions = () => {
  return (
    <section className="agri-viewport">
      <div className="agri-layout-container">

        {/* ROW 1: TAGGED ZONE — matches About / Services / Products */}
        <div className="agri-tagged-row">
          <div className="agri-meta-tag animate-mask">Greenhouses &amp; Agri-Tech</div>
          <h3 className="agri-bold-statement animate-slide-blur">
            Innovation in greenhouses and smart farming equipment.
          </h3>
        </div>

        {/* ROW 2: GREENHOUSE FEATURE */}
        <div className="agri-feature-split animate-slide-blur delay-1">
          <div className="agri-feature-image">
            <img src={greenhouseImg} alt="Solarized greenhouse structure" />
          </div>
          <div className="agri-feature-content">
            <div className="agri-feature-icon">
              <Sprout size={26} strokeWidth={2} />
            </div>
            <h4>Solarized Greenhouses</h4>
            <p>
              Solar-powered greenhouse structures engineered for optimal climate
              control, extended growing seasons, and lower operating costs —
              built to support commercial and small-holder growers alike.
            </p>
            <div className="agri-tag-row">
              <span className="agri-tag"><Thermometer size={14} /> Climate Control</span>
              <span className="agri-tag"><Droplets size={14} /> Water Efficiency</span>
            </div>
          </div>
        </div>

        {/* ROW 3: DRONE FEATURE (reversed layout) */}
        <div className="agri-feature-split agri-feature-split--reverse animate-slide-blur delay-2">
          <div className="agri-feature-image">
            <img src={droneImg} alt="Agricultural drone technology over farmland" />
          </div>
          <div className="agri-feature-content">
            <div className="agri-feature-icon">
              <Plane size={26} strokeWidth={2} />
            </div>
            <h4>Agricultural Drone Services</h4>
            <p>
              Automated smart farming technology for precision spraying, crop
              health monitoring, and field mapping — reducing input costs while
              improving yield across every acre.
            </p>
            <div className="agri-tag-row">
              <span className="agri-tag"><ScanEye size={14} /> Crop Monitoring</span>
              <span className="agri-tag"><SprayCan size={14} /> Precision Spraying</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgriSolutions;