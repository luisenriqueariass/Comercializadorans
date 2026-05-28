import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const badges = [t('badge1'), t('badge2'), t('badge3')];

  return (
    <section className="bg-charcoal-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          {t('description')}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 bg-charcoal-700 border border-charcoal-600 rounded-full px-5 py-2 text-sm font-semibold text-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
