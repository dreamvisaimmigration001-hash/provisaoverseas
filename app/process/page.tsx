'use client';

import * as React from 'react';
import { PageHero } from '@/components/PageHero';
import { processSteps } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero 
        title="Our Methodology" 
        subtitle="A transparent, step-by-step approach ensuring clarity from your first consultation to your final arrival."
        imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex gap-8 md:gap-12 group">
                {/* Timeline line */}
                {idx !== processSteps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-4rem] w-px bg-gray-200 group-hover:bg-primary/30 transition-colors hidden md:block" />
                )}
                
                <div className="flex-shrink-0 relative hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-offwhite border-2 border-primary/20 flex items-center justify-center font-heading font-bold text-primary group-hover:border-primary transition-colors">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1 bg-offwhite p-8 rounded-sm hover:border border-[#E4E8EF] transition-shadow">
                  <div className="md:hidden w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-deep mb-4">{step.title}</h3>
                  <p className="text-lg text-text-muted leading-relaxed">
                    {step.description} At this stage, our dedicated team ensures every detail is meticulously managed, providing you with regular updates and clear communication.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-heading font-bold text-primary-deep mb-6">Ready to take the first step?</h3>
            <Button size="lg" variant="gold" asChild className="rounded-full">
              <Link href="/contact">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
