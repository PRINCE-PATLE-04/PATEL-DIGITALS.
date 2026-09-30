import { useState } from 'react';
import { useInView } from '../hooks/useInView';

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden section-gradient-1">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-l from-gold/30 to-transparent" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="gold-divider mb-8" />
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight max-w-4xl">
            LET'S START SOMETHING GREAT.
          </h1>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-2xl">
            Have a project in mind? Reach out directly or fill the form below — I'll get back to you personally.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 lg:py-24 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Form */}
            <div className="lg:col-span-3">
              <RevealSection>
                {submitted ? (
                  <div className="border border-gold/20 p-12 text-center">
                    <div className="w-16 h-16 mx-auto border border-gold/40 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="font-playfair text-2xl text-cream">Thank You</h3>
                    <p className="mt-4 text-cream/60">I've received your message and will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-gold/80 text-xs tracking-widest uppercase block mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="text-gold/80 text-xs tracking-widest uppercase block mb-2">Business Name</label>
                        <input
                          type="text"
                          name="business"
                          value={formData.business}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your business name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="text-gold/80 text-xs tracking-widest uppercase block mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-input"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="text-gold/80 text-xs tracking-widest uppercase block mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-gold/80 text-xs tracking-widest uppercase block mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input cursor-pointer"
                        style={{ appearance: 'none' }}
                      >
                        <option value="" className="bg-burgundy-black">Select a service</option>
                        <option value="web" className="bg-burgundy-black">Web Design & Development</option>
                        <option value="marketing" className="bg-burgundy-black">Digital Marketing</option>
                        <option value="seo" className="bg-burgundy-black">Search Engine Optimization</option>
                        <option value="gbp" className="bg-burgundy-black">Google Business Profile</option>
                        <option value="social" className="bg-burgundy-black">Social Media & Advertising</option>
                        <option value="multiple" className="bg-burgundy-black">Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-gold/80 text-xs tracking-widest uppercase block mb-2">Project Details</label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows={5}
                        className="form-input resize-none"
                        placeholder="Tell us about your project, goals and timeline..."
                      />
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="btn-primary">
                        Start a Conversation
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </button>
                    </div>
                  </form>
                )}
              </RevealSection>
            </div>

            {/* Sidebar - Personal Contact Info */}
            <div className="lg:col-span-2">
              <RevealSection>
                <div className="space-y-10">
                  {/* Developer Info */}
                  <div className="border border-gold/20 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center">
                        <span className="font-playfair text-gold text-xl">PP</span>
                      </div>
                      <div>
                        <h3 className="font-playfair text-lg text-cream">Prince Patel</h3>
                        <p className="text-cream/50 text-xs tracking-wider uppercase">Founder & Developer</p>
                      </div>
                    </div>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      I personally handle every project from strategy to delivery. Reach out directly through any of the channels below.
                    </p>
                  </div>

                  {/* Contact Channels */}
                  <div>
                    <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Get in Touch</h4>
                    <div className="space-y-5">
                      {/* Email */}
                      <a
                        href="mailto:rjprincepatel04@gmail.com"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                          <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">Email</p>
                          <p className="text-cream text-sm group-hover:text-gold transition-colors duration-300 break-all">rjprincepatel04@gmail.com</p>
                        </div>
                      </a>

                      {/* Phone */}
                      <a
                        href="tel:+919521870622"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                          <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        </div>
                        <div>
                          <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">Phone</p>
                          <p className="text-cream text-sm group-hover:text-gold transition-colors duration-300">+91 95218 70622</p>
                        </div>
                      </a>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/919521870622"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                          <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        </div>
                        <div>
                          <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                          <p className="text-cream text-sm group-hover:text-gold transition-colors duration-300">Message on WhatsApp</p>
                        </div>
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/__iam__prince__04?stkn=MTlnN3JrdXJncWd0YQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                          <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                        </div>
                        <div>
                          <p className="text-cream/50 text-xs uppercase tracking-wider mb-1">Instagram</p>
                          <p className="text-cream text-sm group-hover:text-gold transition-colors duration-300">@__iam__prince__04</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="border-t border-gold/10 pt-8">
                    <h4 className="text-gold text-xs tracking-widest uppercase mb-4">Response Time</h4>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      I typically respond within a few hours. For urgent projects, mention it in your message and I'll prioritize accordingly.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
