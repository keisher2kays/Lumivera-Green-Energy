// src/components/BackToTop.js
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={'back-to-top-btn' + (visible ? ' is-visible' : '')}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
};

export default BackToTop;