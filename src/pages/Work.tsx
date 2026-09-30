import { useInView } from '../hooks/useInView';

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

export default function Work() {
  const projects = [
    {
      num: '01',
      name: 'MANSION 27',
      category: 'Luxury Hospitality / Premium Property',
      url: 'https://prince-patle-04.github.io/MANSION-27/',
      description: 'A luxury hospitality and premium property concept website featuring an elegant design language with pistachio, warm ivory, muted gold and dark olive tones. The project showcases premium property experiences with sophisticated visual storytelling.',
      image: 'https://image.qwenlm.ai/generated-images/9e2255fe-8a01-4777-b8e6-9ac5fd90b4ae/_result.png',
    },
    {
      num: '02',
      name: 'AURELIA HOUSE',
      category: 'Luxury Hospitality / Premium Property',
      url: 'https://prince-patle-04.github.io/AURELIA-HOUSE/',
      description: 'A premium property and luxury hospitality website designed to communicate exclusivity and refined living. The visual identity emphasizes elegance, sophistication and attention to detail.',
      image: 'https://image.qwenlm.ai/generated-images/1231880d-67b7-439d-907f-472561e6eac2/_result.png',
    },
    {
      num: '03',
      name: 'OAKRIDGE INTERNATIONAL SCHOOL',
      category: 'Education / Institutional',
      url: 'https://prince-patle-04.github.io/Oakridge-International-School/',
      description: 'An educational institution website designed to present a professional, trustworthy and modern image for an international school. The project focuses on clear communication, accessibility and institutional credibility.',
      image: 'https://image.qwenlm.ai/generated-images/c85914a4-d00c-47b3-b180-2abdb7aee4e5/_result.png',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="gold-divider mb-8" />
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight max-w-4xl">
            WORK THAT SPEAKS FOR ITSELF.
          </h1>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-2xl">
            We create digital experiences across different industries — each project designed to represent the unique identity and goals of the business it serves.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {projects.map((project, i) => (
            <RevealSection key={i}>
              <div className={`py-16 lg:py-24 ${i > 0 ? 'border-t border-gold/10' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                  {/* Visual */}
                  <div className={`portfolio-card aspect-[4/3] relative overflow-hidden group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={`${project.name} - ${project.category}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="overlay" />
                  </div>

                  {/* Info */}
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <span className="text-gold/60 text-sm tracking-wider">{project.num}</span>
                    <h2 className="font-playfair text-3xl lg:text-4xl text-cream mt-3">{project.name}</h2>
                    <p className="text-gold/80 text-sm tracking-wide mt-2">{project.category}</p>
                    <p className="text-cream/60 leading-relaxed mt-6">{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 mt-8 text-gold text-sm tracking-wide hover:gap-5 transition-all duration-300 group"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-gold/10 bg-burgundy/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <RevealSection>
            <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream">HAVE A PROJECT IN MIND?</h2>
            <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
              Let's create something that represents your business properly and helps it grow.
            </p>
            <div className="mt-10">
              <a href="#/contact" className="btn-primary">
                Start a Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
