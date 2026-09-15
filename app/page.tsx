'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { countryImages, servicesData, processSteps, trustIndicators } from '@/lib/data';
import * as Accordion from '@radix-ui/react-accordion';
import { SmartImage } from '@/components/SmartImage';
import LatestPPR from '@/components/LatestPPR';

const faqs = [
  {
    question: "Which countries do you assist with?",
    answer: "We primarily assist with immigration and visa services for Australia, Canada, the United Kingdom, the United States, New Zealand, and various European countries."
  },
  {
    question: "Do you help with student visas?",
    answer: "Yes, our Study Abroad experts guide you through university admissions, documentation, and the entire student visa application process."
  },
  {
    question: "Do you assist with Visitor and Tourist visas?",
    answer: "Yes, we handle tourist and visitor visas, family visit applications, and short-term travel permits with comprehensive documentation support."
  },
  {
    question: "How does the consultation process work?",
    answer: "It starts with a detailed profile assessment where we understand your background, goals, and preferred destinations. Based on this, we recommend the most viable pathways and outline the steps involved."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      
      {/* 1. LUXURY EDITORIAL HERO SECTION */}
      <section className="relative min-h-[92vh] pt-36 pb-20 sm:pt-40 lg:pt-44 lg:pb-28 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-between overflow-hidden">
        {/* Ambient subtle glow backdrops */}
        <div className="absolute top-12 left-1/4 -z-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 -z-10 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
              }}
              className="space-y-8"
            >
              {/* Trust Badge */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-bg-card/90 border border-border shadow-xs backdrop-blur-md w-fit"
              >
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-primary uppercase">
                  Licensed Overseas Visa Advisory
                </span>
                <span className="text-border">|</span>
                <span className="text-[11px] font-medium text-accent">98.4% Approval Rate</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-3"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-heading font-normal leading-[1.06] text-primary tracking-tight">
                  Seamless Visa <br />
                  <span className="italic font-light text-accent selection:bg-accent/20">Pathways</span> to the World.
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-text-muted text-lg sm:text-xl leading-relaxed max-w-2xl font-body font-light"
              >
                Navigate global immigration with verified clarity. From university admissions and visitor visas to permanent residency and family immigration across Australia, Canada, the UK, the USA, and Europe.
              </motion.p>

              {/* Action Buttons & Fast Assessment CTA */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <Button size="lg" variant="default" asChild className="rounded-full shadow-lg hover:shadow-xl transition-all group px-8">
                  <Link href="/contact" className="flex items-center justify-center gap-3">
                    <span>Book Free Consultation</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full border-border hover:bg-bg-secondary px-8">
                  <Link href="/countries">
                    Explore 6+ Destinations
                  </Link>
                </Button>
              </motion.div>

              {/* Quick Destination Pills */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pt-4 border-t border-border/70"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted mr-1">Popular:</span>
                  {[
                    { name: "Australia", slug: "australia" },
                    { name: "Canada", slug: "canada" },
                    { name: "United Kingdom", slug: "uk" },
                    { name: "United States", slug: "usa" },
                    { name: "Europe", slug: "europe" },
                  ].map((dest) => (
                    <Link
                      key={dest.slug}
                      href={`/countries/${dest.slug}`}
                      className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-bg-card border border-border/80 text-primary hover:border-accent hover:text-accent hover:bg-bg-secondary transition-all"
                    >
                      {dest.name} →
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Editorial Showcase */}
          <div className="lg:col-span-5 relative pt-4 pb-4">
            <div className="relative w-full max-w-[540px] mx-auto aspect-[4/5] sm:h-[620px] rounded-[36px] p-3 bg-gradient-to-b from-white/70 to-bg-card/40 border border-border/80 shadow-2xl backdrop-blur-xl">
              {/* Main Feature Hero Visual: Airplane & Global Travel */}
              <div className="relative w-full h-full rounded-[28px] overflow-hidden group">
                <SmartImage
                  src="/hero-flight.jpg"
                  alt="Passenger plane soaring above global immigration flight routes and illuminated world globe"
                  fill
                  priority
                  className="object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                
                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary/25 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-primary-deep/85 backdrop-blur-md text-[11px] font-semibold text-white tracking-wider uppercase border border-white/10">
                    Worldwide Visas
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-semibold shadow-sm">
                    <span className="text-accent">★</span> 4.9/5 Rating
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-5 left-5 right-5 p-6 rounded-[22px] bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-2 z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
                      Global Immigration
                    </span>
                    <span className="text-xs font-medium text-text-muted">Direct Guidance</span>
                  </div>
                  <h4 className="text-lg font-heading font-medium text-primary leading-tight">
                    Your flight to a brighter international education & future
                  </h4>
                  <p className="text-xs text-text-muted font-light leading-relaxed">
                    Study, visitor, and permanent settlement advisory across Australia, Canada, UK, US & Europe.
                  </p>
                </div>
              </div>

              {/* Floating Stat Card 1 (Top Right offset) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="hidden sm:flex absolute top-4 -right-4 lg:-right-6 items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-bg-card border border-border shadow-xl backdrop-blur-xl z-20"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent font-bold">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-primary">5,000+ Visas</p>
                  <p className="text-[11px] text-text-muted">Successfully Granted</p>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 (Bottom Left offset) */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="hidden sm:flex absolute bottom-4 -left-4 lg:-left-6 items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-primary text-white border border-primary-deep shadow-2xl backdrop-blur-xl z-20"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">Top 6 Destinations</p>
                  <p className="text-[11px] text-white/70">Global Immigration</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {[
            { metric: "12+ Years", label: "Immigration Excellence" },
            { metric: "98.4%", label: "Visa Approval Success" },
            { metric: "5,000+", label: "Clients Relocated" },
            { metric: "6 Countries", label: "Direct University & Institutional Ties" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-normal text-primary">
                {stat.metric}
              </span>
              <span className="text-xs sm:text-sm text-text-muted font-light mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 LATEST PPR */}
      <LatestPPR showViewAllLink={true} />

      {/* 3. DESTINATIONS */}
      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-heading font-normal text-primary mb-6"
            >
              Where Will Your Story Take You?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-text-muted max-w-2xl mx-auto text-lg font-light leading-relaxed"
            >
              Explore our comprehensive immigration pathways to the world's most desirable destinations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(countryImages).map((country, idx) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 150, filter: "blur(12px)", scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -20, scale: 1.03, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
                className="group relative h-[480px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              >
                <Link href={`/countries/${country.slug}`} className="block w-full h-full">
                  <SmartImage
                    src={country.thumbnail}
                    alt={country.name}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary/30 to-transparent opacity-70 transition-all duration-[1s] group-hover:opacity-100 group-hover:via-primary/50" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-6">
                    <h3 className="text-4xl font-heading font-normal text-white mb-3 tracking-tight">{country.name}</h3>
                    <p className="text-white/90 text-base mb-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-[1s] delay-75 font-light leading-relaxed">
                      {country.description}
                    </p>
                    <div className="flex items-center text-accent font-medium text-sm">
                      Explore Destination <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-[1s] group-hover:translate-x-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES - EDITORIAL STYLE */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">OUR EXPERTISE</span>
              <h2 className="text-4xl md:text-5xl font-heading font-normal text-primary mb-6">
                Specialized Immigration Services
              </h2>
            </div>
            <Button variant="outline" asChild className="shrink-0 rounded-full">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicesData.slice(0, 4).map((service, idx) => {
              return (
                <motion.div 
                  key={service.slug} 
                  initial={{ opacity: 0, y: 80, filter: "blur(8px)", scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col md:flex-row gap-6 p-6 rounded-[24px] bg-bg-card border border-border hover:shadow-lg transition-all duration-500"
                >
                  <div className="w-full md:w-2/5 h-48 md:h-auto rounded-[16px] overflow-hidden shrink-0 relative">
                    <SmartImage
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1 py-4 pr-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-3">{service.title}</span>
                    <h3 className="text-2xl font-heading font-normal text-primary mb-3 leading-tight">{service.title}</h3>
                    <p className="text-text-muted mb-6 text-sm font-light leading-relaxed">{service.description}</p>
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center text-sm font-medium text-primary mt-auto group-hover:text-accent transition-colors">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US - MAGAZINE SPLIT */}
      <section className="py-24 md:py-32 bg-bg-card border-y border-border overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            <div className="w-full lg:w-[55%] relative h-[600px] lg:h-[800px] rounded-[32px] overflow-hidden">
              <SmartImage 
                src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&w=1200&q=80"
                alt="Consultation meeting"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full lg:w-[45%] py-8">
              <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-6">WHY PRO VISA OVERSEAS</span>
              <h2 className="text-4xl md:text-5xl font-heading font-normal text-primary mb-10 leading-tight">
                Guidance That <br/> Feels Personal.
              </h2>
              
              <div className="space-y-10">
                {[
                  { title: "Personalized Guidance", text: "Tailored to your specific profile and long-term aspirations." },
                  { title: "Clear Process", text: "Transparent steps, no hidden fees, and absolute clarity at every stage." },
                  { title: "Destination-Focused Advice", text: "Expertise across top international markets, matching you to the right country." },
                  { title: "End-to-End Support", text: "From the first consultation until you safely land in your new home." }
                ].map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="text-2xl font-heading font-normal text-accent/50 group-hover:text-accent transition-colors shrink-0 pt-1">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-normal text-primary mb-2">{feature.title}</h4>
                      <p className="text-text-muted font-light leading-relaxed">{feature.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-14">
                <Button size="lg" asChild className="rounded-full">
                  <Link href="/about">Discover Our Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS TIMELINE */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">OUR PROCESS</span>
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-primary">
              Your Path Forward
            </h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-bg-primary bg-bg-card text-accent font-heading shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
                  {step.step}
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-[24px] bg-bg-card border border-border shadow-sm group-hover:border-accent/30 transition-colors">
                  <div className="flex flex-col">
                    <h3 className="font-heading text-xl font-normal text-primary mb-2">{step.title}</h3>
                    <p className="text-text-muted font-light leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IMAGE COLLAGE SECTION */}
      <section className="py-16 md:py-24 bg-bg-secondary overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 80, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-1 md:col-span-1 aspect-[3/4] relative rounded-[24px] overflow-hidden mt-12 md:mt-24"
            >
              <SmartImage src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80" alt="Students" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 80, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-1 md:col-span-2 aspect-[16/9] relative rounded-[24px] overflow-hidden"
            >
              <SmartImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Professionals" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 80, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-2 md:col-span-1 aspect-square relative rounded-[24px] overflow-hidden md:-mt-12"
            >
              <SmartImage src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=600&q=80" alt="Travel" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="relative py-32 md:py-48 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmartImage
            src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&w=2850&q=80"
            alt="New Zealand landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] text-accent-soft uppercase block mb-6">TAKE THE FIRST STEP</span>
          <h2 className="text-4xl md:text-6xl font-heading font-normal text-white mb-8 leading-tight">
            Ready For Your <br className="hidden md:block"/> Next Chapter?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button size="lg" variant="gold" asChild className="w-full sm:w-auto rounded-full">
              <Link href="/contact">
                Book a Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white rounded-full transition-all">
              <Link href="/countries">
                Explore Destinations
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 9. FAQs */}
      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-4">FAQS</span>
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-primary">
              Common Questions
            </h2>
          </div>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="border-b border-border bg-transparent">
                <Accordion.Header>
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 font-medium transition-all hover:text-accent w-full text-left [&[data-state=open]>svg]:rotate-180 group">
                    <span className="font-heading text-primary text-xl font-normal group-hover:text-accent transition-colors">{faq.question}</span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-text-muted transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-text-muted pb-6 text-base leading-relaxed font-light data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

    </div>
  );
}
