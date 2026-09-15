import Link from "next/link";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary border-t-4 border-accent text-offwhite pt-24 pb-12">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8 lg:col-span-1">
            <div className="bg-white/95 p-4 rounded-xl inline-block w-[200px]">
              <Logo className="w-full h-auto" />
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
              Thoughtful, premium international immigration and visa consultancy
              helping clients build their future abroad.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-primary transition-all">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-primary transition-all">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-primary transition-all">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white hover:text-primary transition-all">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-4 w-4" />
              </a>
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-normal text-white mb-8 text-lg">
              Navigation
            </h3>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/countries"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Countries
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-normal text-white mb-8 text-lg">
              Services
            </h3>
            <ul className="space-y-4 text-sm font-light text-white/60">
              <li>
                <Link
                  href="/services/study-abroad"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link
                  href="/services/visitor-visa"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Visitor Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/services/permanent-residency"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  PR / Immigration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/family-immigration"
                  className="hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Family Immigration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-normal text-white mb-8 text-lg">
              Contact Us
            </h3>
            <ul className="space-y-6 text-sm font-light text-white/60">
              {/* Phone and address commented out — will be added when finalized
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-accent">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="pt-2">
                  <span className="block text-white font-medium mb-1">
                    Phone & WhatsApp
                  </span>
                  <span>+1 (555) 123-4567</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-accent">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="pt-2">
                  <span className="block text-white font-medium mb-1">
                    Office Location
                  </span>
                  <span>
                    2nd Floor, SECTOR-31D, SCO 37,
                    <br />
                    Sector 31, Chandigarh, 160030, India
                  </span>
                </div>
              </li>
              */}
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center group">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />{" "}
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40 font-light">
            &copy; {new Date().getFullYear()} Pro Visa Overseas. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40 font-light">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-xs text-white/30 text-center max-w-4xl mx-auto font-light leading-relaxed">
          <strong className="text-white/50 font-normal">Disclaimer:</strong>{" "}
          Visa and immigration outcomes depend on individual circumstances and
          applicable immigration rules. Pro Visa Overseas does not guarantee
          visa approval. The information provided on this website is for general
          guidance and does not constitute legal advice.
        </div>
      </div>
    </footer>
  );
}
