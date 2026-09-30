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
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="gold-divider mb-8" />
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight max-w-4xl">
            LET'S START SOMETHING GREAT.
          </h1>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-2xl">
            Have a project in mind? Tell us about your business and goals — we'll get back to you with ideas on how we can help.
          </p>
        </div>
      </section>

      {/* Contact Form */}
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
                    <p className="mt-4 text-cream/60">We've received your message and will get back to you soon.</p>
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

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <RevealSection>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-gold text-xs tracking-widest uppercase mb-4">What Happens Next</h4>
                    <div className="space-y-4">
                      {[
                        'We review your project details',
                        'We reach out to discuss your goals',
                        'We provide a tailored proposal',
                        'We begin working on your project',
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-gold/60 text-xs mt-1">{String(i + 1).padStart(2, '0')}</span>
                          <p className="text-cream/70 text-sm">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gold/10 pt-10">
                    <h4 className="text-gold text-xs tracking-widest uppercase mb-4">What to Expect</h4>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      Website projects are custom quoted based on your specific requirements. We'll discuss scope, timeline and investment during our initial conversation.
                    </p>
                    <p className="text-cream/60 text-sm leading-relaxed mt-4">
                      For recurring services like SEO, Google Business Profile and social media, structured pricing options are available.
                    </p>
                  </div>

                  <div className="border-t border-gold/10 pt-10">
                    <h4 className="text-gold text-xs tracking-widest uppercase mb-4">Response Time</h4>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      We typically respond within 24 hours. For urgent projects, mention it in your message and we'll prioritize accordingly.
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
