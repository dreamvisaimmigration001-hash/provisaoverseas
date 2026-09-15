'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import LatestPPR from '@/components/LatestPPR';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Globe2, 
  ArrowRight, 
  FileCheck2, 
  Sparkles,
  Check
} from 'lucide-react';

const clientStories = [
  {
    client: 'Sanjeev',
    country: 'Australia',
    category: 'Visitor Visa (Subclass 600)',
    flag: '🇦🇺',
    status: '3-Year Multiple Entry Granted',
    quote: 'Pro Visa Overseas made my Australian visitor visa application completely stress-free. My 3-year grant came through with zero hassle.',
    badge: 'Tourism & Family Stream',
  },
  {
    client: 'Mohit Ramniwas',
    country: 'Slovakia (Schengen)',
    category: 'National Visa Type D',
    flag: '🇸🇰',
    status: 'Visa Issued in Passport',
    quote: 'Getting a Schengen National Visa requires exact documentation. The team prepared every single page to perfection.',
    badge: 'European Long-Term Stay',
  },
  {
    client: 'Manjot Singh',
    country: 'Malta (Schengen)',
    category: 'Tourist Visa Type C',
    flag: '🇲🇹',
    status: 'Approved & Departed',
    quote: 'From filing to getting the official visa sticker and boarding my flight from New Delhi, Pro Visa Overseas guided me every step of the way.',
    badge: 'Schengen Area Clearance',
  },
  {
    client: 'Jagdip Singh',
    country: 'Slovakia (Schengen)',
    category: 'National Visa Type D',
    flag: '🇸🇰',
    status: 'Consular Visa Issued',
    quote: 'The consular interview preparation and file compilation were top notch. Received my official visa without any delay.',
    badge: 'Slovakia National Visa',
  },
  {
    client: 'Pankaj Bhatti',
    country: 'Greece (Schengen)',
    category: 'Work & Residence Permit',
    flag: '🇬🇷',
    status: 'Granted & Gulf Air Departure',
    quote: 'Huge thanks to the team for securing my Greek work authorization and helping me start my international career.',
    badge: 'Employment Authorization',
  },
  {
    client: 'Waleed Muhammad',
    country: 'Australia',
    category: 'Temporary Skill Shortage (Subclass 482)',
    flag: '🇦🇺',
    status: 'Application Lodged & Acknowledged',
    quote: 'Fast, reliable and very transparent with status updates. They know immigration regulations inside out.',
    badge: 'Employer Sponsored Stream',
  },
];

const verificationFeatures = [
  {
    icon: FileCheck2,
    title: 'Verified Client Applications',
    description: 'Every genuine approval is carefully audited and cataloged by our registered immigration consulting team.',
  },
  {
    icon: CheckCircle2,
    title: 'Direct Consular Approvals',
    description: 'All letters and stickers are official outputs issued directly by foreign departments of home affairs and embassies.',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Privacy & Redaction',
    description: 'Client identity and sensitive passport numbers are carefully masked while preserving authentic consular barcodes and approvals.',
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      {/* 1. HERO SECTION */}
      <PageHero 
        title="Client Success Stories & PPR Approvals" 
        eyebrow="PROVEN IMMIGRATION OUTCOMES"
        subtitle="Explore genuine passport request letters, verified visa approvals, and authentic relocation journeys achieved with Pro Visa Overseas."
        imageSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80"
      />

      {/* 2. TRUST STATS STRIP */}
      <section className="py-12 bg-white border-b border-border/70 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">100%</span>
              </div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
                Authentic Case Files
              </p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">5,000+</span>
              </div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
                Visas Granted & Cleared
              </p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">98.4%</span>
              </div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
                Approval Success Rate
              </p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <Globe2 className="w-5 h-5 text-accent" />
                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">Top 6</span>
              </div>
              <p className="text-xs text-text-muted font-medium uppercase tracking-wider">
                Global Destinations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PPR & VISA GALLERY */}
      <section id="approvals" className="w-full">
        <LatestPPR />
      </section>

      {/* 4. REAL CLIENT CASE STUDIES */}
      <section className="py-24 bg-bg-secondary border-t border-border/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-3">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary">
              Real Journeys Behind the <span className="text-accent">Approved Visas</span>
            </h2>
            <p className="text-text-muted text-base sm:text-lg font-light mt-4">
              Behind every passport request and approved visa is an ambitious individual or family. Here is what our successful clients have to say about working with Pro Visa Overseas.
            </p>
            <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientStories.map((story, i) => (
              <motion.div
                key={story.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-border hover:border-accent/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span>{story.flag}</span>
                      <span>{story.country}</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary/70 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {story.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-primary mb-1">
                    {story.client}
                  </h3>
                  <p className="text-xs font-medium text-text-muted mb-4">
                    {story.category}
                  </p>

                  <p className="text-sm text-text-muted leading-relaxed italic mb-6">
                    "{story.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {story.status}
                  </span>
                  <span className="text-accent font-bold uppercase tracking-wider text-[10px]">
                    Verified Case
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AUTHENTICITY & TRUST DETAILS */}
      <section className="py-24 bg-white border-t border-border/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block">
                AUTHENTICITY GUARANTEE
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-normal text-primary leading-tight">
                Our Commitment to <span className="text-accent">100% Authenticity</span> & Transparency
              </h2>
              <p className="text-text-muted text-base font-light leading-relaxed">
                In an industry where trust is paramount, Pro Visa Overseas stands for 100% transparency. Every approval document on this page has been thoroughly verified by our registered immigration team.
              </p>
              <div className="pt-2">
                <Button size="lg" asChild className="rounded-full bg-accent hover:bg-primary text-white shadow-md">
                  <Link href="/contact" className="flex items-center gap-2">
                    Verify Your Profile
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {verificationFeatures.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <div 
                    key={feat.title}
                    className="p-6 rounded-2xl bg-[#FAFAF8] border border-border/80 hover:border-accent/40 transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-primary">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-accent">
            <Sparkles className="w-4 h-4" />
            <span>Ready for Your Own Approval?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-normal text-white">
            Let's Write Your <span className="text-accent">Success Story</span> Next
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Whether your destination is Australia, Schengen Europe, New Zealand, Canada, or the UK, our certified counselors are here to navigate every step of your application.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="rounded-full bg-accent hover:bg-white hover:text-primary text-white font-bold px-8 shadow-xl transition-all">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white/30 text-white hover:bg-white/10">
              <Link href="/countries">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
