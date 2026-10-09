# 🌾 Shree Swami Samarth Agency (श्री स्वामी समर्थ एजन्सी)

> **आधुनिक तंत्रज्ञान व प्रगत शेतीचा शिल्पकार | Since 2011**  
> Authorized Distributor for **Swan Agro** & **Popular Group** | Self-Manufactured Chaff Cutters & Fun | Government Subsidy & Easy EMI Finance.

---

## 🚜 Overview

**Shree Swami Samarth Agency** is a premier agricultural implements dealership and manufacturing enterprise headquartered in **Sangli, Maharashtra**. With over **15+ years of trusted experience** and **5,000+ satisfied farmers**, the agency delivers world-class agricultural machinery, genuine spare parts, and fast on-site repair services across 3 strategically located branches: **Sangli**, **Kumtha Fata**, and **Jat**.

This repository contains the official, high-performance web platform built with **Next.js 16 (App Router)** and **React 19**, engineered specifically to provide rural farmers and agricultural contractors with seamless access to machinery details, instant WhatsApp enquiries, exchange valuation, and subsidy guidance.

---

## ✨ Key Features

- 🌐 **Tri-Lingual Support (`i18n`)**: Instant, zero-reload switching between **मराठी (Marathi)**, **हिंदी (Hindi)**, and **English**, preserved in local storage.
- 🚜 **Comprehensive Machinery Catalog**:
  - **Swan Agro**: Heavy-Duty Rotavators, Mulchers, Super Seeders, MB Ploughs.
  - **Popular Group**: Heavy-duty Hydraulic Reversible Ploughs & Bhoomi series.
  - **स्वतः उत्पादित (In-House Manufactured)**: Heavy-duty Chaff Cutters (चाफ कटर) and Fun/Cultivators (फन).
- 💬 **Zero-Friction WhatsApp Lead Engine**: One-click product inquiries and contact forms generate structured, pre-formatted WhatsApp chat payloads directly to the agency's hotline (`+91 8806595075`).
- 🔄 **Old Rotavator Exchange & Valuation**: A transparent 3-step appraisal process for farmers to trade in old machinery for top market value or instant payment.
- 🏛️ **MahaDBT Subsidy & TVS Finance (EMI)**: Step-by-step guidance on government subsidies and low-interest EMI financing options.
- 🖼️ **Seamless Infinite Yard Slider**: Hardware-accelerated continuous photo carousel showcasing the agency's showrooms, implement yards, and outdoor machinery.
- 📍 **Multi-Branch GPS Routing**: Interactive Google Maps previews and direct driving directions for Sangli, Kumtha Fata, and Jat branches.
- 📱 **Mobile-First Responsive Design**: Hardware-accelerated animations, `100dvh` viewport handling, touch gestures, and light/dark theme adaptability.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16.4.0 (Turbopack, App Router)](https://nextjs.org/) |
| **UI Library** | [React 19.3.0](https://react.dev/) |
| **Styling** | Vanilla CSS (Custom Design System with CSS Tokens, Glassmorphism & Bento Grids) |
| **Typography** | Inter, Outfit & Tiro Devanagari Marathi / Mukta |
| **Iconography** | Phosphor Icons (`ph-bold`, `ph-fill`, `ph-regular`) & Tabler Icons |
| **Integrations** | WhatsApp Business API (`wa.me`) & Google Maps Embed API |

---

## 📂 Project Structure

```
shree-swami-samarth-agency/
├── public/
│   ├── images/              # Machinery photos, yard slides, logos & service illustrations
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout, CDN stylesheets & SEO metadata
│   │   ├── page.js          # Main single-page application orchestrator
│   │   └── globals.css      # 3,100+ line bespoke design system & styling rules
│   ├── components/
│   │   ├── Navbar.jsx       # Header, language selector & mobile drawer
│   │   ├── Hero.jsx         # Fullscreen visual banner with quick CTAs
│   │   ├── Stats.jsx        # Animated metrics counters (15+ yrs, 5000+ farmers)
│   │   ├── About.jsx        # Story & 3-photo seamless infinite slider
│   │   ├── Products.jsx     # Brand filter tabs & draggable product carousel
│   │   ├── EnquiryModal.jsx # Instant product enquiry modal with WhatsApp dispatch
│   │   ├── Services.jsx     # 5 core service offerings with quick actions
│   │   ├── WhyUs.jsx        # Bento grid highlighting authorized distributorships
│   │   ├── Exchange.jsx     # Old Rotavator exchange & valuation guide
│   │   ├── Testimonials.jsx # Farmer reviews carousel with 5-star ratings
│   │   ├── Subsidy.jsx      # MahaDBT subsidy steps & TVS Finance EMI card
│   │   ├── Branches.jsx     # 3 branch cards with Google Maps, Call & WA buttons
│   │   ├── Contact.jsx      # Enquiry form & direct communication channels
│   │   ├── Footer.jsx       # Quick navigation, legal info & attribution
│   │   ├── Preloader.jsx    # Non-blocking brand splash screen
│   │   ├── ScrollTop.jsx    # Floating smooth scroll-to-top trigger
│   │   └── Toast.jsx        # Floating feedback alert system
│   ├── context/
│   │   └── LanguageContext.jsx # Reactive locale provider with localStorage sync
│   └── data/
│       └── translations.js  # Complete Marathi, Hindi & English dictionary & catalog
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.18 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aditya9207/SSA.git
   cd SSA
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

To build and run the optimized production bundle:
```bash
npm run build
npm run start
```

---

## 🏢 Branch Network & Contact

- **Proprietor**: नेताजी जमदाडे (Netaji Jamdade)
- **Central Hotline**: `+91 8806595075`
- **WhatsApp**: [Chat Directly](https://wa.me/918806595075)

| Branch | Address | Direct Contact |
| :--- | :--- | :--- |
| **शाखा १ — सांगली (Sangli)** | विष्णूअण्णा फळ मार्केट शेजारी, सांगली | `+91 8806595075` |
| **शाखा २ — कुमठा फाटा (Kumtha Fata)** | सिद्धेश्वर मंगल कार्यालयाशेजारी, कुमठा फाटा | `+91 8806595075` |
| **शाखा ३ — जत (Jat)** | वळसंग रोड, तांगडी मळा, जत | `+91 8806595075` |

---

## 📄 License & Attribution

Designed and developed for **Shree Swami Samarth Agency (श्री स्वामी समर्थ एजन्सी)**.  
All rights reserved © 2011–2026.
