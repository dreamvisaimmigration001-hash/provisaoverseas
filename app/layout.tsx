import type {Metadata} from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Script from 'next/script';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const rawBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.provisaoverseas.com';
const SITE_URL = rawBaseUrl.startsWith('http') ? rawBaseUrl : `https://${rawBaseUrl}`;
const SITE_NAME = 'Pro Visa Overseas';
const DEFAULT_DESCRIPTION =
  'Pro Visa Overseas is a premium immigration and visa consultancy based in Chandigarh, India. We help clients with overseas education, visitor visas, tourist visas, family migration, permanent residency, and business immigration to Australia, Canada, UK, USA, New Zealand, and Europe.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Pro Visa Overseas | Best Immigration & Visa Consultancy in Chandigarh',
    template: '%s | Pro Visa Overseas',
  },
  description: DEFAULT_DESCRIPTION,

  // Comprehensive keyword targeting
  keywords: [
    'immigration consultancy',
    'visa consultancy Chandigarh',
    'best visa consultant in Chandigarh',
    'overseas education consultant',
    'study visa Canada',
    'study visa Australia',
    'study visa UK',
    'visitor visa USA',
    'tourist visa consultant',
    'permanent residency consultant',
    'PR visa Canada',
    'PR visa Australia',
    'family immigration',
    'spouse visa',
    'business visa',
    'investor visa',
    'immigration consultant India',
    'IELTS coaching Chandigarh',
    'PTE coaching Chandigarh',
    'study abroad consultant',
    'overseas migration services',
    'visa application help',
    'immigration lawyer Chandigarh',
    'Canada PR from India',
    'Australia PR from India',
    'UK student visa',
    'USA B1/B2 visa',
    'New Zealand visa',
    'Europe Schengen visa',
    'Pro Visa Overseas',
  ],

  // Author and creator info
  authors: [{ name: 'Pro Visa Overseas', url: SITE_URL }],
  creator: 'Pro Visa Overseas',
  publisher: 'Pro Visa Overseas',

  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Pro Visa Overseas | Best Immigration & Visa Consultancy in Chandigarh',
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pro Visa Overseas — Premium Immigration & Visa Consultancy',
        type: 'image/png',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Visa Overseas | Immigration & Visa Consultancy',
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@provisaoverseas',
    site: '@provisaoverseas',
  },

  // Canonical & alternates
  alternates: {
    canonical: SITE_URL,
  },

  // Category and classification
  category: 'Immigration Services',

  // App-specific
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Verification (replace with actual verification codes when available)
  // verification: {
  //   google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  // },
};

// JSON-LD structured data for Organization + LocalBusiness
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'Pro Visa Overseas',
  alternateName: 'Pro Visa Overseas Immigration Consultancy',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description: DEFAULT_DESCRIPTION,
  // Phone and address commented out — will be added when finalized
  // telephone: '+91-XXXXXXXXXX',
  // email: 'info@provisaoverseas.com',
  // address: {
  //   '@type': 'PostalAddress',
  //   streetAddress: '2nd Floor, SECTOR-31D, SCO 37',
  //   addressLocality: 'Chandigarh',
  //   addressRegion: 'Chandigarh',
  //   postalCode: '160030',
  //   addressCountry: 'IN',
  // },
  // geo: {
  //   '@type': 'GeoCoordinates',
  //   latitude: 30.7333,
  //   longitude: 76.7794,
  // },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/provisaoverseas',
    'https://www.instagram.com/provisaoverseas',
    'https://www.linkedin.com/company/provisaoverseas',
    'https://twitter.com/provisaoverseas',
  ],
  priceRange: '$$',
  areaServed: [
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'New Zealand' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Immigration & Visa Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Study Visa Consultation',
          description: 'Expert guidance for student visa applications to top study destinations worldwide.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Visitor & Tourist Visa',
          description: 'Seamless processing and application support for visitor and tourist visas.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Permanent Residency',
          description: 'Complete PR visa services including eligibility assessment, documentation, and application filing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Family Immigration',
          description: 'Sponsor and reunite with your family through spouse, parent, and dependent visa programs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business & Investor Visa',
          description: 'Strategic immigration solutions for entrepreneurs, investors, and business professionals.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/services?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${SITE_URL}/services`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Countries',
      item: `${SITE_URL}/countries`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'About',
      item: `${SITE_URL}/about`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact',
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
          strategy="afterInteractive"
        />
        <Script
          id="json-ld-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased font-body flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
