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
    <section className="bg-charcoal-900 py-20 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-600 opacity-5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-brand-400 text-sm font-bold uppercase tracking-widest mb-3">
            ♻️ Desde 1994
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-brand-400 text-lg font-semibold">{t('subtitle')}</p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-charcoal-800 border border-charcoal-700 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-black text-brand-400 mb-1">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
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

          {/* Family visual */}
          <div className="bg-charcoal-800 border border-charcoal-700 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex items-center justify-center gap-3 text-5xl">
              <span>👤</span>
              <div className="flex gap-1 text-4xl">
                <span>👤</span>
                <span>👤</span>
                <span>👤</span>
                <span>👤</span>
              </div>
            </div>
            <div>
              <p className="text-white font-bold text-lg mb-1">Luis Enrique Arias Ramírez</p>
              <p className="text-gray-400 text-sm">Fundador & sus 4 hijos</p>
            </div>
            <div className="w-full border-t border-charcoal-600 pt-5">
              <p className="text-gray-400 text-sm leading-relaxed">
                Una empresa que nació en familia<br />y sigue creciendo en familia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
