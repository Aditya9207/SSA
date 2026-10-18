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
      mapUrl: 'https://maps.app.goo.gl/kpep5QQTy6AgKNCT8?g_st=ac',
      mapEmbed: 'https://maps.google.com/maps?q=Siddheshwar+Mangal+Karyalaya+Kumtha+Fata+Sangli+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
    {
      num: 2,
      isMain: false,
      name: t.branch2_name || 'शाखा २ — सांगली',
      addr: t.branch2_addr || 'विष्णूअण्णा फळ मार्केट शेजारी, सांगली',
      phone: '+918806595075',
      mapUrl: 'https://maps.app.goo.gl/sjb5yRB5T2zyrK5V9',
      mapEmbed: 'https://maps.google.com/maps?q=Vishnuanna+Fruit+Market+Sangli+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
    {
      num: 3,
      isMain: false,
      name: t.branch3_name || 'शाखा ३ — जत',
      addr: t.branch3_addr || 'वळसंग रोड, तांगडी मळा, जत',
      phone: '+918806595075',
      mapUrl: 'https://maps.app.goo.gl/r6N9UVf7Xzs954ni6?g_st=ac',
      mapEmbed: 'https://maps.google.com/maps?q=Valsang+Road+Tangadi+Mala+Jat+Sangli+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed',
    },
  ];

  const getWhatsAppUrl = (branch) => {
    const cleanPhone = branch.phone.replace(/[^0-9]/g, '');
    const message = t.branch_wa_msg || 'नमस्कार! मला श्री स्वामी समर्थ एजन्सीबद्दल अधिक माहिती हवी आहे.';
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

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
              </div>
              <div className="branch-info">
                <h3 className="branch-name">{b.name}</h3>
                <p className="branch-addr">{b.addr}</p>
                <div className="branch-actions">
                  <a href={`tel:${b.phone}`} className="branch-btn btn-call" suppressHydrationWarning>
                    <i className="ph-bold ph-phone"></i> <span>{t.branch_call || 'Call'}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(b)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-btn btn-wa"
                    suppressHydrationWarning
                  >
                    <i className="ph-bold ph-whatsapp-logo"></i> <span>{t.branch_whatsapp || 'WhatsApp'}</span>
                  </a>
                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="branch-btn btn-map"
                    suppressHydrationWarning
                  >
                    <i className="ph-bold ph-navigation-arrow"></i> <span>{t.branch_map || 'Map'}</span>
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
