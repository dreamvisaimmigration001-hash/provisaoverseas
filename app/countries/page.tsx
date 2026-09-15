'use client';

import * as React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { countryImages } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SmartImage } from '@/components/SmartImage';

export default function CountriesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      <PageHero 
        title="Destinations" 
        subtitle="Discover the world's most sought-after destinations for education, career growth, and permanent residency."
        imageSrc="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 md:py-32 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(countryImages).map((country, idx) => (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative h-[450px] rounded-[24px] overflow-hidden cursor-pointer"
              >
                <Link href={`/countries/${country.slug}`} className="block w-full h-full">
                  <SmartImage
                    src={country.thumbnail}
                    alt={country.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    <h3 className="text-3xl font-heading font-normal text-white mb-3">{country.name}</h3>
                    <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light leading-relaxed">
                      {country.description}
                    </p>
                    <div className="flex items-center text-accent-soft font-medium text-sm">
                      View Opportunities <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
