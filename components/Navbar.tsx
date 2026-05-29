'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function switchLocale() {
    const next = locale === 'es' ? 'en' : 'es';
    const withoutLocale = pathname.replace(/^\/(es|en)/, '');
    router.push(`/${next}${withoutLocale}`);
  }

  const links = [
    { label: t('home'), href: '#top' },
    { label: t('materials'), href: '#materials' },
    { label: t('howItWorks'), href: '#how-it-works' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-900/95 backdrop-blur border-b border-charcoal-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="NS" width="28" height="38" className="flex-shrink-0" />
            <span className="font-display text-white font-semibold text-base hidden sm:block uppercase tracking-wide leading-none whitespace-nowrap">Comercializadora <span className="text-brand-400">NS</span></span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={switchLocale}
              className="text-xs font-semibold border border-charcoal-600 rounded px-2.5 py-1 text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-bold px-4 py-2 rounded transition-colors"
            >
              {t('cta')}
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-charcoal-700 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white text-sm font-medium py-2 px-2 rounded hover:bg-charcoal-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
