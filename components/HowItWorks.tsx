import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      num: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      num: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-charcoal-800 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-start">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-full h-px bg-charcoal-600 -translate-x-4 z-0" />
              )}

              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-green-600/10 border border-green-600/30 text-green-400 mb-5">
                {step.icon}
              </div>

              <span className="text-xs font-black text-green-500/60 tracking-widest mb-2">{step.num}</span>
              <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
