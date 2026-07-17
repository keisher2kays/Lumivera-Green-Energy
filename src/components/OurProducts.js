


// src/components/OurProducts.js
import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import one from '../assets/one.jpg';
// import inverters from '../assets/inverters.jpg';
// import lithium from '../assets/lithium.jpg';
import kit from '../assets/kit.jpg';
import box from '../assets/box.jpg';
import breaker from '../assets/breaker.jpg';
import controller from '../assets/controller.jpg';
import led from '../assets/led.jpg';
import moniter from '../assets/moniter.jpg';
import surge from '../assets/surge.jpg';
import drone from '../assets/drone.jpg';
import youthPower from '../assets/youthpower.jpg';
import inverter from '../assets/white.jpg'


const mainProducts = [
  {
    image: one,
    name: 'Monocrystalline Solar Panel',
    spec: '550W',
    price: 'USD 120',
    priceValue: 120,
    desc: 'High-yield panels engineered for consistent output even on overcast days.',
    moreInfo: 'Manufactured by WHC Solar. Features standard A-grade monocrystalline cells with a 21.3% efficiency rating. Built with anti-reflective tempered glass and a heavy-duty anodized aluminum frame to withstand harsh local weather conditions. Comes with a 25-year linear power output warranty.',
  },
  {
    image: inverter,
    name: 'Hybrid Solar Inverter',
    spec: '5kVA',
    price: 'USD 700',
    priceValue: 700,
    desc: 'Smart hybrid inverter that balances solar, battery, and grid power automatically.',
    moreInfo: 'Pure sine wave hybrid inverter with a built-in high-voltage MPPT tracker. Perfect for handling standard load-shedding schedules in Zimbabwe. Automatically switches between solar, utility grid, and lithium storage within 10 milliseconds to keep your appliances running without interruption.',
  },
  {
  image: youthPower, // Ensure you import this asset at the top
  name: 'Lithium Battery',
  spec: '51.2V / 400Ah (20kWh)',
  price: 'USD 3,200',
  priceValue: 3200,
  desc: 'Massive heavy-duty smart energy storage on wheels with interactive touch screen control.',
  moreInfo: 'A true high-capacity LiFePO4 industrial-grade battery bank. Delivers a massive 20kWh of storage capacity, enough to power large estate homes, multiple refrigerators, and borehole pumps completely off-grid. Built on a mobile wheeled chassis, featuring an intelligent finger-touch LCD monitoring display, smart BMS configuration, and an outstanding 8,000+ cycle life.',
},
  {
    image: kit,
    name: 'Installation & Mounting Kit',
    spec: 'Complete Set',
    price: 'USD 225',
    priceValue: 225,
    desc: 'Rails, wiring, combiner box, and everything our crew needs to fit it properly.',
    moreInfo: 'Includes corrosion-resistant aluminum roof rails, mid/end clamps, UV-stabilized DC solar cabling, MC4 connectors, and heavy-duty concrete or zinc roof brackets. Configured specifically to secure 4 to 6 large-format panels safely.',
  },
];

const moreProducts = [
  {
    image: controller,
    name: 'MPPT Charge Controller',
    spec: '60A',
    price: 'USD 95',
    priceValue: 95,
    desc: 'Maximizes energy harvest from your panels across changing light conditions.',
    moreInfo: 'High-efficiency Maximum Power Point Tracking (MPPT) architecture with up to 98% conversion efficiency. Automatically detects 12V/24V/48V system banks and includes full LCD performance logs.',
  },
  {
    image: box,
    name: 'Solar Cables & Combiner Box',
    spec: 'Standard Set',
    price: 'USD 65',
    priceValue: 65,
    desc: 'Weatherproof combiner box and marine-grade cabling for a clean, safe install.',
    moreInfo: 'IP65 waterproof outdoor enclosure fitted with 1000V DC fuses, lightning surge arrestors, and isolation breakers. Includes 20 meters of red and black 6mm² dedicated solar wire.',
  },
  {
    image: surge,
    name: 'Surge Protection Device',
    spec: 'Type 2',
    price: 'USD 40',
    priceValue: 40,
    desc: 'Shields your inverter and batteries from voltage spikes during storms.',
    moreInfo: 'Type 2 DC surge protection rated up to 1000V. Crucial safety piece for safeguarding sensitive digital inverter chips against atmospheric lightning surges or ZESA grid power spikes.',
  },
  {
    image: breaker,
    name: 'DC Circuit Breakers',
    spec: 'Set of 4',
    price: 'USD 35',
    priceValue: 35,
    desc: 'Essential safety isolation between panels, battery bank, and inverter.',
    moreInfo: 'Heavy-duty non-polarized din-rail breakers. Provides quick, manual safety isolation access during maintenance or structural emergencies.',
  },
  {
    image: moniter,
    name: 'Battery Monitor Display',
    spec: 'Digital',
    price: 'USD 60',
    priceValue: 60,
    desc: 'Real-time visibility on charge level, load draw, and battery health.',
    moreInfo: 'High-precision shunt system measuring voltage, current, and true state-of-charge percentage. Prevents deep discharge accidents and maps power consumption rates.',
  },
  {
    image: led,
    name: 'LED Solar Lighting Kit',
    spec: '4-Bulb Set',
    price: 'USD 30',
    priceValue: 30,
    desc: 'Low-draw LED lighting kit, perfect for extending backup runtime.',
    moreInfo: 'Compact portable DC backup station. Features ultra-low draw 3W LED bulbs, individual light switches, and an independent USB charging hub for mobile electronics during complete blackouts.',
  },
  {
    image: drone,
    name: 'Agricultural Spraying Drone',
    spec: '16L Payload',
    price: 'USD 1,650',
    priceValue: 1650,
    desc: 'Autonomous precision crop-spraying and multispectral mapping drone to optimize farm yields.',
    moreInfo: 'Commercial-grade autonomous agricultural utility drone. Configured for precise automated crop-spraying, field mapping, and crop health analytics to maximize commercial farming throughput.',
  },

];

