// // src/components/Packages.js
// import React from 'react';
// import { useCart } from '../components/CartContext';

// const solarTiers = [
//   {
//     name: "Basic Package",
//     desc: "Perfect for essential power needs",
//     price: "From USD 1,600",
//     priceValue: 1600,
//     spec: "3kVA Kit",
//     image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Basic+Package',
//     specs: ["3kVA Inverter", "2 x 200Ah Batteries", "4 x 550W Solar Panels", "Installation & Wiring"]
//   },
//   {
//     name: "Standard Package",
//     desc: "Ideal for medium power needs",
//     price: "From USD 2,600",
//     priceValue: 2600,
//     spec: "5kVA Kit",
//     image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Standard+Package',
//     specs: ["5kVA Inverter", "4 x 200Ah Batteries", "8 x 550W Solar Panels", "Installation & Wiring"],
//     featured: true
//   },
//   {
//     name: "Premium Package",
//     desc: "For complete peace of mind",
//     price: "From USD 4,200",
//     priceValue: 4200,
//     spec: "8kVA Kit",
//     image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Premium+Package',
//     specs: ["8kVA Inverter", "8 x 200Ah Batteries", "12 x 550W Solar Panels", "Installation & Wiring"]
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
import React from 'react';
import { useCart } from '../components/CartContext';

const solarTiers = [
  {
    name: "Basic Package",
    desc: "Perfect for essential home backup, lights, Wi-Fi, and entertainment",
    price: "From USD 2,450",
    priceValue: 2450,
    spec: "4.5kW Kit",
    image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Basic+Package',
    specs: [
      "3.5kW Hybrid Inverter", 
      "2.71kWh  Lithium Battery Bank", 
      "4 x 590W Mono Solar Panels", 
      "Turnkey Installation, Wiring & Protection Boxes"
    ]
  },
  {
    name: "Standard Package",
    desc: "Ideal for medium households managing regular load-shedding cycles",
    price: "From USD 4,850",
    priceValue: 4850,
    spec: "6.2kW Kit",
    image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Standard+Package',
    specs: [
      "WHC 6.2kW Hybrid Inverter", 
      "15.36kWh Lithium Battery Bank", 
      "9 x 590W Mono Solar Panels", 
      "Turnkey Installation, Wiring & Protection Boxes"
    ],
    featured: true
  },
  {
    name: "Premium Package",
    desc: "For heavy residential estates, boreholes, and commercial self-sufficiency",
    price: "From USD 6,250",
    priceValue: 6250,
    spec: "11kW Kit",
    image: 'https://placehold.co/500x360/0B2240/DDF23D?text=Premium+Package',
    specs: [
      "11kW Flagship Hybrid Inverter", 
      "15.36kWh  Lithium Battery Bank", 
      "12 x 590W Mono Solar Panels", 
      "Turnkey Installation, Wiring & Premium Protection Elements"
    ]
  }
];

const Packages = () => {
  const { addToCart } = useCart();

  return (
    <section style={{ backgroundColor: '#F8FAFC', padding: '4rem 0' }}>
      {/* Dynamic Section Intro */}
      <div className="section-header">
        <h3>Solar Solutions You Can Rely On</h3>
        <p>High-quality engineering packages optimized for household self-sufficiency and longevity.</p>
      </div>

      {/* Grid containing our clean pricing layout */}
      <div className="packages-grid">
        {solarTiers.map((tier, idx) => (
          <div key={idx} className={`package-card ${tier.featured ? 'featured' : ''}`}>
            {tier.featured && <div className="featured-tag">Most Recommended Tier</div>}

            <div className="package-header">
              <h4>{tier.name}</h4>
              <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>{tier.desc}</p>
              <div className="package-price">{tier.price}</div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#1E6B38', fontWeight: '700', letterSpacing: '1px' }}>
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

              <button className="package-btn" onClick={() => addToCart(tier)}>
                Initiate Secure Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;