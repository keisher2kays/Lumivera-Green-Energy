import React, { useState, useMemo, useEffect } from 'react';

import { useCart } from '../components/CartContext';
import one from '../assets/one.jpg';
import phase from '../assets/phase.jpg';
import industry from '../assets/industry.jpg';
import kit from '../assets/kit.jpg';
import box from '../assets/box.jpg';
import breaker from '../assets/breaker.jpg';
import controller from '../assets/controller.jpg';
import led from '../assets/led.jpg';
import moniter from '../assets/moniter.jpg';
import surge from '../assets/surge.jpg';
import drone from '../assets/drone.jpg';
import youthPower from '../assets/youthpower.jpg';
import inverter from '../assets/white.jpg';
import five from '../assets/5k.jpg';
import fifteen from '../assets/15k.jpg';
import delivery from '../assets/delivery.jpg';
import fourhundred from '../assets/mono400.jpg';
import canadian from '../assets/canadian.jpg';
import poly from '../assets/poly.jpg';
import offgrid from '../assets/offgrid.jpg';
import baficial from '../assets/baficial.jpg';
import eightkva from '../assets/inverter8kva.jpg';
import inspection from '../assets/insppection.jpg';
import mapping from '../assets/mapping.jpg';
import ten from '../assets/ten.jpg';

// New Product Imports
import kd5 from '../assets/kd5.jpg';
import lunarPlus from '../assets/caplamp.webp';
import kl4lm from '../assets/lunar.jpg';
import lunarLite from '../assets/lunarliteclamp.jpg';
import kl2lm from '../assets/lunarlite.webp';

const USD_TO_GBP_RATE = 0.78; // Conversion rate for UK pricing

// Base URL for the backend API (stock lookups etc.)
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