const OurProducts = () => {
  const { addToCart } = useCart();
  const [showMore, setShowMore] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null); // State for the "More Info" popover/modal

  const visibleExtras = showMore ? moreProducts : [];

  const handleCloseModal = () => {
    setActiveProduct(null);
  };

  return (
    <section className="products-viewport">
      <div className="products-layout-container">

        {/* ROW 1: TAGGED ZONE */}
        <div className="products-tagged-row">
          <div className="products-meta-tag animate-mask">Our Products</div>
          <h3 className="products-bold-statement animate-slide-blur">
            Equipment engineered to outlast the grid.
          </h3>
        </div>

        {/* ROW 2: FOUR MAIN PRODUCT CARDS */}
        <div className="products-main-grid">
          {mainProducts.map((p, i) => (
            <div
              className="product-spec-card animate-slide-blur"
              key={p.name}
              style={{ animationDelay: (0.15 + i * 0.12) + 's' }}
            >
              <div className="product-spec-image">
                <img src={p.image} alt={p.name} />
                <span className="product-spec-tag">{p.spec}</span>
              </div>

              <div className="product-spec-body">
                {/* Clicking the name toggles the more info data */}
                <h4 
                  onClick={() => setActiveProduct(p)} 
                  className="product-interactive-title"
                  style={{ cursor: 'pointer' }}
                >
                  {p.name}
                </h4>
                <p>{p.desc}</p>
                <div className="product-spec-price">{p.price}</div>
                <button className="product-request-btn" onClick={() => addToCart(p)}>
                  Request This Item
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 3: MORE PRODUCTS — shown after "See More" is clicked */}
        {showMore && (
          <div className="products-main-grid products-more-grid">
            {visibleExtras.map((p, i) => (
              <div
                className="product-spec-card animate-slide-blur"
                key={p.name}
                style={{ animationDelay: (i * 0.08) + 's' }}
              >
                <div className="product-spec-image">
                  <img src={p.image} alt={p.name} />
                  <span className="product-spec-tag">{p.spec}</span>
                </div>

                <div className="product-spec-body">
                  {/* Clicking the name toggles the more info data */}
                  <h4 
                    onClick={() => setActiveProduct(p)} 
                    className="product-interactive-title"
                    style={{ cursor: 'pointer' }}
                  >
                    {p.name}
                  </h4>
                  <p>{p.desc}</p>
                  <div className="product-spec-price">{p.price}</div>
                  <button className="product-request-btn" onClick={() => addToCart(p)}>
                    Request This Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEE MORE TOGGLE */}
        <div className="products-see-more">
          <button className="products-see-more-btn" onClick={() => setShowMore((v) => !v)}>
            {showMore ? 'Show Less' : 'See More Products'}
          </button>
        </div>

        {/* INTERACTIVE "MORE INFO" MODAL / POP-UP BOX */}
        {activeProduct && (
          <div className="product-info-modal-backdrop" onClick={handleCloseModal}>
            <div className="product-info-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="product-info-modal-header">
                <h3>{activeProduct.name} — Detailed Specifications</h3>
                <button className="product-info-close-btn" onClick={handleCloseModal}>&times;</button>
              </div>
              <div className="product-info-modal-body">
                <div className="product-info-modal-meta">
                  <span><strong>Capacity / Spec:</strong> {activeProduct.spec}</span>
                  <span><strong>Target Market Price:</strong> {activeProduct.price}</span>
                </div>
                <p className="product-info-modal-text">{activeProduct.moreInfo}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurProducts;