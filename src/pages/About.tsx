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

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="gold-divider mb-8" />
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-tight max-w-4xl">
            A DIGITAL AGENCY BUILT ON STRATEGY, DESIGN AND PURPOSE.
          </h1>
          <p className="mt-8 text-cream/70 text-lg leading-relaxed max-w-2xl">
            Patel Digitals was created to help businesses build a stronger, more professional digital presence — through strategic thinking, purposeful design and effective technology.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 lg:py-24 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <RevealSection>
              <div>
                <p className="text-gold text-xs tracking-widest uppercase mb-4">Who We Are</p>
                <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-cream leading-tight">
                  WE HELP BUSINESSES PRESENT THEMSELVES BETTER ONLINE.
                </h2>
                <p className="mt-8 text-cream/70 leading-relaxed">
                  Patel Digitals is a digital agency focused on creating strategic websites, marketing systems and digital experiences that help businesses grow. We don't just build websites — we build complete digital presences that communicate professionalism, attract customers and support long-term growth.
                </p>
                <p className="mt-6 text-cream/60 leading-relaxed">
                  Every project starts with understanding the business — its goals, audience, competition and positioning. From there, we design and develop digital solutions that are intentional, effective and built to last.
                </p>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="space-y-8">
                <div className="border-l border-gold/30 pl-6">
                  <h3 className="font-playfair text-xl text-cream">Our Approach</h3>
                  <p className="mt-3 text-cream/60 text-sm leading-relaxed">
                    We believe that good digital work comes from understanding the business first. Design without strategy is decoration. Technology without purpose is complexity. We combine all three to create digital experiences that actually work.
                  </p>
                </div>
                <div className="border-l border-gold/30 pl-6">
                  <h3 className="font-playfair text-xl text-cream">Our Standards</h3>
                  <p className="mt-3 text-cream/60 text-sm leading-relaxed">
                    Every project receives the same level of attention to detail, strategic thinking and design quality — regardless of size. We don't cut corners, use generic templates, or deliver work that doesn't meet our standards.
                  </p>
                </div>
                <div className="border-l border-gold/30 pl-6">
                  <h3 className="font-playfair text-xl text-cream">Our Commitment</h3>
                  <p className="mt-3 text-cream/60 text-sm leading-relaxed">
                    We treat every client's business as if it were our own. That means honest communication, realistic timelines, transparent pricing and digital solutions that genuinely help the business succeed.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="py-24 lg:py-32 border-t border-gold/10 bg-burgundy/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <RevealSection>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">What We Focus On</p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-cream">FOUR PILLARS OF DIGITAL SUCCESS</h2>
          </RevealSection>

          <RevealSection className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Strategy',
                  desc: 'Understanding the business, audience and objectives before any design or development begins. Strategy ensures every decision serves a purpose.',
                  icon: '◆',
                },
                {
                  title: 'Design',
                  desc: 'Creating visual experiences that communicate professionalism, build trust and differentiate the brand from competitors.',
                  icon: '◇',
                },
                {
                  title: 'Technology',
                  desc: 'Building fast, responsive and reliable digital experiences using modern standards. Technology should be invisible — it should just work.',
                  icon: '○',
                },
                {
                  title: 'Marketing',
                  desc: 'Ensuring the digital presence reaches the right audience through SEO, social media, advertising and ongoing optimization.',
                  icon: '△',
                },
              ].map((pillar, i) => (
                <div key={i} className="border border-gold/15 p-8 hover:border-gold/30 transition-colors duration-300">
                  <span className="text-gold text-2xl">{pillar.icon}</span>
                  <h3 className="font-playfair text-xl text-cream mt-4">{pillar.title}</h3>
                  <p className="text-cream/60 text-sm mt-3 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <RevealSection>
              <p className="text-gold text-xs tracking-widest uppercase mb-4">Our Philosophy</p>
              <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-cream leading-tight">
                QUALITY OVER QUANTITY.<br />PURPOSE OVER DECORATION.
              </h2>
              <p className="mt-8 text-cream/70 leading-relaxed text-lg">
                We don't take on projects just to fill a portfolio. We work with businesses where we can genuinely add value — where strategic thinking, good design and effective technology can make a real difference.
              </p>
              <p className="mt-6 text-cream/60 leading-relaxed">
                Our goal is simple: help businesses present themselves professionally online and create digital systems that support their growth. Every project, every design decision, every line of code serves that purpose.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 border-t border-gold/10 bg-burgundy/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <RevealSection>
            <h2 className="font-playfair text-3xl lg:text-5xl font-semibold text-cream">LET'S WORK TOGETHER</h2>
            <p className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
              If you're looking for a digital partner who cares about your business as much as you do, let's talk.
            </p>
            <div className="mt-10">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
