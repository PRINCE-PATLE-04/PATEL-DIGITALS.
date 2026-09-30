import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Web Design & Development',
      what: 'Custom, premium websites built from the ground up — designed around your business, not a generic template.',
      why: 'Your website is often the first impression customers have of your business. It needs to look professional, load fast, work perfectly on every device, and communicate your brand clearly.',
      provides: 'Custom design, responsive development, SEO-ready structure, fast performance, CMS integration, ongoing support.',
      value: 'A website that presents your business professionally, converts visitors into customers, and grows with your business.',
    },
    {
      num: '02',
      title: 'Digital Marketing',
      what: 'Strategic digital marketing focused on visibility, reach and customer acquisition.',
      why: 'Having a great website isn\'t enough if people can\'t find it. Digital marketing ensures your business reaches the right audience at the right time.',
      provides: 'Campaign strategy, audience targeting, content planning, performance tracking, conversion optimization.',
      value: 'Increased visibility, more qualified leads, and measurable business growth through strategic digital marketing.',
    },
    {
      num: '03',
      title: 'Search Engine Optimization',
      what: 'SEO strategies designed to improve your search visibility and bring relevant, organic traffic to your business.',
      why: 'Most customers start their search on Google. If your business doesn\'t appear in relevant searches, you\'re losing opportunities every day.',
      provides: 'Technical SEO, on-page optimization, keyword research, content strategy, local SEO, ongoing monitoring.',
      value: 'Higher search rankings, more organic traffic, and sustainable long-term visibility for your business.',
    },
    {
      num: '04',
      title: 'Google Business Profile',
      what: 'Ongoing Google Business Profile management, optimization and regular updates to keep your local presence strong.',
      why: 'For local businesses, Google Business Profile is one of the most important digital assets. It directly affects how customers find and choose you.',
      provides: 'Profile setup and optimization, regular posts and updates, review management, photo optimization, category management.',
      value: 'Better local visibility, more calls and directions, improved trust through an active and professional profile.',
    },
    {
      num: '05',
      title: 'Social Media & Advertising',
      what: 'Creative social media campaigns, content management and paid advertising strategies that reach your target audience.',
      why: 'Social media is where your customers spend their time. A strategic presence helps build awareness, trust and engagement.',
      provides: 'Content creation, social media management, paid ad campaigns, audience targeting, performance reporting.',
      value: 'Stronger brand presence, engaged audience, and measurable results through targeted social media and advertising.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="gold-divider mb-8" />
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight max-w-4xl">
            DIGITAL SERVICES, BUILT AROUND YOUR BUSINESS
          </h1>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-2xl">
            We provide a complete range of digital services — from website creation to marketing and growth — all designed to help your business succeed online.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {services.map((service, i) => (
            <RevealSection key={i}>
              <div className="border-t border-gold/10 py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-3">
                    <span className="text-gold text-sm tracking-wider">{service.num}</span>
                    <h2 className="font-playfair text-2xl lg:text-3xl text-cream mt-3">{service.title}</h2>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-gold text-xs tracking-widest uppercase mb-3">What It Is</h4>
                        <p className="text-cream/70 text-sm leading-relaxed">{service.what}</p>
                      </div>
                      <div>
                        <h4 className="text-gold text-xs tracking-widest uppercase mb-3">Why It Matters</h4>
                        <p className="text-cream/70 text-sm leading-relaxed">{service.why}</p>
                      </div>
                      <div>
                        <h4 className="text-gold text-xs tracking-widest uppercase mb-3">What We Provide</h4>
                        <p className="text-cream/70 text-sm leading-relaxed">{service.provides}</p>
                      </div>
                      <div>
                        <h4 className="text-gold text-xs tracking-widest uppercase mb-3">Business Value</h4>
                        <p className="text-cream/70 text-sm leading-relaxed">{service.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
          <div className="border-t border-gold/10" />
        </div>
      </section>

      {/* How We Work */}
      <section className="relative py-24 lg:py-32 border-t border-gold/10 section-gradient-2 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-l from-gold to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">How We Work</p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-cream">A STRATEGIC APPROACH TO EVERY PROJECT</h2>
          </RevealSection>
          <RevealSection className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Discover', desc: 'We start by understanding your business, audience, goals and competition.' },
                { num: '02', title: 'Design', desc: 'We create a visual direction and user experience that aligns with your brand.' },
                { num: '03', title: 'Build', desc: 'We develop a fast, responsive and professional digital experience.' },
                { num: '04', title: 'Grow', desc: 'We help improve visibility, marketing and digital performance over time.' },
              ].map((step, i) => (
                <div key={i} className="relative">
                  <span className="text-gold/40 text-4xl font-playfair">{step.num}</span>
                  <h3 className="font-playfair text-lg text-cream mt-3">{step.title}</h3>
                  <p className="text-cream/60 text-sm mt-2 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24 lg:py-32 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="max-w-3xl">
              <p className="text-gold text-xs tracking-widest uppercase mb-4">Pricing</p>
              <h2 className="font-playfair text-2xl lg:text-4xl font-semibold text-cream">CUSTOM QUOTED FOR YOUR PROJECT</h2>
              <p className="mt-6 text-cream/70 leading-relaxed">
                Every project is unique. Website development is custom quoted based on your specific requirements — including number of pages, design complexity, features, content, integrations and ongoing maintenance.
              </p>
              <p className="mt-4 text-cream/60 leading-relaxed">
                For recurring services such as SEO, Google Business Profile management, social media and marketing, structured pricing is available. Contact us to discuss your project and receive a tailored proposal.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-gold/10 bg-burgundy/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <RevealSection>
            <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream">READY TO START?</h2>
            <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
              Let's discuss your project and create a digital experience that represents your business properly.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="btn-primary">
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
