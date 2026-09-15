import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process — Simple 4-Step Immigration Journey',
  description:
    'Learn about our proven 4-step immigration process: Free Consultation, Eligibility Assessment, Document Preparation, and Visa Filing. Pro Visa Overseas makes immigration simple, transparent, and stress-free.',
  keywords: [
    'immigration process',
    'visa application process',
    'how to apply for visa',
    'immigration steps',
    'visa filing process',
    'document preparation visa',
    'eligibility assessment immigration',
    'free consultation immigration',
    'step by step visa process',
  ],
  openGraph: {
    title: 'Our Immigration Process — Pro Visa Overseas',
    description:
      'Discover our streamlined 4-step immigration process. From free consultation to visa approval — we guide you every step of the way.',
    url: '/process',
    type: 'website',
  },
  twitter: {
    title: 'Our Immigration Process — Pro Visa Overseas',
    description:
      'Simple 4-step immigration journey: Consult → Assess → Prepare → File. Start yours today.',
  },
  alternates: {
    canonical: '/process',
  },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
