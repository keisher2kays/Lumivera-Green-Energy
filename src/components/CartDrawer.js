// import React, { useState, useEffect, useCallback } from 'react';
// import { useCart } from './CartContext';
//  // if you have it, if not inline styles below will work

// const BACKEND_URL = 'http://localhost:5000';

// export default function CartDrawer() {
//   const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useCart();

//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');
//   const [notes, setNotes] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [orderSuccess, setOrderSuccess] = useState(false);

//   const total = cartItems.reduce((s, i) => s + ((i.priceValue || 0) * (i.quantity || 1)), 0);
//   const currency = cartItems[0]?.region === 'uk'? '£' : 'USD';

//   const clearCart = useCallback(() => setCartItems([]), [setCartItems]);

//   // FIX FOR STRIPE - stay on same page and keep drawer open
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     if (params.get('cart') === 'open') setIsCartOpen(true);
//     if (params.get('payment') === 'success') {
//       setOrderSuccess(true);
//       clearCart();
//       window.history.replaceState({}, '', window.location.pathname + '?cart=open');
//     }
//     if (params.get('payment') === 'cancelled') {
//       setIsCartOpen(true);
//       window.history.replaceState({}, '', window.location.pathname);
//     }
//   }, [setIsCartOpen, clearCart]);

//   // FIX FOR EMAIL - now sends full details
//   const handleInquiry = async () => {
//     if (!fullName ||!email ||!phone ||!location) return alert('Please fill Full Name, Email, Phone, Location');
//     if (cartItems.length === 0) return alert('Cart is empty');
//     setLoading(true);
//     try {
//       const orderSummary = cartItems.map(i => `${i.name} x${i.quantity} - ${i.price}`).join('\n');

//       const res = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           access_key: 'f3e19cf2-449a-4fbb-8145-26b44a0c5cb2',
//           subject: `🟡 NEW INQUIRY — ${fullName} — ${location}`,
//           from_name: 'LumiVera Website',
//           name: fullName,
//           email: email,
//           phone: phone,
//           location: location,
//           notes: notes,
//           order_summary: orderSummary,
//           order_total: `${currency} ${total.toLocaleString()}`,
//           payment_type: 'Pay Later / Inquiry',
//           message: `NEW INQUIRY:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nNotes: ${notes}\n\nITEMS:\n${orderSummary}\n\nTOTAL: ${currency} ${total.toLocaleString()}`
//         })
//       });
//       const data = await res.json();
//       if (data.success) {
//         setOrderSuccess(true);
//         clearCart();
//       } else alert('Failed to send');
//     } catch (e) { alert(e.message); }
//     setLoading(false);
//   };

//   const handleStripe = async () => {
//     if (!fullName ||!email ||!phone ||!location) return alert('Please fill Full Name, Email, Phone, Location');
//     if (cartItems.length === 0) return alert('Cart is empty');
//     setLoading(true);
//     try {
//       const currentPage = window.location.href.split('?')[0];
//       const res = await fetch(`${BACKEND_URL}/api/create-checkout-session`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           items: cartItems,
//           customerEmail: email,
//           customerName: fullName,
//           customerPhone: phone,
//           location: location,
//           successUrl: `${currentPage}?payment=success&cart=open`,
//           cancelUrl: `${currentPage}?payment=cancelled&cart=open`,
//         })
//       });
//       const data = await res.json();
//       if (data.url) window.location.href = data.url;
//       else alert(data.error);
//     } catch (e) { alert(e.message); }
//     setLoading(false);
//   };

//   if (!isCartOpen) return null;

//   return (
//     <>
//       <div className="cart-overlay" onClick={() => setIsCartOpen(false)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.4)', zIndex:9998}} />
//       <div className="cart-drawer" style={{position:'fixed', right:0, top:0, width:'420px', maxWidth:'100vw', height:'100vh', background:'#fff', zIndex:9999, padding:'24px', overflowY:'auto', boxShadow:'-4px 0 30px rgba(0,0,0,0.15)'}}>
//         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
//           <h2 style={{margin:0, fontSize:'20px'}}>Your Cart ({cartItems.length})</h2>
//           <button onClick={() => setIsCartOpen(false)} style={{border:'none', background:'none', fontSize:'22px', cursor:'pointer'}}>✕</button>
//         </div>

//         {orderSuccess? (
//           <div style={{background:'#e8f5e9', padding:'20px', borderRadius:'10px', textAlign:'center'}}>
//             <h3>✅ Thank you {fullName}!</h3>
//             <p>We received your order. We'll contact you at {email} / {phone}</p>
//             <button onClick={() => {setOrderSuccess(false); setIsCartOpen(false); window.history.replaceState({}, '', window.location.pathname)}} style={{marginTop:'10px', padding:'10px 20px', background:'#000', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer'}}>Continue Shopping</button>
//           </div>
//         ) : (
//           <>
//             <div style={{marginBottom:'20px'}}>
//               {cartItems.length === 0 && <p style={{color:'#888'}}>Your cart is empty</p>}
//               {cartItems.map((item, idx) => (
//                 <div key={idx} style={{display:'flex', gap:'12px', padding:'12px 0', borderBottom:'1px solid #eee'}}>
//                   <div style={{flex:1}}>
//                     <div style={{fontWeight:600}}>{item.name}</div>
//                     <div style={{fontSize:'12px', color:'#666'}}>{item.spec || ''}</div>
//                     <div style={{fontSize:'13px', marginTop:'4px'}}>Qty: {item.quantity} — {item.price}</div>
//                   </div>
//                   <button onClick={() => setCartItems(prev => prev.filter((_, i) => i!== idx))} style={{border:'none', background:'none', color:'#999', cursor:'pointer'}}>✕</button>
//                 </div>
//               ))}
//             </div>

