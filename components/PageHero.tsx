'use client';

import { SmartImage } from '@/components/SmartImage';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  imageSrc: string;
  className?: string;
  alt?: string;
}

export function PageHero({ title, subtitle, eyebrow, imageSrc, className, alt = "" }: PageHeroProps) {
  return (
    <section className={cn("relative h-[60vh] min-h-[500px] w-full flex items-center justify-center mt-20 overflow-hidden", className)}>
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.9, filter: "blur(5px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <SmartImage
          src={imageSrc}
          alt={alt || title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
      </motion.div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12">
        {eyebrow && (
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-[11px] font-bold tracking-[0.3em] text-accent uppercase mb-6"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-normal text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
