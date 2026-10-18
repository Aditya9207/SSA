'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyUs() {
  const { t } = useLanguage();

  const years = {
    val: t.why_years_val || '१५+ वर्षे',
    label: t.why_years_lbl || 'अविरत विश्वास व अनुभव',
    desc: t.why_years_desc || 'सन २०११ पासून सांगली जिल्ह्यातील शेतकऱ्यांची अविरत सेवा.',
  };
  const branches = {
    val: t.why_branches_val || '३ शाखा',
    label: t.why_branches_lbl || 'स्थानिक उपस्थिती',
    desc: t.why_branches_desc || 'सांगली, कुमठा फाटा आणि जत — थेट तुमच्या जवळ सेवा.',
  };
  const farmers = {
    val: t.why_farmers_val || '५,०००+',
    label: t.why_farmers_lbl || 'समाधानी शेतकरी परिवार',
    desc: t.why_farmers_desc || 'हजारो समाधानी शेतकऱ्यांचा अतूट विश्वास व सातत्य.',
  };
  const dealer = {
    val: t.why_dealer_val || 'अधिकृत डीलर',
    label: t.why_dealer_lbl || 'Swan Agro & Popular Group',
    desc: t.why_dealer_desc || '१००% प्रमाणित ब्रँडेड अवजारे, अस्सल सुटे भाग व अधिकृत वॉरंटी.',
    tag: t.why_distributor_tag || 'अधिकृत वितरक',
  };

  return (
    <section id="why-us">
      <div className="container">
        {/* Section header */}
        <div className="section-header whyus-header reveal visible">
          <div className="section-header-left">
            <div className="pill-label">{t.whyus_badge || 'आम्हीच का?'}</div>
            <h2 className="section-heading">
              {t.whyus_title
                ? <>
                    <span>{t.whyus_title.split('—')[0]}</span>
                    {t.whyus_title.includes('—') && (
                      <span className="heading-accent">— {t.whyus_title.split('—')[1]}</span>
                    )}
                  </>
                : <>
                    <span>शेतकऱ्यांचा विश्वास</span>
                    <span className="heading-accent"> — आमची ताकद</span>
                  </>
              }
            </h2>
          </div>
        </div>

        {/* Bento Grid layout as shown in mockup */}
        <div className="whyus-bento-grid">
          {/* Left Column: Tall Featured Dealer Card (Spans 2 rows) */}
          <div className="whyus-bento-dealer reveal visible">
            <div className="whyus-dealer-top-block">
              <span className="whyus-dealer-tag">{dealer.tag}</span>
              <h3 className="whyus-dealer-title">{dealer.val}</h3>
              <p className="whyus-dealer-desc">{dealer.desc}</p>
            </div>

            <div className="whyus-dealer-logos-stack">
              <div className="whyus-bento-logo-tile">
                <img
                  src="/images/logo_swan_agro.png"
                  alt="Swan Agro"
                  className="whyus-bento-logo"
                  width="130"
                  height="40"
                  loading="lazy"
                />
              </div>
              <div className="whyus-bento-logo-tile">
                <img
                  src="/images/logo_popular_bhoomi.png"
                  alt="Popular Bhoomi Group"
                  className="whyus-bento-logo"
                  width="140"
                  height="40"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column Top 1: Branches */}
          <div className="whyus-bento-card whyus-bento-branches reveal visible delay-1">
            <div className="whyus-bento-val">{branches.val}</div>
            <div className="whyus-bento-label">{branches.label}</div>
            <p className="whyus-bento-desc">{branches.desc}</p>
          </div>

          {/* Right Column Top 2: Farmers */}
          <div className="whyus-bento-card whyus-bento-farmers reveal visible delay-2">
            <div className="whyus-bento-val">{farmers.val}</div>
            <div className="whyus-bento-label">{farmers.label}</div>
            <p className="whyus-bento-desc">{farmers.desc}</p>
          </div>

          {/* Right Column Bottom Wide: Years (Spans 2 columns) */}
          <div className="whyus-bento-card whyus-bento-years reveal visible delay-3">
            <div className="whyus-years-flex">
              <div className="whyus-years-val-wrap">
                <div className="whyus-bento-val whyus-years-val">{years.val}</div>
              </div>
              <div className="whyus-years-text">
                <div className="whyus-bento-label">{years.label}</div>
                <p className="whyus-bento-desc">{years.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
