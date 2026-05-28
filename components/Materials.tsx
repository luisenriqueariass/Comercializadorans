import { useTranslations } from 'next-intl';

const ICONS: Record<string, string> = {
  0: '🔩', // Iron
  1: '⚙️', // Steel
  2: '🥫', // Aluminum
  3: '🔌', // Copper
  4: '🔔', // Bronze
  5: '🪣', // Zinc
  6: '🔋', // Lead
  7: '✨', // Stainless
};

export default function Materials() {
  const t = useTranslations('materials');
  const items = t.raw('items') as { name: string; desc: string }[];

  return (
    <section id="materials" className="bg-charcoal-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-charcoal-800 border border-charcoal-700 hover:border-green-600/50 rounded-xl p-6 transition-all hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-3">{ICONS[i] ?? '🔧'}</div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-green-400 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
