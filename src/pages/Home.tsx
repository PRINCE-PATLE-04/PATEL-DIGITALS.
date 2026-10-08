import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const services = [
    { num: '01', title: 'Web Design & Development', desc: 'Premium, responsive websites designed around the business rather than generic templates.' },
    { num: '02', title: 'Digital Marketing', desc: 'Strategic digital marketing focused on visibility, reach and customer acquisition.' },
    { num: '03', title: 'Search Engine Optimization', desc: 'SEO strategies designed to improve search visibility and bring relevant traffic.' },
    { num: '04', title: 'Google Business Profile', desc: 'Ongoing Google Business Profile management, optimization and updates.' },
    { num: '05', title: 'Social Media & Advertising', desc: 'Creative campaigns, social media management and paid advertising strategies.' },
  ];

  const projects = [
    { num: '01', name: 'MANSION 27', category: 'Luxury Hospitality', url: 'https://prince-patle-04.github.io/MANSION-27/', image: 'https://image.qwenlm.ai/generated-images/9e2255fe-8a01-4777-b8e6-9ac5fd90b4ae/_result.png' },
    { num: '02', name: 'AURELIA HOUSE', category: 'Premium Property', url: 'https://prince-patle-04.github.io/AURELIA-HOUSE/', image: 'https://image.qwenlm.ai/generated-images/1231880d-67b7-439d-907f-472561e6eac2/_result.png' },
    { num: '03', name: 'OAKRIDGE INTERNATIONAL SCHOOL', category: 'Education', url: 'https://prince-patle-04.github.io/Oakridge-International-School/', image: 'https://image.qwenlm.ai/generated-images/c85914a4-d00c-47b3-b180-2abdb7aee4e5/_result.png' },
  ];

  const process = [
    { num: '01', title: 'DISCOVER', desc: 'Understand the business, audience and objectives.' },
    { num: '02', title: 'DESIGN', desc: 'Create the visual direction and user experience.' },
    { num: '03', title: 'BUILD', desc: 'Develop a responsive, fast and professional digital experience.' },
    { num: '04', title: 'GROW', desc: 'Improve visibility, marketing and digital performance.' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full hero banner background */}
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/729cf93c-9511-4eac-be5d-334cf2445509/_result.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-black via-burgundy-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy-black via-transparent to-burgundy-black/40" />
          <div className="absolute inset-0 bg-burgundy-black/30" />
        </div>

        {/* Floating accent elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-sky/8 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-light-green/10 blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-grey/5 blur-2xl" />
        </div>

        {/* Hero visual - abstract metallic composition (desktop only overlay) */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-60">
          <div className="relative w-full h-full">
            {/* Abstract accent shapes overlay */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20" viewBox="0 0 500 500">
              <defs>
                <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A8C5A0" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#89B4C4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#A8C5A0" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <ellipse cx="250" cy="250" rx="200" ry="120" fill="none" stroke="url(#accentGrad)" strokeWidth="0.5" transform="rotate(-20 250 250)" />
              <ellipse cx="250" cy="250" rx="180" ry="100" fill="none" stroke="url(#accentGrad)" strokeWidth="0.5" transform="rotate(10 250 250)" />
              <ellipse cx="250" cy="250" rx="160" ry="80" fill="none" stroke="url(#accentGrad)" strokeWidth="0.5" transform="rotate(-5 250 250)" />
              <circle cx="250" cy="250" r="3" fill="#A8C5A0" opacity="0.6" />
              <circle cx="350" cy="200" r="2" fill="#89B4C4" opacity="0.4" />
              <circle cx="180" cy="300" r="2" fill="#89B4C4" opacity="0.4" />
            </svg>
            <svg className="absolute top-[30%] left-[40%] w-[400px] h-[400px] opacity-15 animate-float" viewBox="0 0 400 400">
              <path d="M200,50 Q350,100 300,200 Q250,300 200,350 Q150,300 100,200 Q50,100 200,50" fill="none" stroke="#A8C5A0" strokeWidth="0.5" />
              <path d="M200,80 Q320,120 280,200 Q240,280 200,320 Q160,280 120,200 Q80,120 200,80" fill="none" stroke="#89B4C4" strokeWidth="0.3" />
            </svg>
            {/* Metallic sphere effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-light-green/10 via-transparent to-sky/5 blur-sm" />
            <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-tr from-sky/5 via-transparent to-burgundy-light/10" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-3xl">
            <div className="gold-divider mb-8 animate-fade-in" />
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight text-cream animate-fade-in-up">
              YOUR BRAND DESERVES MORE THAN AN ORDINARY WEBSITE.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-cream/70 leading-relaxed max-w-2xl animate-fade-in-up stagger-2" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.2s' }}>
              We create strategic digital experiences, websites and marketing systems that help businesses look better, reach more customers and grow.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up stagger-3" style={{ opacity: 0, animationFillMode: 'forwards', animationDelay: '0.4s' }}>
              <Link to="/contact" className="btn-primary">
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/work" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / BRAND VALUES */}
      <section className="relative py-24 lg:py-32 border-t border-gold/10 section-gradient-1">
        {/* Subtle gold accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {[
                { title: 'Strategy First', desc: 'Every project begins with understanding the business, audience and goals.' },
                { title: 'Purposeful Design', desc: 'Design should have a purpose — not simply look attractive.' },
                { title: 'Built for Growth', desc: 'Digital systems should support long-term business growth.' },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="gold-divider mb-6" />
                  <h3 className="font-playfair text-2xl lg:text-3xl text-cream mb-4">{item.title}</h3>
                  <p className="text-cream/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream leading-tight max-w-3xl">
              DIGITAL SERVICES, BUILT AROUND YOUR BUSINESS
            </h2>
          </RevealSection>

          <div className="mt-16 lg:mt-24">
            {services.map((service, i) => (
              <RevealSection key={i}>
                <div className="service-item group border-t border-gold/10 py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 cursor-pointer">
                  <span className="text-gold/60 text-sm font-dm tracking-wider">{service.num}</span>
                  <h3 className="font-playfair text-xl lg:text-2xl text-cream group-hover:text-gold transition-colors duration-300 lg:w-1/3">
                    {service.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed lg:w-1/2">{service.desc}</p>
                  <div className="service-arrow text-gold hidden lg:block">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </RevealSection>
            ))}
            <div className="border-t border-gold/10" />
          </div>

          <RevealSection className="mt-12 flex flex-wrap items-center gap-6">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold text-sm tracking-wide hover:gap-4 transition-all duration-300">
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <span className="text-cream/20">|</span>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-gold/70 text-sm tracking-wide hover:text-gold hover:gap-4 transition-all duration-300">
              View Pricing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* WHY PATEL DIGITALS */}
      <section className="relative py-24 lg:py-32 border-t border-gold/10 overflow-hidden">
        {/* Background visual */}
        <div className="absolute inset-0">
          <img
            src="https://image.qwenlm.ai/generated-images/7f93563f-4a92-42aa-a301-66819224fc61/_result.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-black via-burgundy-black/90 to-burgundy/80" />
        </div>
        <div className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <RevealSection>
              <p className="text-gold text-xs tracking-widest uppercase mb-4">Why PATEL-DIGITALS.</p>
              <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream leading-tight">
                WE DON'T JUST<br />BUILD WEBSITES.
              </h2>
              <p className="mt-8 text-cream/70 leading-relaxed text-lg">
                A website is one part of a business's digital presence. We focus on creating a complete system that helps your business present itself professionally and grow online.
              </p>
              <p className="mt-6 text-cream/60 leading-relaxed">
                PATEL-DIGITALS. combines strategy, design, technology and marketing into one cohesive digital approach — so every element works together to support your business goals.
              </p>
            </RevealSection>

            <RevealSection>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Strategy', icon: '◆' },
                  { title: 'Design', icon: '◇' },
                  { title: 'Technology', icon: '○' },
                  { title: 'Growth', icon: '△' },
                ].map((item, i) => (
                  <div key={i} className="premium-card p-8 group">
                    <span className={`${i % 2 === 0 ? 'text-sky' : 'text-light-green'} text-2xl mb-4 block`}>{item.icon}</span>
                    <h4 className="font-playfair text-lg text-cream group-hover:text-sky transition-colors duration-300">{item.title}</h4>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="relative py-24 lg:py-32 border-t border-gold/10 section-gradient-2">
        {/* Background accent */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase mb-4">Portfolio</p>
                <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream">SELECTED WORK</h2>
              </div>
              <Link to="/work" className="inline-flex items-center gap-2 text-gold text-sm tracking-wide hover:gap-4 transition-all duration-300">
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </RevealSection>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <RevealSection key={i}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card premium-card group block"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-burgundy">
                    <img
                      src={project.image}
                      alt={`${project.name} - ${project.category}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="overlay" />
                  </div>
                  <div className="mt-6">
                    <span className="text-gold/60 text-xs tracking-wider">{project.num}</span>
                    <h3 className="font-playfair text-xl text-cream mt-2 group-hover:text-gold transition-colors duration-300">{project.name}</h3>
                    <p className="text-cream/50 text-sm mt-1">{project.category}</p>
                    <span className="inline-flex items-center gap-2 mt-4 text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </span>
                  </div>
                </a>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 lg:py-32 border-t border-gold/10 overflow-hidden section-gradient-2">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-gold/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream">FROM IDEA TO IMPACT</h2>
          </RevealSection>

          <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {process.map((step, i) => (
              <RevealSection key={i}>
                <div className="relative">
                  <span className="text-gold/40 text-5xl lg:text-6xl font-playfair">{step.num}</span>
                  <h3 className="font-playfair text-xl text-cream mt-4">{step.title}</h3>
                  <p className="text-cream/60 text-sm mt-3 leading-relaxed">{step.desc}</p>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-gradient-to-r from-gold/20 to-transparent" />
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 lg:py-40 border-t border-gold/10 overflow-hidden section-gradient-3">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-burgundy-light/10 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <RevealSection>
            <div className="gold-divider mx-auto mb-8" />
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-6xl font-semibold text-cream leading-tight">
              LET'S BUILD SOMETHING<br />WORTH REMEMBERING.
            </h2>
            <p className="mt-8 text-cream/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's turn your idea into a digital experience that represents your business properly.
            </p>
            <div className="mt-12">
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
