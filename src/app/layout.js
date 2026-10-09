import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  title: "श्री स्वामी समर्थ एजन्सी | Shree Swami Samarth Agency | Agricultural Implements",
  description: "Swan Agro व Popular Group कृषी अवजारांचे अधिकृत वितरक | रोटाव्हेटर, नांगर, चाफ कटर | सांगली, कुमठा फाटा, जत | Rotavator dealer Sangli Maharashtra",
  keywords: [
    "rotavator sangli",
    "agricultural implements sangli",
    "Swan Agro dealer",
    "Popular Group plough",
    "chaff cutter",
    "कृषी अवजारे",
    "रोटाव्हेटर सांगली",
    "नांगर",
    "शेती अवजारे"
  ],
  openGraph: {
    title: "श्री स्वामी समर्थ एजन्सी | Agricultural Implements",
    description: "आधुनिक तंत्रज्ञान व प्रगत शेतीचा शिल्पकार | Since 2011 | 3 शाखा | सांगली, कुमठा फाटा, जत",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="mr" suppressHydrationWarning>
      <head>
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
