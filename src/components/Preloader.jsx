'use client';

import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" aria-hidden="true">
      <div className="pre-logo">
        <div className="pre-icon">
          <img
            src="/images/logo.png"
            alt="श्री स्वामी समर्थ एजन्सी"
            className="pre-logo-img"
          />
        </div>
        <div className="pre-name">श्री स्वामी समर्थ एजन्सी</div>
        <div className="pre-sub">Agricultural Implements Since 2011</div>
      </div>
      <div className="pre-bar">
        <div className="pre-fill"></div>
      </div>
    </div>
  );
}
