'use client';

import React, { useState, useEffect } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="scroll-top"
      type="button"
      suppressHydrationWarning
      className={visible ? 'visible' : ''}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <i className="ph-bold ph-arrow-up"></i>
    </button>
  );
}
