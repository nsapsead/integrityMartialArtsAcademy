import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Integrity Martial Arts Academy | BJJ & Martial Arts Training Eltham VIC",
    template: "%s | Integrity Martial Arts Academy"
  },
  description: "Professional martial arts training in Eltham, Victoria. Learn Brazilian Jiu Jitsu, self-defence, and fitness with Craig Donaldson. 30+ years experience. All ages welcome. Book your trial today!",
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    "martial arts Eltham",
    "BJJ Eltham",
    "Brazilian Jiu Jitsu Victoria",
    "self defence classes Melbourne",
    "martial arts academy Eltham",
    "Craig Donaldson BJJ",
    "kids martial arts Eltham",
    "adult martial arts Victoria",
    "Muay Thai Eltham",
    "MMA training Melbourne",
    "martial arts classes Eltham",
    "self defence training Victoria"
  ],
  authors: [{ name: "Craig Donaldson", url: "https://integritymartialartsacademy.com.au" }],
  creator: "Integrity Martial Arts Academy",
  publisher: "Integrity Martial Arts Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://integritymartialartsacademy.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Integrity Martial Arts Academy | BJJ & Martial Arts Training Eltham VIC",
    description: "Professional martial arts training in Eltham, Victoria. Learn Brazilian Jiu Jitsu, self-defence, and fitness with Craig Donaldson. 30+ years experience. All ages welcome.",
    url: 'https://integritymartialartsacademy.com.au',
    siteName: 'Integrity Martial Arts Academy',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Integrity Martial Arts Academy Logo',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Integrity Martial Arts Academy | BJJ & Martial Arts Training Eltham VIC",
    description: "Professional martial arts training in Eltham, Victoria. Learn Brazilian Jiu Jitsu, self-defence, and fitness with Craig Donaldson. 30+ years experience.",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Integrity Martial Arts Academy",
    "description": "Professional martial arts training in Eltham, Victoria. Learn Brazilian Jiu Jitsu, self-defence, and fitness with Craig Donaldson. 30+ years experience.",
    "url": "https://integritymartialartsacademy.com.au",
    "logo": "https://integritymartialartsacademy.com.au/images/logo.png",
    "image": "https://integritymartialartsacademy.com.au/images/logo.png",
    "telephone": "0403 990 791",
    "email": "train@integritymartialartsacademy.com.au",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2/30 Bridge Street",
      "addressLocality": "Eltham",
      "addressRegion": "VIC",
      "postalCode": "3095",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-37.7167",
      "longitude": "145.1500"
    },
    "openingHours": [
      "Mo-Fr 18:00-21:00",
      "Sa 09:00-12:00"
    ],
    "founder": {
      "@type": "Person",
      "name": "Craig Donaldson",
      "jobTitle": "Head Instructor",
      "description": "BJJ Black Belt with 30+ years of martial arts experience"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Martial Arts Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kids Martial Arts",
            "description": "Martial arts training for children ages 3-6"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teen Martial Arts",
            "description": "Martial arts training for teenagers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Adult BJJ",
            "description": "Brazilian Jiu Jitsu training for adults"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Integrity Combatives",
            "description": "Self-defence and combatives training"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Muay Thai",
            "description": "Muay Thai kickboxing training"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Lessons",
            "description": "One-on-one martial arts instruction"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/integritybjj",
      "https://www.instagram.com/integritymartialartsacademy/"
    ],
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
