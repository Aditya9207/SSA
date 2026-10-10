'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Subsidy() {
  const { t } = useLanguage();

  const steps = [
    {
      num: 1,
      title: t.sub_step1_title || 'कागदपत्रे जमा करा',
      desc: t.sub_step1_desc || 'आधार कार्ड, ७/१२ उतारा, ८-अ, बँक पासबूक व मोबाईल नंबर तयार ठेवा.',
    },
    {
      num: 2,
      title: t.sub_step2_title || 'ऑनलाइन अर्ज भरणा',
      desc: t.sub_step2_desc || 'महाडीबीटी (MahaDBT) पोर्टलमधून सबसिडी अर्जासाठी पूर्ण तांत्रिक सहाय्य.',
    },
    {
      num: 3,
      title: t.sub_step3_title || 'अवजार निवड व कोटेशन',
      desc: t.sub_step3_desc || 'Swan Agro / Popular ग्रुपच्या शासनमान्य अवजारांचे अधिकृत जीएसटी कोटेशन.',
    },
    {
      num: 4,
      title: t.sub_step4_title || 'सबसिडी जमा',
      desc: t.sub_step4_desc || 'शासनाकडून मान्यता मिळताच थेट तुमच्या बँक खात्यात सबसिडी रक्कम जमा.',
    },
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="subsidy" className="section-v">
      <div className="container">
        <div className="section-header subsidy-header reveal visible">
          <div className="section-header-left">
            <div className="pill-label">{t.subsidy_badge || 'सबसिडी व फायनान्स'}</div>
            <h2 className="section-heading">
              <span>{t.subsidy_title ? t.subsidy_title.split('—')[0] : 'शासकीय सबसिडी'}</span>
              <span className="heading-accent">{t.subsidy_title && t.subsidy_title.includes('—') ? '— ' + t.subsidy_title.split('—')[1] : 'संपूर्ण सहाय्य'}</span>
            </h2>
          </div>
        </div>

        <div className="subsidy-layout">
          <div className="steps-col visible">
            {steps.map((s) => (
              <div key={s.num} className="step-row">
                <div className="step-num-wrap">
                  <div className="step-num">{s.num}</div>
                </div>
                <div className="step-body">
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="finance-card visible delay-2">
            <div className="finance-card-badge">
              <i className="ph-bold ph-bank"></i> {t.finance_card_badge || 'सुलभ EMI सुविधा'}
            </div>
            <h3 className="finance-title">{t.finance_title || 'सोपे फायनान्स पर्याय'}</h3>
            <blockquote className="finance-quote">
              &ldquo;{t.finance_quote || 'TVS Finance द्वारे सोप्या हप्त्यांवर (EMI) फायनान्स उपलब्ध. किमान कागदपत्रे, कमी व्याजदर आणि त्वरित मंजुरी.'}&rdquo;
            </blockquote>
            <div className="finance-badges">
              <div className="fin-badge fin-badge-highlight">
                <i className="ph-bold ph-seal-check"></i> {t.fin_partner || 'TVS Finance'}
              </div>
              <div className="fin-badge">
                <i className="ph-bold ph-percent"></i> {t.fin_badge1 || 'कमी व्याजदर'}
              </div>
              <div className="fin-badge">
                <i className="ph-bold ph-calendar-check"></i> {t.fin_badge2 || 'सुलभ मासिक हप्ते'}
              </div>
              <div className="fin-badge">
                <i className="ph-bold ph-lightning"></i> {t.fin_badge3 || 'त्वरित मंजुरी'}
              </div>
            </div>
            <div className="finance-card-action">
              <a href="#contact" className="btn btn-amber btn-md" onClick={handleContactClick}>
                <i className="ph-bold ph-chat-circle-dots"></i> {t.finance_cta || 'फायनान्स चौकशी करा'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
