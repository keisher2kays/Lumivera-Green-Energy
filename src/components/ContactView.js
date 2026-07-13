// src/components/ContactView.js
import React, { useState } from 'react';
import { Phone, Mail, Globe2, CheckCircle2 } from 'lucide-react';

const productOptions = [
  'Monocrystalline Solar Panel (550W)',
  'Hybrid Solar Inverter (5kVA)',
  'Lithium Battery Bank (200Ah)',
  'Installation & Mounting Kit',
  'Basic Package (from USD 1,600)',
  'Standard Package (from USD 2,600)',
  'Premium Package (from USD 4,200)',
  'Not sure yet — need advice',
];

const ContactView = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', 'f3e19cf2-449a-4fbb-8145-26b44a0c5cb2');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-viewport">
      <div className="contact-layout-container">

        {/* ROW 1: TAGGED ZONE — matches About / Services / Products / Team */}
        <div className="contact-tagged-row">
          <div className="contact-meta-tag animate-mask">/ Contact</div>
          <h3 className="contact-bold-statement animate-slide-blur">
            Power your home. Empower your future.
          </h3>
        </div>

        {/* ROW 2: INFO + ORDER FORM SPLIT */}
        <div className="contact-split">

          {/* LEFT: CONTACT INFO */}
          <div className="contact-info-column animate-slide-blur delay-1">
            <div className="contact-info-block" style={{ borderTop: '4px solid #1E6B38' }}>
              <Phone size={28} color="#1E6B38" strokeWidth={2} />
              <h4>Direct Line &amp; WhatsApp</h4>
              <p className="contact-info-value">+44 7909 787374</p>
              <p className="contact-info-copy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Connect instantly
                with our diaspora accounts desk.
              </p>
            </div>

            <div className="contact-info-block" style={{ borderTop: '4px solid #0B2240' }}>
              <Mail size={28} color="#0B2240" strokeWidth={2} />
              <h4>Corporate Email</h4>
              <p className="contact-info-value">info@lumiveragreenenergy.com</p>
              <p className="contact-info-copy">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Submit
                your load charts and architectural plans directly.
              </p>
            </div>

            <div className="pipeline-banner">
              <Globe2 size={26} color="#DDF23D" />
              <h4>From the UK to Zimbabwe</h4>
              <p className="pipeline-quote">&ldquo;We light up your future.&rdquo;</p>
              <p className="pipeline-copy">
                Pay comfortably from wherever you are — we handle sourcing, delivery,
                and installation back home.
              </p>
            </div>
          </div>

          {/* RIGHT: ORDER / ENQUIRY FORM */}
          <div className="contact-form-column animate-slide-blur delay-2">
            {status === 'success' ? (
              <div className="contact-form-success">
                <CheckCircle2 size={44} color="#1E6B38" strokeWidth={2} />
                <h4>Thank you — your request is in</h4>
                <p>
                  Lorem ipsum dolor sit amet. A member of the LumiVera team will be in
                  touch shortly to confirm details and next steps.
                </p>
              </div>
            ) : (
              <form className="contact-order-form" onSubmit={handleSubmit}>
                <h4 className="contact-form-title">Request a Quote or Place an Order</h4>

                {/* Honeypot field — invisible to humans, catches bots for Web3Forms */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                {/* Optional: customizes the email subject/sender shown in your inbox */}
                <input type="hidden" name="subject" value="New Enquiry — LumiVera Website" />

                <div className="form-field">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" />
                </div>

                <div className="form-field-row">
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" required placeholder="you@email.com" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input id="phone" name="phone" type="tel" placeholder="+44 ..." />
                  </div>
                </div>

                <div className="form-field-row">
                  <div className="form-field">
                    <label htmlFor="product">Product / Package</label>
                    <select id="product" name="product" defaultValue={productOptions[0]}>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="quantity">Quantity</label>
                    <input id="quantity" name="quantity" type="number" min="1" defaultValue="1" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="location">Installation Location (Zimbabwe)</label>
                  <input id="location" name="location" type="text" placeholder="e.g. Borrowdale, Harare" />
                </div>

                <div className="form-field">
                  <label htmlFor="message">Additional Notes</label>
                  <textarea id="message" name="message" rows="4" placeholder="Household size, timeline, anything else we should know..." />
                </div>

                <button type="submit" className="contact-form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Submit Request'}
                </button>

                {status === 'error' && (
                  <p className="contact-form-error">
                    Something went wrong sending your request. Please try again, or email
                    us directly at info@lumiveragreenenergy.com.
                  </p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactView;