'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Branches() {
  const { t } = useLanguage();

  const branches = [
    {
      num: 1,
      isMain: true,
      name: t.branch1_name || 'मुख्य शाखा — कुमठा फाटा',
      addr: t.branch1_addr || 'सिद्धेश्वर मंगल कार्यालयाशेजारी, कुमठा फाटा',
      phone: '+918806595075',
      mapQuery: 'Kumtha+Fata',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.0!2d74.6!3d16.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzAwLjAiTiA7NMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    },
    {
      num: 2,
      isMain: false,
      name: t.branch2_name || 'शाखा २ — सांगली',
      addr: t.branch2_addr || 'विष्णूअण्णा फळ मार्केट शेजारी, सांगली',
      phone: '+918806595075',
      mapQuery: 'Sangli+Fruit+Market',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.156891391587!2d74.5768!3d16.8524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzA4LjYiTiA7NMKwMzQnMzYuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    },
    {
      num: 3,
      isMain: false,
      name: t.branch3_name || 'शाखा ३ — जत',
      addr: t.branch3_addr || 'वळसंग रोड, तांगडी मळा, जत',
      phone: '+918806595075',
      mapQuery: 'Jat+Valsang+Road',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0!2d75.1!3d16.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzAwLjAiTiA7NMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
    },
  ];

  return (
    <section id="branches" className="section-v">
      <div className="container">
        <div className="section-header branches-header reveal visible">
          <div className="section-header-left">
            <div className="pill-label">{t.branches_badge || 'आमच्या शाखा'}</div>
            <h2 className="section-heading">
              <span>{t.branches_title ? t.branches_title.split('—')[0] : 'आमच्याजवळ या'}</span>
              <span className="heading-accent">{t.branches_title && t.branches_title.includes('—') ? '— ' + t.branches_title.split('—')[1] : '३ सोयीस्कर शाखा'}</span>
            </h2>
          </div>
        </div>

        <div className="branches-grid">
          {branches.map((b, idx) => (
            <div
              key={b.num}
              className={`branch-card visible ${idx > 0 ? `delay-${idx}` : ''}`}
            >
              <div className="branch-map">
                <iframe
                  src={b.mapEmbed}
                  allowFullScreen=""
                  loading="lazy"
                  title={b.name}
                ></iframe>
                <div className={`branch-badge ${b.isMain ? 'branch-badge-main' : ''}`}>
                  {b.isMain ? (t.main_branch_badge || 'मुख्य शाखा') : b.num}
                </div>
              </div>
              <div className="branch-info">
                <h3 className="branch-name">{b.name}</h3>
                <p className="branch-addr">{b.addr}</p>
                <div className="branch-actions">
                  <a href={`tel:${b.phone}`} className="branch-btn btn-call">
                    <i className="ph-bold ph-phone"></i> {t.branch_call || 'Call'}
                  </a>
                  <a
                    href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-btn btn-wa"
                  >
                    <i className="ph-bold ph-whatsapp-logo"></i> {t.branch_whatsapp || 'WhatsApp'}
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${b.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-btn btn-map"
                  >
                    <i className="ph-bold ph-navigation-arrow"></i> {t.branch_map || 'Map'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
