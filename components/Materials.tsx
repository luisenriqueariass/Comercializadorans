import { useTranslations } from 'next-intl';

const CATEGORY_ICONS: Record<number, JSX.Element> = {
  0: (
    // Neveras & Aires — refrigerator shape with divider and handle
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="5" y="2" width="14" height="20" rx="1.5" strokeWidth={1.5} />
      <line x1="5" y1="9" x2="19" y2="9" strokeWidth={1.5} strokeLinecap="round" />
      <line x1="9" y1="5.5" x2="9" y2="7.5" strokeWidth={1.5} strokeLinecap="round" />
      <line x1="9" y1="12" x2="9" y2="15" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  ),
  1: (
    // Radiadores — heat radiator grid
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h18M3 18h18M7 6v12M11 6v12M15 6v12M19 6v12" />
    </svg>
  ),
  2: (
    // Aluminio
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  3: (
    // Acero e Hierro
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
    </svg>
  ),
  4: (
    // Plomo
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  5: (
    // Varios — collection/box icon
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

export default function Materials() {
  const t = useTranslations('materials');
  const categories = t.raw('categories') as { name: string; items: string[] }[];

  return (
    <section id="materials" className="bg-charcoal-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`group bg-charcoal-800 border border-charcoal-700 hover:border-brand-600/40 rounded-2xl p-6 transition-all${
                /* Motores card spans full width on the last row if it's alone */
                i === categories.length - 1 && categories.length % 3 === 1
                  ? ' sm:col-span-2 lg:col-span-1'
                  : i === categories.length - 1 && categories.length % 2 === 1
                  ? ' sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center text-brand-400">
                  {CATEGORY_ICONS[i]}
                </div>
                <h3 className="text-white font-bold text-lg group-hover:text-brand-400 transition-colors">
                  {cat.name}
                </h3>
              </div>

              {/* Items list */}
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1 h-1 rounded-full bg-brand-500/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
