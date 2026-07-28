
// src/components/CartDrawer.js
import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, CheckCircle2 } from 'lucide-react';
import { useCart } from '../components/CartContext';

const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, clearCart, isOpen, closeCart, totalItems } = useCart();
  const [view, setView] = useState('cart'); // cart | checkout | success
  const [sending, setSending] = useState(false);

  const handleClose = () => {
    closeCart();
    setView('cart');
  };

  // Helper to get formatted single unit or subtotal string
  const formatItemPrice = (item, qty = 1) => {
    const isUK = item.region === 'uk';
    const currency = isUK ? '£' : 'USD ';
    const totalVal = (item.priceValue || 0) * qty;
    return `${currency}${totalVal.toLocaleString()}`;
  };

  // Group total by currency type in case user added both
  const calculateTotalsSummary = () => {
    const totals = items.reduce(
      (acc, item) => {
        const isUK = item.region === 'uk';
        const val = (item.priceValue || 0) * item.quantity;
        if (isUK) acc.uk += val;
        else acc.zim += val;
        return acc;
      },
      { zim: 0, uk: 0 }
    );

    const parts = [];
    if (totals.zim > 0) parts.push(`USD ${totals.zim.toLocaleString()}`);
    if (totals.uk > 0) parts.push(`£${totals.uk.toLocaleString()}`);

    return parts.join(' + ');
  };

  const buildOrderSummary = () => {
    return items
      .map((i) => `${i.name} (${i.region === 'uk' ? 'UK' : 'Zim'}) x${i.quantity} - ${formatItemPrice(i, i.quantity)}`)
      .join('\n');
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    setSending(true);

    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', 'f3e19cf2-449a-4fbb-8145-26b44a0c5cb2');
    formData.append('subject', 'New Product Order — LumiVera Website');
    formData.append('order_summary', buildOrderSummary());
    formData.append('order_total', calculateTotalsSummary());

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setView('success');
        clearCart();
      }
    } catch (err) {
      alert('Something went wrong sending your order. Please try again or email us directly.');
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cart-drawer-backdrop" onClick={handleClose}>
      <div className="cart-drawer-panel" onClick={(e) => e.stopPropagation()}>

        <div className="cart-drawer-header">
          <h4>
            {view === 'cart' && 'Your Cart'}
            {view === 'checkout' && 'Complete Your Order'}
            {view === 'success' && 'Order Sent'}
          </h4>
          <button className="cart-drawer-close" onClick={handleClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* --- CART VIEW --- */}
        {view === 'cart' && (
          <>
            {items.length === 0 ? (
              <div className="cart-empty-state">
                <p>Your cart is empty. Browse our products and hit "Initiate Secure Order" to add one.</p>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {items.map((item) => {
                    const idKey = `${item.name}-${item.region}`;
                    return (
                      <div className="cart-item" key={idKey}>
                        <div className="cart-item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-body">
                          <h5>{item.name}</h5>
                          <span className="cart-item-spec">
                            {item.spec} &bull; {item.region === 'uk' ? '🇬🇧 UK' : '🇿🇼 Zim'}
                          </span>
                          <div className="cart-item-controls">
                            <button onClick={() => updateQuantity(idKey, item.quantity - 1)}>
                              <Minus size={14} />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(idKey, item.quantity + 1)}>
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                        <div className="cart-item-right">
                          <span className="cart-item-price">{formatItemPrice(item, item.quantity)}</span>
                          <button className="cart-item-remove" onClick={() => removeFromCart(idKey)}>
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="cart-drawer-footer">
                  <div className="cart-total-row">
                    <span>Total ({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
                    <strong>{calculateTotalsSummary()}</strong>
                  </div>
                  <button className="cart-checkout-btn" onClick={() => setView('checkout')}>
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* --- CHECKOUT VIEW --- */}
        {view === 'checkout' && (
          <form className="cart-checkout-form" onSubmit={handleCheckout}>
            <div className="cart-order-recap">
              {items.map((item) => {
                const idKey = `${item.name}-${item.region}`;
                return (
                  <div className="cart-order-recap-row" key={idKey}>
                    <span>{item.name} ({item.region === 'uk' ? 'UK' : 'Zim'}) x{item.quantity}</span>
                    <span>{formatItemPrice(item, item.quantity)}</span>
                  </div>
                );
              })}
              <div className="cart-order-recap-row cart-order-recap-total">
                <span>Total</span>
                <span>{calculateTotalsSummary()}</span>
              </div>
            </div>

            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div className="form-field">
              <label htmlFor="cart-name">Full Name</label>
              <input id="cart-name" name="name" type="text" required placeholder="Your name" />
            </div>

            <div className="form-field-row">
              <div className="form-field">
                <label htmlFor="cart-email">Email Address</label>
                <input id="cart-email" name="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="form-field">
                <label htmlFor="cart-phone">Phone / WhatsApp</label>
                <input id="cart-phone" name="phone" type="tel" placeholder="+44 ..." />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="cart-location">Delivery / Installation Location</label>
              <input id="cart-location" name="location" type="text" required placeholder="e.g. Borrowdale, Harare / London, UK" />
            </div>

            <div className="form-field">
              <label htmlFor="cart-notes">Additional Notes</label>
              <textarea id="cart-notes" name="message" rows="3" placeholder="Anything else we should know..." />
            </div>

            <div className="cart-checkout-actions">
              <button type="button" className="cart-back-btn" onClick={() => setView('cart')}>
                Back to Cart
              </button>
              <button type="submit" className="cart-checkout-btn" disabled={sending}>
                {sending ? 'Sending...' : 'Place Order'}
              </button>
            </div>
          </form>
        )}

        {/* --- SUCCESS VIEW --- */}
        {view === 'success' && (
          <div className="cart-success-state">
            <CheckCircle2 size={44} color="#1E6B38" strokeWidth={2} />
            <h5>Thank you — your order is in</h5>
            <p>Our team will be in touch shortly to confirm details and arrange delivery or installation.</p>
            <button className="cart-checkout-btn" onClick={handleClose}>
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartDrawer;