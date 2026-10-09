'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: t.test1_text || 'श्री स्वामी समर्थ एजन्सीकडून Swan Agro रोटाव्हेटर घेतला. उत्कृष्ट दर्जा आणि सबसिडी मिळवण्यासाठी पूर्ण मदत केली. नेताजी भाऊंचा खूप आभारी आहे!',
      name: t.test1_name || 'रामचंद्र पाटील',
      loc: t.test1_loc || 'सांगली जिल्हा',
    },
    {
      id: 2,
      text: t.test2_text || 'चाफ कटर घेतला, अतिशय मजबूत बांधणी. दुरुस्तीसाठी गेलो तर त्यांनी लगेच दुरुस्त केले. ५ वर्षांपासून या दुकानाशी जोडलेलो आहे.',
      name: t.test2_name || 'संतोष जाधव',
      loc: t.test2_loc || 'जत तालुका',
    },
    {
      id: 3,
      text: t.test3_text || 'Popular Group चा नांगर घेतला. किंमत योग्य, माल उत्तम. EMI सुविधा असल्याने खरेदी सोपी झाली. नक्की शिफारस करतो.',
      name: t.test3_name || 'सुभाष माने',
      loc: t.test3_loc || 'मिरज परिसर',
    },
    {
      id: 4,
      text: t.test4_text || 'जुना रोटर एक्सचेंजमध्ये दिला, चांगली किंमत मिळाली. नवीन रोटर लगेच मिळाला. सर्व व्यवहार पारदर्शक आणि विश्वासू.',
      name: t.test4_name || 'विजय देसाई',
      loc: t.test4_loc || 'कुमठा परिसर',
    },
    {
      id: 5,
      text: t.test5_text || 'द्राक्ष बागेसाठी Swan Agro चा मिनी रोटाव्हेटर घेतला. बागेत काम करायला अतिशय सोपा आणि डिझेलची मोठी बचत होते. काम वेळेत पूर्ण होते!',
      name: t.test5_name || 'तानाजी सावंत',
      loc: t.test5_loc || 'तासगाव परिसर',
    },
    {
      id: 6,
      text: t.test6_text || 'हंगामाच्या ऐन गर्दीत रोटाव्हेटरचे ब्लेड आणि गियरचे सुटे भाग हवे होते. सांगली शाखेतून मूळ ओरीजनल पार्ट्स त्वरित मिळाले. अतिशय तत्पर सेवा!',
      name: t.test6_name || 'संजय कोळी',
      loc: t.test6_loc || 'कवठे महांकाळ',
    },
  ];

  // Update active index when user scrolls manually or swipes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const firstCard = track.children[0];
      if (!firstCard) return;
      const cardWidth = firstCard.offsetWidth + 20; // width + gap
      const newIndex = Math.round(track.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), testimonials.length - 1));
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [testimonials.length]);

  const scrollToIndex = (index) => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    if (scrollLeft <= 15) {
      // Loop to end
      trackRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
    } else {
      const firstCard = trackRef.current.children[0];
      const scrollStep = firstCard ? firstCard.offsetWidth + 20 : 360;
      trackRef.current.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - 15) {
      // Loop to beginning
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const firstCard = trackRef.current.children[0];
      const scrollStep = firstCard ? firstCard.offsetWidth + 20 : 360;
      trackRef.current.scrollBy({ left: scrollStep, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="section-v">
      <div className="container">
        <div className="section-header test-header reveal visible">
          <div className="section-header-left">
            <div className="pill-label">{t.test_badge || 'शेतकऱ्यांचे अभिप्राय'}</div>
            <h2 className="section-heading">
              <span>{t.test_title ? t.test_title.split(',')[0] : 'आमचे ग्राहक'}</span>
              <span className="heading-accent">{t.test_title && t.test_title.includes(',') ? t.test_title.split(',')[1] : 'आमची ताकद'}</span>
            </h2>
          </div>
          <div className="test-header-nav">
            <button
              type="button"
              suppressHydrationWarning
              className="car-btn"
              aria-label="Previous Review"
              onClick={handlePrev}
            >
              <i className="ph-bold ph-caret-left"></i>
            </button>
            <button
              type="button"
              suppressHydrationWarning
              className="car-btn"
              aria-label="Next Review"
              onClick={handleNext}
            >
              <i className="ph-bold ph-caret-right"></i>
            </button>
          </div>
        </div>

        <div className="carousel-wrap visible">
          <div className="test-track" id="test-track" ref={trackRef}>
            {testimonials.map((item, idx) => (
              <div key={item.id} className="test-card">
                <div className="test-stars">
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                </div>
                <p className="test-text">{item.text}</p>
                <div className="test-author">
                  <div className="test-avatar">
                    <i className="ph-bold ph-user" style={{ color: '#fff' }}></i>
                  </div>
                  <div>
                    <div className="test-name">{item.name}</div>
                    <div className="test-loc">{item.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <div className="car-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  suppressHydrationWarning
                  aria-label={`Slide ${idx + 1}`}
                  className={`car-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => scrollToIndex(idx)}
                  style={{
                    width: idx === activeIndex ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: idx === activeIndex ? 'var(--green)' : 'var(--gray-300)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
