'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { submitConsultation, type ConsultationFormData } from '@/app/actions/consultation';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ConsultationFormData>();
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const onSubmit = async (data: ConsultationFormData) => {
    setErrorMessage(null);
    try {
      const result = await submitConsultation(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage(result.error || 'Failed to submit consultation request. Please try again.');
      }
    } catch {
      setErrorMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-bg-primary min-h-screen">
      <div className="pt-36 pb-16 text-center max-w-3xl mx-auto px-6">
        <span className="text-[11px] font-bold tracking-[0.3em] text-accent uppercase block mb-6">REACH OUT & BOOK</span>
        <h1 className="text-4xl md:text-6xl font-heading font-normal text-primary mb-6">Let's Talk About Your Future.</h1>
        <p className="text-text-muted text-lg font-light leading-relaxed">
          Book a free consultation or visit our office. Our immigration experts are ready to evaluate your profile and guide your global ambitions.
        </p>
      </div>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-bg-card p-8 sm:p-10 rounded-[32px] border border-border shadow-sm space-y-8">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase block mb-3">DIRECT CONTACT</span>
                  <h3 className="text-2xl font-heading font-normal text-primary mb-4">We Are Here To Help</h3>
                  <p className="text-text-muted text-sm font-light leading-relaxed">
                    Have questions about study admissions, visitor visas, or permanent residency? Connect directly with our advisors.
                  </p>
                </div>

                <div className="space-y-6 pt-2 border-t border-border">
                  {/* Phone and address commented out — will be added when finalized
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-heading font-normal text-primary text-base mb-1">Phone & WhatsApp</h4>
                      <p className="text-text-muted text-sm font-light">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-heading font-normal text-primary text-base mb-1">Office Location</h4>
                      <p className="text-text-muted text-sm font-light leading-relaxed">
                        2nd Floor, SECTOR-31D, SCO 37,<br />
                        Sector 31, Chandigarh, 160030, India
                      </p>
                    </div>
                  </div>
                  */}

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div className="pt-0.5">
                      <h4 className="font-heading font-normal text-primary text-base mb-1">Working Hours</h4>
                      <p className="text-text-muted text-sm font-light leading-relaxed">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Consultation Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-bg-card p-8 sm:p-12 md:p-14 rounded-[32px] border border-border shadow-sm">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-heading font-normal text-primary mb-4">Request Received</h3>
                    <p className="text-text-muted mb-10 max-w-md mx-auto font-light leading-relaxed">
                      Thank you for booking a consultation. Your details have been sent to our immigration advisors and we will contact you shortly to confirm your appointment time.
                    </p>
                    <Button asChild variant="outline" className="rounded-full h-12 px-8">
                      <Link href="/">Return to Homepage</Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase block mb-2">APPOINTMENT BOOKING</span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-normal text-primary">Book Free Consultation</h3>
                    </div>

                    {errorMessage && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold tracking-wider uppercase text-primary">Full Name</label>
                        <input 
                          {...register("fullName", { required: true })}
                          className="w-full px-5 py-4 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors bg-white font-light text-sm"
                          placeholder="John Doe"
                        />
                        {errors.fullName && <span className="text-xs text-red-500">This field is required</span>}
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold tracking-wider uppercase text-primary">Email Address</label>
                        <input 
                          type="email"
                          {...register("email", { required: true })}
                          className="w-full px-5 py-4 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors bg-white font-light text-sm"
                          placeholder="john@example.com"
                        />
                        {errors.email && <span className="text-xs text-red-500">This field is required</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold tracking-wider uppercase text-primary">Phone Number</label>
                        <input 
                          {...register("phone", { required: true })}
                          className="w-full px-5 py-4 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors bg-white font-light text-sm"
                          placeholder="+1 (555) 000-0000"
                        />
                        {errors.phone && <span className="text-xs text-red-500">This field is required</span>}
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold tracking-wider uppercase text-primary">Preferred Date</label>
                        <input 
                          type="date"
                          {...register("date", { required: true })}
                          className="w-full px-5 py-4 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors bg-white font-light appearance-none text-sm"
                        />
                        {errors.date && <span className="text-xs text-red-500">Please select a date</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold tracking-wider uppercase text-primary">Destination Country</label>
                        <select 
                          {...register("country", { required: true })}
                          className="w-full px-5 py-4 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors bg-white font-light appearance-none text-sm"
                        >
                          <option value="">Select a country</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="USA">United States</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="Europe">Europe</option>
                        </select>
                        {errors.country && <span className="text-xs text-red-500">Please select a country</span>}
                      </div>
                      <div className="space-y-2.5">
                        <label className="text-xs font-bold tracking-wider uppercase text-primary">Visa Category</label>
                        <select 
                          {...register("visaType", { required: true })}
                          className="w-full px-5 py-4 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors bg-white font-light appearance-none text-sm"
                        >
                          <option value="">Select a category</option>
                          <option value="Study">Study Visa</option>
                          <option value="Visitor">Visitor Visa</option>
                          <option value="PR">Permanent Residency</option>
                          <option value="Family">Family Immigration</option>
                          <option value="Business">Business / Investor</option>
                        </select>
                        {errors.visaType && <span className="text-xs text-red-500">Please select a category</span>}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label className="text-xs font-bold tracking-wider uppercase text-primary">Additional Details (Optional)</label>
                      <textarea 
                        {...register("message")}
                        rows={3}
                        className="w-full px-5 py-4 rounded-xl border border-border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors bg-white font-light resize-none text-sm"
                        placeholder="Provide brief details about your academic background, travel dates, or specific questions..."
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" variant="gold" size="lg" className="w-full rounded-full h-14 text-base" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting Request..." : "Book My Free Consultation"}
                      </Button>
                    </div>
                    
                    <p className="text-xs text-text-muted text-center mt-3 font-light">
                      By submitting this form, you agree to our privacy policy. Your information is kept strictly confidential.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
