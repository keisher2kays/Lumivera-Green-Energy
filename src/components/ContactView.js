// src/components/ContactView.js
import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

const ContactView = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', 'f92f666e-d08e-450e-9eb4-112a6eaf6dab');

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

        <div className="contact-tagged-row">
          <div className="contact-meta-tag animate-mask">Contact</div>
          <h3 className="contact-bold-statement animate-slide-blur">
            Power your home. Empower your future.
          </h3>
        </div>

        <div className="contact-split">

          <div className="contact-info-column animate-slide-blur delay-1">

            <a
              href="tel:+263773440577"
              className="contact-info-block contact-info-block--link"
              style={{ borderTop: '4px solid #2CA636' }}
            >
              <Phone size={28} color="#2CA636" strokeWidth={2} />
              <h4>Direct Line</h4>
              <p className="contact-info-value">+263 773 440 577</p>
              <p className="contact-info-copy">
                Tap to call directly for enquiries, quotes, or support, whether
                you are in Zimbabwe or abroad.
              </p>
            </a>

            <a
              href="https://wa.me/447909787374"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-block contact-info-block--link"
              style={{ borderTop: '4px solid #25D366' }}
            >
              <MessageSquare size={28} color="#25D366" strokeWidth={2} />
              <h4>WhatsApp Chat</h4>
              <p className="contact-info-value">+44 7909 787374</p>
              <p className="contact-info-copy">
                Tap to open WhatsApp for text support, system photos, and rapid
                structural configuration assistance.
              </p>
            </a>

            <a
              href="mailto:lumivera@lumiveragreenenergy.org"
              className="contact-info-block contact-info-block--link"
              style={{ borderTop: '4px solid #F5A623' }}
            >
              <Mail size={28} color="#F5A623" strokeWidth={2} />
              <h4>Corporate Email</h4>
              <p className="contact-info-value">lumivera@lumiveragreenenergy.org</p>
              <p className="contact-info-copy">
                Tap to send project details, load requirements, or documentation
                directly to our team for a professional assessment.
              </p>
            </a>

          </div>

          <div className="contact-form-column animate-slide-blur delay-2">
            {status === 'success' ? (
              <div className="contact-form-success">
                <CheckCircle2 size={44} color="#2CA636" strokeWidth={2} />
                <h4>Thank you, your request is in</h4>
                <p>
                  A member of the LumiVera team will be in touch shortly to
                  confirm details and next steps.
                </p>
              </div>
            ) : (
              <form className="contact-order-form" onSubmit={handleSubmit}>
                <h4 className="contact-form-title">Request a Quote or Place an Order</h4>

                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                <input type="hidden" name="subject" value="New Enquiry - LumiVera Website" />

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
                    <label htmlFor="product">Product / Package Needed</label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      required
                      placeholder="e.g. 6.2kW Standard Package, 550W Panels..."
                    />
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
                    Something went wrong sending your request. Please try again,
                    or email us directly at lumivera@lumiveragreenenergy.org.
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