//             {cartItems.length > 0 && <h3 style={{marginBottom:'15px'}}>Total: {currency} {total.toLocaleString()}</h3>}

//             <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
//               <input value={fullName} onChange={e=>setFullName(e.target.value)} placeholder="Full Name" style={{padding:'12px', border:'1px solid #ddd', borderRadius:'6px'}} />
//               <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{padding:'12px', border:'1px solid #ddd', borderRadius:'6px'}} />
//               <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" style={{padding:'12px', border:'1px solid #ddd', borderRadius:'6px'}} />
//               <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Location / Address" style={{padding:'12px', border:'1px solid #ddd', borderRadius:'6px'}} />
//               <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Additional Notes" rows={3} style={{padding:'12px', border:'1px solid #ddd', borderRadius:'6px', resize:'vertical'}} />

//               <button onClick={handleInquiry} disabled={loading} style={{padding:'14px', background:'#111', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer', fontWeight:600, marginTop:'8px'}}>
//                 {loading? 'Sending...' : 'Place Order as Inquiry (Pay Later)'}
//               </button>
//               <button onClick={handleStripe} disabled={loading} style={{padding:'14px', background:'#635bff', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer', fontWeight:600}}>
//                 {loading? 'Redirecting...' : `Pay with Card (${currency} ${total.toLocaleString()})`}
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect, useCallback } from 'react';
import { useCart } from './CartContext';

const BACKEND_URL = 'http://localhost:5000';

