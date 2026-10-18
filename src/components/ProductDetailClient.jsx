'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import { useLanguage } from '../context/LanguageContext';
import {
  translateCategory,
  translateWorkingWidth,
  translateHpRange,
  translateBlades,
  translateSpecLabel,
  translateSpecValue,
  translateCrop,
} from '../data/productTranslations';

function getEquipmentHighlights(product, lang) {
  const slug = (product?.slug || '').toLowerCase();
  const category = (product?.category || '').toLowerCase();
  const nameEn = (product?.name?.en || '').toLowerCase();
  const isPlough = slug.includes('plough') || category.includes('plough') || nameEn.includes('plough');
  const isMulcher = slug.includes('mulcher') || slug.includes('shredder') || category.includes('mulcher') || nameEn.includes('mulcher');

  if (isPlough) {
    return [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        ),
        title: lang === 'en' ? 'Low Draft & Diesel Economy' : lang === 'hi' ? 'कम खिंचाव व डीजल बचत' : 'इंधन बचत व कमी ओढ',
        desc: lang === 'en'
          ? 'Engineered moldboard geometry minimizes drawbar resistance, saving up to 15-20% tractor diesel per acre.'
          : lang === 'hi'
          ? 'विशेष मोल्डबोर्ड बनावट से ट्रैक्टर पर कम लोड पड़ता है, जिससे प्रति एकड़ 15-20% डीजल की बचत होती है।'
          : 'अचूक मोल्डबोर्ड डिझाईनमुळे ट्रॅक्टरवर अतिरिक्त ओढ येत नाही, ज्यामुळे प्रति एकर १५-२०% डिझेलची थेट बचत होते.',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        ),
        title: lang === 'en' ? 'Hardened Carbon Steel Shares' : lang === 'hi' ? 'उच्च कार्बन स्टील बॉटम' : 'हाय-कार्बन स्टील शेअर्स',
        desc: lang === 'en'
          ? 'Heat-treated wear-resistant bar points penetrate hard-pan and stony black soils without cracking.'
          : lang === 'hi'
          ? 'विशेष हीट-ट्रीटेड स्टील बॉटम काली व पथरीली जमीन में भी बिना मुड़े गहरी और साफ जुताई करते हैं।'
          : 'उष्णता-प्रक्रिया केलेले मजबूत बॉटम शेअर्स काळ्या कसदार व खडकाळ जमिनीतही न झिजता खोल नांगरट करतात.',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <path d="m4.93 4.93 4.24 4.24"/>
            <path d="m14.83 9.17 4.24-4.24"/>
          </svg>
        ),
        title: lang === 'en' ? 'Shear-Bolt Overload Protection' : lang === 'hi' ? 'सुरक्षा शीयर-बोल्ट सिस्टम' : 'शेअर-बोल्ट सुरक्षा व सहज पल्टी',
        desc: lang === 'en'
          ? 'Protects tractor hydraulics from hidden underground roots or boulders with rapid turnover mechanism.'
          : lang === 'hi'
          ? 'पत्थर या जड़ों में फंसने पर ट्रैक्टर को सुरक्षित रखने वाला शीयर-बोल्ट और आसान रिवर्सिबल लीवर।'
          : 'जमिनीतील दगड किंवा खोडांना अडकल्यास ट्रॅक्टरचे नुकसान टाळणारा सेफ ब्रेक बोल्ट व सहज उलट-सुलट लीव्हर.',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        ),
        title: lang === 'en' ? 'Doorstep Service & Spares' : lang === 'hi' ? 'खेत पर सर्विस व असली स्पेयर' : 'जागेवर सर्व्हिस व अस्सल स्पेअर्स',
        desc: lang === 'en'
          ? 'Authorized Sangli dealership support with genuine wear parts and swift doorstep field assistance.'
          : lang === 'hi'
          ? 'श्री स्वामी समर्थ एजेंसी द्वारा आपके खेत पर त्वरित मैकेनिक सेवा और 100% असली स्पेयर पार्ट्स उपलब्ध।'
          : 'श्री स्वामी समर्थ एजन्सीकडून शेतावर थेट मेकॅनिक भेट आणि १००% अस्सल ओरिजिनल स्पेअर पार्ट्सची खात्री.',
      },
    ];
  }

  if (isMulcher) {
    return [
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        ),
        title: lang === 'en' ? '2050 RPM High-Speed Rotor' : lang === 'hi' ? '2050 आरपीएम हाई स्पीड' : '२०५० RPM हाय स्पीड रोटर',
        desc: lang === 'en'
          ? 'Ultra high-speed electronic-balanced rotor with forged steel hammers completely pulverizes tough stalks.'
          : lang === 'hi'
          ? 'उच्च गति वाले इलेक्ट्रॉनिक-बैलेंस्ड रोटर और भारी हैमर्स से गन्ने की सूखी पत्तियां एक ही बार में बारीक होती हैं।'
          : 'अतिवेगवान इलेक्ट्रॉनिक बॅलन्स्ड रोटर व हेवी हॅमर्समुळे उसाचे पाचट, केळी व कापूस अवशेष एका फेरीत बारीक होतात.',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12a10 10 0 0 1 10-10z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        ),
        title: lang === 'en' ? 'In-Situ Organic Mulching' : lang === 'hi' ? 'जैविक खाद निर्माण (बिना जलाए)' : 'पाचट न जाळता सेंद्रिय खत',
        desc: lang === 'en'
          ? 'Shreds residue directly into the soil to boost organic carbon and retain critical summer ground moisture.'
          : lang === 'hi'
          ? 'फसल अवशेष को जलाए बिना खेत में मिलाकर मिट्टी का जैविक कार्बन और नमी बनाए रखता है।'
          : 'पाचट न जाळता शेतातच बारीक कुट्टी करून जमिनीत मिसळते, ज्यामुळे जमिनीचा सेंद्रिय कर्ब व ओलावा वाढतो.',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
        ),
        title: lang === 'en' ? 'Auto-Tensioning Belt Drive' : lang === 'hi' ? 'ऑटो टेंशनर बेल्ट ड्राइव' : 'ऑटो टेन्शनर बेल्ट ड्राईव्ह',
        desc: lang === 'en'
          ? 'Heavy-duty banded V-belts with auto spring tensioner absorb sudden shocks and protect tractor PTO.'
          : lang === 'hi'
          ? 'शॉक-एब्जॉर्बिंग बेल्ट ड्राइव और ऑटो टेंशनर अचानक झटके से ट्रैक्टर पीटीओ की सुरक्षा करते हैं।'
          : 'अचानक येणाऱ्या भारापासून ट्रॅक्टर पीटीओचे पूर्ण रक्षण करणारी ऑटो स्प्रिंग टेन्शनर बेल्ट ड्राईव्ह प्रणाली.',
      },
      {
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        ),
        title: lang === 'en' ? 'Doorstep Service & Spares' : lang === 'hi' ? 'खेत पर सर्विस व असली स्पेयर' : 'जागेवर सर्व्हिस व अस्सल स्पेअर्स',
        desc: lang === 'en'
          ? 'Authorized Sangli dealership support with genuine wear parts and swift doorstep field assistance.'
          : lang === 'hi'
          ? 'श्री स्वामी समर्थ एजेंसी द्वारा आपके खेत पर त्वरित मैकेनिक सेवा और 100% असली स्पेयर पार्ट्स उपलब्ध।'
          : 'श्री स्वामी समर्थ एजन्सीकडून शेतावर थेट मेकॅनिक भेट आणि १००% अस्सल ओरिजिनल स्पेअर पार्ट्सची खात्री.',
      },
    ];
  }

  // Default: Rotavator / General Tiller
  return [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: lang === 'en' ? 'Fuel & Diesel Economy' : lang === 'hi' ? 'ईंधन व डीजल बचत (15-20%)' : 'इंधन व डिझेल बचत (१५-२०%)',
      desc: lang === 'en'
        ? 'Optimized rotor transmission reduces tractor engine drag by 15-20%, directly saving money on diesel every working hour.'
        : lang === 'hi'
        ? 'विशेष ट्रांसमिशन तकनीक से ट्रैक्टर पर अतिरिक्त दबाव नहीं पड़ता, जिससे प्रति घंटा 15-20% डीजल की बचत होती है।'
        : 'अचूक ट्रान्समिशन डिझाईनमुळे ट्रॅक्टरवर अतिरिक्त भार येत नाही, ज्यामुळे प्रति एकर १५-२०% डिझेलची थेट बचत होते.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: lang === 'en' ? 'Italian Boron Steel Blades' : lang === 'hi' ? 'बोरॉन स्टील ब्लेड्स' : 'इटालियन बोरॉन स्टील ब्लेड्स',
      desc: lang === 'en'
        ? 'High-tensile tempered steel cutting tines resist abrasion in hard black soil, maintaining sharp edges for multiple seasons.'
        : lang === 'hi'
        ? 'उच्च श्रेणी के बोरॉन स्टील ब्लेड काली व पथरीली मिट्टी में भी बिना मुड़े लंबे समय तक धारदार बने रहते हैं।'
        : 'अति-मजबूत बोरॉन स्टील पाती काळ्या कसदार व खडकाळ जमिनीतही न वाकता अनेक हंगाम धारदार कामगिरी देतात.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m4.93 4.93 4.24 4.24"/>
          <path d="m14.83 9.17 4.24-4.24"/>
        </svg>
      ),
      title: lang === 'en' ? 'Heavy-Duty Oil Bath Gearbox' : lang === 'hi' ? 'लीकप्रूफ गियर बॉक्स' : 'हेवी ड्युटी ऑईल बाथ गिअर बॉक्स',
      desc: lang === 'en'
        ? 'Sealed casted gearbox prevents ingress of slurry, dust, and water during wet puddling or dry clod crushing.'
        : lang === 'hi'
        ? 'पूरी तरह सीलबंद कास्टेड गियर बॉक्स पानी और कीचड़ के अंदर भी शून्य रखरखाव के साथ काम करता है।'
        : 'पूर्णतः सील केलेले गिअर बॉक्स चिखल, पाणी व धुळीतही शून्य मेंटेनन्ससह अव्याहत काम सुनिश्चित करते.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: lang === 'en' ? 'Doorstep Service & Spares' : lang === 'hi' ? 'खेत पर सर्विस व असली स्पेयर' : 'जागेवर सर्व्हिस व अस्सल स्पेअर्स',
      desc: lang === 'en'
        ? 'Shree Swami Samarth Agency provides expert mechanic visits to your field plus guaranteed 100% original company spare parts.'
        : lang === 'hi'
        ? 'श्री स्वामी समर्थ एजेंसी द्वारा आपके खेत पर त्वरित मैकेनिक सेवा और कंपनी के 100% असली स्पेयर पार्ट्स उपलब्ध।'
        : 'श्री स्वामी समर्थ एजन्सीकडून शेतावर थेट मेकॅनिक भेट आणि १००% अस्सल ओरिजिनल स्पेअर पार्ट्सची खात्रीशीर उपलब्धता.',
    },
  ];
}

