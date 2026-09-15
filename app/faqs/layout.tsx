import type { Metadata } from 'next';
import Script from 'next/script';

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which countries do you assist with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We primarily assist with immigration and visa services for Australia, Canada, the United Kingdom, the United States, New Zealand, and various European countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the visa application process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Processing times vary by country and visa type. Study visas typically take 4-12 weeks, visitor visas 2-8 weeks, and permanent residency applications can take 6-18 months. We provide estimated timelines during your initial consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your success rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain a 98.4% visa approval rate across all categories. Our thorough documentation process and expert review significantly reduce the chances of rejection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer a complimentary initial consultation where we assess your profile, discuss your goals, and recommend the best immigration pathway for your specific situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are typically required for a visa application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Required documents vary by visa type but commonly include a valid passport, educational transcripts, proof of funds, language test scores (IELTS/PTE), employment references, and medical examination results. We provide a detailed checklist tailored to your application.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I check my eligibility for PR (Permanent Residency)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eligibility for Permanent Residency depends on factors like age, education, work experience, language proficiency, and family ties. Book a free consultation with us and our experts will evaluate your Comprehensive Ranking Score (CRS) for Canada or points test score for Australia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with family sponsorship visas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We assist with spouse visas, parent sponsorship, dependent children visas, and other family reunification programs across all our served countries.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Immigration & Visa FAQs',
  description:
    'Find answers to the most frequently asked questions about immigration, visa applications, processing times, eligibility requirements, document checklists, and more. Expert answers from Pro Visa Overseas.',
  keywords: [
    'immigration FAQ',
    'visa application questions',
    'visa processing time',
    'immigration eligibility',
    'visa documents required',
    'PR eligibility check',
    'study visa FAQ',
    'visitor visa FAQ',
    'family visa questions',
    'immigration consultant FAQ',
  ],
  openGraph: {
    title: 'Immigration & Visa FAQs — Pro Visa Overseas',
    description:
      'Got questions about immigration? Find expert answers on visa processing, eligibility, documents, and more.',
    url: '/faqs',
    type: 'website',
  },
  twitter: {
    title: 'Immigration & Visa FAQs — Pro Visa Overseas',
    description:
      'Frequently asked questions about immigration and visa applications, answered by experts.',
  },
  alternates: {
    canonical: '/faqs',
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        strategy="afterInteractive"
      />
      {children}
    </>
  );
}