const allProducts = [
  {
    id: 'p1',
    category: 'panels',
    image: one,
    name: 'Monocrystalline Solar Panel',
    spec: '550W',
    priceValue: 120,
    desc: 'High-yield panels engineered for consistent output even on overcast days.',
    moreInfo: 'Manufactured by WHC Solar. Features standard A-grade monocrystalline cells with a 21.3% efficiency rating. Built with anti-reflective tempered glass and a heavy-duty anodized aluminum frame to withstand harsh local weather conditions. Comes with a 25-year linear power output warranty.',
    isMain: true,
  },
  {
    id: 'p2',
    category: 'inverters',
    image: inverter,
    name: 'Hybrid Solar Inverter',
    spec: '5kVA',
    priceValue: 700,
    desc: 'Smart hybrid inverter that balances solar, battery, and grid power automatically.',
    moreInfo: 'Pure sine wave hybrid inverter with a built-in high-voltage MPPT tracker. Perfect for handling standard load-shedding schedules in Zimbabwe. Automatically switches between solar, utility grid, and lithium storage within 10 milliseconds to keep your appliances running without interruption.',
    isMain: true,
  },
  {
    id: 'p3',
    category: 'batteries',
    image: youthPower,
    name: 'Lithium Battery',
    spec: '51.2V / 400Ah (20kWh)',
    priceValue: 3200,
    desc: 'Massive heavy-duty smart energy storage on wheels with interactive touch screen control.',
    moreInfo: 'A true high-capacity LiFePO4 industrial-grade battery bank. Delivers a massive 20kWh of storage capacity, enough to power large estate homes, multiple refrigerators, and borehole pumps completely off-grid. Built on a mobile wheeled chassis, featuring an intelligent finger-touch LCD monitoring display, smart BMS configuration, and an outstanding 8,000+ cycle life.',
    isMain: true,
  },
  {
    id: 'p4',
    category: 'other',
    image: kit,
    name: 'Installation & Mounting Kit',
    spec: 'Complete Set',
    priceValue: 225,
    desc: 'Rails, wiring, combiner box, and everything our crew needs to fit it properly.',
    moreInfo: 'Includes corrosion-resistant aluminum roof rails, mid/end clamps, UV-stabilized DC solar cabling, MC4 connectors, and heavy-duty concrete or zinc roof brackets. Configured specifically to secure 4 to 6 large-format panels safely.',
    isMain: true,
  },
  {
    id: 'p16',
    category: 'panels',
    image: poly,
    name: 'Polycrystalline Solar Panel',
    spec: '330W',
    priceValue: 80,
    desc: 'Our most affordable panel - a reliable entry point into solar for tighter budgets.',
    moreInfo: 'Standard polycrystalline cell technology offering dependable output at the lowest cost per watt in our range. A solid choice for basic lighting, phone charging, and small appliance backup for budget-conscious households.',
    isMain: false,
  },
  {
    id: 'p17',
    category: 'panels',
    image: fourhundred,
    name: 'Monocrystalline Solar Panel',
    spec: '400W',
    priceValue: 95,
    desc: 'A step up in efficiency for households wanting more output without the biggest panel size.',
    moreInfo: 'A-grade monocrystalline cells rated at 20.8% efficiency. Compact footprint makes it a great fit for smaller roof spaces where every square meter counts.',
    isMain: false,
  },
  {
    id: 'p27',
    category: 'panels',
    image: canadian,
    name: 'Canadian Solar Monocrystalline Panel',
    spec: '545W',
    priceValue: 135,
    desc: 'Globally trusted panel brand, backed by a strong bankability rating and proven field performance.',
    moreInfo: 'Genuine Canadian Solar HiKu6 series panel using PERC monocrystalline cell technology rated at 21% efficiency. Canadian Solar is a Tier 1 manufacturer with a long track record of bankability in international solar markets, making these panels a strong choice for buyers who want an internationally recognized brand backing their installation. Comes with a 12-year product warranty and 25-year linear performance warranty.',
    isMain: false,
  },
  {
    id: 'p19',
    category: 'panels',
    image: baficial,
    name: 'Bifacial Solar Panel',
    spec: '600W',
    priceValue: 145,
    desc: 'Captures sunlight on both sides of the panel for extra yield from reflected light.',
    moreInfo: 'Dual-glass bifacial design captures reflected light off rooftops or ground-mount surfaces, boosting total energy harvest by up to 15% over standard panels in the right installation. Ideal for ground-mount or elevated carport-style installs.',
    isMain: false,
  },
  {
    id: 'p5',
    category: 'other',
    image: controller,
    name: 'MPPT Charge Controller',
    spec: '60A',
    priceValue: 95,
    desc: 'Maximizes energy harvest from your panels across changing light conditions.',
    moreInfo: 'High-efficiency Maximum Power Point Tracking (MPPT) architecture with up to 98% conversion efficiency. Automatically detects 12V/24V/48V system banks and includes full LCD performance logs.',
    isMain: false,
  },
  {
    id: 'p6',
    category: 'inverters',
    image: phase,
    name: '3-Phase Hybrid Inverter',
    spec: '12kVA',
    priceValue: 1550,
    desc: 'Industrial-grade 3-phase inverter built for commercial and heavy-load properties.',
    moreInfo: 'Full 3-phase hybrid inverter designed for commercial buildings, factories, and larger estates running heavy machinery or multi-phase equipment. Supports parallel operation for expanding capacity as your load grows, with the same automatic solar/grid/battery switching as our residential units.',
    isMain: false,
  },
  {
    id: 'p7',
    category: 'inverters',
    image: industry,
    name: 'Industrial Hybrid Inverter',
    spec: '20kVA',
    priceValue: 3300,
    desc: 'Our highest-capacity inverter, built for large commercial and industrial installations.',
    moreInfo: 'Top-tier industrial hybrid inverter for factories, mines, agricultural estates, and large commercial complexes with demanding power requirements. Engineered for continuous heavy-duty operation with advanced thermal management and remote monitoring capability.',
    isMain: false,
  },
  {
    id: 'p21',
    category: 'inverters',
    image: offgrid,
    name: 'Off-Grid Solar Inverter',
    spec: '1kVA',
    priceValue: 180,
    desc: 'A compact, affordable inverter for small households running essential loads only.',
    moreInfo: 'Pure sine wave off-grid inverter ideal for lights, routers, TVs, and phone charging. The most affordable way to start backing up essential circuits before scaling up to a hybrid system.',
    isMain: false,
  },
  {
    id: 'p22',
    category: 'inverters',
    image: eightkva,
    name: 'Hybrid Solar Inverter',
    spec: '8kVA',
    priceValue: 1100,
    desc: 'Sits between our 5kVA and 12kVA units - for larger homes that outgrow standard capacity.',
    moreInfo: 'Pure sine wave hybrid inverter with the same automatic solar/grid/battery switching as our 5kVA unit, scaled up for households running multiple fridges, air conditioning, or a borehole pump.',
    isMain: false,
  },
  {
    id: 'p8',
    category: 'batteries',
    image: five,
    name: 'Lithium Battery',
    spec: '51.2V / 100Ah (5kWh)',
    priceValue: 480,
    desc: 'Entry-level lithium storage - an affordable way to start your backup system.',
    moreInfo: 'Compact LiFePO4 lithium battery ideal for essential household loads - lights, routers, TVs, and small appliances. A cost-effective entry point into lithium storage with the same 8,000+ cycle life as our larger units, just in a smaller footprint.',
    isMain: false,
  },
  {
    id: 'p23',
    category: 'batteries',
    image: ten,
    name: 'Lithium Battery',
    spec: '51.2V / 200Ah (10kWh)',
    priceValue: 850,
    desc: 'Sits between our 5kWh and 15kWh units - for homes ready to move past the basics.',
    moreInfo: 'Mid-range LiFePO4 lithium battery for households running several essential appliances plus a fridge or two, with enough headroom for evening load-shedding coverage.',
    isMain: false,
  },
  {
    id: 'p9',
    category: 'batteries',
    image: fifteen,
    name: 'Lithium Battery',
    spec: '51.2V / 300Ah (15kWh)',
    priceValue: 1350,
    desc: 'Sits between our 200Ah and 400Ah units - for homes that need more than standard, less than industrial.',
    moreInfo: 'Mid-to-high capacity LiFePO4 lithium battery, ideal for larger households running multiple fridges, water pumps, and extended backup during long load-shedding stretches - without stepping all the way up to our full industrial-capacity unit.',
    isMain: false,
  },
  {
    id: 'p10',
    category: 'other',
    image: box,
    name: 'Solar Cables & Combiner Box',
    spec: 'Standard Set',
    priceValue: 65,
    desc: 'Weatherproof combiner box and marine-grade cabling for a clean, safe install.',
    moreInfo: 'IP65 waterproof outdoor enclosure fitted with 1000V DC fuses, lightning surge arrestors, and isolation breakers. Includes 20 meters of red and black 6mm squared dedicated solar wire.',
    isMain: false,
  },
  {
    id: 'p11',
    category: 'other',
    image: surge,
    name: 'Surge Protection Device',
    spec: 'Type 2',
    priceValue: 40,
    desc: 'Shields your inverter and batteries from voltage spikes during storms.',
    moreInfo: 'Type 2 DC surge protection rated up to 1000V. Crucial safety piece for safeguarding sensitive digital inverter chips against atmospheric lightning surges or ZESA grid power spikes.',
    isMain: false,
  },
  {
    id: 'p12',
    category: 'other',
    image: breaker,
    name: 'DC Circuit Breakers',
    spec: 'Set of 4',
    priceValue: 35,
    desc: 'Essential safety isolation between panels, battery bank, and inverter.',
    moreInfo: 'Heavy-duty non-polarized din-rail breakers. Provides quick, manual safety isolation access during maintenance or structural emergencies.',
    isMain: false,
  },
  {
    id: 'p13',
    category: 'other',
    image: moniter,
    name: 'Battery Monitor Display',
    spec: 'Digital',
    priceValue: 60,
    desc: 'Real-time visibility on charge level, load draw, and battery health.',
    moreInfo: 'High-precision shunt system measuring voltage, current, and true state-of-charge percentage. Prevents deep discharge accidents and maps power consumption rates.',
    isMain: false,
  },
  {
    id: 'p14',
    category: 'other',
    image: led,
    name: 'LED Solar Lighting Kit',
    spec: '4-Bulb Set',
    priceValue: 30,
    desc: 'Low-draw LED lighting kit, perfect for extending backup runtime.',
    moreInfo: 'Compact portable DC backup station. Features ultra-low draw 3W LED bulbs, individual light switches, and an independent USB charging hub for mobile electronics during complete blackouts.',
    isMain: false,
  },
  {
    id: 'p15',
    category: 'drones',
    image: drone,
    name: 'Agricultural Spraying Drone',
    spec: '16L Payload',
    priceValue: 1650,
    desc: 'Autonomous precision crop-spraying and multispectral mapping drone to optimize farm yields.',
    moreInfo: 'Commercial-grade autonomous agricultural utility drone. Configured for precise automated crop-spraying, field mapping, and crop health analytics to maximize commercial farming throughput.',
    isMain: false,
  },
  {
    id: 'p24',
    category: 'drones',
    image: inspection,
    name: 'Inspection Quadcopter Drone',
    spec: 'Compact, HD Camera',
    priceValue: 850,
    desc: 'An affordable entry point for rooftop, solar array, and site inspections.',
    moreInfo: 'Compact quadcopter fitted with a stabilized HD camera, ideal for surveying solar installation sites, inspecting rooftops before install, or checking panel arrays for damage without climbing.',
    isMain: false,
  },
  {
    id: 'p25',
    category: 'drones',
    image: mapping,
    name: 'Mapping & Survey Drone',
    spec: 'GPS RTK, 45min Flight',
    priceValue: 2200,
    desc: 'High-precision aerial mapping drone for land surveys, site planning, and large installations.',
    moreInfo: 'Fixed-wing/multirotor survey drone with RTK-grade GPS positioning for centimeter-accurate mapping. Built for land surveyors, site planners, and large-scale commercial solar site assessments.',
    isMain: false,
  },
  {
    id: 'p26',
    category: 'drones',
    image: delivery,
    name: 'Heavy-Duty 25kg Agricultural Spraying Drone',
    spec: '25kg Payload Capacity',
    priceValue: 2800,
    desc: 'Heavy-lift drone for remote-area equipment delivery and rural logistics support.',
    moreInfo: 'High-perfomance drone with a 25kg payload, designed for crop spraying, fertiliser application and precision agriculture. Ideal for commercial farms, plantations and agricultural service providers.',
    isMain: false,
  },

  /* NEW MINING CAP LAMP PRODUCTS */
  {
    id: 'p28',
    category: 'lighting',
    image: kd5,
    name: 'KD5 (KL8LM) Premium Caplamp',
    spec: 'Li-ion Battery / 30h+ Autonomy',
    priceValue: 125,
    desc: 'High-capacity, long-duration miner caplamp engineered for extreme underground autonomy.',
    moreInfo: 'Equipped with a high-grade Li-ion battery pack supplying over 30 hours of continuous light autonomy under constant current discharge. Designed with impact-resistant casing and industrial cords for heavy mining and tunnelling operations.',
    isMain: false,
  },
  {
    id: 'p29',
    category: 'lighting',
    image: lunarPlus,
    name: 'Lunar Plus Miner Caplamp',
    spec: '18 Hours / 6000-11000 Lux',
    priceValue: 120,
    desc: 'Workhorse underground lamp designed for maximum efficiency and rugged field safety.',
    moreInfo: 'Delivers 18+ hours of uninterrupted operation at 6000 to 11000 Lux intensity. Features built-in thermal safety controls, rugged drop-tested housing, and high optical efficiency for harsh underground environments.',
    isMain: false,
  },
  {
    id: 'p30',
    category: 'lighting',
    image: kl4lm,
    name: 'KL4LM Mining Torch with Charger',
    spec: 'GB7857 Safety Standard',
    priceValue: 45,
    desc: 'Compact and reliable mine safety lamp with dedicated charger unit.',
    moreInfo: 'Built according to international GB7857-2003 and MT927-2004 mine safety standards. Features lightweight Li-ion power, dual LED lighting modes, and an ergonomic clip-on battery system.',
    isMain: false,
  },
  {
    id: 'p31',
    category: 'lighting',
    image: lunarLite,
    name: 'Lunar Lite Caplamp',
    spec: 'All-in-One Design',
    priceValue: 75,
    desc: 'Streamlined, intrinsically safe cap lamp for power backup and DC-coupled PV setups.',
    moreInfo: 'Integrated lightweight construction designed for reduced hardware costs and high portability. Ideal for underground mining, DC-coupled PV backup systems, and confined space inspections.',
    isMain: false,
  },
  {
    id: 'p32',
    category: 'lighting',
    image: kl2lm,
    name: 'KL2LM Miner Caplamp',
    spec: 'Li-ion / LED Double Light',
    priceValue: 30,
    desc: 'Affordable, new-generation individual safety illumination lamp for workers.',
    moreInfo: 'Next-generation self-designed worker safety lamp. Uses high-cycle Li-ion battery cells and dual LED light sources for efficient, low-cost individual underground illumination.',
    isMain: false,
  },
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'panels', label: 'Solar Panels' },
  { id: 'inverters', label: 'Inverters' },
  { id: 'batteries', label: 'Lithium Batteries' },
  { id: 'drones', label: 'Drones' },
  { id: 'lighting', label: 'Mining & Industrial Lighting' },
  { id: 'other', label: 'Accessories & Other' },
];

