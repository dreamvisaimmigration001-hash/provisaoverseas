'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Stamp, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PPR_IMAGES, type PPRImage } from '@/lib/ppr';

interface LatestPPRProps {
  showViewAllLink?: boolean;
}

export default function LatestPPR({ showViewAllLink = false }: LatestPPRProps) {
  const [images] = useState<PPRImage[]>(PPR_IMAGES);
  const [activeFilter, setActiveFilter] = useState<'all' | 'australia' | 'europe' | 'new-zealand'>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const displayedImages = images.filter((img) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'australia') return img.region === 'australia' || img.country.toLowerCase().includes('australia');
    if (activeFilter === 'europe') return img.region === 'europe' || ['slovakia', 'malta', 'greece', 'europe'].some(c => img.country.toLowerCase().includes(c));
    if (activeFilter === 'new-zealand') return img.region === 'new-zealand' || img.country.toLowerCase().includes('zealand');
    return true;
  });

  const checkScrollLimits = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollLimits);
      checkScrollLimits();
      window.addEventListener('resize', checkScrollLimits);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScrollLimits);
      window.removeEventListener('resize', checkScrollLimits);
    };
  }, [displayedImages, checkScrollLimits]);

  useEffect(() => {
    checkScrollLimits();
  }, [displayedImages, checkScrollLimits]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollOffset = clientWidth * 0.8;
      const targetScroll = direction === 'left' ? scrollLeft - scrollOffset : scrollLeft + scrollOffset;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null && displayedImages.length > 0) {
      setActiveImageIndex((prev) => (prev === 0 ? displayedImages.length - 1 : (prev ?? 0) - 1));
    }
  }, [activeImageIndex, displayedImages.length]);

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null && displayedImages.length > 0) {
      setActiveImageIndex((prev) => (prev === displayedImages.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  }, [activeImageIndex, displayedImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };
    if (activeImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNextImage, handlePrevImage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-[#FAFAF8] overflow-hidden relative w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent uppercase">
              AUTHENTIC CLIENT SUCCESS
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-normal text-primary"
          >
            Latest <span className="text-accent">PPR & Visas</span> — Pro Visa Overseas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-base sm:text-lg font-light mt-3 max-w-2xl mx-auto"
          >
            Original visa approvals, biometric request notices, and passport entry clearances verified for our clients.
          </motion.p>
          <div className="w-16 h-[2px] bg-accent mx-auto mt-6" />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => { setActiveFilter('all'); scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' }); }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-muted hover:text-primary border border-border hover:border-accent/40'
              }`}
            >
              All Approvals ({images.length})
            </button>
            <button
              onClick={() => { setActiveFilter('australia'); scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' }); }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === 'australia'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-muted hover:text-primary border border-border hover:border-accent/40'
              }`}
            >
              Australia
            </button>
            <button
              onClick={() => { setActiveFilter('europe'); scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' }); }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === 'europe'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-muted hover:text-primary border border-border hover:border-accent/40'
              }`}
            >
              Europe & Schengen
            </button>
            <button
              onClick={() => { setActiveFilter('new-zealand'); scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' }); }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeFilter === 'new-zealand'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-text-muted hover:text-primary border border-border hover:border-accent/40'
              }`}
            >
              New Zealand
            </button>
          </div>
        </div>
      </div>

      {/* Carousel — Edge to Edge */}
      <div className="relative w-full group/carousel">
        
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll('left')}
            className="hidden md:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-border items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll('right')}
            className="hidden md:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-border items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-6 w-full scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-12 lg:scroll-pl-24 xl:scroll-pl-32"
          style={{ 
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {displayedImages.map((img, index) => (
            <motion.div
              key={`${img.src}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
              className="min-w-[85vw] sm:min-w-[45vw] md:min-w-[30vw] lg:min-w-[22vw] snap-start"
            >
              <div 
                onClick={() => setActiveImageIndex(index)}
                className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden border border-accent/30 hover:border-accent/70"
              >
                {/* Document Card: object-top keeps the upper stamp area completely in frame */}
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-50 border border-border">
                  <Image
                    src={img.src}
                    alt={img.category ? `${img.country} ${img.category}` : `${img.country} Visa Approval`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 85vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Badge and Details */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {img.country}
                    </span>
                    {img.status && (
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                        {img.status}
                      </span>
                    )}
                  </div>
                  {img.category && (
                    <p className="text-xs font-medium text-primary line-clamp-1">
                      {img.category}
                    </p>
                  )}
                  {img.client && (
                    <p className="text-[11px] text-text-muted flex items-center justify-between">
                      <span>Client: <strong className="text-primary font-medium">{img.client}</strong></span>
                      <span className="text-accent text-[10px] font-semibold uppercase tracking-wider flex items-center gap-0.5">
                        Inspect
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          {/* Trailing spacer */}
          <div className="min-w-[4px] sm:min-w-[12px] md:min-w-[24px] lg:min-w-[48px] shrink-0" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* See All Button */}
        <div className="text-center mt-12">
          {showViewAllLink ? (
            <Link
              href="/success-stories#approvals"
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-primary font-bold px-8 py-3.5 rounded-full uppercase tracking-wider text-sm transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Explore All Success Stories & Approvals
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <button
              onClick={() => setActiveImageIndex(0)}
              className="inline-flex items-center gap-2 bg-accent text-white hover:bg-primary font-bold px-8 py-3.5 rounded-full uppercase tracking-wider text-sm transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Inspect Approvals (Full Screen)
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && displayedImages[activeImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => handlePrevImage(e)}
              className="absolute left-4 sm:left-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-40 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => handleNextImage(e)}
              className="absolute right-4 sm:right-8 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-40 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <Image
                  src={displayedImages[activeImageIndex].src}
                  alt={displayedImages[activeImageIndex].category ? `${displayedImages[activeImageIndex].country} ${displayedImages[activeImageIndex].category}` : `${displayedImages[activeImageIndex].country} Visa Approval`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
              
              {/* Image Description */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/95 px-6 py-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 max-w-[90vw] shadow-2xl">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Client Approval
                  </span>
                </div>
                <p className="font-bold text-sm sm:text-base text-white">
                  {displayedImages[activeImageIndex].country} — {displayedImages[activeImageIndex].category || 'Visa Approval'}
                </p>
                {displayedImages[activeImageIndex].client && (
                  <p className="text-xs text-accent font-medium mt-0.5">
                    Client: {displayedImages[activeImageIndex].client} {displayedImages[activeImageIndex].status ? `• ${displayedImages[activeImageIndex].status}` : ''}
                  </p>
                )}
                <p className="text-[11px] text-white/50 mt-1">
                  Document {activeImageIndex + 1} of {displayedImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
