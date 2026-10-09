'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productData } from '../data/translations';

export default function Products({ onOpenEnquiry }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('swan');
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
    carouselRef.current.classList.add('dragging');
  };
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };
  const handleMouseUp = () => {
    isDragging.current = false;
    if (carouselRef.current) carouselRef.current.classList.remove('dragging');
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'swan', label: t.tab_swan || 'Swan Agro' },
    { id: 'popular', label: t.tab_popular || 'Popular Group' },
    { id: 'own', label: t.tab_own || 'स्वतः उत्पादित' },
  ];

  const currentProducts = productData[activeTab] || [];

  return (
    <section id="products">
      <div className="products-glow-1"></div>
      <div className="products-glow-2"></div>
      <div className="container">
        <div className="section-header products-header reveal visible">
          <div className="section-header-left">
            <div className="pill-label white">{t.products_badge || 'आमची उत्पादने'}</div>
            <h2 className="section-heading">
              <span>{t.products_title ? t.products_title.split(' ').slice(0, 2).join(' ') : 'श्रेष्ठ दर्जाची'}</span>
              <span className="heading-accent">{t.products_title ? t.products_title.split(' ').slice(2).join(' ') : 'कृषी अवजारे'}</span>
            </h2>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="tab-strip visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                suppressHydrationWarning
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Carousel */}
        <div className="products-panel active">
          <div className="products-carousel-wrap">
            <button
              type="button"
              suppressHydrationWarning
              className="products-carousel-arrow prev"
              onClick={() => scrollCarousel('left')}
              aria-label="Previous products"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div
              ref={carouselRef}
              className="products-carousel"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {currentProducts.map((prod) => {
                const nameKey = prod.key;
                const descKey = `${prod.key}_desc`;
                const prodName = t[nameKey] || nameKey;
                const prodDesc = t[descKey] || '';

                return (
                  <div key={prod.key} className="product-card">
                    <div className="product-img-wrap">
                      <img src={prod.img} alt={prodName} loading="lazy" />
                      <div
                        className="product-icon-badge"
                        dangerouslySetInnerHTML={{ __html: prod.icon }}
                      />
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{prodName}</h3>
                      <p className="product-desc">{prodDesc}</p>
                      <button
                        type="button"
                        suppressHydrationWarning
                        className="product-enquire"
                        onClick={() => onOpenEnquiry(prodName)}
                      >
                        💬 {t.enquire_btn || 'चौकशी करा'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              suppressHydrationWarning
              className="products-carousel-arrow next"
              onClick={() => scrollCarousel('right')}
              aria-label="Next products"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
