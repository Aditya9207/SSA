'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <img
                  src="/images/logo.png"
                  alt={t.footer_brand_name || "श्री स्वामी समर्थ एजन्सी"}
                  className="footer-logo-img"
                />
              </div>
              <div className="footer-logo-name">{t.footer_brand_name || 'श्री स्वामी समर्थ एजन्सी'}</div>
            </div>
            <p className="footer-tagline">
              {t.footer_tagline || 'Swan Agro व Popular Group च्या उत्कृष्ट कृषी अवजारांचे अधिकृत वितरक. २०११ पासून महाराष्ट्रातील शेतकऱ्यांच्या सेवेत तत्पर.'}
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/share/1DTzhZwAsV/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                title="Facebook"
                aria-label="Facebook"
              >
                <i className="ph-bold ph-facebook-logo"></i>
              </a>
              <a
                href="https://www.instagram.com/shriswamisamarthagency_?psln=MWViNG94cnB2cHVkcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                title="Instagram"
                aria-label="Instagram"
              >
                <i className="ph-bold ph-instagram-logo"></i>
              </a>
              <a
                href="https://wa.me/918806595075"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <i className="ph-bold ph-whatsapp-logo"></i>
              </a>
              <a href="tel:+918806595075" className="footer-social" title="Call" aria-label="Call">
                <i className="ph-bold ph-phone"></i>
              </a>
              <a
                href="#branches"
                className="footer-social"
                title="Branches"
                aria-label="Branches"
                onClick={(e) => handleScroll(e, 'branches')}
              >
                <i className="ph-bold ph-map-pin"></i>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <div className="footer-col-heading">{t.footer_nav_heading || 'नेव्हिगेशन'}</div>
            <div className="footer-links">
              <a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>
                {t.nav_home || 'मुख्यपृष्ठ'}
              </a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')}>
                {t.nav_about || 'आमच्याबद्दल'}
              </a>
              <a href="#products" onClick={(e) => handleScroll(e, 'products')}>
                {t.nav_products || 'उत्पादने'}
              </a>
              <a href="#services" onClick={(e) => handleScroll(e, 'services')}>
                {t.nav_services || 'सेवा'}
              </a>
              <a href="#why-us" onClick={(e) => handleScroll(e, 'why-us')}>
                {t.whyus_badge || 'आम्हीच का?'}
              </a>
              <a href="#branches" onClick={(e) => handleScroll(e, 'branches')}>
                {t.nav_branches || 'शाखा'}
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                {t.nav_contact || 'संपर्क'}
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="footer-col-heading">{t.footer_products || 'उत्पादने'}</div>
            <div className="footer-links">
              <a href="#products" onClick={(e) => handleScroll(e, 'products')}>
                {t.opt_swan_rota || 'Swan Agro रोटाव्हेटर'}
              </a>
              <a href="#products" onClick={(e) => handleScroll(e, 'products')}>
                {t.opt_popular || 'Popular Group नांगर'}
              </a>
              <a href="#products" onClick={(e) => handleScroll(e, 'products')}>
                {t.opt_chaff || 'चाफ कटर (स्वनिर्मित)'}
              </a>
              <a href="#products" onClick={(e) => handleScroll(e, 'products')}>
                {t.opt_fan || 'फन'}
              </a>
              <a href="#exchange" onClick={(e) => handleScroll(e, 'exchange')}>
                {t.opt_exchange || 'रोटर एक्सचेंज'}
              </a>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <div className="footer-col-heading">{t.footer_office_heading || 'मुख्य कार्यालय'}</div>
            <div className="footer-contact-list">
              <div className="fcl-item">
                <div className="fcl-icon">
                  <i className="ph-bold ph-map-pin"></i>
                </div>
                <div className="fcl-text">{t.branch1_addr || 'विष्णूअण्णा फळ मार्केट शेजारी, सांगली, महाराष्ट्र'}</div>
              </div>
              <div className="fcl-item">
                <div className="fcl-icon">
                  <i className="ph-bold ph-phone"></i>
                </div>
                <div className="fcl-text">
                  <a href="tel:+918806595075">+91 8806595075</a>
                </div>
              </div>
              <div className="fcl-item">
                <div className="fcl-icon">
                  <i className="ph-bold ph-envelope"></i>
                </div>
                <div className="fcl-text">
                  <a href="mailto:shreessamarth@gmail.com">shreessamarth@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">{t.footer_copy || '© २०२६ श्री स्वामी समर्थ एजन्सी. सर्व हक्क सुरक्षित.'}</div>
          <div className="footer-chips">
            <div className="footer-chip">{t.chip_swan_auth || 'Swan Agro Authorized'}</div>
            <div className="footer-chip">{t.chip_popular_auth || 'Popular Group Authorized'}</div>
            <div className="footer-chip">{t.chip_since_2011 || 'Since 2011'}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