export default function ProductDetailClient({ product, relatedProducts }) {
  const { lang, t } = useLanguage();
  const [showDock, setShowDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowDock(window.scrollY > 380);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentName = product.name[lang] || product.name.mr;
  const currentTagline = product.tagline?.[lang] || product.tagline?.mr || '';
  const currentDesc = product.description?.[lang] || product.description?.mr || '';
  const equipmentHighlights = getEquipmentHighlights(product, lang);

  const labels = {
    home: t.nav_home || (lang === 'en' ? 'Home' : lang === 'hi' ? 'मुख्यपृष्ठ' : 'मुख्यपृष्ठ'),
    products: t.nav_products || (lang === 'en' ? 'Products' : lang === 'hi' ? 'उत्पाद' : 'उत्पादने'),
    backBtn:
      lang === 'en'
        ? 'View All Implements'
        : lang === 'hi'
        ? 'सभी कृषि यंत्र देखें'
        : 'सर्व उत्पादने पाहा',
    hpLabel:
      lang === 'en' ? 'Tractor Power' : lang === 'hi' ? 'ट्रैक्टर क्षमता' : 'ट्रॅक्टर क्षमता',
    widthLabel:
      lang === 'en' ? 'Working Width' : lang === 'hi' ? 'कार्य चौड़ाई' : 'वर्किंग विड्थ',
    bladesLabel:
      lang === 'en' ? 'Blades / Build' : lang === 'hi' ? 'ब्लेड / संरचना' : 'ब्लेड्स / रचना',
    subsidyPill:
      lang === 'en' ? 'Govt. Subsidy' : lang === 'hi' ? 'सरकारी सब्सिडी' : 'शासकीय सबसिडी',
    subsidyPillVal:
      lang === 'en' ? 'MahaDBT Approved' : lang === 'hi' ? 'महाडीबीटी योजना' : 'महाडीबीटी मान्यताप्राप्त',
    waBtn:
      lang === 'en'
        ? 'Enquire Price on WhatsApp'
        : lang === 'hi'
        ? 'व्हाट्सएप पर कीमत पूछें'
        : 'व्हॉट्सॲपवर किंमत विचारा',
    callBtn:
      lang === 'en'
        ? 'Call Dealer'
        : lang === 'hi'
        ? 'कॉल करें'
        : 'कॉल करा',
    trustNote:
      lang === 'en'
        ? '100% Authorized Dealer Guarantee | MahaDBT Subsidy Support | Doorstep Service'
        : lang === 'hi'
        ? '100% अधिकृत डीलर गारंटी | महाडीबीटी सब्सिडी सुविधा | ऑन-फील्ड सर्विस'
        : '१००% अधिकृत डीलर गॅरंटी | शासनमान्य सबसिडी सुविधा | जागेवर सर्व्हिस व स्पेअर पार्ट्स',
    blueprintBadge:
      lang === 'en' ? 'Complete Equipment Dossier' : lang === 'hi' ? 'संपूर्ण कृषि यंत्र विवरण' : 'कृषी अवजार सविस्तर माहिती',
    blueprintTitle:
      lang === 'en' ? 'Full Technical Blueprint & Field Capability' : lang === 'hi' ? 'तकनीकी विनिर्देश व क्षेत्रीय क्षमता' : 'तांत्रिक तपशील व शेती कार्यक्षमता',
    blueprintSub:
      lang === 'en'
        ? 'Verified manufacturer specifications, crop compatibility, and official MahaDBT government subsidy details.'
        : lang === 'hi'
        ? 'सत्यापित तकनीकी विनिर्देश, उपयुक्त फसलें और आधिकारिक महाडीबीटी सरकारी सब्सिडी की पूरी जानकारी।'
        : 'कंपनीचे अचूक तांत्रिक तपशील, उपयुक्त पिके आणि शासकीय महाडीबीटी सबसिडीची संपूर्ण माहिती एकाच ठिकाणी.',
    specsPanelTitle:
      lang === 'en' ? 'Technical Specifications' : lang === 'hi' ? 'तकनीकी विनिर्देश' : 'तांत्रिक तपशील (Specs)',
    specsVerified:
      lang === 'en' ? '100% Genuine Specs' : lang === 'hi' ? '100% असली विनिर्देश' : '१००% अधिकृत तपशील',
    cropsPanelTitle:
      lang === 'en' ? 'Suitable Crops & Soil Suitability' : lang === 'hi' ? 'उपयुक्त फसलें व मिट्टी अनुकूलता' : 'पिके व जमीन अनुकूलता',
    highlightsHeading:
      lang === 'en' ? 'Key Engineering & Performance Pillars' : lang === 'hi' ? 'प्रमुख तकनीकी विशेषताएं व लाभ' : 'प्रमुख तांत्रिक वैशिष्ट्ये व फायदे',
    subsidyBannerTitle:
      lang === 'en' ? 'Government MahaDBT Subsidy & Loan Assistance' : lang === 'hi' ? 'सरकारी महाडीबीटी सब्सिडी व बैंक ऋण सुविधा' : 'शासकीय महाडीबीटी सबसिडी व कर्ज सुविधा',
    subsidyBannerTag:
      lang === 'en' ? '40% to 50% DBT Subsidy' : lang === 'hi' ? '40% से 50% प्रत्यक्ष सब्सिडी' : '४०% ते ५०% थेट शासकीय अनुदान',
    step1Title:
      lang === 'en' ? '1. Online MahaDBT Application' : lang === 'hi' ? '1. महाडीबीटी ऑनलाइन आवेदन' : '१. महाडीबीटी पोर्टलवर नोंदणी',
    step1Desc:
      lang === 'en'
        ? 'Apply under the Agricultural Mechanization Scheme on mahadbt.maharashtra.gov.in using Aadhaar and 7/12 extract.'
        : lang === 'hi'
        ? 'mahadbt.maharashtra.gov.in पोर्टल पर कृषि यंत्रीकरण योजना में आधार व 7/12 के साथ ऑनलाइन आवेदन करें।'
        : 'mahadbt.maharashtra.gov.in पोर्टलवर कृषी यांत्रिकीकरण घटकांतर्गत आधारकार्ड व ७/१२ जोडून अर्ज करा.',
    step2Title:
      lang === 'en' ? '2. Official Dealer Quotation' : lang === 'hi' ? '2. आधिकारिक डीलर कोटेशन' : '२. अधिकृत जीएसटी कोटेशन',
    step2Desc:
      lang === 'en'
        ? 'Shree Swami Samarth Agency provides official GST tax invoices, model test reports, and authorized dealer certificates.'
        : lang === 'hi'
        ? 'श्री स्वामी समर्थ एजेंसी द्वारा आधिकारिक जीएसटी बिल, टेस्ट रिपोर्ट और डीलर प्रमाणपत्र तुरंत प्रदान किया जाता है।'
        : 'श्री स्वामी समर्थ एजन्सीकडून अधिकृत जीएसटी कोटेशन, टेस्ट रिपोर्ट व डीलर प्रमाणपत्र तात्काळ उपलब्ध करून दिले जाते.',
    step3Title:
      lang === 'en' ? '3. Direct Bank Account Credit' : lang === 'hi' ? '3. सीधे बैंक खाते में अनुदान' : '३. थेट बँक खात्यात अनुदान',
    step3Desc:
      lang === 'en'
        ? 'After machine inspection by the taluka agriculture officer, subsidy funds are credited directly to your bank account.'
        : lang === 'hi'
        ? 'कृषि विभाग द्वारा भौतिक सत्यापन के बाद अनुदान राशि सीधे किसान के बैंक खाते में जमा होती है।'
        : 'तालुका कृषी अधिकाऱ्यांमार्फत अवजाराची मोका तपासणी पूर्ण झाल्यावर अनुदान थेट शेतकऱ्याच्या बँक खात्यात जमा होते.',
    subsidyBtnText:
      lang === 'en'
        ? 'Request Official MahaDBT Quotation on WhatsApp'
        : lang === 'hi'
        ? 'व्हाट्सएप पर महाडीबीटी कोटेशन मंगाएं'
        : 'महाडीबीटी सबसिडी कोटेशन व्हॉट्सॲपवर मिळवा',
    subsidyTrustNote:
      lang === 'en'
        ? 'Authorized dealer billing & loan tie-ups with leading nationalized & co-operative banks.'
        : lang === 'hi'
        ? 'अधिकृत डीलर बिलिंग और अग्रणी राष्ट्रीयकृत व सहकारी बैंकों से कृषि ऋण सहकार्य।'
        : 'अधिकृत डीलर जीएसटी बिलिंग आणि सांगली, जत, मिरज, कोल्हापूर परिसरातील सर्व बँकांशी कर्ज सहकार्य.',
    cropsHead:
      lang === 'en'
        ? 'Suitable Crops & Field Operations in Maharashtra'
        : lang === 'hi'
        ? 'उपयुक्त फसलें व कार्य (महाराष्ट्र विशेष)'
        : 'महाराष्ट्रातील उपयुक्त पिके व शेती कामे',
    soilTitle:
      lang === 'en' ? 'Engineered for Western Maharashtra Soil' : lang === 'hi' ? 'पश्चिम महाराष्ट्र की मिट्टी हेतु विशेष' : 'पश्चिम महाराष्ट्रातील जमिनीसाठी सर्वोत्तम रचना',
    soilDesc:
      lang === 'en'
        ? 'Specially calibrated for the heavy black clay soils, deep sugarcane roots, and tough stony terrains of Sangli, Jat, Miraj, and Kolhapur regions.'
        : lang === 'hi'
        ? 'सांगली, जत, मिरज और कोल्हापुर क्षेत्र की भारी काली मिट्टी, पथरीली जमीन और गन्ने के अवशेषों में बिना रुकावट काम करने के लिए उपयुक्त।'
        : 'सांगली, जत, मिरज व कोल्हापूर भागातील काळी कसदार जमीन, उसाचे खोडवे, पाचट व खडकाळ जमिनीमध्ये बिनदिक्कत काम करण्यासाठी खास डिझाईन.',
    relatedHead:
      lang === 'en'
        ? 'Explore Related Implements'
        : lang === 'hi'
        ? 'अन्य संबंधित कृषि यंत्र (Related Implements)'
        : 'इतर संबंधित कृषी अवजारे (Related Implements)',
    viewSpecs:
      lang === 'en' ? 'View Details →' : lang === 'hi' ? 'विवरण देखें →' : 'माहिती पहा →',
  };

  const waEnquiryText = encodeURIComponent(
    lang === 'en'
      ? `Hello Shree Swami Samarth Agency! I am interested in ${currentName}. Please share price, availability, and subsidy details.`
      : lang === 'hi'
      ? `नमस्ते श्री स्वामी समर्थ एजेंसी! मुझे ${currentName} के बारे में अधिक जानकारी, कीमत और सब्सिडी जाननी है।`
      : `नमस्कार श्री स्वामी समर्थ एजन्सी! मला ${currentName} बद्दल अधिक माहिती, चालू किंमत व सबसिडी जाणून घ्यायची आहे.`
  );

  return (
    <>
      <Navbar />

      <main className="pdetail-main">
        {/* Ambient Lighting Glows */}
        <div className="pdetail-glow-top"></div>
        <div className="pdetail-glow-side"></div>

        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '24px 16px' }}>

          {/* Top Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', position: 'relative', zIndex: 2 }}>
            <Link
              href="/#products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1B4332',
                fontSize: '0.88rem',
                fontWeight: 700,
                textDecoration: 'none',
                padding: '8px 18px',
                border: '1.5px solid #D5E0D8',
                borderRadius: '9999px',
                background: '#ffffff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="m15 18-6-6 6-6"/>
              </svg>
              <span>{labels.backBtn}</span>
            </Link>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              HERO EQUIPMENT SPOTLIGHT & PRIMARY INFORMATION
          ══════════════════════════════════════════════════════════════ */}
          <section className="pdetail-hero-grid">
            {/* Left: Interactive Machinery Stage */}
            <div className="pdetail-stage">
              <span className="pdetail-brand-badge">{product.brand}</span>

              <img
                src={product.image}
                alt={currentName}
                className="pdetail-stage-img"
                loading="eager"
              />
            </div>

            {/* Right: Equipment Specifications & CTAs */}
            <div>
              <div className="pdetail-category">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
                </svg>
                <span>{translateCategory(product.category, lang)}</span>
              </div>

              <h1 className="pdetail-title">{currentName}</h1>

              {currentTagline && (
                <div className="pdetail-tagline">{currentTagline}</div>
              )}

              <p className="pdetail-desc">{currentDesc}</p>

              {/* Action Buttons */}
              <div className="pdetail-actions-row">
                <a
                  href={`https://wa.me/918806595075?text=${waEnquiryText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdetail-btn-whatsapp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span>{labels.waBtn}</span>
                </a>

                <a
                  href="tel:+918806595075"
                  className="pdetail-btn-call"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>{labels.callBtn}</span>
                </a>
              </div>

              {/* Trust Assurance Strip */}
              <div style={{ fontSize: '0.82rem', color: '#5A7568', display: 'flex', alignItems: 'center', gap: '8px', borderTop: '1px solid #E6EFE8', paddingTop: '14px' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span>{labels.trustNote}</span>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              4 KEY METRIC HIGHLIGHTS BAR
          ══════════════════════════════════════════════════════════════ */}
          <section className="pdetail-metrics-grid">
            <div className="pdetail-metric-card">
              <div className="pdetail-metric-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                  <path d="M17 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                  <path d="M5 14h12"/>
                  <path d="m14 7 3 3h4l-2 4h-2"/>
                  <path d="M7 14V6h5l2 3h1"/>
                </svg>
              </div>
              <div>
                <div className="pdetail-metric-label">{labels.hpLabel}</div>
                <div className="pdetail-metric-val">{translateHpRange(product.hpRange, lang)}</div>
              </div>
            </div>

            <div className="pdetail-metric-card">
              <div className="pdetail-metric-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"/>
                  <path d="M3 9h18"/>
                  <path d="M9 21V9"/>
                </svg>
              </div>
              <div>
                <div className="pdetail-metric-label">{labels.widthLabel}</div>
                <div className="pdetail-metric-val">{translateWorkingWidth(product.workingWidth, lang)}</div>
              </div>
            </div>

            <div className="pdetail-metric-card">
              <div className="pdetail-metric-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <div>
                <div className="pdetail-metric-label">{labels.bladesLabel}</div>
                <div className="pdetail-metric-val">{translateBlades(product.blades, lang)}</div>
              </div>
            </div>

            <div className="pdetail-metric-card subsidy-highlight">
              <div className="pdetail-metric-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div className="pdetail-metric-label">{labels.subsidyPill}</div>
                <div className="pdetail-metric-val">{labels.subsidyPillVal}</div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════════════
              ALL-IN-ONE EQUIPMENT BLUEPRINT (SEAMLESS ARCHITECTURE)
          ══════════════════════════════════════════════════════════════ */}
          <section className="pdetail-blueprint-section">
            
            {/* Section Heading */}
            <div className="pdetail-blueprint-header">
              <span className="pdetail-blueprint-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
                {labels.blueprintBadge}
              </span>
              <h2 className="pdetail-blueprint-title">{labels.blueprintTitle}</h2>
              <p className="pdetail-blueprint-sub">{labels.blueprintSub}</p>
            </div>

            {/* Part A: Split Dashboard Grid (Specs Sheet + Field Suitability) */}
            <div className="pdetail-split-grid">
              
              {/* Left Panel: High-Impact Technical Specifications Sheet */}
              <div className="pdetail-card-panel">
                <div className="pdetail-panel-title-row">
                  <h3 className="pdetail-panel-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                    <span>{labels.specsPanelTitle}</span>
                  </h3>
                  <span className="pdetail-panel-badge">{labels.specsVerified}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {product.specs && product.specs.length > 0 ? (
                    product.specs.map((item, idx) => (
                      <div key={idx} className="pdetail-spec-row">
                        <span className="pdetail-spec-name">{translateSpecLabel(item.label, lang)}</span>
                        <span className="pdetail-spec-val">{translateSpecValue(item.value, lang)}</span>
                      </div>
                    ))
                  ) : (
                    <div className="pdetail-spec-row">
                      <span className="pdetail-spec-name">{labels.hpLabel}</span>
                      <span className="pdetail-spec-val">{translateHpRange(product.hpRange, lang)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Panel: Crops & Western Maharashtra Soil Match */}
              <div className="pdetail-card-panel">
                <div className="pdetail-panel-title-row">
                  <h3 className="pdetail-panel-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12a10 10 0 0 1 10-10z"/>
                      <path d="m4.93 4.93 4.24 4.24"/>
                      <path d="m14.83 9.17 4.24-4.24"/>
                      <path d="m14.83 14.83 4.24 4.24"/>
                      <path d="m9.17 14.83-4.24 4.24"/>
                    </svg>
                    <span>{labels.cropsPanelTitle}</span>
                  </h3>
                </div>

                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#1B4332', marginBottom: '10px' }}>
                    {labels.cropsHead}
                  </div>
                  <div className="pdetail-crop-pills">
                    {product.suitableCrops && product.suitableCrops.length > 0 ? (
                      product.suitableCrops.map((crop, idx) => (
                        <span key={idx} className="pdetail-crop-pill">
                          <span style={{ fontSize: '1rem' }}>🌱</span>
                          <span>{translateCrop(crop, lang)}</span>
                        </span>
                      ))
                    ) : (
                      <span className="pdetail-crop-pill">🌱 सर्व हंगामी पिके (All Seasonal Crops)</span>
                    )}
                  </div>
                </div>

                <div className="pdetail-soil-box">
                  <div className="pdetail-soil-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>{labels.soilTitle}</span>
                  </div>
                  <p className="pdetail-soil-text">{labels.soilDesc}</p>
                  <span className="pdetail-soil-tag">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {lang === 'en' ? 'Tested in Sangli & Kolhapur Soils' : lang === 'hi' ? 'सांगली व कोल्हापुर मिट्टी में परीक्षित' : 'सांगली व कोल्हापूर जमिनीसाठी १००% अनुकूल'}
                  </span>
                </div>
              </div>
            </div>

            {/* Part B: Smart Machinery Highlights (Adapts Dynamically to Implement Type) */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0D1F17', margin: 0 }}>
                  {labels.highlightsHeading}
                </h3>
              </div>

              <div className="pdetail-highlights-grid">
                {equipmentHighlights.map((feat, idx) => (
                  <div key={idx} className="pdetail-highlight-card">
                    <div className="pdetail-highlight-icon">
                      {feat.icon}
                    </div>
                    <h4 className="pdetail-highlight-title">{feat.title}</h4>
                    <p className="pdetail-highlight-desc">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Part C: Dedicated MahaDBT Government Subsidy & 1-Click Quotation Banner */}
            <div className="pdetail-subsidy-banner">
              <div className="pdetail-subsidy-top">
                <div className="pdetail-subsidy-heading-row">
                  <div className="pdetail-subsidy-icon-wrap">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="14" x="2" y="5" rx="2"/>
                      <line x1="2" y1="10" x2="22" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="pdetail-subsidy-title">{labels.subsidyBannerTitle}</h3>
                  </div>
                </div>
                <span className="pdetail-subsidy-tag">{labels.subsidyBannerTag}</span>
              </div>

              <div className="pdetail-subsidy-steps-grid">
                <div className="pdetail-subsidy-step-card">
                  <div className="pdetail-subsidy-step-num">01</div>
                  <h4 className="pdetail-subsidy-step-title">{labels.step1Title}</h4>
                  <p className="pdetail-subsidy-step-desc">{labels.step1Desc}</p>
                </div>

                <div className="pdetail-subsidy-step-card">
                  <div className="pdetail-subsidy-step-num">02</div>
                  <h4 className="pdetail-subsidy-step-title">{labels.step2Title}</h4>
                  <p className="pdetail-subsidy-step-desc">{labels.step2Desc}</p>
                </div>

                <div className="pdetail-subsidy-step-card">
                  <div className="pdetail-subsidy-step-num">03</div>
                  <h4 className="pdetail-subsidy-step-title">{labels.step3Title}</h4>
                  <p className="pdetail-subsidy-step-desc">{labels.step3Desc}</p>
                </div>
              </div>

              <div className="pdetail-subsidy-actions">
                <a
                  href={`https://wa.me/918806595075?text=${encodeURIComponent(`Hello! Please provide the MahaDBT quotation and documents for ${currentName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdetail-subsidy-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                  <span>{labels.subsidyBtnText}</span>
                </a>

                <div className="pdetail-subsidy-trust-note">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                  <span>{labels.subsidyTrustNote}</span>
                </div>
              </div>
            </div>

          </section>

          {/* ══════════════════════════════════════════════════════════════
              RELATED AGRICULTURAL IMPLEMENTS
          ══════════════════════════════════════════════════════════════ */}
          {relatedProducts.length > 0 && (
            <section style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0D1F17', margin: 0 }}>
                  {labels.relatedHead}
                </h2>
                <Link href="/#products" style={{ color: '#1B4332', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 800 }}>
                  {lang === 'en' ? 'View Full Catalog →' : lang === 'hi' ? 'पूरा कैटलॉग देखें →' : 'सर्व कॅटलॉग पहा →'}
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                {relatedProducts.map((rel) => {
                  const relName = rel.name[lang] || rel.name.mr;
                  return (
                    <Link
                      key={rel.slug}
                      href={`/products/${rel.slug}`}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#ffffff',
                        borderRadius: '20px',
                        border: '1px solid #E1EAE3',
                        boxShadow: '0 6px 20px rgba(27,67,50,0.05)',
                        padding: '18px',
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', background: '#F4F7F4', borderRadius: '14px', padding: '12px', border: '1px solid #E8EFEA' }}>
                        <img src={rel.image} alt={relName} style={{ maxHeight: '125px', maxWidth: '100%', objectFit: 'contain' }} loading="lazy" />
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#2D6A4F', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{rel.brand}</div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0D1F17', margin: '4px 0 8px 0', lineHeight: 1.35, minHeight: '2.7em' }}>{relName}</h3>
                      <div style={{ fontSize: '0.82rem', color: '#8BA196', marginBottom: '10px' }}>{translateHpRange(rel.hpRange, lang)}</div>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: 'auto', fontSize: '0.86rem', color: '#1B4332', fontWeight: 800 }}>
                        {labels.viewSpecs}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

        </div>

        {/* ══════════════════════════════════════════════════════════════
            FLOATING BOTTOM QUICK-ACTION DOCK (ACTIVATES ON SCROLL)
        ══════════════════════════════════════════════════════════════ */}
        <div className={`pdetail-floating-dock ${showDock ? 'visible' : ''}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
            <img
              src={product.image}
              alt=""
              style={{ width: '42px', height: '42px', objectFit: 'contain', background: '#EBF4ED', borderRadius: '50%', padding: '4px', flexShrink: 0, border: '1px solid #D5E0D8' }}
            />
            <div style={{ minWidth: 0 }}>
              <div style={{ color: '#0D1F17', fontWeight: 800, fontSize: '0.88rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {currentName}
              </div>
              <div style={{ color: '#2D6A4F', fontSize: '0.76rem', fontWeight: 700 }}>
                {translateHpRange(product.hpRange, lang)} • {translateWorkingWidth(product.workingWidth, lang)}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <a
              href={`https://wa.me/918806595075?text=${waEnquiryText}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '38px',
                background: '#25D366',
                color: '#fff',
                padding: '0 14px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.82rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <span>{lang === 'en' ? 'WhatsApp' : lang === 'hi' ? 'व्हाट्सएप' : 'व्हॉट्सॲप'}</span>
            </a>

            <a
              href="tel:+918806595075"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '38px',
                background: '#1B4332',
                color: '#ffffff',
                padding: '0 14px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.82rem',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{lang === 'en' ? 'Call' : 'कॉल'}</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
