import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services — Study, Visitor, PR & Family Immigration',
  description:
    'Explore our comprehensive immigration and visa services: Study Visas, Visitor & Tourist Visas, Permanent Residency, Family Immigration, and Business & Investor Visas. Expert guidance for Australia, Canada, UK, USA, and New Zealand.',
  keywords: [
    'immigration services',
    'visa services Chandigarh',
    'study visa services',
    'visitor visa services',
    'PR visa services',
    'family immigration services',
    'business visa services',
    'overseas education services',
    'visa application services India',
    'best visa services Chandigarh',
  ],
  openGraph: {
    title: 'Immigration & Visa Services — Pro Visa Overseas',
    description:
      'From student visas to permanent residency — explore our full suite of immigration services tailored for India to Australia, Canada, UK, USA, and beyond.',
    url: '/services',
    type: 'website',
  },
  twitter: {
    title: 'Our Visa & Immigration Services — Pro Visa Overseas',
    description:
      'Study, visitor, PR, family, and business immigration services. Expert guidance from Chandigarh.',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
