// src/components/ConstructionProjects.js
import React from 'react';
import {
  Building2,
  Zap,
  ClipboardList,
  CheckCircle2,
  Compass,
  Ruler,
  Hammer,
  ShieldCheck,
} from 'lucide-react';

// Import your construction site image asset here
import constructionSite from '../assets/construction.jpg'; // Save your image here

const ConstructionProjects = () => {
  return (
    <section className="services-viewport">
      <div className="services-layout-container">

        {/* ROW 1: TAGGED ZONE (Meta tag on the side, matching Hydro/About/Services layout) */}
        <div className="services-tagged-row">
          <div className="services-meta-tag animate-mask">Build Services</div>

          <div className="services-main-stream animate-slide-blur delay-1">
            {/* CORE CATEGORY VERTICALS */}
            <div className="showcase-verticals-grid">
              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <Building2 size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Residential & Commercial Construction</h4>
                  <p>Foundations, structural, and civil works for homes, businesses, and industrial sites — built to code and built to last.</p>
                </div>
              </div>

              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <Zap size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Renewable Energy Integration</h4>
                  <p>Solar and hybrid systems designed into the build from day one, rather than retrofitted after handover.</p>
                </div>
              </div>

              <div className="vertical-mini-card">
                <div className="vertical-icon-frame">
                  <ClipboardList size={22} color="#1E6B38" strokeWidth={2} />
                </div>
                <div>
                  <h4>Project & Site Management</h4>
                  <p>A dedicated project manager overseeing timelines, budgets, contractors, and quality from groundbreaking to handover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: UNCHAINED FULL-WIDTH ZONE */}
        <div className="why-choose-split animate-slide-blur">
         

          <div className="why-content-panel">
            <h3>Why Choose LumiVera Construction?</h3>
            <p>
              Our clients benefit from a single, coordinated team handling both the civil build and the
              energy system — backed by certified site supervision, transparent timelines, and long-term
              partnerships built on trust.
            </p>

            <div className="checklist-grid">
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Structural Engineering</h5>
                <p>Foundations and structural work designed and executed to local building standards.</p>
              </div>
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Certified Site Supervisors</h5>
                <p>On-site quality control at every stage, from groundbreaking through to finishing.</p>
              </div>
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Integrated Energy Design</h5>
                <p>Solar and electrical systems planned alongside the structure, not bolted on afterward.</p>
              </div>
              <div className="checklist-item">
                <h5><CheckCircle2 size={16} color="#1E6B38" strokeWidth={2.5} /> Transparent Timelines</h5>
                <p>Clear budgets and schedules, with regular updates from your dedicated project manager.</p>
              </div>
            </div>
          </div>
 <div className="why-image-panel">
            <img
              src={constructionSite}
              alt="LumiVera Construction Site"
            />
          </div>


        </div>

        {/* ROW 3: THE SEAMLESS PROCESS TRACK */}
        <div className="process-section-wrapper animate-slide-blur">
          <h4 className="section-internal-title">Our Build Process</h4>

          <div className="process-horizontal-track">
            <div className="process-node-card">
              <div className="node-circle-icon">
                <Compass size={22} strokeWidth={2} />
              </div>
              <h5>01. Consultation & Site Assessment</h5>
              <p>We assess the site and align on scope, budget, and timeline before any design work begins.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <Ruler size={22} strokeWidth={2} />
              </div>
              <h5>02. Design & Permitting</h5>
              <p>Structural and energy designs are drawn up together, with permits and approvals handled for you.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <Hammer size={22} strokeWidth={2} />
              </div>
              <h5>03. Construction & Installation</h5>
              <p>Civil works and energy installation proceed in parallel, supervised by your project manager.</p>
            </div>

            <div className="process-node-card">
              <div className="node-circle-icon">
                <ShieldCheck size={22} strokeWidth={2} />
              </div>
              <h5>04. Handover & Support</h5>
              <p>A full walkthrough, documentation, and ongoing support once your project is complete.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConstructionProjects;