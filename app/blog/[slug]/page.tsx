import * as React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SmartImage } from '@/components/SmartImage';
import Link from 'next/link';
import { 
  getAllBlogPosts, 
  getBlogPostBySlug, 
  getRelatedPosts 
} from '@/lib/blog';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Info, 
  Lightbulb, 
  AlertTriangle,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Pro Visa Overseas',
      description: 'The requested blog article could not be found.',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.provisaoverseas.com';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Pro Visa Overseas`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 2);

  return (
    <article className="min-h-screen bg-bg-primary pt-28 pb-20">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 py-4">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-primary font-medium truncate max-w-xs sm:max-w-md">
              {post.title}
            </span>
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="max-w-5xl mx-auto px-6 pt-6 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-accent/10 text-accent font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-text-muted text-xs">•</span>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>{post.readTime}</span>
          </div>
          <span className="text-text-muted text-xs">•</span>
          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>{post.date}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-primary leading-tight mb-8">
          {post.title}
        </h1>

        <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Author metadata */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              {post.author.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">{post.author.name}</p>
              <p className="text-xs text-text-muted font-light">{post.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors px-4 py-2 rounded-full border border-border bg-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all blogs</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Hero Image */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative h-[320px] sm:h-[440px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg border border-border">
          <SmartImage
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Article Prose */}
          <main className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-border shadow-sm space-y-10">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-5">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-heading font-normal text-primary pt-2 leading-snug">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-text-muted font-light text-base sm:text-lg leading-relaxed">
                    {para}
                  </p>
                ))}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul className="space-y-3.5 my-4 pl-2">
                    {section.bulletPoints.map((point, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-text-muted font-light text-base sm:text-lg">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className={`p-6 rounded-2xl border my-6 ${
                    section.callout.type === 'tip'
                      ? 'bg-amber-50/60 border-amber-200 text-amber-950'
                      : section.callout.type === 'warning'
                      ? 'bg-rose-50/60 border-rose-200 text-rose-950'
                      : 'bg-blue-50/60 border-blue-200 text-blue-950'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {section.callout.type === 'tip' && <Lightbulb className="w-5 h-5 text-amber-600" />}
                      {section.callout.type === 'warning' && <AlertTriangle className="w-5 h-5 text-rose-600" />}
                      {section.callout.type === 'info' && <Info className="w-5 h-5 text-blue-600" />}
                      <h4 className="font-semibold text-sm sm:text-base">{section.callout.title}</h4>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed font-light opacity-90">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Tags */}
            <div className="pt-8 border-t border-border flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-bg-secondary text-primary text-xs px-3 py-1 rounded-full border border-border/60"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Box */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-bg-secondary border border-border/80 flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-heading shrink-0 shadow-sm">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-lg font-heading font-normal text-primary">{post.author.name}</h4>
                <p className="text-xs text-accent font-medium mb-2">{post.author.role} • Pro Visa Overseas</p>
                <p className="text-sm text-text-muted font-light leading-relaxed">
                  Specializing in international student visas, skilled migration, and settlement advisory. Dedicated to ensuring clear, compliant, and successful outcomes for overseas clients.
                </p>
              </div>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            
            {/* Consultation Card */}
            <div className="bg-primary text-white p-8 rounded-3xl shadow-lg border border-primary/20">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-heading font-normal mb-3">Speak With an Expert</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed mb-6">
                Need tailored advice for your immigration or study visa application? Our specialists in Chandigarh are ready to help.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm text-white/90">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a href="tel:+918427699682" className="hover:text-accent transition-colors font-medium">
                    084276 99682
                  </a>
                </div>
                <div className="text-xs text-white/60 font-light">
                  Sector 17C, Chandigarh • Mon - Sat 9:30 AM - 6:30 PM
                </div>
              </div>

              <Button variant="gold" size="lg" className="w-full rounded-full" asChild>
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>

            {/* Quick Navigation / Related Articles */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-sm">
              <h4 className="font-heading font-normal text-lg text-primary mb-6">Related Articles</h4>
              <div className="space-y-6">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.slug}`}
                    className="group block space-y-2 border-b border-border/50 pb-5 last:border-none last:pb-0"
                  >
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block">
                      {rel.category}
                    </span>
                    <h5 className="text-sm font-medium text-primary group-hover:text-accent transition-colors leading-snug">
                      {rel.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <span>{rel.date}</span>
                      <span>•</span>
                      <span>{rel.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* Bottom Read More Section */}
      <section className="max-w-5xl mx-auto px-6 mt-20 pt-16 border-t border-border">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase block mb-1">CONTINUE READING</span>
            <h3 className="text-2xl font-heading font-normal text-primary">More Guides & Perspectives</h3>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedPosts.map((rel) => (
            <article key={rel.id} className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-all">
              <Link href={`/blog/${rel.slug}`} className="block relative h-48 w-full">
                <SmartImage
                  src={rel.image}
                  alt={rel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block mb-2">
                  {rel.category}
                </span>
                <h4 className="text-lg font-heading font-normal text-primary mb-2 group-hover:text-accent transition-colors">
                  <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                </h4>
                <p className="text-xs text-text-muted line-clamp-2 font-light mb-4">
                  {rel.excerpt}
                </p>
                <Link
                  href={`/blog/${rel.slug}`}
                  className="text-xs font-semibold text-primary hover:text-accent inline-flex items-center gap-1"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
