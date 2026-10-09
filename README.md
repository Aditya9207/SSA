# 🌾 Shree Swami Samarth Agency

> **Architect of Modern Technology & Advanced Farming | Since 2011**  
> Authorized Distributor for **Swan Agro** & **Popular Group** | In-House Manufactured Chaff Cutters & Cultivators | Government Subsidy & Easy EMI Finance.

---

## 🚜 Overview

**Shree Swami Samarth Agency** is a premier agricultural implements dealership and manufacturing enterprise headquartered in **Sangli, Maharashtra, India**. With over **15+ years of trusted service** and a growing family of **5,000+ satisfied farmers**, the agency provides world-class agricultural machinery, authentic spare parts, and swift on-site repair services across 3 strategically situated branches: **Sangli**, **Kumtha Fata**, and **Jat**.

This repository contains the official, high-performance web platform built with **Next.js 16 (App Router)** and **React 19**, engineered specifically to provide farmers, agricultural contractors, and rural entrepreneurs with instant access to machinery specifications, one-click WhatsApp inquiries, used equipment exchange valuations, and government subsidy assistance.

---

## ✨ Key Features

- 🌐 **Tri-Lingual Engine (`i18n`)**: Instant, zero-reload switching between **Marathi**, **Hindi**, and **English**, preserved in local storage.
- 🚜 **Comprehensive Machinery Catalog**:
  - **Swan Agro**: Heavy-Duty Rotavators, Mulchers, Super Seeders, and MB Ploughs.
  - **Popular Group**: Heavy-duty Hydraulic Reversible Ploughs & Bhoomi series implements.
  - **In-House Manufacturing**: Heavy-duty automated Chaff Cutters and Tractor Cultivators (Fun).
- 💬 **Direct WhatsApp Lead Engine**: One-click product inquiries and contact forms generate structured, pre-formatted WhatsApp chat inquiries sent directly to the agency hotline (`+91 8806595075`).
- 🔄 **Used Rotavator Exchange & Valuation**: A transparent 3-step appraisal process for farmers to trade in old machinery for top market value or instant payment.
- 🏛️ **MahaDBT Subsidy & TVS Finance (EMI)**: Step-by-step guidance on government subsidies and low-interest EMI financing options.
- 🖼️ **Seamless Infinite Yard Slider**: Hardware-accelerated continuous photo carousel showcasing the agency's showrooms, machinery yards, and outdoor inventory.
- 📍 **Multi-Branch GPS Routing**: Interactive Google Maps previews and direct driving directions for the Sangli, Kumtha Fata, and Jat branches.
- 📱 **Mobile-First Responsive Design**: Hardware-accelerated animations, `100dvh` viewport handling, touch gestures, and light/dark theme adaptability.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16.4.0 (Turbopack, App Router)](https://nextjs.org/) |
| **UI Library** | [React 19.3.0](https://react.dev/) |
| **Styling** | Vanilla CSS (Custom Design System with CSS Tokens, Glassmorphism & Bento Grids) |
| **Typography** | Inter, Outfit & Devanagari typography support |
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
│   │   ├── Exchange.jsx     # Used Rotavator exchange & valuation guide
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
- `npm`, `yarn`, or `pnpm`

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

4. **Open in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

To build and run the optimized production bundle:
```bash
npm run build
npm run start
```

---

## 🏢 Branch Network & Contact Details

- **Proprietor**: Netaji Jamdade
- **Central Hotline**: `+91 8806595075`
- **WhatsApp**: [Chat Directly](https://wa.me/918806595075)

| Branch | Address | Direct Contact |
| :--- | :--- | :--- |
| **Branch 1 — Sangli** | Near Vishnuanna Fruit Market, Sangli | `+91 8806595075` |
| **Branch 2 — Kumtha Fata** | Near Siddheshwar Mangal Karyalaya, Kumtha Fata | `+91 8806595075` |
| **Branch 3 — Jat** | Valsang Road, Tangadi Mala, Jat | `+91 8806595075` |

---

## 📄 License & Attribution

Designed and developed for **Shree Swami Samarth Agency**.  
All rights reserved © 2011–2026.