const OurProducts = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currency, setCurrency] = useState('USD');
  const [showMore, setShowMore] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  // Stock lookup: { [productName]: { inStock, stockQuantity } }
  const [stockMap, setStockMap] = useState({});
  // Product the "Out of Stock" popup is currently showing for (null = hidden)
  const [outOfStockPopup, setOutOfStockPopup] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/stock`)
      .then((res) => res.json())
      .then((data) => setStockMap(data))
      .catch((err) => console.error('Stock fetch failed:', err));
  }, []);

  // Silent check — no UI indication until the client tries to request the item
  const isOutOfStock = (productName) => {
    const entry = stockMap[productName];
    // If there's no matching DB record, default to "in stock" so untracked items still work
    return entry ? !entry.inStock : false;
  };

  const getConvertedPrice = (usdValue) => {
    if (currency === 'GBP') {
      return Math.round(usdValue * USD_TO_GBP_RATE);
    }
    return usdValue;
  };

  const formatPrice = (usdValue) => {
    const priceVal = getConvertedPrice(usdValue);
    if (currency === 'GBP') {
      return `£${priceVal.toLocaleString()}`;
    }
    return `USD ${priceVal.toLocaleString()}`;
  };

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return showMore ? allProducts : allProducts.filter((p) => p.isMain);
    }
    return allProducts.filter((p) => p.category === activeCategory);
  }, [activeCategory, showMore]);

  const handleCloseModal = () => {
    setActiveProduct(null);
  };

  // Flies a clone of the clicked product's image from its card to the cart icon,
  // then makes the cart icon "bump" to confirm it landed.
  const flyToCart = (cardEl, imageSrc) => {
    const cartIcon = document.getElementById('cart-icon-target');
    if (!cardEl || !imageSrc || !cartIcon) return; // animation is optional — never blocks the cart add

    const cardImg = cardEl.querySelector('.product-spec-image img');
    const startRect = (cardImg || cardEl).getBoundingClientRect();
    const endRect = cartIcon.getBoundingClientRect();

    const flyer = document.createElement('img');
    flyer.src = imageSrc;
    flyer.className = 'fly-to-cart-clone';
    flyer.style.left = `${startRect.left}px`;
    flyer.style.top = `${startRect.top}px`;
    flyer.style.width = `${startRect.width}px`;
    flyer.style.height = `${startRect.height}px`;
    document.body.appendChild(flyer);

    // Force layout so the browser registers the start position before we animate
    requestAnimationFrame(() => {
      const endX = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
      const endY = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);
      flyer.style.transform = `translate(${endX}px, ${endY}px) scale(0.15)`;
      flyer.style.opacity = '0.3';
    });

    flyer.addEventListener('transitionend', () => {
      flyer.remove();
      cartIcon.classList.add('cart-icon-bump');
      setTimeout(() => cartIcon.classList.remove('cart-icon-bump'), 350);
    });
  };

  // NOTE: The premature "New Product Request" email has been removed.
  // Clicking "Request This Item" just adds the product to the cart — no
  // customer details exist yet at this point, so sending an email here
  // only ever produced a notification with no name/email/location in it.
  // The single source of truth for order notifications is now
  // CartDrawer.js, which fires only once the customer has filled in their
  // details at checkout.
  const handleRequestItem = (product, event) => {
    // Check stock only at the moment of the request — no visible badge/label beforehand
    if (isOutOfStock(product.name)) {
      setOutOfStockPopup(product);
      return;
    }

    const convertedPrice = getConvertedPrice(product.priceValue);
    const formattedPrice = formatPrice(product.priceValue);
    const currentRegion = currency === 'GBP' ? 'uk' : 'zim';

    addToCart({
      ...product,
      priceValue: convertedPrice,
      price: formattedPrice,
      region: currentRegion,
      currency: currency,
    });

    // Fire the flying animation from the card that was clicked
    const cardEl = event?.currentTarget?.closest('.product-spec-card');
    flyToCart(cardEl, product.image);
  };

  return (
    <section className="products-viewport">
      <div className="products-layout-container">

        <div className="products-tagged-row">
          <div className="products-meta-tag animate-mask">Our Products</div>
          <h3 className="products-bold-statement animate-slide-blur">
            Equipment engineered to outlast the grid.
          </h3>
        </div>

        {/* Currency / Region Selector Bar */}
        <div className="products-toolbar">
          <div className="currency-selector">
            <span className="currency-label">Select Region Pricing:</span>
            <button
              className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => setCurrency('USD')}
            >
              <img
                src="https://flagcdn.com/w40/zw.png"
                alt="Zimbabwe Flag"
                className="flag-img"
              />
              Zim (USD)
            </button>
            <button
              className={`currency-btn ${currency === 'GBP' ? 'active' : ''}`}
              onClick={() => setCurrency('GBP')}
            >
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="UK Flag"
                className="flag-img"
              />
              UK (£)
            </button>
          </div>

          <div className="products-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`products-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="products-main-grid">
          {filteredProducts.map((p, i) => (
            <div
              className="product-spec-card animate-slide-blur"
              key={p.id}
              style={{ animationDelay: (i * 0.08) + 's' }}
            >
              <div className="product-spec-image">
                <img src={p.image} alt={p.name} />
                <span className="product-spec-tag">{p.spec}</span>
              </div>

              <div className="product-spec-body">
                <h4
                  onClick={() => setActiveProduct(p)}
                  className="product-interactive-title"
                  style={{ cursor: 'pointer' }}
                >
                  {p.name}
                </h4>
                <p>{p.desc}</p>
                <div className="product-spec-price">{formatPrice(p.priceValue)}</div>
                <button className="product-request-btn" onClick={(e) => handleRequestItem(p, e)}>
                  Request This Item
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeCategory === 'all' && (
          <div className="products-see-more">
            <button className="products-see-more-btn" onClick={() => setShowMore((v) => !v)}>
              {showMore ? 'Show Less' : 'See More Products'}
            </button>
          </div>
        )}

        {activeProduct && (
          <div className="product-info-modal-backdrop" onClick={handleCloseModal}>
            <div className="product-info-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="product-info-modal-header">
                <h3>{activeProduct.name} - Detailed Specifications</h3>
                <button className="product-info-close-btn" onClick={handleCloseModal}>&times;</button>
              </div>
              <div className="product-info-modal-body">
                <div className="product-info-modal-meta">
                  <span><strong>Capacity / Spec:</strong> {activeProduct.spec}</span>
                  <span><strong>Target Market Price:</strong> {formatPrice(activeProduct.priceValue)}</span>
                </div>
                <p className="product-info-modal-text">{activeProduct.moreInfo}</p>
              </div>
            </div>
          </div>
        )}

        {outOfStockPopup && (
          <div className="product-info-modal-backdrop" onClick={() => setOutOfStockPopup(null)}>
            <div className="product-info-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="product-info-modal-header">
                <h3>Out of Stock</h3>
                <button className="product-info-close-btn" onClick={() => setOutOfStockPopup(null)}>&times;</button>
              </div>
              <div className="product-info-modal-body">
                <p className="product-info-modal-text">
                  Sorry, <strong>{outOfStockPopup.name}</strong> is currently out of stock.
                  Please check back soon or contact us for an alternative.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default OurProducts;