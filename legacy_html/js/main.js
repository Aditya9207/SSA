/* ============================================================
   Shree Swami Samarth Agency — Main JavaScript
   Features: Language toggle, Scroll animations, Product tabs,
             Counters, Mobile menu, Form handling, Particles
   ============================================================ */

'use strict';

// ── Current Language ──────────────────────────────────────────
let currentLang = 'mr';

// ── DOM Ready ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initParticles();
  initNavbar();
  initLanguage();
  initProductTabs();
  initScrollAnimations();
  initCounters();
  initMobileMenu();
  initScrollTop();
  initContactForm();
  initEnquiryModal();
  populateProducts();
});

// ── Preloader ─────────────────────────────────────────────────
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.transition = 'opacity 0.6s ease';
      setTimeout(() => preloader.remove(), 600);
    }, 1800);
  });
}

// ── Floating Particles ────────────────────────────────────────
function initParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  const count = window.innerWidth < 768 ? 12 : 24;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${2 + Math.random() * 3}px;
      height: ${2 + Math.random() * 3}px;
      animation-duration: ${8 + Math.random() * 14}s;
      animation-delay: ${-Math.random() * 10}s;
      opacity: ${0.3 + Math.random() * 0.7};
    `;
    container.appendChild(p);
  }
}

// ── Navbar scroll effect ──────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Language System ───────────────────────────────────────────
function initLanguage() {
  // Load from localStorage if set
  const saved = localStorage.getItem('ssa_lang');
  if (saved && ['mr', 'hi', 'en'].includes(saved)) {
    currentLang = saved;
  }
  applyLanguage(currentLang);

  // Bind all lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang && lang !== currentLang) {
        setLanguage(lang);
      }
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ssa_lang', lang);
  applyLanguage(lang);
  // Update active state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : lang === 'hi' ? 'hi' : 'mr';
  // Re-render dynamic product grid
  populateProducts();
}

function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-t-ph]').forEach(el => {
    const key = el.dataset.tPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  // Update active lang btn
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

// ── Product Tabs & Grid ───────────────────────────────────────
function initProductTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.products-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(`panel-${tab}`);
      if (panel) panel.classList.add('active');
    });
  });
}

function populateProducts() {
  const t = translations[currentLang];
  ['swan', 'popular', 'own'].forEach(cat => {
    const panel = document.getElementById(`panel-${cat}`);
    if (!panel) return;
    const grid = panel.querySelector('.products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    productData[cat].forEach(prod => {
      const nameKey = prod.key;
      const descKey = prod.key + '_desc';
      const card = document.createElement('div');
      card.className = 'product-card reveal';
      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${prod.img}" alt="${t[nameKey] || nameKey}" loading="lazy">
          <div class="product-icon-badge">${prod.icon}</div>
        </div>
        <div class="product-info">
          <h3 class="product-name">${t[nameKey] || nameKey}</h3>
          <p class="product-desc">${t[descKey] || ''}</p>
          <button class="product-enquire" onclick="openEnquiry('${t[nameKey] || nameKey}')"
            data-t="enquire_btn">💬 ${t['enquire_btn'] || 'चौकशी करा'}</button>
        </div>
      `;
      grid.appendChild(card);
    });

    // Re-trigger scroll observer for new cards
    observeReveal(panel.querySelectorAll('.reveal'));
  });
}

// ── Scroll Reveal Animations ──────────────────────────────────
function initScrollAnimations() {
  observeReveal(document.querySelectorAll('.reveal'));
}

function observeReveal(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, (entry.target.dataset.delay || 0) * 1000 || i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ── Animated Counters ─────────────────────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const steps = 60;
  const step = duration / steps;
  let current = 0;
  const increment = target / steps;
  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, step);
}

// ── Mobile Menu ───────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Scroll to Top ─────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Contact Form ──────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('#fname').value.trim();
    const phone = form.querySelector('#fphone').value.trim();
    const product = form.querySelector('#fproduct').value;
    const branch = form.querySelector('#fbranch').value;
    const message = form.querySelector('#fmessage').value.trim();

    if (!name || !phone) {
      showToast('⚠️ कृपया नाव व मोबाईल नंबर भरा', 'warning');
      return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
      showToast('⚠️ योग्य मोबाईल नंबर प्रविष्ट करा', 'warning');
      return;
    }

    // Build WhatsApp message
    const t = translations[currentLang];
    const waMsg = encodeURIComponent(
      `🙏 नमस्कार श्री स्वामी समर्थ एजन्सी!\n\n` +
      `👤 नाव: ${name}\n` +
      `📱 मोबाईल: ${phone}\n` +
      `🚜 उत्पाद/सेवा: ${product || '—'}\n` +
      `📍 शाखा: ${branch || '—'}\n` +
      `💬 संदेश: ${message || '—'}\n\n` +
      `_(वेबसाइटवरून पाठवले)_`
    );

    // Send via WhatsApp
    window.open(`https://wa.me/919970541444?text=${waMsg}`, '_blank');
    showToast('✅ संदेश यशस्वीरित्या पाठवला!', 'success');
    form.reset();
  });

  // WhatsApp direct button
  const waBtn = document.getElementById('wa-contact-btn');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      window.open('https://wa.me/919970541444', '_blank');
    });
  }
}

// ── Enquiry Modal ─────────────────────────────────────────────
let modalProductName = '';

function initEnquiryModal() {
  const overlay = document.getElementById('enquiry-modal');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('modal-form');

  if (!overlay) return;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#mname').value.trim();
      const phone = form.querySelector('#mphone').value.trim();
      if (!name || !phone) { showToast('⚠️ नाव व नंबर भरा', 'warning'); return; }
      const waMsg = encodeURIComponent(
        `🙏 ${modalProductName} बद्दल चौकशी\n\nनाव: ${name}\nमोबाईल: ${phone}\n_(वेबसाइटवरून)_`
      );
      window.open(`https://wa.me/919970541444?text=${waMsg}`, '_blank');
      showToast('✅ व्हॉट्सअप उघडत आहे...', 'success');
      closeModal();
      form.reset();
    });
  }
}

window.openEnquiry = function (productName) {
  modalProductName = productName;
  const overlay = document.getElementById('enquiry-modal');
  const pname = document.getElementById('modal-product-name');
  if (overlay) overlay.classList.add('open');
  if (pname) pname.textContent = productName;
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  const overlay = document.getElementById('enquiry-modal');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── Toast Notification ────────────────────────────────────────
function showToast(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.borderLeftColor = type === 'warning' ? '#F9A825' : '#43A047';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ── Smooth anchor scroll for nav links ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
