'use client';

import * as React from 'react';
import { PageHero } from '@/components/PageHero';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqs = [
  {
    question: "Which countries do you assist with?",
    answer: "We primarily assist with immigration and visa services for Australia, Canada, the United Kingdom, the United States, New Zealand, and various European countries. Our experts stay up-to-date with the latest immigration policies across these key destinations."
  },
  {
    question: "Do you help with student visas?",
    answer: "Yes. Our Study Abroad division provides end-to-end guidance, from university selection and admission applications to compiling documentation and applying for your student visa."
  },
  {
    question: "Do you assist with permanent residency and family visas?",
    answer: "Yes, we provide end-to-end guidance for long-term residency, points-tested migration, and family sponsorship pathways."
  },
  {
    question: "Do you help with visitor visas?",
    answer: "Yes, we assist with short-term travel visas for tourism, family visits, business meetings, and short study courses, ensuring your application is robust and properly documented."
  },
  {
    question: "How does the consultation process work?",
    answer: "It begins with a detailed profile assessment where we discuss your background, long-term goals, and preferred destinations. Based on this, we recommend the most viable pathways, outline the expected timeline, and explain the costs involved."
  },
  {
    question: "What documents are usually required?",
    answer: "Documentation varies significantly by visa type and country. Generally, you will need valid identification (passport), educational transcripts, proof of English proficiency, financial statements, and employment records. We provide a customized checklist upon consultation."
  },
  {
    question: "How long does the process take?",
    answer: "Processing times vary based on the country, visa category, and the completeness of your application. During your consultation, we provide an estimated timeline based on current government processing averages."
  },
  {
    question: "Can you assess my profile?",
    answer: "Yes. Our initial consultation involves a thorough profile assessment to determine your eligibility for various programs before you commit to any lengthy processes."
  },
  {
    question: "How can I book a consultation?",
    answer: "You can book a consultation easily by navigating to our 'Book Consultation' page, filling out the brief contact form, and selecting your preferred date. Our team will contact you to confirm the appointment."
  }
];

export default function FAQsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero 
        title="Frequently Asked Questions" 
        subtitle="Clear answers to help you understand our services and the global immigration process."
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Accordion.Root type="single" collapsible className="space-y-4 mb-16">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="border border-[#E4E8EF] rounded-sm overflow-hidden bg-white data-[state=open]:border-primary transition-colors">
                <Accordion.Header>
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-5 px-6 font-medium transition-all hover:bg-offwhite w-full text-left [&[data-state=open]>svg]:rotate-180">
                    <span className="font-heading text-primary-deep text-lg pr-8">{faq.question}</span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-text-muted px-6 pb-5 pt-0 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-base leading-relaxed">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <div className="bg-offwhite p-10 rounded-sm text-center">
            <h3 className="text-2xl font-heading font-bold text-primary-deep mb-4">Still have questions?</h3>
            <p className="text-text-muted mb-8 max-w-xl mx-auto">
              If you couldn't find the answer you were looking for, our team is ready to help. Reach out directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="gold">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