export default function CartDrawer() {
  const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useCart();
  const [step, setStep] = useState('cart');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const total = cartItems.reduce((s, i) => s + ((i.priceValue || 0) * (i.quantity || 1)), 0);
  const currency = cartItems[0]?.region === 'uk' ? '£' : 'USD';
  const totalCount = cartItems.reduce((a, c) => a + (c.quantity || 1), 0);

  const clearCart = useCallback(() => setCartItems([]), [setCartItems]);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get('cart') === 'open') setIsCartOpen(true);
    if (p.get('payment') === 'success') {
      setOrderSuccess(true);
      setStep('checkout');
      clearCart();
      window.history.replaceState({}, '', window.location.pathname + '?cart=open');
    }
  }, [setIsCartOpen, clearCart]);

  const updateQty = (id, q) => {
    if (q < 1) {
      setCartItems((prev) => prev.filter((p) => (p.id || p.name) !== id));
    } else {
      setCartItems((prev) => prev.map((p) => (p.id || p.name) === id ? { ...p, quantity: q } : p));
    }
  };

  const buildMessage = (type) => {
    const items = cartItems.map((i) => `- ${i.name} ${i.spec ? '(' + i.spec + ')' : ''} x${i.quantity} @ ${i.price} = ${currency} ${(i.priceValue * i.quantity).toLocaleString()}`).join('\n');
    return `NEW ${type} ORDER\n\nCustomer: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\n\nItems:\n${items}\n\nTotal: ${currency} ${total.toLocaleString()} (${totalCount} items)\nNotes: ${notes || 'None'}`;
  };

  const handleInquiry = async () => {
    if (!fullName || !email || !phone || !location) return alert('Fill all fields');
    setLoading(true);
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f3e19cf2-449a-4fbb-8145-26b44a0c5cb2',
          subject: `NEW ORDER: ${fullName} - ${location} - ${currency} ${total}`,
          from_name: 'LumiVera Website',
          name: fullName,
          email: email,
          phone: phone,
          location: location,
          message: buildMessage('PAY LATER')
        })
      });
      setOrderSuccess(true);
      clearCart();
    } catch (e) {
      alert(e.message);
    }
    setLoading(false);
  };

  const handleStripe = async () => {
    if (!fullName || !email || !phone || !location) return alert('Fill all fields');
    setLoading(true);
    try {
      const page = window.location.href.split('?')[0];
      const res = await fetch(`${BACKEND_URL}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          customerEmail: email,
          customerName: fullName,
          customerPhone: phone,
          location: location,
          notes: buildMessage('CARD'),
          successUrl: `${page}?payment=success&cart=open`,
          cancelUrl: `${page}?payment=cancelled&cart=open`
        })
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (e) {
      alert(e.message);
    }
    setLoading(false);
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div onClick={() => setIsCartOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 9998 }} />
      <div style={{ position: 'fixed', right: 0, top: 0, width: 440, maxWidth: '100vw', height: '100vh', background: '#fff', zIndex: 9999, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{step === 'cart' ? 'Your Cart' : 'Complete Your Order'}</h3>
          <button onClick={() => setIsCartOpen(false)} style={{ width: 32, height: 32, borderRadius: '50%', border: 'none', background: '#f5f5f5', cursor: 'pointer' }}>X</button>
        </div>

        {orderSuccess ? (
          <div style={{ padding: 30, textAlign: 'center', marginTop: 60 }}>
            <div style={{ fontSize: 44 }}>✅</div>
            <h3>Order Received {fullName}!</h3>
            <p style={{ fontSize: 13, color: '#666' }}>We will contact you at {email} / {phone}</p>
            <button onClick={() => { setOrderSuccess(false); setStep('cart'); setIsCartOpen(false); }} style={{ marginTop: 16, padding: '10px 18px', background: '#111', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Continue</button>
          </div>
        ) : step === 'cart' ? (
          <>
            <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
              {cartItems.length === 0 && <p style={{ textAlign: 'center', color: '#888', marginTop: 40 }}>Your cart is empty</p>}
              {cartItems.map((item) => {
                const id = item.id || item.name;
                return (
                  <div key={id} style={{ display: 'flex', gap: 12, padding: '14px 6px', borderBottom: '1px solid #f7f7f7' }}>
                    <img src={item.image || item.img} alt="" style={{ width: 56, height: 56, objectFit: 'contain', background: '#fafafa', borderRadius: 8 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{item.name}</div>
                      <div style={{ color: '#1a7d33', fontSize: 11, fontWeight: 700, marginTop: 2 }}>{item.spec || ''}</div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                        <button onClick={() => updateQty(id, (item.quantity || 1) - 1)} style={{ width: 24, height: 24, borderRadius: 12, border: '1px solid #e5e5e5', background: '#fff', cursor: 'pointer' }}>-</button>
                        <span style={{ fontSize: 12, lineHeight: '24px' }}>{item.quantity}</span>
                        <button onClick={() => updateQty(id, (item.quantity || 1) + 1)} style={{ width: 24, height: 24, borderRadius: 12, border: '1px solid #e5e5e5', background: '#fff', cursor: 'pointer' }}>+</button>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, fontSize: 12 }}>{item.price || `${currency} ${item.priceValue}`}</div>
                      <button onClick={() => updateQty(id, 0)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#aaa', marginTop: 6 }}>del</button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{ padding: 20, borderTop: '1px solid #eee' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#555' }}>
                <span>Total ({totalCount} item)</span>
                <span style={{ fontWeight: 800, color: '#111' }}>{currency} {total.toLocaleString()}</span>
              </div>
              <button onClick={() => setStep('checkout')} disabled={!cartItems.length} style={{ width: '100%', marginTop: 14, padding: 14, background: '#FFB400', border: 'none', borderRadius: 24, fontWeight: 800, cursor: 'pointer' }}>Proceed to Checkout</button>
            </div>
          </>
        ) : (
          <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
            <div style={{ background: 'black', borderRadius: 12, padding: 12, marginBottom: 16 }}>
              {cartItems.map((i, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                  <span>{i.name} x{i.quantity}</span>
                  <span>USD {i.priceValue * i.quantity}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px dashed #ddd', marginTop: 8, paddingTop: 8, display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 13 }}>
                <span>Total</span>
                <span>USD {total}</span>
              </div>
            </div>

            <label style={{ fontSize: 11, fontWeight: 700 }}>Full Name</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Your name" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb', margin: '6px 0 12px', fontSize: 13 }} />

            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 11, fontWeight: 700 }}>Email Address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb', margin: '6px 0 12px', fontSize: 13 }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: 11, fontWeight: 700 }}>Phone / WhatsApp</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+44..." style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb', margin: '6px 0 12px', fontSize: 13 }} />
              </div>
            </div>

            <label style={{ fontSize: 11, fontWeight: 700 }}>Delivery / Installation Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Borrowdale, Harare / London, UK" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb', margin: '6px 0 12px', fontSize: 13 }} />

            <label style={{ fontSize: 11, fontWeight: 700 }}>Additional Notes</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Anything else we should know..." rows={3} style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid #e5e7eb', margin: '6px 0 12px', fontSize: 13 }} />

            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              <button onClick={() => setStep('cart')} style={{ flex: 1, padding: 12, borderRadius: 24, border: '1px solid #e5e7eb', background: '#fff', fontWeight: 600, cursor: 'pointer' }}>Back to Cart</button>
              <button onClick={handleStripe} disabled={loading} style={{ flex: 1, padding: 12, borderRadius: 24, border: 'none', background: '#111', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Pay with Card</button>
            </div>
            <button onClick={handleInquiry} disabled={loading} style={{ width: '100%', marginTop: 10, padding: 13, borderRadius: 24, border: 'none', background: '#FFB400', fontWeight: 800, cursor: 'pointer' }}>{loading ? 'Sending...' : 'Place as Inquiry (Pay Later)'}</button>
          </div>
        )}
      </div>
    </>
  );
}


