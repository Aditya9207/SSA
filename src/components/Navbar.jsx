'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langMenuRef = React.useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection (only on home)
      if (isHome) {
        const sections = ['hero','about','products','services','why-us','branches','contact'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && window.scrollY >= el.offsetTop - 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const nextState = !mobileMenuOpen;
    setMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const handleNavClick = (e, targetId) => {
    closeMenu();

    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      e.preventDefault();
      const targetUrl = targetId === 'hero' ? '/' : `/#${targetId}`;
      router.push(targetUrl);
    }
  };

  const navItems = [
    { id: 'hero',     label: t.nav_home },
    { id: 'about',    label: t.nav_about },
    { id: 'products', label: t.nav_products },
    { id: 'services', label: t.nav_services },
    { id: 'why-us',   label: t.whyus_badge || 'आम्हीच का?' },
    { id: 'branches', label: t.nav_branches },
  ];

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          {/* Logo */}
          <a
            href="/"
            className="nav-logo"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            <div className="nav-logo-mark">
              <img
                src="/images/logo.png"
                alt="Shri Swami Samarth Agency"
                className="nav-logo-img"
              />
            </div>
            <div className="nav-brand-text">
              <span className="brand-title">Shri Swami Samarth</span>
              <div className="brand-subtitle-wrap">
                <span className="brand-subtitle">AGENCY</span>
                <span className="brand-subtitle-bar"></span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links — pill row */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={isHome ? `#${item.id}` : `/#${item.id}`}
                  className={isHome && activeSection === item.id ? 'nav-active' : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="nav-right">
            {/* Contact pill — white card (desktop only) */}
            <a
              href={isHome ? '#contact' : '/#contact'}
              className="nav-cta desktop-only"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <i className="ph-bold ph-phone-call"></i>
              <span>{t.nav_contact || 'संपर्क'}</span>
            </a>

            {/* Language Globe Dropdown */}
            <div className="lang-dropdown-wrapper" ref={langMenuRef}>
              <button
                type="button"
                suppressHydrationWarning
                className={`lang-globe-btn ${langDropdownOpen ? 'active' : ''}`}
                onClick={() => setLangDropdownOpen((prev) => !prev)}
                aria-label="Select Language"
                title="Select Language"
              >
                <i className="ph-bold ph-globe"></i>
                <span className="lang-globe-label">
                  {lang === 'mr' ? 'मराठी' : lang === 'hi' ? 'हिंदी' : 'EN'}
                </span>
                <i className={`ph-bold ph-caret-down lang-caret ${langDropdownOpen ? 'rotate' : ''}`}></i>
              </button>

              {langDropdownOpen && (
                <div className="lang-dropdown-menu">
                  <button
                    type="button"
                    suppressHydrationWarning
                    className={`lang-dropdown-item ${lang === 'mr' ? 'selected' : ''}`}
                    onClick={() => { setLang('mr'); setLangDropdownOpen(false); }}
                  >
                    <span className="lang-item-native">मराठी</span>
                    <span className="lang-item-code">MR</span>
                    {lang === 'mr' && <i className="ph-bold ph-check"></i>}
                  </button>
                  <button
                    type="button"
                    suppressHydrationWarning
                    className={`lang-dropdown-item ${lang === 'hi' ? 'selected' : ''}`}
                    onClick={() => { setLang('hi'); setLangDropdownOpen(false); }}
                  >
                    <span className="lang-item-native">हिंदी</span>
                    <span className="lang-item-code">HI</span>
                    {lang === 'hi' && <i className="ph-bold ph-check"></i>}
                  </button>
                  <button
                    type="button"
                    suppressHydrationWarning
                    className={`lang-dropdown-item ${lang === 'en' ? 'selected' : ''}`}
                    onClick={() => { setLang('en'); setLangDropdownOpen(false); }}
                  >
                    <span className="lang-item-native">English</span>
                    <span className="lang-item-code">EN</span>
                    {lang === 'en' && <i className="ph-bold ph-check"></i>}
                  </button>
                </div>
              )}
            </div>

            {/* Hamburger */}
            <button
              type="button"
              suppressHydrationWarning
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
              id="hamburger"
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobile-menu">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={isHome ? `#${item.id}` : `/#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
          >
            <span>{item.label}</span>
          </a>
        ))}
        <a
          href={isHome ? '#contact' : '/#contact'}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          <i className="ph-bold ph-phone"></i>
          <span>{t.nav_contact}</span>
        </a>
        <div className="mobile-lang">
          <button
            type="button"
            suppressHydrationWarning
            className={`lang-btn ${lang === 'mr' ? 'active' : ''}`}
            onClick={() => { setLang('mr'); closeMenu(); }}
          >
            मराठी
          </button>
          <button
            type="button"
            suppressHydrationWarning
            className={`lang-btn ${lang === 'hi' ? 'active' : ''}`}
            onClick={() => { setLang('hi'); closeMenu(); }}
          >
            हिंदी
          </button>
          <button
            type="button"
            suppressHydrationWarning
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => { setLang('en'); closeMenu(); }}
          >
            English
          </button>
        </div>
      </div>
    </>
  );
}
