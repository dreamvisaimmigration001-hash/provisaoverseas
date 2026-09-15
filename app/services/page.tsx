'use client';

import * as React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { servicesData } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SmartImage } from '@/components/SmartImage';

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      <PageHero 
        title="Our Expertise" 
        subtitle="End-to-end guidance for all your immigration and global mobility needs."
        imageSrc="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 md:py-32 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicesData.map((service, idx) => {
              return (
                <motion.div 
                  key={service.slug} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
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
    </div>
  );
}
