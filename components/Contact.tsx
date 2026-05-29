import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="bg-charcoal-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <span className="block h-1 w-12 bg-brand-500 mb-5" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-3">{t('title')}</h2>
          <p className="text-gray-400 text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/584243726579"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-charcoal-800 border border-charcoal-700 hover:border-brand-500 rounded-lg p-5 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-brand-600/10 flex items-center justify-center text-brand-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5">{t('whatsapp')}</p>
                <p className="text-white font-semibold">+58 424-3726579</p>
              </div>
              <span className="text-brand-500 text-sm font-semibold group-hover:underline inline-flex items-center gap-1">{t('ctaWhatsapp')} <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
            </a>

            {/* Email */}
            <a
              href="mailto:contacto@comercializadorans.com"
              className="group flex items-center gap-4 bg-charcoal-800 border border-charcoal-700 hover:border-brand-500 rounded-lg p-5 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-brand-600/10 flex items-center justify-center text-brand-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5">{t('email')}</p>
                <p className="text-white font-semibold truncate">contacto@comercializadorans.com</p>
              </div>
              <span className="text-brand-500 text-sm font-semibold group-hover:underline inline-flex items-center gap-1">{t('ctaEmail')} <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cnsreciclaje"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-charcoal-800 border border-charcoal-700 hover:border-brand-500 rounded-lg p-5 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-brand-600/10 flex items-center justify-center text-brand-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5">{t('instagram')}</p>
                <p className="text-white font-semibold">@cnsreciclaje</p>
              </div>
              <span className="text-brand-500 text-sm font-semibold group-hover:underline inline-flex items-center gap-1">{t('ctaInstagram')} <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
            </a>

            {/* Address */}
            <a
              href="https://maps.app.goo.gl/QDt6CQXDUuDTiAjG7"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-charcoal-800 border border-charcoal-700 hover:border-brand-500 rounded-lg p-5 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-charcoal-700 flex items-center justify-center text-gray-400 group-hover:text-brand-400 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5">{t('address')}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t('addressValue')}</p>
              </div>
              <span className="text-brand-500 text-sm font-semibold group-hover:underline whitespace-nowrap inline-flex items-center gap-1">{t('ctaMap')} <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-lg overflow-hidden border border-charcoal-700 h-72 lg:h-auto">
            <iframe
              title="Comercializadora NS - Maracay"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-67.6411%2C10.2325%2C-67.6211%2C10.2525&layer=mapnik&marker=10.242478%2C-67.631112"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '280px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
