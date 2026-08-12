

// src/components/Packages.js
import React, { useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import { useCart } from '../components/CartContext';
import solor from '../assets/solar.jpg';

const SOCKET_SERVER_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// Must match backend installmentHelper.js markupPercentage — keep these in sync
const INSTALLMENT_MARKUP = 0.12;

const calculateInstallment = (baseValue) => {
  const total = Math.round(baseValue * (1 + INSTALLMENT_MARKUP));
  const monthly = Math.round(total / 3);
  return { total, monthly };
};

const solarTiers = [
  {
    name: "Basic Package",
    desc: "Perfect for essential home backup, lights, Wi-Fi, and entertainment",
    priceZim: "From USD 1,250",
    priceZimValue: 1250,
    priceUK: "From £4,500",
    priceUKValue: 4500,
    spec: "3.5kVA Kit",
    image: solor,
    specs: [
      "4.5kVA Hybrid Inverter",
      "24V 100Ah Lithium LifePO4 Battery",
      "4 x 450W Mono Solar Panels",
      "Cabling & Protection Kit"
    ]
  },
  {
    name: "Essential 6.2kVA Package",
    desc: "Entry point into whole-home coverage — lights, fridge, Wi-Fi, and small appliances",
    priceZim: "From USD 2,250",
    priceZimValue: 2250,
    priceUK: "From £9,000",
    priceUKValue: 9000,
    spec: "6.2kVA Kit — Basic",
    image: 'https://placehold.co/500x360/123821/F5A623?text=6.2kW+Basic',
    specs: [
      "WHC 6.2kVA Hybrid Inverter",
      "48V 100Ah Lithium Battery",
      "6 x 540W Mono Solar Panels",
      "Standard DC/AC Protection Box"
    ]
  },
  {
    name: "Standard 6.2kVA Package",
    desc: "Ideal for medium households managing regular load-shedding cycles",
    priceZim: "From USD 3,350",
    priceZimValue: 3350,
    priceUK: "From £14,000",
    priceUKValue: 14000,
    spec: "6.2kVA Kit — Standard",
    image: 'https://placehold.co/500x360/123821/F5A623?text=6.2kW+Standard',
    specs: [
      "WHC 6.2kVA Hybrid Inverter",
      "48V 200Ah Lithium Battery",
      "9 x 590W Mono Solar Panels",
      "Full DC/AC Protection Box & Accessories"
    ],
    featured: true
  },
  {
    name: "Power 11kVA Package",
    desc: "Entry tier for heavy residential estates and small commercial self-sufficiency",
    priceZim: "From USD 4,300",
    priceZimValue: 4300,
    priceUK: "From £17,500",
    priceUKValue: 17500,
    spec: "11kVA Kit — Basic",
    image: 'https://placehold.co/500x360/123821/F5A623?text=11kW+Basic',
    specs: [
      "11kVA Hybrid Inverter",
      "10.2kWh Lithium LifePO4 Battery",
      "12 x 450W Mono Solar Panels",
      "Standard Protection Kit & Cables"
    ]
  },
  {
    name: "Premium 11kVA Package",
    desc: "Our flagship tier — for heavy residential estates, boreholes, and full commercial self-sufficiency",
    priceZim: "From USD 6,450",
    priceZimValue: 6450,
    priceUK: "From £24,500",
    priceUKValue: 24500,
    spec: "11kVA Kit — Flagship",
    image: 'https://placehold.co/500x360/123821/F5A623?text=Premium+Package',
    specs: [
      "11kVA Flagship Hybrid Inverter",
      "15.3kWh Lithium LifePO4 Battery",
      "12 x 590W Mono Solar Panels",
      "Heavy Duty Protection Kit & Cables"
    ]
  }
];

const chatTheme = {
  green: '#2CA636',
  surface: '#FFFFFF',
  border: '#E2E8F0',
  bg: '#F8FAFC',
  textDark: '#1E293B',
  textMuted: '#64748B',
};

function BoltIcon({ size = 22, color = '#FFFFFF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" fill={color} />
    </svg>
  );
}

function TypingDots() {
  return (
    <div className="flex gap-1 items-center px-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 5,
            height: 5,
            borderRadius: '50%',
            background: chatTheme.textMuted,
            display: 'inline-block',
            animation: `packagesBotBounce 1.2s ${i * 0.15}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

function PackagesChatWidget() {
  const [open, setOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I'm the LumiVera assistant. Ask me about packages, payment plans, or installs." },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [socket, setSocket] = useState(null);
  const [roomId] = useState('session_' + Math.random().toString(36).substring(7));
  const scrollRef = useRef(null);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    newSocket.emit('join_room', roomId);

    newSocket.on('receive_message', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    newSocket.on('typing_status', (data) => {
      if (data.sender === 'bot' || data.sender === 'agent') {
        setTyping(data.isTyping);
      }
    });

    return () => newSocket.close();
  }, [roomId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const openChat = () => {
    setAnimating(true);
    setOpen(true);
    setTimeout(() => setAnimating(false), 550);
  };

  const closeChat = () => setOpen(false);

  const sendMessage = () => {
    const text = input.trim();
    if (!text || !socket) return;

    socket.emit('send_message', {
      roomId,
      message: text,
      sender: 'user',
    });

    setInput('');
  };

  return (
    <>
      <style>{`
        @keyframes packagesBotBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes packagesBotChargeRing {
          0% { transform: scale(0.9); opacity: 0.6; }
          70% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes packagesBotPowerOn {
          0% { clip-path: circle(0% at 0% 100%); }
          100% { clip-path: circle(150% at 0% 100%); }
        }
      `}</style>

      {!open && (
        <div style={{ position: 'fixed', bottom: '28px', left: '28px', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={openChat}
            aria-label="Open LumiVera assistant"
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: chatTheme.green,
              border: 'none',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 20px rgba(44,166,54,0.4)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                inset: -4,
                borderRadius: '50%',
                border: `2px solid ${chatTheme.green}`,
                animation: 'packagesBotChargeRing 2.4s ease-out infinite',
              }}
            />
            <BoltIcon />
          </button>
          <span
            style={{
              background: chatTheme.surface,
              border: `1px solid ${chatTheme.border}`,
              color: chatTheme.textDark,
              borderRadius: '999px',
              fontSize: '0.75rem',
              padding: '8px 14px',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
              whiteSpace: 'nowrap',
            }}
            className="hidden sm:inline-block"
          >
            Ask chatbot for more
          </span>
        </div>
      )}

      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '28px',
            left: '28px',
            zIndex: 1000,
            width: 'min(370px, 90vw)',
            height: 'min(520px, 75vh)',
            background: chatTheme.surface,
            border: `1px solid ${chatTheme.border}`,
            borderRadius: '18px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transformOrigin: 'bottom left',
            animation: animating ? 'packagesBotPowerOn 0.55s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
          }}
        >
          <div
            style={{
              borderBottom: `1px solid ${chatTheme.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 16px',
              background: chatTheme.green,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BoltIcon size={16} />
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#FFFFFF' }}>
                LumiVera Assistant
              </span>
            </div>
            <button
              onClick={closeChat}
              aria-label="Close chat"
              style={{ color: '#FFFFFF', fontSize: '1.2rem', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ×
            </button>
          </div>

          <div
            ref={scrollRef}
            style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', background: chatTheme.bg }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: m.sender === 'user' ? chatTheme.green : chatTheme.surface,
                  color: m.sender === 'user' ? '#FFFFFF' : chatTheme.textDark,
                  border: m.sender === 'user' ? 'none' : `1px solid ${chatTheme.border}`,
                  borderRadius: '12px',
                  maxWidth: '80%',
                  padding: '8px 12px',
                  fontSize: '0.85rem',
                }}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div
                style={{
                  background: chatTheme.surface,
                  border: `1px solid ${chatTheme.border}`,
                  borderRadius: '12px',
                  alignSelf: 'flex-start',
                  padding: '8px 12px',
                }}
              >
                <TypingDots />
              </div>
            )}
          </div>

          <div style={{ borderTop: `1px solid ${chatTheme.border}`, display: 'flex', alignItems: 'center', gap: '8px', padding: '12px' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about a package…"
              style={{
                flex: 1,
                fontSize: '0.85rem',
                padding: '9px 14px',
                borderRadius: '999px',
                border: `1px solid ${chatTheme.border}`,
                outline: 'none',
                color: chatTheme.textDark,
              }}
            />
            <button
              onClick={sendMessage}
              aria-label="Send message"
              style={{
                background: chatTheme.green,
                color: '#FFFFFF',
                borderRadius: '50%',
                width: 34,
                height: 34,
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const Packages = () => {
  const { addToCart } = useCart();
  const [region, setRegion] = useState('zim');

  // Flies a clone of the package's image from its card to the cart icon,
  // then makes the cart icon "bump" to confirm it landed.
  const flyToCart = (cardEl, imageSrc) => {
    const cartIcon = document.getElementById('cart-icon-target');
    if (!cardEl || !imageSrc || !cartIcon) return; // animation is optional — never blocks the cart add

    const startRect = cardEl.getBoundingClientRect();
    const endRect = cartIcon.getBoundingClientRect();

    const flyer = document.createElement('img');
    flyer.src = imageSrc;
    flyer.className = 'fly-to-cart-clone';
    // Fly a smaller square from the card's center rather than its full size
    const size = 90;
    flyer.style.left = `${startRect.left + startRect.width / 2 - size / 2}px`;
    flyer.style.top = `${startRect.top + startRect.height / 2 - size / 2}px`;
    flyer.style.width = `${size}px`;
    flyer.style.height = `${size}px`;
    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
      const startCenterX = startRect.left + startRect.width / 2;
      const startCenterY = startRect.top + startRect.height / 2;
      const endCenterX = endRect.left + endRect.width / 2;
      const endCenterY = endRect.top + endRect.height / 2;
      const endX = endCenterX - startCenterX;
      const endY = endCenterY - startCenterY;
      flyer.style.transform = `translate(${endX}px, ${endY}px) scale(0.15)`;
      flyer.style.opacity = '0.3';
    });

    flyer.addEventListener('transitionend', () => {
      flyer.remove();
      cartIcon.classList.add('cart-icon-bump');
      setTimeout(() => cartIcon.classList.remove('cart-icon-bump'), 350);
    });
  };

  // NOTE: The premature "New Package Order Request" email has been removed.
  // Clicking this button just adds the package to the cart — no customer
  // details exist yet at this point, so sending an email here only ever
  // produced a notification with no name/email/location in it. The single
  // source of truth for order notifications is now CartDrawer.js, which
  // fires only once the customer has filled in their details at checkout.
  const handleInitiateOrder = (tier, displayPrice, displayValue, event) => {
    addToCart({ ...tier, price: displayPrice, priceValue: displayValue, region });

    const cardEl = event?.currentTarget?.closest('.package-card');
    flyToCart(cardEl, tier.image);
  };

  return (
    <section id="packages" style={{ backgroundColor: '#F8FAFC', padding: '4rem 0' }}>
      <div className="section-header">
        <h3>Solar Solutions You Can Rely On</h3>
        <p>High-quality engineering packages optimized for household self-sufficiency and longevity.</p>
        <p
          style={{
            fontSize: '0.8rem',
            color: '#94A3B8',
            fontStyle: 'italic',
            marginTop: '0.4rem',
          }}
        >
          Prices reflect equipment cost only — transport and delivery are not included.
        </p>
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
          const currencySymbol = region === 'zim' ? 'USD ' : '£';
          const installment = calculateInstallment(displayValue);

          return (
            <div key={idx} className={`package-card ${tier.featured ? 'featured' : ''}`}>
              {tier.featured && <div className="featured-tag">Most Recommended Tier</div>}

              <div className="package-header">
                <h4>{tier.name}</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '0.2rem' }}>{tier.desc}</p>
                <div className="package-price">{displayPrice}</div>

                <div style={{ marginTop: '8px', padding: '10px 12px', background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Or Pay In 3 Monthly Installments
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#166534', marginTop: '2px' }}>
                    {currencySymbol}{installment.monthly.toLocaleString()}/mo
                    <span style={{ color: '#4D7C0F', fontSize: '0.78rem', marginLeft: '6px' }}>
                      (Total {currencySymbol}{installment.total.toLocaleString()})
                    </span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#65A30D', marginTop: '2px' }}>
                    Equipment dispatched after 2nd payment
                  </div>
                </div>
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
                  onClick={(e) => handleInitiateOrder(tier, displayPrice, displayValue, e)}
                >
                  Initiate Secure Order
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <PackagesChatWidget />
    </section>
  );
};

export default Packages;