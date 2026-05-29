import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const badges = [t('badge1'), t('badge2'), t('badge3')];

  return (
    <section className="bg-charcoal-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-6">
          {t('title')}
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          {t('description')}
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-gray-400"
            >
              <span className="w-1.5 h-1.5 bg-brand-500" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
