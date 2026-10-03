import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-burgundy-black via-[#0A1A15] to-[#060F0C] border-t border-gold/10 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-sky blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="https://image.qwenlm.ai/generated-images/f9d8d2a5-a859-4b90-ba75-8e509dfdf71b/_result.png"
                alt="Patel Digitals Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-cream/60 text-sm leading-relaxed">
              Digital Strategy • Design • Growth.
            </p>
            <p className="mt-6 text-cream/40 text-sm leading-relaxed max-w-xs">
              We create strategic digital experiences that help businesses look better, reach more customers and grow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/work', label: 'Work' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-cream/60 text-sm hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              <span className="text-cream/60 text-sm">Web Design & Development</span>
              <span className="text-cream/60 text-sm">Digital Marketing</span>
              <span className="text-cream/60 text-sm">Search Engine Optimization</span>
              <span className="text-cream/60 text-sm">Google Business Profile</span>
              <span className="text-cream/60 text-sm">Social Media & Advertising</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs tracking-wide">
            © {new Date().getFullYear()} Patel Digitals. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs tracking-wide">
            Designed & Developed by <span className="text-gold/60">Prince Patel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
