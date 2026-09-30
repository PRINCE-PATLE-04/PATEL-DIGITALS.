import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/work', label: 'Work' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-burgundy-black/95 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://image.qwenlm.ai/generated-images/38863507-3705-4ba6-a001-0f1b3d6932fe/_result.png"
              alt="Patel Digitals Logo"
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-gold'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 border border-gold/60 text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-burgundy-black transition-all duration-300"
          >
            Start a Project
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-px bg-cream transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
            <span className={`w-6 h-px bg-cream transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-px bg-cream transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 bg-burgundy-black border-l border-gold/10 z-50 lg:hidden ${
          isMobileOpen ? 'open' : ''
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-lg tracking-wide transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-gold'
                    : 'text-cream/80 hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-gold/60 text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-burgundy-black transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </header>
  );
}
