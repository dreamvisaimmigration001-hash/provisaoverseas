'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { servicesData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 text-center px-6 bg-bg-primary">
        <h1 className="text-4xl font-heading font-normal text-primary mb-4">Service Not Found</h1>
        <p className="text-text-muted mb-8 text-lg font-light">We couldn't find the service you're looking for.</p>
        <Button asChild className="rounded-full h-12 px-8">
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      <PageHero 
        title={service.title}
        subtitle={service.description}
        imageSrc={service.image}
      />

      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-6">OUR EXPERTISE</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-8 leading-tight">Expert {service.title} Guidance</h2>
              <p className="text-lg text-text-muted mb-6 leading-relaxed font-light">
                Navigating the complexities of a {service.title.toLowerCase()} application requires careful planning, precision, and an in-depth understanding of current immigration laws. Our dedicated team works closely with you to ensure that every aspect of your application is meticulously prepared.
              </p>
              <p className="text-lg text-text-muted mb-12 leading-relaxed font-light">
                From initial assessment to final submission, we act as your trusted advisors, demystifying the bureaucratic processes and allowing you to focus on preparing for your move.
              </p>
              
              <h3 className="text-2xl font-heading font-normal text-primary mb-8 mt-16">What We Offer</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  "Detailed profile and eligibility assessment",
                  "Strategic advice on the optimal pathway",
                  "Comprehensive document review and organization",
                  "Step-by-step application processing",
                  "Direct communication and updates",
                  "Post-approval briefing and support"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-bg-card p-6 rounded-[16px] border border-border">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-primary font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-primary text-white p-10 rounded-[32px]">
                <h3 className="text-3xl font-heading font-normal mb-6">Ready to Begin?</h3>
                <p className="text-white/70 mb-10 leading-relaxed font-light">
                  Every successful application starts with a clear strategy. Book a consultation with our experts to discuss your {service.title.toLowerCase()} options.
                </p>
                <Button variant="gold" size="lg" className="w-full rounded-full h-14 text-base" asChild>
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
