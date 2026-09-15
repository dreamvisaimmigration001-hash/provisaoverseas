import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Success Stories — Real Immigration Journeys',
  description:
    'Read real success stories from Pro Visa Overseas clients who successfully migrated to Australia, Canada, UK, USA, and more. See how we helped 5,000+ clients achieve their immigration dreams.',
  keywords: [
    'immigration success stories',
    'visa approval stories',
    'client testimonials immigration',
    'Canada PR success story',
    'Australia visa success',
    'UK student visa success',
    'immigration consultant reviews',
    'visa consultant testimonials',
    'Pro Visa Overseas reviews',
  ],
  openGraph: {
    title: 'Client Success Stories — Pro Visa Overseas',
    description:
      'Real stories from real clients. Discover how Pro Visa Overseas helped thousands achieve their overseas dreams.',
    url: '/success-stories',
    type: 'website',
  },
  twitter: {
    title: 'Success Stories — Pro Visa Overseas',
    description:
      '5,000+ clients successfully relocated. Read their inspiring immigration journeys.',
  },
  alternates: {
    canonical: '/success-stories',
  },
};

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
