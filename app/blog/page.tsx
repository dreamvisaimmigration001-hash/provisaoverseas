'use client';

import * as React from 'react';
import { PageHero } from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Navigating the New Point System for Australian PR",
    category: "Immigration",
    excerpt: "An in-depth look at recent changes to the Australian permanent residency points system and what it means for skilled workers.",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1528072164453-6082490b83e4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Top 5 Universities in Canada for International Students",
    category: "Student Visa",
    excerpt: "Exploring the best educational institutions in Canada that offer exceptional support for international students.",
    date: "September 28, 2023",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Complete Guide to UK Family and Spouse Visa Pathways",
    category: "Family Visa",
    excerpt: "A comprehensive guide to requirements, financial criteria, and application steps for UK Family migration.",
    date: "September 15, 2023",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Essential Documents for US Visitor Visas",
    category: "Visitor Visa",
    excerpt: "Make sure you are prepared for your consular interview with this essential documentation checklist.",
    date: "August 30, 2023",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <PageHero 
        title="Insights & Updates" 
        subtitle="Latest news, guides, and expert perspectives on global immigration."
        imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-wrap gap-3 mb-12">
            {["All", "Immigration", "Student Visa", "Family Visa", "Visitor Visa", "PR", "Country Guides"].map((cat) => (
              <button 
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === 'All' ? 'bg-primary-deep text-white' : 'bg-offwhite text-text-muted hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-64 md:h-80 rounded-sm overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-wide uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center text-sm text-text-muted mb-3">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-deep mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center text-sm font-bold text-accent group-hover:text-primary-deep transition-colors">
                  Read Article &rarr;
                </div>
              </article>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
