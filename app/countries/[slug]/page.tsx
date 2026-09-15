'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { countryImages } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, GraduationCap, Briefcase, Globe, Users } from 'lucide-react';

const features = [
  { icon: GraduationCap, title: "Study Opportunities", desc: "Access to top-tier universities and world-class educational institutions." },
  { icon: Briefcase, title: "Work Options", desc: "Thriving job markets with skill shortage areas eager for international talent." },
  { icon: Globe, title: "PR Pathways", desc: "Clear, point-based systems and structured pathways to permanent residency." },
  { icon: Users, title: "Family Visas", desc: "Options to bring your spouse and dependent children with you." }
];

export default function CountryDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find country
  const countryKey = Object.keys(countryImages).find(
    k => countryImages[k as keyof typeof countryImages].slug === slug
  );
  
  const country = countryKey ? countryImages[countryKey as keyof typeof countryImages] : null;

  if (!country) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 text-center px-6 bg-bg-primary">
        <h1 className="text-4xl font-heading font-normal text-primary mb-4">Destination Not Found</h1>
        <p className="text-text-muted mb-8 text-lg font-light">We couldn't find the country you're looking for.</p>
        <Button asChild className="rounded-full h-12 px-8">
          <Link href="/countries">View All Destinations</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      <PageHero 
        title={`${country.name}`}
        subtitle={country.description}
        imageSrc={country.hero}
      />

      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-6">OVERVIEW</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-8 leading-tight">Why Choose {country.name}?</h2>
              <p className="text-lg text-text-muted mb-6 leading-relaxed font-light">
                {country.name} stands as one of the most highly sought-after destinations for ambitious individuals looking to build a better future. Known for its robust economy, exceptional quality of life, and diverse cultural landscape, it offers unique advantages for students and professionals alike.
              </p>
              <p className="text-lg text-text-muted mb-12 leading-relaxed font-light">
                Whether you're looking to pursue an internationally recognized degree, take the next step in your career, or secure a stable future for your family, {country.name} provides transparent, structured pathways to help you achieve those goals.
              </p>
              
              <h3 className="text-2xl font-heading font-normal text-primary mb-8 mt-16">Opportunities in {country.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="bg-bg-card border border-border p-8 rounded-[24px]">
                      <Icon className="w-8 h-8 text-accent mb-6" />
                      <h4 className="font-heading font-normal text-primary text-xl mb-3">{feature.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed font-light">{feature.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-primary text-white p-10 rounded-[32px]">
                <h3 className="text-3xl font-heading font-normal mb-6">Start Your {country.name} Journey</h3>
                <p className="text-white/70 mb-10 font-light leading-relaxed">
                  Get a personalized assessment of your eligibility and discover the best visa pathways available for your specific profile.
                </p>
                <ul className="space-y-6 mb-10">
                  {[
                    "Free initial profile assessment",
                    "Customized pathway strategy",
                    "End-to-end documentation support",
                    "Interview preparation (if required)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-white/90 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="gold" size="lg" className="w-full rounded-full h-14 text-base" asChild>
                  <Link href="/contact">Book Assessment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
