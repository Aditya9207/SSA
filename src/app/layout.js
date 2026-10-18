import { Noto_Serif_Devanagari, Hind } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "600", "700"],
  variable: "--font-mr",
  display: "swap",
});

const hind = Hind({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hi",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://shree-swami-samarth-agency.onrender.com'),
  title: "श्री स्वामी समर्थ एजन्सी | Swan Agro Rotavator & Agricultural Implements Dealer Sangli, Jat",
  description: "Swan Agro व Popular Group कृषी अवजारांचे अधिकृत वितरक | रोटाव्हेटर (गायरो, मिनी, सुपर सिरीज), पलटी नांगर, चाफ कटर, मल्चर | सांगली, कुमठा फाटा, जत | Authorized Rotavator Dealer Sangli Maharashtra",
  keywords: [
    "rotavator sangli",
    "rotavator dealer sangli",
    "rotavator dealer jat",
    "Swan Agro rotavator price",
    "gyro series rotavator",
    "mini rotavator for grape orchards",
    "Popular Group plough sangli",
    "agricultural implements sangli",
    "Swan Agro dealer Maharashtra",
    "chaff cutter sangli",
    "कडबा कुट्टी मशीन",
    "रोटाव्हेटर सांगली",
    "पलटी नांगर सांगली",
    "कृषी अवजारे सांगली"
  ],
  openGraph: {
    title: "श्री स्वामी समर्थ एजन्सी | Swan Agro Rotavator Dealer Sangli & Jat",
    description: "Swan Agro व Popular Group कृषी अवजारांचे अधिकृत वितरक. रोटाव्हेटर, पलटी नांगर, कडबा कुट्टी, मल्चर. सांगली, कुमठा फाटा व जत.",
    type: "website",
    locale: "mr_IN",
    images: [
      {
        url: "/images/hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Swami Samarth Agency — Agricultural Implements Dealer Sangli",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "श्री स्वामी समर्थ एजन्सी | Rotavator & Agri Implements Dealer Sangli",
    description: "Swan Agro व Popular Group कृषी अवजारांचे अधिकृत वितरक. सांगली, कुमठा फाटा, जत.",
    images: ["/images/hero_bg.jpg"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  other: {
    'color-scheme': 'light',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shree Swami Samarth Agency",
  "alternateName": "श्री स्वामी समर्थ एजन्सी",
  "image": "https://shree-swami-samarth-agency.onrender.com/images/hero_bg.jpg",
  "telephone": "+918806595075",
  "priceRange": "₹₹",
  "url": "https://shree-swami-samarth-agency.onrender.com",
  "description": "Swan Agro व Popular Group कृषी अवजारांचे अधिकृत वितरक. रोटाव्हेटर, नांगर, चाफ कटर, स्पेअर पार्ट्स व दुरुस्ती सेवा.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Siddheshwar Mangal Karyalaya, Kumtha Fata",
    "addressLocality": "Sangli",
    "addressRegion": "Maharashtra",
    "postalCode": "416416",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 16.8524,
    "longitude": 74.5768
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "Shree Swami Samarth Agency - Kumtha Fata (Main Branch)",
      "telephone": "+918806595075",
      "address": "Siddheshwar Mangal Karyalaya Shejari, Kumtha Fata, Sangli"
    },
    {
      "@type": "LocalBusiness",
      "name": "Shree Swami Samarth Agency - Sangli Branch",
      "telephone": "+918806595075",
      "address": "Near Vishnuanna Fruit Market, Sangli"
    },
    {
      "@type": "LocalBusiness",
      "name": "Shree Swami Samarth Agency - Jat Branch",
      "telephone": "+918806595075",
      "address": "Valsang Road, Tangadi Mala, Jat"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr" className={`${notoSerifDevanagari.variable} ${hind.variable}`} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/bold/style.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
