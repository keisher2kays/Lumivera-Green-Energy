// src/components/Services.js
import React from 'react';
import { 
  Home, 
  Building2, 
  BatteryCharging, 
  CheckCircle2,
  MessageSquareText, 
  PenTool, 
  Wrench, 
  Zap 
} from 'lucide-react';
import robot from '../assets/robot.png';
import avondale from '../assets/avondale.jpg';
import goromonzi from '../assets/goromonzi.jpg';
import greysite from '../assets/greysite.webp';

const Services = () => {
  return (
    <section className="services-viewport">
      <div className="services-layout-container">
        
        {/* ROW 1: TAGGED ZONE (Keeps the top aligned with your About Me page layout) */}
        <div className="services-tagged-row">
          <div className="services-meta-tag animate-mask"> Our Services</div>
          
          <div className="services-main-stream animate-slide-blur delay-1">
            {/* CORE CATEGORY VERTICALS */}
            <div className="showcase-verticals-grid">
              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <Home size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Residential Solar System</h4>
                  <p>Complete clean power architecture configured natively for domestic estates and family properties.</p>
                </div>
              </div>
              
              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <Building2 size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Commercial Solar System</h4>
                  <p>High-yield commercial solar setups engineered to support retail, agricultural, or production hubs.</p>
                </div>
              </div>

              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <BatteryCharging size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Battery Storage</h4>
                  <p>Premium, smart lithium-ion storage banks tailored to protect operations from grid blackouts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: UNCHAINED FULL-WIDTH ZONE (Fills equal white space on left and right) */}
        <div className="why-choose-split animate-slide-blur">
          <div className="why-image-panel">
            <img 
              src={robot} 
              alt="LumiVera Automation Robotics Interface" 
            />
          </div>
          
         
          <div className="why-content-panel">
  <h3>Why Choose LumiVera?</h3>
  <p>
    Our clients benefit from professional project management, high-quality
    renewable energy solutions, and an international business outlook — backed
    by innovative engineering, competitive pricing, and long-term partnerships
    built on trust and excellence.
  </p>

  <div className="checklist-grid">
    <div className="checklist-item">
      <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Top Tier Panels</h5>
      <p>High-quality renewable energy solutions built for lasting performance.</p>
    </div>
    <div className="checklist-item">
      <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Certified Installers</h5>
      <p>Professional project management from consultation through commissioning.</p>
    </div>
    <div className="checklist-item">
      <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Secure UK Desk</h5>
      <p>An international business outlook with operations in Zimbabwe and the UK.</p>
    </div>
    <div className="checklist-item">
      <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> 5-Year Warranty</h5>
      <p>Reliable after-sales support and long-term partnerships built on trust.</p>
    </div>
  </div>
</div>



          
        </div>

        {/* ROW 3: THE SEAMLESS PROCESS TRACK */}
        <div className="process-section-wrapper animate-slide-blur">
          <h4 className="section-internal-title">Our Seamless Process</h4>
          
          <div className="process-horizontal-track">
            <div className="process-node-card">
              <div className="node-circle-icon">
                <MessageSquareText size={22} strokeWidth={2} />
              </div>
              <h5>01. Consultation</h5>
              <p>Connect with our accounts desk to log your specific location load metrics.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <PenTool size={22} strokeWidth={2} />
              </div>
              <h5>02. Design</h5>
              <p>Engineers build a blueprint schematic balanced exactly to your structure.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <Wrench size={22} strokeWidth={2} />
              </div>
              <h5>03. Installation</h5>
              <p>Our secure freight route lands equipment safely on-site for deployment.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <Zap size={22} strokeWidth={2} />
              </div>
              <h5>04. Activation</h5>
              <p>The array goes live with smart telemetry monitoring fully configured.</p>
            </div>
          </div>
        </div>

        {/* ROW 4: FEATURED IMITATION PROJECTS GALLERY */}
        <div className="process-section-wrapper animate-slide-blur">
          <h4 className="section-internal-title">Featured Installations</h4>
          
          <div className="projects-gallery-grid">
            <div className="project-showcase-card">
              <div className="project-card-image-wrapper">
                <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800" alt="Borrowdale Estate Project" />
              </div>
              <div className="project-card-meta-content">
                <div className="project-location-badge">Borrowdale, Harare</div>
                <h5>10kVA Full Estate Independence</h5>
                <p>A comprehensive off-grid conversion for a premium residential estate. Sourced completely through our UK office and fitted with dual lithium backup blocks to guarantee uninterrupted clean power.</p>
              </div>
            </div>

            <div className="project-showcase-card">
              <div className="project-card-image-wrapper">
                {/* <img src="https://images.unsplash.com/photo-1548549117-73d758f278d6?w=800" alt="Avondale Retail Complex" /> */}
                <img src= {avondale} alt="Avondale Retail Complex" />
              </div>
              <div className="project-card-meta-content">
                <div className="project-location-badge">Avondale, Harare</div>
                <h5>5kVA Commercial Solar Hub</h5>
                <p>Engineered to protect a multi-office business center from utility grid load-shedding. Features automated smart transfer infrastructure to keep critical servers online instantly.</p>
              </div>
            </div>

            <div className="project-showcase-card">
              <div className="project-card-image-wrapper">
                {/* <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800" alt="Greystone Park Domestic Build" /> */}
                <img src= {greysite} alt="Greystone Park Domestic Build" />

{/* Goromonzi Region — aerial farmland */}
              </div>
              <div className="project-card-meta-content">
                <div className="project-location-badge">Greystone Park, Harare</div>
                <h5>3kVA Essential Micro-Grid</h5>
                <p>A clean, smart-metered household optimization setup funded by a UK diaspora client to support their family property, maintaining running water systems and security lights consistently.</p>
              </div>
            </div>

            <div className="project-showcase-card">
              <div className="project-card-image-wrapper">
                {/* <img src="https://images.unsplash.com/photo-1594398901394-4e34939a4fe0?w=800" alt="Agricultural Solar Array" /> */}
              <img src= {goromonzi} alt="Agricultural Solar Array" />
              </div>
              <div className="project-card-meta-content">
                <div className="project-location-badge">Goromonzi Region</div>
                <h5>15kVA Solar Irrigation Feed</h5>
                <p>A large-scale monocrystalline array deployed for high-yield farming automation, completely bypassing local fuel-generator dependencies for water pumping arrays.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;