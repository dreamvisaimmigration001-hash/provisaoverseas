import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Book a Free Immigration Consultation',
  description:
    'Book a free consultation with Pro Visa Overseas immigration experts in Chandigarh. Get personalized visa guidance for study, visitor, PR, family, and business visas to Australia, Canada, UK, USA, and more.',
  keywords: [
    'book consultation immigration',
    'free visa consultation Chandigarh',
    'contact immigration consultant',
    'visa appointment booking',
    'immigration help India',
    'visa consultant near me',
    'Pro Visa Overseas contact',
    'book consultation for Canada PR',
    'study visa consultation',
  ],
  openGraph: {
    title: 'Contact Pro Visa Overseas — Book a Free Consultation',
    description:
      'Schedule your free immigration consultation with our Chandigarh-based experts. We evaluate your profile and recommend the best visa pathway.',
    url: '/contact',
    type: 'website',
  },
  twitter: {
    title: 'Book a Free Immigration Consultation — Pro Visa Overseas',
    description:
      'Talk to our visa experts for free. Study, visitor, PR, and family visa consultations available.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
