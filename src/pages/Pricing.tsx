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

export default function Pricing() {
  const pricingCategories = [
    {
      title: 'Google Business Profile',
      description: 'Establish and optimize your local presence on Google to attract nearby customers.',
      items: [
        { service: 'GMB Setup', price: '₹999', note: 'One-time' },
        { service: 'GMB Optimization', price: '₹1,499', note: 'One-time' },
        { service: 'GMB Setup + Optimization', price: '₹2,499', note: 'One-time' },
        { service: 'GMB Monthly Management', price: '₹1,999', note: '/month' },
      ],
    },
    {
      title: 'Search Engine Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
      items: [
        { service: 'SEO Basic', price: '₹2,999', note: '/month' },
        { service: 'SEO Standard', price: '₹4,999', note: '/month' },
        { service: 'SEO Advanced', price: 'Custom', note: 'Contact us' },
      ],
    },
    {
      title: 'Social Media',
      description: 'Build your brand presence and engage your audience across social platforms.',
      items: [
        { service: 'Social Media Basic', price: '₹2,499', note: '/month' },
        { service: 'Social Media Standard', price: '₹4,999', note: '/month' },
        { service: 'Social Media Advanced', price: '₹7,999+', note: '/month' },
      ],
    },
    {
      title: 'Creative Design',
      description: 'Professional graphics and creative posts for your social media and marketing.',
      items: [
        { service: 'Creative Post — Single', price: '₹199', note: 'per post' },
        { service: 'Creative Posts — 5', price: '₹899', note: 'pack' },
        { service: 'Creative Posts — 10', price: '₹1,699', note: 'pack' },
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="gold-divider mb-8" />
          <p className="text-gold text-xs tracking-widest uppercase mb-4">Transparent Pricing</p>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight max-w-4xl">
            SIMPLE, HONEST PRICING.
          </h1>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-2xl">
            Clear pricing for our recurring services. Website development projects are custom quoted based on your specific requirements — contact us for a tailored proposal.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 lg:py-24 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-20 lg:space-y-28">
            {pricingCategories.map((category, i) => (
              <RevealSection key={i}>
                <div>
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
                    <div>
                      <span className="text-gold/60 text-xs tracking-widest uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-playfair text-2xl lg:text-3xl text-cream mt-2">{category.title}</h2>
                      <p className="text-cream/60 text-sm mt-2 max-w-lg">{category.description}</p>
                    </div>
                  </div>

                  <div className="border border-gold/15 overflow-hidden">
                    {/* Header */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-6 lg:px-8 py-4 border-b border-gold/15 bg-burgundy/30">
                      <div className="col-span-6">
                        <span className="text-gold/80 text-xs tracking-widest uppercase">Service</span>
                      </div>
                      <div className="col-span-3 text-right">
                        <span className="text-gold/80 text-xs tracking-widest uppercase">Price</span>
                      </div>
                      <div className="col-span-3 text-right">
                        <span className="text-gold/80 text-xs tracking-widest uppercase">Billing</span>
                      </div>
                    </div>

                    {/* Rows */}
                    {category.items.map((item, j) => (
                      <div
                        key={j}
                        className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-6 lg:px-8 py-5 ${
                          j < category.items.length - 1 ? 'border-b border-gold/10' : ''
                        } hover:bg-burgundy/20 transition-colors duration-300`}
                      >
                        <div className="md:col-span-6">
                          <span className="text-cream text-sm lg:text-base">{item.service}</span>
                        </div>
                        <div className="md:col-span-3 md:text-right">
                          <span className="font-playfair text-lg lg:text-xl text-gold">{item.price}</span>
                        </div>
                        <div className="md:col-span-3 md:text-right">
                          <span className="text-cream/50 text-sm">{item.note}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Note */}
      <section className="py-24 lg:py-32 border-t border-gold/10 bg-burgundy/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase mb-4">Website Development</p>
                <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-cream leading-tight">
                  CUSTOM QUOTED FOR YOUR PROJECT
                </h2>
                <p className="mt-6 text-cream/70 leading-relaxed">
                  Every website is unique. We don't believe in one-size-fits-all pricing because your business deserves a website built specifically for your needs.
                </p>
                <p className="mt-4 text-cream/60 leading-relaxed">
                  Website pricing depends on the number of pages, design complexity, features, content requirements, integrations and ongoing maintenance needs.
                </p>
              </div>
              <div className="border border-gold/20 p-8 lg:p-10">
                <h3 className="font-playfair text-xl text-cream mb-6">What affects the price:</h3>
                <ul className="space-y-3">
                  {[
                    'Number of pages',
                    'Design complexity & customization',
                    'Features & functionality',
                    'Content creation needs',
                    'Third-party integrations',
                    'Ongoing maintenance',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-cream/70 text-sm">
                      <span className="w-1.5 h-1.5 bg-gold/60 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gold/10">
                  <Link to="/contact" className="inline-flex items-center gap-2 text-gold text-sm tracking-wide hover:gap-4 transition-all duration-300">
                    Request a Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FAQ / Notes */}
      <section className="py-24 lg:py-32 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">Good to Know</p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-cream">PRICING NOTES</h2>
          </RevealSection>

          <RevealSection className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                {
                  title: 'Monthly Services',
                  desc: 'Monthly services are billed at the start of each month. You can cancel anytime with 30 days notice. No long-term contracts required.',
                },
                {
                  title: 'One-Time Services',
                  desc: 'GMB setup and optimization are one-time payments. You own everything we create. No hidden fees or recurring charges.',
                },
                {
                  title: 'Custom Projects',
                  desc: 'For SEO Advanced, complex websites and large-scale projects, we provide custom quotes after understanding your specific requirements.',
                },
                {
                  title: 'Package Discounts',
                  desc: 'Combining multiple services? We offer package pricing for businesses that need a complete digital solution. Contact us for details.',
                },
              ].map((note, i) => (
                <div key={i} className="border-l border-gold/20 pl-6">
                  <h3 className="font-playfair text-lg text-cream mb-3">{note.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{note.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-gold/10 bg-burgundy/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <RevealSection>
            <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream">NOT SURE WHERE TO START?</h2>
            <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
              Let's discuss your business goals and find the right solution for you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a href="mailto:rjprincepatel04@gmail.com" className="btn-outline">
                Email Us
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
