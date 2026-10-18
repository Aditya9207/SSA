'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const aboutImages = [
  {
    src: '/images/about_slide_1.jpg',
    alt: 'श्री स्वामी समर्थ एजन्सी - शाखा व कृषी अवजारे यार्ड (Shree Swami Samarth Agency Showroom & Yard)',
  },
  {
    src: '/images/about_slide_2.jpg',
    alt: 'श्री स्वामी समर्थ एजन्सी - कृषी अवजारे व यंत्रसामग्री यार्ड (Shree Swami Samarth Agency Equipment Yard)',
  },
  {
    src: '/images/about_slide_3.jpg',
    alt: 'श्री स्वामी समर्थ एजन्सी - शाखा परिसर व कृषी अवजारे यार्ड (Shree Swami Samarth Agency Branch & Equipment Yard)',
  },
];

const slides = [
  aboutImages[aboutImages.length - 1],
  ...aboutImages,
  aboutImages[0],
];

export default function About() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleTransitionEnd = () => {
    if (currentIndex === slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const activeDot = (currentIndex - 1 + aboutImages.length) % aboutImages.length;

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (dotIdx) => {
    setIsTransitioning(true);
    setCurrentIndex(dotIdx + 1);
  };

  return (
    <section id="about" className="section-v">
      <div className="container">
        <div className="about-layout">
          <div className="about-text-col reveal visible">
            <div className="pill-label">{t.about_badge || 'आमच्याबद्दल'}</div>
            <h2 className="section-heading" style={{ marginBottom: '16px' }}>
              <span>{t.about_title ? t.about_title.split(' ').slice(0, 2).join(' ') : 'शेतकऱ्यांसाठी'}</span>{' '}
              <span className="heading-accent">{t.about_title ? t.about_title.split(' ').slice(2).join(' ') : 'विश्वासाचे नाव'}</span>
            </h2>
            <p className="about-body">
              {t.about_p1 ||
                'सन २०११ पासून श्री स्वामी समर्थ एजन्सी महाराष्ट्रातील शेतकऱ्यांना उत्तम दर्जाची कृषी अवजारे पुरवत आहे. Swan Agro आणि Popular Group यांचे अधिकृत वितरक म्हणून आम्ही हजारो शेतकऱ्यांना आधुनिक तंत्रज्ञान उपलब्ध करून दिले आहे.'}
            </p>
            <p className="about-body">
              {t.about_p2 ||
                'सांगली, कुमठा फाटा व जत येथील तीन शाखांमधून आम्ही संपूर्ण परिसरातील शेतकऱ्यांची सेवा करतो. आम्ही स्वतः उत्पादित दर्जेदार चाफ कटर व फन बनवतो. सरकार मान्यताप्राप्त सबसिडी व फायनान्स सुविधा उपलब्ध करून देतो.'}
            </p>

            <div className="about-features">
              <div className="feat-item">
                <div className="feat-icon">
                  <i className="ph-bold ph-check-circle"></i>
                </div>
                <span>{t.about_f1 || 'Swan Agro अधिकृत वितरक'}</span>
              </div>
              <div className="feat-item">
                <div className="feat-icon">
                  <i className="ph-bold ph-check-circle"></i>
                </div>
                <span>{t.about_f2 || 'Popular Group अधिकृत वितरक'}</span>
              </div>
              <div className="feat-item">
                <div className="feat-icon">
                  <i className="ph-bold ph-check-circle"></i>
                </div>
                <span>{t.about_f3 || 'स्वतः उत्पादित अवजारे'}</span>
              </div>
              <div className="feat-item">
                <div className="feat-icon">
                  <i className="ph-bold ph-check-circle"></i>
                </div>
                <span>{t.about_f4 || 'शासन मान्यताप्राप्त सबसिडी'}</span>
              </div>
            </div>
          </div>

          <div className="about-img-col reveal visible delay-2">
            <div
              className="about-img-frame"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="about-slider-track"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: isTransitioning
                    ? 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
                    : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {slides.map((img, idx) => (
                  <div key={idx} className="about-slide-item">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={idx === 1 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="about-slider-dots">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    suppressHydrationWarning
                    className={`about-slider-dot ${activeDot === idx ? 'active' : ''}`}
                    onClick={() => goToSlide(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next controls */}
              <button
                type="button"
                suppressHydrationWarning
                className="about-slider-arrow prev"
                onClick={prevSlide}
                aria-label="Previous photo"
              >
                <i className="ph-bold ph-caret-left"></i>
              </button>
              <button
                type="button"
                suppressHydrationWarning
                className="about-slider-arrow next"
                onClick={nextSlide}
                aria-label="Next photo"
              >
                <i className="ph-bold ph-caret-right"></i>
              </button>
            </div>

            {/* Proprietor Card below Image */}
            <div className="prop-card">
              <div className="prop-ava">
                <i className="ph-bold ph-user-gear" style={{ color: '#fff', fontSize: '1.6rem' }}></i>
              </div>
              <div>
                <div className="prop-role">{t.about_prop_label || 'प्रोप्रा.'}</div>
                <div className="prop-name">{t.about_prop_name || 'नेताजी जमदाडे'}</div>
                <a href="tel:+918806595075" className="prop-tel">
                  <i className="ph-bold ph-phone"></i>
                  {t.about_prop_contact || 'संपर्क: ८८०६५९५०७५'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
