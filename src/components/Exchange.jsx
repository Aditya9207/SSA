'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Exchange() {
  const { t } = useLanguage();

  return (
    <section id="exchange" className="section-v">
      <div className="container">
        <div className="exchange-layout">
          <div className="exchange-text visible">
            <div className="exchange-offer-tag">
              <i className="ph-bold ph-tag"></i> <span>{t.exchange_badge || 'रोटाव्हेटर एक्सचेंज व विक्री'}</span>
            </div>
            <h2 className="exchange-title">
              {t.exchange_title || 'जुन्या रोटाव्हेटरला मिळवा सर्वोत्तम किंमत!'}
            </h2>
            <p className="exchange-body">
              {t.exchange_desc ||
                'तुमच्याकडे कोणत्याही कंपनीचा जुना रोटाव्हेटर असल्यास आम्ही त्याचे जागेवर अचूक मूल्यांकन करून सर्वोत्तम बाजारभाव देतो. थेट विक्री करा किंवा नवीन रोटाव्हेटरशी एक्सचेंज करा.'}
            </p>

            <ul className="exchange-points">
              <li>{t.exchange_pt1 || 'सर्व ब्रँड्स व मॉडेल्स स्वीकारले जातात'}</li>
              <li>{t.exchange_pt2 || 'जागेवर / शेतावर मोफत तपासणी व मूल्यांकन'}</li>
              <li>{t.exchange_pt3 || 'त्वरित पेमेंट किंवा नवीन अवजारावर विशेष सवलत'}</li>
            </ul>

            <a
              href="https://wa.me/918806595075?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%95%E0%A4%BE%E0%A4%B0!%20%E0%A4%AE%E0%A4%B2%E0%A4%BE%20%E0%A4%9C%E0%A5%81%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A4%BE%20%E0%A4%B0%E0%A5%8B%E0%A4%9F%E0%A4%BE%E0%A4%B5%E0%A5%8D%E0%A4%B9%E0%A5%87%E0%A4%9F%E0%A4%B0%E0%A4%9A%E0%A5%80%20%E0%A4%95%E0%A4%BF%E0%A4%82%E0%A4%AE%E0%A4%A4%20%E0%A4%9C%E0%A4%BE%E0%A4%A3%E0%A5%82%E0%A4%A8%20%E0%A4%98%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%AF%E0%A4%9A%E0%A5%80%20%E0%A4%86%E0%A4%B9%E0%A5%87."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-amber btn-lg"
            >
              <i className="ph-bold ph-whatsapp-logo" style={{ fontSize: '1.3rem' }}></i>
              <span>{t.exchange_cta || 'किंमत जाणून घ्या (व्हॉट्सअप)'}</span>
            </a>
          </div>

          {/* Redesigned Right-Side Interactive Valuation Card */}
          <div className="exchange-valuation-card visible delay-2">
            <div className="ex-card-header">
              <span className="ex-card-badge">
                <i className="ph-bold ph-lightning"></i> <span>{t.ex_card_badge || 'झटपट प्रक्रिया'}</span>
              </span>
              <h3 className="ex-card-title">{t.ex_card_title || 'रोटाव्हेटर व्हॅल्यूएशन कसे होते?'}</h3>
            </div>

            <div className="ex-steps-list">
              <div className="ex-step-item">
                <div className="ex-step-icon">
                  <i className="ph-bold ph-camera"></i>
                </div>
                <div className="ex-step-content">
                  <div className="ex-step-title">{t.ex_step1_title || '१. फोटो पाठवा'}</div>
                  <div className="ex-step-desc">{t.ex_step1_desc || 'रोटाव्हेटरचा फोटो किंवा व्हिडिओ व्हॉट्सअप करा'}</div>
                </div>
              </div>

              <div className="ex-step-item">
                <div className="ex-step-icon">
                  <i className="ph-bold ph-scales"></i>
                </div>
                <div className="ex-step-content">
                  <div className="ex-step-title">{t.ex_step2_title || '२. अचूक किंमत अंदाज'}</div>
                  <div className="ex-step-desc">{t.ex_step2_desc || '१० मिनिटांत पारदर्शक बाजारभाव कोटेशन'}</div>
                </div>
              </div>

              <div className="ex-step-item">
                <div className="ex-step-icon">
                  <i className="ph-bold ph-hand-coins"></i>
                </div>
                <div className="ex-step-content">
                  <div className="ex-step-title">{t.ex_step3_title || '३. रोटाव्हेटर द्या, लगेच पैसे मिळवा'}</div>
                  <div className="ex-step-desc">{t.ex_step3_desc || 'जुना रोटाव्हेटर जमा करा आणि जागेवरच तात्काळ पूर्ण रक्कम मिळवा.'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
