'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'repair',
      icon: 'ph-wrench',
      title: t.svc1_title || 'दुरुस्ती सेवा',
      desc: t.svc1_desc || 'सर्व कंपन्यांच्या कृषी अवजारांची तज्ज्ञ दुरुस्ती. Swan Agro, Popular Group व इतर सर्व ब्रँड्स.',
      btn: t.svc1_btn || 'मेकॅनिक बोलवा',
      points: t.svc1_points || ['सर्व कंपन्यांचे ब्रँड्स', 'अनुभवी मेकॅनिक टीम', 'जागेवर सर्व्हिस उपलब्ध'],
      link: 'https://wa.me/918806595075?text=नमस्कार%2C%20मला%20कृषी%20अवजारांच्या%20दुरुस्तीसाठी%20मेकॅनिकची%20गरज%20आहे.',
      img: '/images/service_repair.webp',
      isExternal: true,
    },
    {
      id: 'parts',
      icon: 'ph-gear-six',
      title: t.svc2_title || 'स्पेअर पार्ट्स',
      desc: t.svc2_desc || 'सर्व प्रमुख ब्रँड्सचे अस्सल स्पेअर पार्ट्स उपलब्ध. त्वरित डिलिव्हरी.',
      btn: t.svc2_btn || 'पार्ट्स मागवा',
      points: t.svc2_points || ['१००% अस्सल ओरिजिनल पार्ट्स', 'त्वरित डिलिव्हरी', 'सर्व मॉडेल्सचे सुटे भाग'],
      link: 'https://wa.me/918806595075?text=नमस्कार%2C%20मला%20कृषी%20अवजारांच्या%20स्पेअर%20पार्ट्सबद्दल%20चौकशी%20करायची%20आहे.',
      img: '/images/service_parts.webp',
      isExternal: true,
    },
    {
      id: 'subsidy',
      icon: 'ph-bank',
      title: t.svc3_title || 'सबसिडी मार्गदर्शन',
      desc: t.svc3_desc || 'शासन मान्यताप्राप्त सबसिडी योजनांची संपूर्ण माहिती व अर्ज प्रक्रियेत मदत.',
      btn: t.svc3_btn || 'सबसिडी तपासा',
      points: t.svc3_points || ['MahaDBT योजना मार्गदर्शन', 'कागदपत्रे व ऑनलाइन अर्ज', 'अनुदान मिळवून देण्यास मदत'],
      link: '#subsidy',
      img: '/images/service_subsidy.webp',
      isExternal: false,
    },
    {
      id: 'finance',
      icon: 'ph-credit-card',
      title: t.svc4_title || 'फायनान्स / EMI',
      desc: t.svc4_desc || 'सहज हप्त्यांमध्ये उपकरण खरेदी करा. बँक लोन व फायनान्स सुविधा उपलब्ध.',
      btn: t.svc4_btn || 'EMI तपासा',
      points: t.svc4_points || ['सुलभ मासिक हप्ते', 'कमीत कमी कागदपत्रे', 'बँक लोन सुविधा उपलब्ध'],
      link: '#contact',
      img: '/images/service_finance.webp',
      isExternal: false,
    },
    {
      id: 'exchange',
      icon: 'ph-arrows-clockwise',
      title: t.svc5_title || 'जुने रोटर एक्सचेंज',
      desc: t.svc5_desc || 'जुने रोटर द्या व नवीन मिळवा! आकर्षक एक्सचेंज किंमत मिळवा.',
      btn: t.svc5_btn || 'किंमत जाणून घ्या',
      points: t.svc5_points || ['जुन्या रोटरला सर्वोत्तम किंमत', 'सर्व ब्रँड्स स्वीकारले जातात', 'जागेवर मूल्यांकन व बदल'],
      link: '#contact',
      img: '/images/service_exchange.webp',
      isExternal: false,
    },
  ];

  const handleAction = (e, svc) => {
    if (!svc.isExternal && svc.link.startsWith('#')) {
      e.preventDefault();
      const id = svc.link.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-v">
      <div className="container">
        {/* Section header */}
        <div className="section-header services-header reveal visible">
          <div className="section-header-left">
            <div className="pill-label">{t.services_badge || 'आमच्या सेवा'}</div>
            <h2 className="section-heading">
              {(() => {
                const title = t.services_title || 'एकाच छताखाली संपूर्ण सेवा';
                const words = title.split(' ');
                const splitIndex = words.length > 5 ? 4 : 2;
                const firstPart = words.slice(0, splitIndex).join(' ');
                const secondPart = words.slice(splitIndex).join(' ');
                return (
                  <>
                    <span>{firstPart} </span>
                    <span className="heading-accent">{secondPart}</span>
                  </>
                );
              })()}
            </h2>
          </div>
        </div>

        {/* Elevated 3-column feature cards grid */}
        <div className="services-elevated-grid">
          {services.map((svc, i) => (
            <div
              key={svc.id || i}
              className={`svc-elevated-card reveal visible ${i > 0 ? `delay-${Math.min(i, 5)}` : ''}`}
            >
              {/* Photo with 16:10 crop & corner icon badge */}
              <div className="svc-card-media">
                <img
                  src={svc.img}
                  alt={svc.title}
                  width="800"
                  height="500"
                  loading="lazy"
                />
                <div className="svc-media-badge" title={svc.title}>
                  <i className={`ph-bold ${svc.icon}`}></i>
                </div>
              </div>

              {/* Card Body */}
              <div className="svc-card-body">
                <h3 className="svc-card-title">{svc.title}</h3>

                {/* 2–3 micro-bullet points */}
                <ul className="svc-card-points">
                  {svc.points.map((point, idx) => (
                    <li key={idx} className="svc-card-point">
                      <span className="svc-point-icon">
                        <i className="ph-bold ph-check"></i>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action Button */}
                <a
                  href={svc.link}
                  target={svc.isExternal ? '_blank' : undefined}
                  rel={svc.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleAction(e, svc)}
                  className="btn btn-green svc-action-btn"
                >
                  <span>{svc.btn}</span>
                  <i className="ph-bold ph-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
