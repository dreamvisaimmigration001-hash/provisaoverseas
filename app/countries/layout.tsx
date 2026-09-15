import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Countries We Serve — Australia, Canada, UK, USA & More',
  description:
    'Explore immigration pathways to Australia, Canada, United Kingdom, United States, New Zealand, and Europe. Pro Visa Overseas guides you through every step — from eligibility assessment to visa approval.',
  keywords: [
    'immigration countries',
    'migrate to Australia from India',
    'migrate to Canada from India',
    'UK visa from India',
    'USA visa from India',
    'New Zealand immigration',
    'Europe Schengen visa India',
    'best country to immigrate from India',
    'country-wise visa guidance',
    'immigration destinations',
  ],
  openGraph: {
    title: 'Countries We Serve — Pro Visa Overseas',
    description:
      'Expert visa assistance for Australia, Canada, UK, USA, New Zealand, and Europe. Discover opportunities in the world\'s top immigration destinations.',
    url: '/countries',
    type: 'website',
  },
  twitter: {
    title: 'Countries We Serve — Pro Visa Overseas',
    description:
      'Australia, Canada, UK, USA, New Zealand, Europe — expert immigration guidance for top destinations.',
  },
  alternates: {
    canonical: '/countries',
  },
};

export default function CountriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
