// src/components/BoreholeDrilling.js
import React from 'react';
import { 
  Droplets, 
  Layers, 
  Activity, 
  CheckCircle2,
  Compass, 
  Drill, 
  Wrench, 
  Gauge 
} from 'lucide-react';

// Import your new pneumatic rig image asset here
// import pneumaticRig from '../assets/driller.png'; // Save your image here
import drill from '../assets/drill.jpg'
const BoreholeDrilling = () => {
  return (
    <section className="services-viewport">
      <div className="services-layout-container">
        
        {/* ROW 1: TAGGED ZONE (Meta tag on the side, matching About/Services layout) */}
        <div className="services-tagged-row">
          <div className="services-meta-tag animate-mask"> Hydro Services</div>
          
          <div className="services-main-stream animate-slide-blur delay-1">
            {/* CORE CATEGORY VERTICALS */}
            <div className="showcase-verticals-grid">
              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <Droplets size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Residential Boreholes</h4>
                  <p>Complete clean water independence configured natively for domestic estates and family properties.</p>
                </div>
              </div>
              
              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <Layers size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Commercial & Farming Wells</h4>
                  <p>High-yield borehole setups engineered to support agricultural irrigation, processing, or commercial hubs.</p>
                </div>
              </div>

              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <Activity size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Hydrogeological Surveys</h4>
                  <p>Advanced subsurface electronic profiling to pinpoint water fracture zones before drilling begins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: UNCHAINED FULL-WIDTH ZONE (Featuring your new Pneumatic Drill Rig) */}
        <div className="why-choose-split animate-slide-blur">
          <div className="why-image-panel">
            <img 
              src={drill} 
              alt="LumiVera Wheeled Pneumatic Drill Rig" 
            />
          </div>
          
          <div className="why-content-panel">
            <h3>Why Choose LumiVera Hydro?</h3>
            <p>
              Our clients benefit from professional hydrogeological engineering, heavy-duty pneumatic rotary drilling equipment, and reliable solar-integrated pumping systems — backed by guaranteed casing standards, transparent site testing, and long-term partnerships built on trust.
            </p>

            <div className="checklist-grid">
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Wheeled Pneumatic Rig</h5>
                <p>Heavy-duty, high-diameter pneumatic machinery capable of penetrating hard granite.</p>
              </div>
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Scientific Siting</h5>
                <p>2D ground resistivity hydro-surveys ensuring maximum aquifer strike precision.</p>
              </div>
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Heavy Class-A Casing</h5>
                <p>Thick-walled steel and PVC casing installed to protect water purity and borehole structure.</p>
              </div>
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Solar Pumping Sync</h5>
                <p>Direct integration with off-grid solar energy systems for zero-cost water pumping.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3: THE SEAMLESS PROCESS TRACK */}
        <div className="process-section-wrapper animate-slide-blur">
          <h4 className="section-internal-title">Our Drilling Process</h4>
          
          <div className="process-horizontal-track">
            <div className="process-node-card">
              <div className="node-circle-icon">
                <Compass size={22} strokeWidth={2} />
              </div>
              <h5>01. Survey & Siting</h5>
              <p>Hydrogeologists run electronic scans on-site to locate precise underground water aquifers.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <Drill size={22} strokeWidth={2} />
              </div>
              <h5>02. Pneumatic Drilling</h5>
              <p>Our heavy wheeled pneumatic rig drills through dense rock layers to reach deep water seams.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <Wrench size={22} strokeWidth={2} />
              </div>
              <h5>03. Casing & Graveling</h5>
              <p>High-grade protective casing and natural gravel packs are deployed to line and filter the well.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <Gauge size={22} strokeWidth={2} />
              </div>
              <h5>04. Testing & Fitting</h5>
              <p>Continuous compressor flushing and yield capacity tests prepare the system for pump installation.</p>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default BoreholeDrilling;