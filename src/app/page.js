'use client';

import React, { useState, useCallback } from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Products from '../components/Products';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Exchange from '../components/Exchange';
import Testimonials from '../components/Testimonials';
import Subsidy from '../components/Subsidy';
import Branches from '../components/Branches';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import EnquiryModal from '../components/EnquiryModal';
import ScrollTop from '../components/ScrollTop';
import Toast from '../components/Toast';

export default function Home() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    productName: '',
  });

  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  }, []);

  const openEnquiry = useCallback((productName) => {
    setModalState({
      isOpen: true,
      productName,
    });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeEnquiry = useCallback(() => {
    setModalState({
      isOpen: false,
      productName: '',
    });
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Products onOpenEnquiry={openEnquiry} />
        <Services />
        <WhyUs />
        <Exchange />
        <Testimonials />
        <Subsidy />
        <Branches />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />
      <ScrollTop />

      <EnquiryModal
        isOpen={modalState.isOpen}
        productName={modalState.productName}
        onClose={closeEnquiry}
        onShowToast={showToast}
      />

      <Toast toast={toast} />
    </>
  );
}
