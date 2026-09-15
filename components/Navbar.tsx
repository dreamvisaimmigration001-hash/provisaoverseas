'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Destinations', href: '/countries' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Automatically close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300 ease-in-out',
          scrolled 
            ? 'bg-bg-primary/90 backdrop-blur-md h-16 sm:h-20 shadow-xs border-b border-border/60' 
            : 'bg-transparent h-20 sm:h-28'
        )}
      >
        <nav className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <span className="sr-only">Pro Visa Overseas</span>
              <div className="relative w-[150px] sm:w-[180px] h-[44px] sm:h-[56px]">
                <Image
                  src="/logo.png"
                  alt="Pro Visa Overseas"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2.5 text-primary hover:bg-bg-secondary/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open main menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-10 bg-bg-primary/60 backdrop-blur-md px-8 py-3 rounded-full border border-border/50">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-[11px] font-bold uppercase tracking-[0.2em] transition-all',
                    isActive ? 'text-accent' : 'text-primary/70 hover:text-primary'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button asChild variant="default" className="rounded-full">
              <Link href="/contact">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Portal */}
      {mounted && createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[100] lg:hidden">
              {/* Dimmed Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 bg-primary/80 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Side Drawer Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                className="fixed inset-y-0 right-0 z-[101] w-full max-w-xs sm:max-w-sm bg-bg-primary shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-border/60 bg-bg-primary">
                  <Link
                    href="/"
                    className="flex items-center gap-3 focus:outline-none"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="relative w-[140px] h-[44px]">
                      <Image
                        src="/logo.png"
                        alt="Pro Visa Overseas"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full p-2.5 text-primary hover:bg-bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted px-3 mb-2">
                    Menu
                  </div>
                  {navigation.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all',
                          isActive
                            ? 'bg-accent/15 text-accent font-semibold'
                            : 'text-primary hover:bg-bg-secondary/70 hover:text-primary'
                        )}
                      >
                        <span>{item.name}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-accent" />
                        )}
                      </Link>
                    );
                  })}

                  {/* Quick Contact Info */}
                  <div className="pt-6 mt-6 border-t border-border/60">
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted px-3 mb-3">
                      Get In Touch
                    </div>
                    <div className="space-y-2 text-sm text-text-muted px-3">
                      <p className="flex items-center gap-2.5 py-1">
                        <Phone className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-text-dark font-medium">Chandigarh, Sector 31-D</span>
                      </p>
                      <p className="flex items-center gap-2.5 py-1">
                        <Mail className="w-4 h-4 text-accent shrink-0" />
                        <a href="mailto:info@provisaoverseas.com" className="hover:text-accent truncate">
                          info@provisaoverseas.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Drawer Footer CTA */}
                <div className="p-6 border-t border-border/60 bg-bg-card/60">
                  <Button asChild variant="default" className="w-full rounded-full h-12 text-sm font-semibold shadow-md">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Book a Consultation
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
