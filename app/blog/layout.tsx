import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Immigration Blog — Visa Tips, News & Guides',
  description:
    'Stay up-to-date with the latest immigration news, visa tips, policy updates, and expert guides from Pro Visa Overseas. Read articles on study abroad, PR pathways, visitor visas, and more.',
  keywords: [
    'immigration blog',
    'visa news',
    'immigration tips',
    'study abroad blog',
    'Canada PR news',
    'Australia immigration updates',
    'UK visa tips',
    'immigration policy changes',
    'visa application tips',
    'overseas education blog',
  ],
  openGraph: {
    title: 'Immigration Blog — Pro Visa Overseas',
    description:
      'Expert immigration articles, visa guides, and policy updates to help you plan your overseas journey.',
    url: '/blog',
    type: 'website',
  },
  twitter: {
    title: 'Immigration Blog — Pro Visa Overseas',
    description:
      'Immigration news, visa tips, and expert guides. Stay informed with Pro Visa Overseas.',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
