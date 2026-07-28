

// src/components/Packages.js
import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import solor from '../assets/solar.jpg';

const WEB3FORMS_KEY = 'f92f666e-d08e-450e-9eb4-112a6eaf6dab';

const sendPackageRequestNotification = async (tier, region, displayPrice) => {
  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: 'New Package Order Request - LumiVera Website',
        from_name: 'LumiVera Website',
        message: `A visitor initiated an order for: ${tier.name} (${tier.spec}) - ${displayPrice} - Region selected: ${region === 'zim' ? 'Zimbabwe' : 'UK'}`,
      }),
    });
  } catch (err) {
    console.error('Notification failed to send:', err);
  }
};

const solarTiers = [
  {
    name: "Basic Package",
    desc: "Perfect for essential home backup, lights, Wi-Fi, and entertainment",
    priceZim: "From USD 1,160",
    priceZimValue: 1160,
    priceUK: "From £4,500", // [UPDATE with real UK price]
    priceUKValue: 4500,
    spec: "3.5kW Kit",
    image: solor,
    specs: [
      "4.5kW Hybrid Inverter",
      "24V 100Ah Lithium life PO4 Battery",
      "4 x 450W Mono Solar Panels",
      "Cabling & Protection Kit"
    ]
  },
  {
    name: "Standard Package",
    desc: "Ideal for medium households managing regular load-shedding cycles",
    priceZim: "From USD 2,250",
    priceZimValue: 2250,
    priceUK: "From £12,000", // [UPDATE with real UK price]
    priceUKValue: 12000,
    spec: "6.2kW Kit",
    image: 'https://placehold.co/500x360/123821/F5A623?text=Standard+Package',
    specs: [
      "WHC 6.2kW Hybrid Inverter",
      "48V 200Ah Lithium Battery",
      "9 x 590W Mono Solar Panels",
      "Full DC/AC Protection Box & Accessories"
    ],
    featured: true
  },
  {
    name: "Premium Package",
    desc: "For heavy residential estates, boreholes, and commercial self-sufficiency",
    priceZim: "From USD 5,750",
    priceZimValue: 5750,
    priceUK: "From £20,000", // [UPDATE with real UK price]
    priceUKValue: 20000,
    spec: "11kW Kit",
    image: 'https://placehold.co/500x360/123821/F5A623?text=Premium+Package',
    specs: [
      "11kW Flagship Hybrid Inverter",
      "10.2kwh Lithium LifePO4 Battery",
      "15.3kwh Lithium LifePO4 Battery",
      "12x 590W Mono Solar Panels ",
      "Heavy Duty Protection Kit & Cables"
    ]
  }
];

const Packages = () => {
  const { addToCart } = useCart();
  const [region, setRegion] = useState('zim');

  const handleInitiateOrder = (tier, displayPrice, displayValue) => {
    addToCart({ ...tier, price: displayPrice, priceValue: displayValue, region });
    sendPackageRequestNotification(tier, region, displayPrice);
  };

  return (
    <section id="packages" style={{ backgroundColor: '#F8FAFC', padding: '4rem 0' }}>
      <div className="section-header">
        <h3>Solar Solutions You Can Rely On</h3>
        <p>High-quality engineering packages optimized for household self-sufficiency and longevity.</p>
      </div>

      <div className="region-toggle-wrap">
        <button
          className={`region-toggle-btn ${region === 'zim' ? 'active' : ''}`}
          onClick={() => setRegion('zim')}
        >
          <img 
            src="https://flagcdn.com/w20/zw.png" 
            alt="Zimbabwe Flag" 
            style={{ width: '18px', height: 'auto', verticalAlign: 'middle', marginRight: '6px' }} 
          />
          Zimbabwe Pricing
        </button>
        <button
          className={`region-toggle-btn ${region === 'uk' ? 'active' : ''}`}
          onClick={() => setRegion('uk')}
        >
          <img 
            src="https://flagcdn.com/w20/gb.png" 
            alt="UK Flag" 
            style={{ width: '18px', height: 'auto', verticalAlign: 'middle', marginRight: '6px' }} 
          />
          UK Pricing
        </button>
      </div>

      <div className="packages-grid">
        {solarTiers.map((tier, idx) => {
          const displayPrice = region === 'zim' ? tier.priceZim : tier.priceUK;
          const displayValue = region === 'zim' ? tier.priceZimValue : tier.priceUKValue;

          return (
            <div key={idx} className={`package-card ${tier.featured ? 'featured' : ''}`}>
              {tier.featured && <div className="featured-tag">Most Recommended Tier</div>}

              <div className="package-header">
                <h4>{tier.name}</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>{tier.desc}</p>
                <div className="package-price">{displayPrice}</div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#2CA636', fontWeight: '700', letterSpacing: '1px' }}>
                  Or Pay In Installments
                </span>
              </div>

              <div className="package-body">
                <ul>
                  {tier.specs.map((spec, sIdx) => (
                    <li key={sIdx}>
                      <span className="check-icon">✓</span> {spec}
                    </li>
                  ))}
                </ul>

                <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '1.5rem', fontStyle: 'italic' }}>
                  *Packages can be customized to suit your specific needs and budget.
                </p>

                <button
                  className="package-btn"
                  onClick={() => handleInitiateOrder(tier, displayPrice, displayValue)}
                >
                  Initiate Secure Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Packages;