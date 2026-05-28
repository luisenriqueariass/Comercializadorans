'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const next = locale === 'es' ? 'en' : 'es';
    const withoutLocale = pathname.replace(/^\/(es|en)/, '');
    router.push(`/${next}${withoutLocale}`);
  }

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-black text-lg">NS</span>
          <span className="text-gray-500 text-sm">{t('tagline')}</span>
        </div>

        <p className="text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} Comercializadora NS · {t('rights')}
        </p>

        <button
          onClick={switchLocale}
          className="text-xs font-semibold border border-charcoal-600 rounded px-3 py-1.5 text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
        >
          {locale === 'es' ? '🇺🇸 English' : '🇻🇪 Español'}
        </button>
      </div>
    </footer>
  );
}
