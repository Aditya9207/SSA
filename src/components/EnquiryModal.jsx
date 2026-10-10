'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { sendLeadToSheet } from '../utils/sheetService';

const langNameMap = {
  mr: 'मराठी',
  hi: 'हिंदी',
  en: 'English',
};

export default function EnquiryModal({ isOpen, productName, onClose, onShowToast }) {
  const { t, lang } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      if (onShowToast) onShowToast(t.err_fill_form || '⚠️ कृपया नाव व मोबाईल नंबर भरा', 'warning');
      return;
    }

    if (phone.trim().length !== 10 || isNaN(phone.trim())) {
      if (onShowToast) onShowToast(t.err_valid_phone || '⚠️ कृपया १० अंकी योग्य मोबाईल नंबर प्रविष्ट करा', 'warning');
      return;
    }

    setIsSubmitting(true);

    // Record product enquiry to Google Sheet
    try {
      await sendLeadToSheet({
        name,
        phone,
        product: productName || '—',
        branch: '—',
        message: 'उत्पादन चौकशी (Product Modal Inquiry)',
        source: 'उत्पादन चौकशी (Product Modal)',
        language: langNameMap[lang] || 'मराठी',
      });
    } catch (err) {
      console.error('Failed to log product lead to sheet:', err);
    }

    const waMsg = encodeURIComponent(
      `🙏 ${productName} - ${t.modal_enquiry_head || 'चौकशी'}\n\n👤 ${t.form_name ? t.form_name.replace('*','').trim() : 'नाव'}: ${name}\n📱 ${t.form_phone ? t.form_phone.replace('*','').trim() : 'मोबाईल'}: ${phone}\n_(${t.nav_home || 'Website'})_`
    );

    window.open(`https://wa.me/918806595075?text=${waMsg}`, '_blank');
    if (onShowToast) onShowToast(t.msg_opening_wa || '✅ व्हॉट्सअप उघडत आहे...', 'success');
    setName('');
    setPhone('');
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      className="modal-overlay open"
      id="enquiry-modal"
      onClick={(e) => {
        if (e.target.id === 'enquiry-modal') onClose();
      }}
    >
      <div className="modal-box">
        <button
          type="button"
          className="modal-close"
          id="modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="modal-ico">
          <i className="ph-bold ph-tractor" style={{ fontSize: '2.8rem', color: 'var(--amber)' }}></i>
        </div>
        <div className="modal-head">{t.modal_enquiry_head || 'उत्पादन चौकशी'}</div>
        <div className="modal-sub" id="modal-product-name">
          {productName || 'उत्पादनाचे नाव'}
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder={t.form_name_ph || 'तुमचे नाव'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            className="form-input"
            placeholder={t.form_phone_ph || 'मोबाईल नंबर'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-green btn-lg"
            style={{ width: '100%' }}
          >
            {isSubmitting ? (
              <>
                <i className="ph-bold ph-spinner spin-anim"></i> {lang === 'en' ? 'Submitting...' : lang === 'hi' ? 'दर्ज हो रहा है...' : 'नोंदवत आहे...'}
              </>
            ) : (
              <>
                <i className="ph-bold ph-whatsapp-logo"></i> {t.modal_wa_btn || 'व्हॉट्सअपवर संपर्क साधा'}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
