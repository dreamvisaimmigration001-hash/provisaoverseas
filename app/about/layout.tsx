import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Our Immigration Experts & Story',
  description:
    'Meet the Pro Visa Overseas team — experienced immigration consultants in Chandigarh with 12+ years of expertise helping thousands relocate to Australia, Canada, UK, USA, and beyond.',
  keywords: [
    'about Pro Visa Overseas',
    'immigration experts Chandigarh',
    'visa consultancy team',
    'immigration consultant experience',
    'best immigration company India',
  ],
  openGraph: {
    title: 'About Pro Visa Overseas — Our Immigration Experts & Story',
    description:
      'Discover our team of seasoned immigration consultants with a 98.4% success rate. Trusted by 5,000+ clients across the globe.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About Pro Visa Overseas',
    description:
      'Experienced immigration consultants in Chandigarh. 12+ years, 5,000+ clients, 98.4% success rate.',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
