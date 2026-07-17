

// src/components/OurProducts.js
import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import one from '../assets/one.jpg';
import inverters from '../assets/inverters.jpg';
import lithium from '../assets/lithium.jpg'
import kit from '../assets/kit.jpg';
import box from '../assets/box.jpg';
import breaker from '../assets/breaker.jpg';
import controller from '../assets/controller.jpg';
import led from '../assets/led.jpg';
import moniter from '../assets/moniter.jpg';
import surge from '../assets/surge.jpg';

const mainProducts = [
  {
    image: one,
    name: 'Monocrystalline Solar Panel',
    spec: '550W',
    price: 'USD 180',
    priceValue: 180,
    desc: 'High-yield panels engineered for consistent output even on overcast days.',
  },
  {
    image: inverters,
    name: 'Hybrid Solar Inverter',
    spec: '5kVA',
    price: 'USD 850',
    priceValue: 850,
    desc: 'Smart hybrid inverter that balances solar, battery, and grid power automatically.',
  },
  {
    image: lithium,
    name: 'Lithium Battery Bank',
    spec: '200Ah',
    price: 'USD 420',
    priceValue: 420,
    desc: 'Long-cycle lithium storage built to outlast load-shedding, night after night.',
  },
  {
    image: kit,
    name: 'Installation & Mounting Kit',
    spec: 'Complete Set',
    price: 'USD 250',
    priceValue: 250,
    desc: 'Rails, wiring, combiner box, and everything our crew needs to fit it properly.',
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
  },
  {
    image: box,
    name: 'Solar Cables & Combiner Box',
    spec: 'Standard Set',
    price: 'USD 60',
    priceValue: 60,
    desc: 'Weatherproof combiner box and marine-grade cabling for a clean, safe install.',
  },
  {
    image: surge,
    name: 'Surge Protection Device',
    spec: 'Type 2',
    price: 'USD 45',
    priceValue: 45,
    desc: 'Shields your inverter and batteries from voltage spikes during storms.',
  },
  {
    image: breaker,
    name: 'DC Circuit Breakers',
    spec: 'Set of 4',
    price: 'USD 40',
    priceValue: 40,
    desc: 'Essential safety isolation between panels, battery bank, and inverter.',
  },
  {
    image: moniter,
    name: 'Battery Monitor Display',
    spec: 'Digital',
    price: 'USD 75',
    priceValue: 75,
    desc: 'Real-time visibility on charge level, load draw, and battery health.',
  },
  {
    image: led,
    name: 'LED Solar Lighting Kit',
    spec: '4-Bulb Set',
    price: 'USD 35',
    priceValue: 35,
    desc: 'Low-draw LED lighting kit, perfect for extending backup runtime.',
  },
];

const OurProducts = () => {
  const { addToCart } = useCart();
  const [showMore, setShowMore] = useState(false);

  const visibleExtras = showMore ? moreProducts : [];

  return (
    <section className="products-viewport">
      <div className="products-layout-container">

        {/* ROW 1: TAGGED ZONE — matches About / Services top alignment */}
        <div className="products-tagged-row">
          <div className="products-meta-tag animate-mask"> Our Products</div>

          <h3 className="products-bold-statement animate-slide-blur">
            Equipment engineered to outlast the grid.
          </h3>
        </div>

        {/* ROW 2: FOUR MAIN PRODUCT CARDS — full page width */}
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
                <h4>{p.name}</h4>
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
                  <h4>{p.name}</h4>
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

      </div>
    </section>
  );
};

export default OurProducts;