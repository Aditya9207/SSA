'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      {/* Inset photo container — Agrovia style */}
      <div className="hero-photo-container">
        <img
          src="/images/hero_bg.jpg"
          alt="Shree Swami Samarth Agency — Agricultural Implements"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-photo-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="hero-content">
          <div className="hero-inner">
            {/* Announce badge */}
            <div className="hero-announce">
              <div className="announce-dot"></div>
              <div className="announce-text">{t.hero_badge || 'शेतकऱ्यांची पहिली पसंती 🌾'}</div>
            </div>

            {/* Headline */}
            <h1 className="hero-heading">
              <span>{t.hero_title_1 || 'श्री स्वामी समर्थ'}</span>{' '}
              <span className="hero-heading-accent">{t.hero_title_2 || 'एजन्सी'}</span>
            </h1>

            <p className="hero-desc">
              {t.hero_desc ||
                'Swan Agro व Popular Group च्या उत्कृष्ट कृषी अवजारांचे अधिकृत वितरक | स्वतः उत्पादित चाफ कटर व फन | सर्व ब्रँड्सची दुरुस्ती व स्पेअर पार्ट उपलब्ध'}
            </p>

            {/* CTAs — lime + ghost */}
            <div className="hero-ctas">
              <a
                href="#contact"
                className="btn btn-lime btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('contact');
                }}
              >
                <i className="ph-bold ph-arrow-up-right" style={{ fontSize: '1.1rem' }}></i>
                {t.hero_cta1 || 'आजच संपर्क साधा'}
              </a>
              <a
                href="#products"
                className="btn btn-white-outline btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('products');
                }}
              >
                <i className="ph-bold ph-tractor" style={{ fontSize: '1.1rem' }}></i>
                {t.hero_cta2 || 'उत्पादने पाहा'}
              </a>
            </div>

            {/* Brand chips */}
            <div className="hero-brands">
              <span className="hero-brands-sep">{t.hero_auth_dealer || 'Authorized Dealer'}</span>
              <div className="brand-chip">{t.chip_swan_auth || 'Swan Agro'}</div>
              <div className="brand-chip">{t.chip_popular_auth || 'Popular Group'}</div>
              <div className="brand-chip">{t.chip_since_2011 || 'Since 2011'}</div>
            </div>
          </div>
        </div>

    </section>
  );
}
