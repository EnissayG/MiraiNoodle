import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, locale, setLocale } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/products', label: t('nav.products') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-end items-center h-20">
          {/* Language switcher + Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex rounded-lg overflow-hidden border border-white/20 bg-white/5">
              {(['fr', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`px-3 py-1.5 text-sm font-semibold transition-colors ${locale === lang ? 'bg-red-600 text-white' : 'text-white/90 hover:bg-white/10'}`}
                  aria-label={lang === 'fr' ? 'Français' : 'English'}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`px-6 py-2.5 rounded-xl transition-all font-semibold backdrop-blur-lg ${
                  isActive(link.path)
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-neutral-900/25 text-white hover:bg-neutral-900/40 border border-white/10 shadow-sm'
                }`}
              >
                {link.label}
              </Link>
            ))}
            </div>
          </div>

          {/* Mobile Menu Button (hamburger) - transparent, white icon */}
          <button
            className="md:hidden p-2 text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] transition-transform hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t('nav.toggleMenu')}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <div className="flex rounded-lg overflow-hidden border border-white/20 bg-white/5 w-fit mb-2">
              {(['fr', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${locale === lang ? 'bg-red-600 text-white' : 'text-white/90 hover:bg-white/10'}`}
                  aria-label={lang === 'fr' ? 'Français' : 'English'}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-3 rounded-xl transition-all font-semibold backdrop-blur-lg ${
                  isActive(link.path)
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-neutral-900/25 text-white hover:bg-neutral-900/40 border border-white/10 shadow-sm'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}