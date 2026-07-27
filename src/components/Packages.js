// // src/components/Packages.js
// import React from 'react';
// import { useCart } from '../components/CartContext';
// import solor from '../assets/solar.jpg';

// const solarTiers = [
//   {
//     name: "Basic Package",
//     desc: "Perfect for essential home backup, lights, Wi-Fi, and entertainment",
//     price: "From USD 1,160",
//     priceValue: 1160,
//     spec: "3.5kW Kit",
//     image: solor,
//     specs: [
//       "4.5kW Hybrid Inverter", 
//       "24V 100Ah Lithium life PO4 Battery", 
//       "4 x 450W Mono Solar Panels", 
//       "Cabling & Protection Kit"
//     ]
//   },
//   {
//     name: "Standard Package",
//     desc: "Ideal for medium households managing regular load-shedding cycles",
//     price: "From USD 2,250",
//     priceValue: 2250,
//     spec: "6.2kW Kit",
//     image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Standard+Package',
//     specs: [
//       "WHC 6.2kW Hybrid Inverter", 
//       "48V 200Ah Lithium Battery", 
//       "9 x 590W Mono Solar Panels", 
//       "Full DC/AC Protection Box & Accessories"
//     ],
//     featured: true
//   },
//   {
//     name: "Premium Package",
//     desc: "For heavy residential estates, boreholes, and commercial self-sufficiency",
//     price: "From USD 5,750",
//     priceValue: 5750,
//     spec: "11kW Kit",
//     image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Premium+Package',
//     specs: [
//       "11kW Flagship Hybrid Inverter", 
//       "10.2kwh Lithium LifePO4 Battery", 
//       "15.3kwh Lithium LifePO4 Battery", 
//       "12x 590W Mono Solar Panels ", 
//       "Heavy Duty Protection Kit & Cables"
//     ]
//   }
// ];

// const Packages = () => {
//   const { addToCart } = useCart();

//   return (
//     <section style={{ backgroundColor: '#F8FAFC', padding: '4rem 0' }}>
//       {/* Dynamic Section Intro */}
//       <div className="section-header">
//         <h3>Solar Solutions You Can Rely On</h3>
//         <p>High-quality engineering packages optimized for household self-sufficiency and longevity.</p>
//       </div>

//       {/* Grid containing our clean pricing layout */}
//       <div className="packages-grid">
//         {solarTiers.map((tier, idx) => (
//           <div key={idx} className={`package-card ${tier.featured ? 'featured' : ''}`}>
//             {tier.featured && <div className="featured-tag">Most Recommended Tier</div>}

//             <div className="package-header">
//               <h4>{tier.name}</h4>
//               <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>{tier.desc}</p>
//               <div className="package-price">{tier.price}</div>
//               <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#1E6B38', fontWeight: '700', letterSpacing: '1px' }}>
//                 Or Pay In Installments
//               </span>
//             </div>

//             <div className="package-body">
//               <ul>
//                 {tier.specs.map((spec, sIdx) => (
//                   <li key={sIdx}>
//                     <span className="check-icon">✓</span> {spec}
//                   </li>
//                 ))}
//               </ul>

//               <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '1.5rem', fontStyle: 'italic' }}>
//                 *Packages can be customized to suit your specific needs and budget.
//               </p>

//               <button className="package-btn" onClick={() => addToCart(tier)}>
//                 Initiate Secure Order
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Packages;

// src/components/Packages.js
import React, { useState } from 'react';
import { useCart } from '../components/CartContext';
import solor from '../assets/solar.jpg';

const solarTiers = [
  {
    name: "Basic Package",
    desc: "Perfect for essential home backup, lights, Wi-Fi, and entertainment",
    priceZim: "From USD 1,160",
    priceZimValue: 1160,
    priceUK: "From £870", // [UPDATE with real UK price]
    priceUKValue: 870,
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
    priceUK: "From £1,389", // [UPDATE with real UK price]
    priceUKValue: 1389,
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
    priceUK: "From £3,530", // [UPDATE with real UK price]
    priceUKValue: 3530,
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
  const [region, setRegion] = useState('zim'); // 'zim' shows first by default

  return (
    <section id="packages" style={{ backgroundColor: '#F8FAFC', padding: '4rem 0' }}>
      <div className="section-header">
        <h3>Solar Solutions You Can Rely On</h3>
        <p>High-quality engineering packages optimized for household self-sufficiency and longevity.</p>
      </div>

      {/* Region toggle */}
      <div className="region-toggle-wrap">
        <button
          className={`region-toggle-btn ${region === 'zim' ? 'active' : ''}`}
          onClick={() => setRegion('zim')}
        >
          🇿🇼 Zimbabwe Pricing
        </button>
        <button
          className={`region-toggle-btn ${region === 'uk' ? 'active' : ''}`}
          onClick={() => setRegion('uk')}
        >
          🇬🇧 UK Pricing
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
                  onClick={() => addToCart({ ...tier, price: displayPrice, priceValue: displayValue, region })}
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