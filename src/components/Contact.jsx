'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToSheet } from '../utils/sheetService';

const langNameMap = {
  mr: 'मराठी',
  hi: 'हिंदी',
  en: 'English',
};

export default function Contact({ onShowToast }) {
  const { t, lang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    branch: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, product, branch, message } = formData;

    if (!name.trim() || !phone.trim()) {
      if (onShowToast) onShowToast(t.err_fill_form || '⚠️ कृपया नाव व मोबाईल नंबर भरा', 'warning');
      return;
    }

    if (phone.trim().length !== 10 || isNaN(phone.trim())) {
      if (onShowToast) onShowToast(t.err_valid_phone || '⚠️ कृपया १० अंकी योग्य मोबाईल नंबर प्रविष्ट करा', 'warning');
      return;
    }

    setIsSubmitting(true);

    // 1. Send data to Google Sheet
    try {
      await sendLeadToSheet({
        name,
        phone,
        product,
        branch,
        message,
        source: 'संपर्क फॉर्म',
        language: langNameMap[lang] || 'मराठी',
      });
    } catch (err) {
      console.error('Failed to log lead to sheet:', err);
    }

    // 2. Open WhatsApp with prefilled message
    const waMsg = encodeURIComponent(
      `🙏 ${t.hero_title_1 || 'श्री स्वामी समर्थ'} ${t.hero_title_2 || 'एजन्सी'}!\n\n` +
      `👤 ${t.form_name ? t.form_name.replace('*','').trim() : 'नाव'}: ${name}\n` +
      `📱 ${t.form_phone ? t.form_phone.replace('*','').trim() : 'मोबाईल'}: ${phone}\n` +
      `🚜 ${t.form_product ? t.form_product.replace('?','').trim() : 'उत्पादन/सेवा'}: ${product || '—'}\n` +
      `📍 ${t.form_branch || 'शाखा'}: ${branch || '—'}\n` +
      `💬 ${t.form_message || 'संदेश'}: ${message || '—'}\n\n` +
      `_(${t.nav_home || 'Website'})_`
    );

    window.open(`https://wa.me/918806595075?text=${waMsg}`, '_blank');
    if (onShowToast) onShowToast(t.msg_sent_success || '✅ संदेश यशस्वीरित्या पाठवला!', 'success');
    setFormData({ name: '', phone: '', product: '', branch: '', message: '' });
    setIsSubmitting(false);
  };

  const handleDirectWhatsApp = async () => {
    const { name, phone, product, branch, message } = formData;

    // If user filled in their name or phone, also record it in the Google Sheet!
    if (name.trim() || phone.trim()) {
      try {
        await sendLeadToSheet({
          name: name.trim() || '—',
          phone: phone.trim() || '—',
          product: product || '—',
          branch: branch || '—',
          message: message || 'थेट व्हॉट्सअप चौकशी',
          source: 'थेट व्हॉट्सअप बटण',
          language: langNameMap[lang] || 'मराठी',
        });
      } catch (err) {
        console.error('Failed to log lead to sheet:', err);
      }

      const waMsg = encodeURIComponent(
        `🙏 ${t.hero_title_1 || 'श्री स्वामी समर्थ'} ${t.hero_title_2 || 'एजन्सी'}!\n\n` +
        (name.trim() ? `👤 ${t.form_name ? t.form_name.replace('*','').trim() : 'नाव'}: ${name}\n` : '') +
        (phone.trim() ? `📱 ${t.form_phone ? t.form_phone.replace('*','').trim() : 'मोबाईल'}: ${phone}\n` : '') +
        (product ? `🚜 ${t.form_product ? t.form_product.replace('?','').trim() : 'उत्पादन/सेवा'}: ${product}\n` : '') +
        (branch ? `📍 ${t.form_branch || 'शाखा'}: ${branch}\n` : '') +
        (message ? `💬 ${t.form_message || 'संदेश'}: ${message}\n` : '') +
        `_(${t.nav_home || 'Website'})_`
      );
      window.open(`https://wa.me/918806595075?text=${waMsg}`, '_blank');
    } else {
      window.open('https://wa.me/918806595075', '_blank');
    }
  };

  return (
    <section id="contact">
      <div className="contact-glow"></div>
      <div className="container">
        <div className="section-header contact-header reveal visible">
          <div className="section-header-left">
            <div className="pill-label amber white">{t.contact_badge || 'संपर्क करा'}</div>
            <h2 className="section-heading white">
              <span>{t.contact_title ? t.contact_title.split(' ').slice(0, 2).join(' ') : 'आजच आमच्याशी'}</span>
              <span className="heading-accent">{t.contact_title ? t.contact_title.split(' ').slice(2).join(' ') : 'संपर्क साधा'}</span>
            </h2>
          </div>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form-card visible">
            <h3 className="ci-head">{t.contact_form_title || 'चौकशी अर्ज'}</h3>
            <form onSubmit={handleSubmit} className="contact-form-inner">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">{t.form_name || 'तुमचे नाव *'}</label>
                  <input
                    type="text"
                    name="name"
                    suppressHydrationWarning
                    className="form-input"
                    placeholder={t.form_name_ph || 'उदा. सुरेश पाटील'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.form_phone || 'मोबाईल नंबर *'}</label>
                  <input
                    type="tel"
                    name="phone"
                    suppressHydrationWarning
                    className="form-input"
                    placeholder={t.form_phone_ph || '१० अंकी मोबाईल नंबर'}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.form_product || 'हवे असलेले उत्पादन / सेवा?'}</label>
                  <select
                    name="product"
                    suppressHydrationWarning
                    className="form-select"
                    value={formData.product}
                    onChange={handleChange}
                  >
                    <option value="">{t.select_product || '— हवे असलेले उत्पादन / सेवा निवडा —'}</option>
                    <option value={t.opt_swan_rota || "Swan Agro रोटाव्हेटर"}>{t.opt_swan_rota || "Swan Agro रोटाव्हेटर"}</option>
                    <option value={t.opt_swan_plough || "Swan Agro नांगर / मल्चर"}>{t.opt_swan_plough || "Swan Agro नांगर / मल्चर"}</option>
                    <option value={t.opt_popular || "Popular Group नांगर"}>{t.opt_popular || "Popular Group नांगर"}</option>
                    <option value={t.opt_chaff || "चाफ कटर (स्वनिर्मित)"}>{t.opt_chaff || "चाफ कटर (स्वनिर्मित)"}</option>
                    <option value={t.opt_fan || "फन / ब्लोअर"}>{t.opt_fan || "फन / ब्लोअर"}</option>
                    <option value={t.opt_exchange || "रोटर एक्सचेंज"}>{t.opt_exchange || "रोटर एक्सचेंज"}</option>
                    <option value={t.opt_repair || "दुरुस्ती व स्पेअर पार्ट्स"}>{t.opt_repair || "दुरुस्ती व स्पेअर पार्ट्स"}</option>
                    <option value={t.opt_subsidy || "सबसिडी व फायनान्स"}>{t.opt_subsidy || "सबसिडी व फायनान्स"}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">{t.form_branch || 'जवळची शाखा'}</label>
                  <select
                    name="branch"
                    suppressHydrationWarning
                    className="form-select"
                    value={formData.branch}
                    onChange={handleChange}
                  >
                    <option value="">{t.select_branch || '— शाखा निवडा —'}</option>
                    <option value={t.opt_b_kumtha || "कुमठा फाटा"}>{t.opt_b_kumtha || "कुमठा फाटा"} ({t.main_branch_label || 'मुख्य शाखा'})</option>
                    <option value={t.opt_b_sangli || "सांगली"}>{t.opt_b_sangli || "सांगली"}</option>
                    <option value={t.opt_b_jat || "जत"}>{t.opt_b_jat || "जत"}</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label className="form-label">{t.form_message || 'तुमचा संदेश'}</label>
                  <textarea
                    name="message"
                    suppressHydrationWarning
                    className="form-textarea"
                    placeholder={t.form_msg_ph || 'तुमची आवश्यकता प्रविष्ट करा...'}
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                  ></textarea>
                </div>
              </div>
              <div className="form-actions">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="btn-submit"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ph-bold ph-spinner spin-anim"></i> {lang === 'en' ? 'Submitting...' : lang === 'hi' ? 'दर्ज हो रहा है...' : 'नोंदवत आहे...'}
                    </>
                  ) : (
                    <>
                      <i className="ph-bold ph-paper-plane-tilt"></i> {t.form_submit || 'संदेश पाठवा'}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  suppressHydrationWarning
                  className="btn-wa-contact"
                  onClick={handleDirectWhatsApp}
                >
                  <i className="ph-bold ph-whatsapp-logo" style={{ fontSize: '1.25rem' }}></i> {t.form_whatsapp || 'व्हॉट्सअप'}
                </button>
              </div>
              <div className="form-privacy-note">
                <i className="ph-bold ph-shield-check"></i> {t.form_privacy || 'तुमची माहिती पूर्णपणे सुरक्षित राहील. तात्काळ प्रतिसाद मिळेल.'}
              </div>
            </form>
          </div>

          {/* Enhanced Contact Info Card */}
          <div className="contact-info-card visible delay-2">
            <h3 className="ci-head">{t.contact_head || 'संपर्क तपशील'}</h3>

            {/* Proprietor Box */}
            <div className="ci-prop-box">
              <div className="ci-prop-avatar">
                <i className="ph-bold ph-user-check"></i>
              </div>
              <div>
                <div className="ci-label">{t.ci_prop_label || 'प्रोप्राईटर'}</div>
                <div className="ci-prop-name">{t.contact_prop || 'नेताजी जमदाडे'}</div>
              </div>
            </div>

            {/* Main Phone Hotline */}
            <div className="ci-hotline-box">
              <div className="ci-label">{t.ci_hotline_label || 'थेट हेल्पलाइन (कॉल करा)'}</div>
              <a href="tel:+918806595075" className="ci-hotline-num">
                <i className="ph-bold ph-phone-call"></i> {t.ci_hotline_display || '+९१ ८८०६५९५०७५'}
              </a>
            </div>

            {/* Working Hours & Email */}
            <div className="ci-details-grid">
              <div className="ci-row">
                <div className="ci-ico">
                  <i className="ph-bold ph-clock"></i>
                </div>
                <div>
                  <div className="ci-label">{t.contact_hours || 'कामाची वेळ'}</div>
                  <div className="ci-val">{t.contact_hours_val || 'सोम–शनि: स. ९:०० ते सं. ७:००'}</div>
                </div>
              </div>

              <div className="ci-row">
                <div className="ci-ico">
                  <i className="ph-bold ph-envelope"></i>
                </div>
                <div>
                  <div className="ci-label">{t.contact_email_label || 'ई-मेल'}</div>
                  <div className="ci-val">
                    <a href={`mailto:${t.contact_email_val || 'shreessamarth@gmail.com'}`}>
                      {t.contact_email_val || 'shreessamarth@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Contacts */}
            <div className="branch-contacts">
              <div className="bco-head">
                <i className="ph-bold ph-map-pin"></i> {t.ci_branches_title || 'शाखा संपर्क क्रमांक (थेट कॉल)'}
              </div>
              <div className="bco-row">
                <span className="bco-name">{t.branch1_short || 'कुमठा फाटा (मुख्य शाखा)'}</span>
                <a href="tel:+918806595075" className="bco-btn">
                  <i className="ph-bold ph-phone"></i> 8806595075
                </a>
              </div>
              <div className="bco-row">
                <span className="bco-name">{t.branch2_short || 'सांगली'}</span>
                <a href="tel:+918806595075" className="bco-btn">
                  <i className="ph-bold ph-phone"></i> 8806595075
                </a>
              </div>
              <div className="bco-row">
                <span className="bco-name">{t.branch3_short || 'जत'}</span>
                <a href="tel:+918806595075" className="bco-btn">
                  <i className="ph-bold ph-phone"></i> 8806595075
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
