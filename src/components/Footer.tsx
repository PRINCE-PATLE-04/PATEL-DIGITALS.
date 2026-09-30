import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-burgundy-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <Link to="/" className="font-playfair text-2xl font-semibold tracking-wider text-cream">
              PATEL DIGITALS
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
