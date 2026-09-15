'use client';

import * as React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { 
  Shield, 
  Target, 
  Compass, 
  Users, 
  GraduationCap,
  Plane,
  ShieldCheck, 
  Award, 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  FileCheck2,
  ArrowUpRight
} from 'lucide-react';
import { SmartImage } from '@/components/SmartImage';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';




const values = [
  { icon: Shield, title: "Integrity", description: "We operate with complete honesty and transparency in every consultation." },
  { icon: Target, title: "Expertise", description: "Our team stays updated with the latest immigration policies and procedures." },
  { icon: Compass, title: "Responsibility", description: "We take our role in your life-changing journey seriously." },
  { icon: Users, title: "Client-First", description: "Your long-term success and peace of mind are our highest priorities." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      <PageHero
        title="More Than A Visa."
        subtitle="We help ambitious individuals and families navigate the complexities of global mobility with confidence."
        imageSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Story Section - Editorial layout */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-6">OUR STORY</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-8 leading-tight">
                A Vision For <br /> Global Mobility.
              </h2>
              <p className="text-lg text-text-muted mb-6 font-light leading-relaxed">
                Pro Visa Overseas is a premium immigration and visa consultancy dedicated to helping clients build their futures abroad. We understand that moving to a new country is one of the most significant decisions of your life, and we treat it with the professional respect it deserves.
              </p>
              <p className="text-lg text-text-muted font-light leading-relaxed">
                Our team of dedicated professionals provides clear, actionable, and legally sound advice to students, professionals, and families seeking overseas education, career advancement, and permanent residency.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[700px] rounded-[32px] overflow-hidden"
            >
              <SmartImage
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee6c?auto=format&fit=crop&w=1200&q=80"
                alt="Consultation meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">OUR PRINCIPLES</span>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-4">The Values We Stand By</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-bg-card p-10 rounded-[24px] border border-border shadow-sm text-center hover:border-accent/30 transition-colors group"
                >
                  <div className="w-16 h-16 mx-auto rounded-full border-2 border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent/5 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-normal text-primary mb-4">{val.title}</h3>
                  <p className="text-text-muted text-sm font-light leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Bento Grid: Global Mobility in Action */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">THE IMMIGRATION EXPERIENCE</span>
            <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-6">
              Where Ambition Meets Global Reality
            </h2>
            <p className="text-text-muted text-lg font-light leading-relaxed">
              Every visa we handle represents a transformative life chapter. Explore how our strategic advisory translates into real, tangible journeys worldwide.
            </p>
          </div>

          {/* Asymmetric Visual Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Bento Card 1: University Campus Admissions (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 relative h-[440px] md:h-[480px] rounded-[32px] overflow-hidden group shadow-lg"
            >
              <SmartImage
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="International University Campus"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />
              
              {/* Floating Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-xs">
                  <GraduationCap className="w-4 h-4 text-accent-soft" />
                  <span>Tier-1 Global Universities</span>
                </div>
              </div>

              {/* Bottom Visual Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent-soft uppercase block mb-2">
                  01 / STUDY PERMITS & ADMISSIONS
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-normal text-white mb-2">
                  World-Class Campus Placements
                </h3>
                <p className="text-white/80 text-sm font-light leading-relaxed max-w-xl mb-4">
                  Securing offer letters, scholarship evaluations, and study visas across Canada, the UK, Australia, and New Zealand.
                </p>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">1,800+ Admissions</span>
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">End-to-End SOP Writing</span>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2: Passport & Visa Stamping (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative h-[440px] md:h-[480px] rounded-[32px] overflow-hidden group shadow-lg"
            >
              <SmartImage
                src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80"
                alt="Passport and Visa Approvals"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />
              
              {/* Floating Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-accent-soft" />
                  <span>98.4% Lodgement Success</span>
                </div>
              </div>

              {/* Bottom Visual Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent-soft uppercase block mb-2">
                  02 / VERIFIED DOCUMENTATION
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-normal text-white mb-2">
                  Forensic Dossier Audits
                </h3>
                <p className="text-white/80 text-sm font-light leading-relaxed mb-4">
                  Zero-defect submissions cross-verified to pass embassy scrutiny without requests for additional evidence.
                </p>
                <Link
                  href="/success-stories"
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-soft transition-colors"
                >
                  <span>Explore Real Stamped PPRs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 3: 1-on-1 Consultation Session (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative h-[400px] md:h-[440px] rounded-[32px] overflow-hidden group shadow-lg"
            >
              <SmartImage
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1000&q=80"
                alt="1-on-1 Strategy Session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />
              
              {/* Floating Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-xs">
                  <Users className="w-4 h-4 text-accent-soft" />
                  <span>Licensed Advisory</span>
                </div>
              </div>

              {/* Bottom Visual Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent-soft uppercase block mb-2">
                  03 / PROFILE STRATEGY
                </span>
                <h3 className="text-2xl font-heading font-normal text-white mb-2">
                  Personalized Case Architecture
                </h3>
                <p className="text-white/80 text-sm font-light leading-relaxed mb-4">
                  CRS scoring, occupation quota matching, and clear risk analysis before you commit a single dollar.
                </p>
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">One Dedicated Case Officer</span>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 4: Airport Touchdown & Arrival (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:col-span-7 relative h-[400px] md:h-[440px] rounded-[32px] overflow-hidden group shadow-lg"
            >
              <SmartImage
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80"
                alt="Airport Departure and Arrival"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/45 to-transparent" />
              
              {/* Floating Top Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold shadow-xs">
                  <Plane className="w-4 h-4 text-accent-soft" />
                  <span>Pre & Post-Landing Care</span>
                </div>
              </div>

              {/* Bottom Visual Content */}
              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[10px] font-bold tracking-[0.25em] text-accent-soft uppercase block mb-2">
                  04 / SETTLEMENT & LANDING
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-normal text-white mb-2">
                  Touchdown in Your New Home
                </h3>
                <p className="text-white/80 text-sm font-light leading-relaxed max-w-xl mb-4">
                  From airport transit instructions to overseas bank account opening and social insurance guidance, our care continues after arrival.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/90">
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">Pre-Departure Briefings</span>
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">Housing Guidance</span>
                  <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">Social Security Setup</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Proof & Stamped Document Showcase */}
      <section className="py-24 md:py-32 bg-bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual Stamped Approval Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              {/* Background ambient glow */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

              {/* Main Stamped PPR Document Preview */}
              <div className="relative z-10 bg-bg-card p-4 sm:p-6 rounded-[32px] border border-border shadow-xl">
                <div className="relative h-[380px] sm:h-[450px] rounded-[24px] overflow-hidden border border-border/50">
                  <SmartImage
                    src="/ppr/ppr-1.jpeg"
                    alt="Verified Canadian PPR Approval Letter with Pro Visa Overseas Stamp"
                    fill
                    className="object-cover object-top"
                  />
                  {/* Subtle document gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Stamped Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-bg-card/95 backdrop-blur-md p-4 rounded-2xl border border-border shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary">IRCC Canada Passport Request</p>
                          <p className="text-[11px] text-text-muted">Pro Visa Overseas Verified File</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/20">
                        OFFICIAL PPR
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Metric Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-primary text-white p-5 sm:p-6 rounded-[24px] shadow-2xl border border-border/20 max-w-[220px]">
                <div className="text-3xl font-heading font-normal text-accent mb-1">
                  5,000+
                </div>
                <div className="text-xs font-semibold text-white mb-1">
                  Visas Approved
                </div>
                <div className="text-[11px] text-white/70 font-light">
                  Across Canada, Australia, UK, US & Europe.
                </div>
              </div>
            </motion.div>

            {/* Right Column: Strategic Verification Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">VERIFIABLE CREDENTIALS</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-primary mb-6 leading-tight">
                  Real Approvals. <br />
                  Zero Ambiguity.
                </h2>
                <p className="text-lg text-text-muted font-light leading-relaxed">
                  We believe trust is earned through transparency. Rather than promises, we showcase verified approval letters issued directly by global immigration authorities to our clients.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Forensic Dossier Compilation",
                    desc: "Eliminating inaccuracies and omissions before your application ever reaches an embassy desk."
                  },
                  {
                    title: "Statutory Law Compliance",
                    desc: "Full adherence to international immigration legislation and ethical representation standards."
                  },
                  {
                    title: "Fixed Written Fee Agreements",
                    desc: "Transparent contracts with zero hidden surcharges or surprise procedural expenses."
                  },
                  {
                    title: "Direct Access to Case Officers",
                    desc: "Direct communication with the consultant who personally manages your file."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 bg-bg-card p-4 rounded-2xl border border-border shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-0.5">{item.title}</h4>
                      <p className="text-text-muted text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button size="lg" variant="gold" asChild className="rounded-full shadow-lg group px-8">
                  <Link href="/success-stories" className="flex items-center justify-center gap-3">
                    <span>View Stamped PPR Letters</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                  <Link href="/contact" className="flex items-center justify-center">
                    Book Free Consultation
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
