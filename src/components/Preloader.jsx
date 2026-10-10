'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Preloader() {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1100;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setVisible(false);
          }, 650);
        }, 150);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      className={isExiting ? 'pre-exiting' : ''}
      aria-hidden="true"
      suppressHydrationWarning
    >
      {/* Cinematic Split Curtain Panels */}
      <div className="pre-curtain pre-curtain-top"></div>
      <div className="pre-curtain pre-curtain-bottom"></div>

      {/* Center Content */}
      <div className="pre-content">
        {/* Rotating Rotary Gear Ring & Logo */}
        <div className="pre-badge-wrap">
          <svg className="pre-gear-svg" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="rgba(214, 242, 92, 0.22)"
              strokeWidth="2"
              strokeDasharray="4 6"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--lime)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="45 170"
              className="pre-gear-orbit"
            />
          </svg>
          <div className="pre-logo-circle">
            <img
              src="/images/logo.png"
              alt="Shree Swami Samarth Agency"
              className="pre-logo-img"
            />
          </div>
        </div>

        {/* Brand Lockup */}
        <div className="pre-text-group">
          <div className="pre-brand-title">Shri Swami Samarth Agency</div>
          <div className="pre-brand-tagline">
            <span className="pre-accent-dot"></span>
            {t.hero_subtitle || 'आधुनिक तंत्रज्ञान व प्रगत शेतीचा शिल्पकार'}
            <span className="pre-accent-dot"></span>
          </div>
        </div>

        {/* Tractor Furrow Track Loader */}
        <div className="pre-furrow-container">
          <div className="pre-tractor-track">
            {/* Animated Tractor driving along furrow */}
            <div
              className="pre-tractor-runner"
              style={{ left: `calc(${progress}% - 14px)` }}
            >
              <svg
                width="28"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pre-tractor-svg"
              >
                <circle cx="7" cy="15" r="4.2" fill="#D6F25C" stroke="#1B4332" strokeWidth="2" />
                <circle cx="18" cy="16.5" r="2.5" fill="#D6F25C" stroke="#1B4332" strokeWidth="1.8" />
                <path d="M7 11V7a1 1 0 0 1 1-1h4l3 5h3v4h-3" stroke="#D6F25C" />
                <path d="M12 6V3.5" stroke="#D6F25C" />
              </svg>
            </div>

            {/* Furrow soil rail line */}
            <div className="pre-furrow-rail">
              <div
                className="pre-furrow-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Readout row */}
          <div className="pre-stats-row">
            <span className="pre-est-pill">EST. 2011 • SANGLI</span>
            <span className="pre-percent-readout">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
