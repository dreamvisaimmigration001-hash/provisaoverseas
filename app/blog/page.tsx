'use client';

import * as React from 'react';
import { PageHero } from '@/components/PageHero';
import { SmartImage } from '@/components/SmartImage';
import Link from 'next/link';
import { blogPosts, getAllCategories } from '@/lib/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const categories = getAllCategories();

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary">
      <PageHero 
        title="Insights & Updates" 
        subtitle="Latest news, guides, and expert perspectives on global immigration."
        imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-14" role="tablist" aria-label="Blog categories">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-primary text-white shadow-sm ring-1 ring-primary' 
                      : 'bg-bg-secondary text-text-muted hover:bg-gray-200 hover:text-primary'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-bg-secondary rounded-2xl">
              <p className="text-lg text-text-muted">No articles found in this category yet.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-4 text-sm font-semibold text-accent hover:underline cursor-pointer"
              >
                View all articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group flex flex-col h-full bg-white rounded-2xl border border-border/60 hover:border-accent/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="relative h-64 md:h-72 w-full overflow-hidden block bg-gray-100"
                    aria-label={`Read article: ${post.title}`}
                  >
                    <SmartImage
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-primary tracking-wider uppercase shadow-sm">
                      {post.category}
                    </div>
                  </Link>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-medium text-text-muted mb-3.5">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-heading font-normal text-primary mb-3.5 group-hover:text-accent transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-text-muted leading-relaxed font-light mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                      <span className="text-xs text-text-muted font-medium">
                        By <span className="text-primary font-semibold">{post.author.name}</span>
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary transition-colors group/link"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Need advice CTA */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase block mb-2">PERSONALIZED ADVICE</span>
              <h3 className="text-2xl md:text-3xl font-heading font-normal mb-3">Have questions about your visa profile?</h3>
              <p className="text-white/70 font-light text-sm md:text-base leading-relaxed">
                Every visa journey is unique. Speak directly with our licensed migration consultants in Chandigarh to assess your eligibility and create a winning roadmap.
              </p>
            </div>
            <Link
              href="/contact"
              className="whitespace-nowrap px-8 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-all text-sm shadow-md"
            >
              Book Free Assessment
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
