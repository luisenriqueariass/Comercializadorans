'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const items = t.raw('items') as Array<{
    name: string;
    role: string;
    text: string;
  }>;

  return (
    <section className="bg-charcoal-800 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="block h-1 w-12 bg-brand-500 mb-5" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-3">
            {t('title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-3 gap-px bg-charcoal-700 border border-charcoal-700">
          {items.map((item, index) => (
            <figure
              key={index}
              className="bg-charcoal-800 p-8 flex flex-col"
            >
              <svg className="w-8 h-8 text-charcoal-600 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <blockquote className="text-gray-200 text-lg leading-relaxed flex-1">
                {item.text}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-charcoal-700">
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
