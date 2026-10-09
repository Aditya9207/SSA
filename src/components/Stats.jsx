'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

function AnimatedNumber({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="stat-num">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section id="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item visible">
            <div className="stat-icon">
              <i className="ph-bold ph-trophy"></i>
            </div>
            <AnimatedNumber target={15} suffix="+" />
            <span className="stat-label">{t.stat1_label || 'वर्षांचा अनुभव'}</span>
          </div>

          <div className="stat-item visible delay-1">
            <div className="stat-icon">
              <i className="ph-bold ph-map-pin"></i>
            </div>
            <AnimatedNumber target={3} suffix="" />
            <span className="stat-label">{t.stat2_label || 'शाखा'}</span>
          </div>

          <div className="stat-item visible delay-2">
            <div className="stat-icon">
              <i className="ph-bold ph-tractor"></i>
            </div>
            <AnimatedNumber target={50} suffix="+" />
            <span className="stat-label">{t.stat3_label || 'उत्पादने'}</span>
          </div>

          <div className="stat-item visible delay-3">
            <div className="stat-icon">
              <i className="ph-bold ph-handshake"></i>
            </div>
            <AnimatedNumber target={5000} suffix="+" />
            <span className="stat-label">{t.stat4_label || 'समाधानी शेतकरी'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
