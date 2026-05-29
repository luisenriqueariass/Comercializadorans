'use client';

import { useTranslations } from 'next-intl';

export default function OurStory() {
  const t = useTranslations('ourStory');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section className="bg-charcoal-900 py-20 px-4">
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="block text-brand-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">Desde 1994</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-3">
            {t('title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 mb-14 border-y border-charcoal-700 divide-x divide-charcoal-700">
          {stats.map((stat) => (
            <div key={stat.label} className="py-7 px-4 text-center">
              <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('description')}
            </p>
            <blockquote className="border-l-4 border-brand-500 pl-5">
              <p className="text-white font-semibold text-lg italic">
                {t('quote')}
              </p>
              <footer className="mt-2 text-gray-500 text-sm">
                — Luis Enrique Arias Ramírez, Fundador
              </footer>
            </blockquote>
          </div>

          {/* Family card */}
          <div className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-8 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-md bg-brand-600/10 flex items-center justify-center text-brand-500 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Luis Enrique Arias Ramírez</p>
                <p className="text-gray-500 text-sm">Fundador</p>
              </div>
            </div>
            <div className="border-t border-charcoal-700 pt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Empresa familiar — fundador y 4 hijos
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Más de 30 años en el mercado venezolano
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Trato directo, sin intermediarios
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
