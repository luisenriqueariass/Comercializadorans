import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Comercializadora NS — Compra de chatarra en Maracay',
  description:
    'Empresa venezolana con 30 años comprando metales ferrosos y no ferrosos. Pago inmediato. Zona Industrial San Vicente, Maracay, Aragua, Venezuela.',
  keywords: [
    'compra de chatarra Maracay',
    'chatarra Maracay',
    'vender chatarra Venezuela',
    'compra metales Aragua',
    'reciclaje metales Maracay',
    'aluminio chatarra Maracay',
    'hierro chatarra Venezuela',
    'Comercializadora NS',
  ],
  openGraph: {
    title: 'Comercializadora NS — Compra de chatarra en Maracay',
    description: 'Compramos chatarra y metales en Maracay, Venezuela. 30 años de experiencia. Pago inmediato.',
    url: 'https://comercializadorans.com',
    siteName: 'Comercializadora NS',
    locale: 'es_VE',
    type: 'website',
    images: [
      {
        url: 'https://comercializadorans.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Comercializadora NS — Compra de chatarra en Maracay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comercializadora NS — Compra de chatarra en Maracay',
    description: 'Compramos chatarra y metales en Maracay, Venezuela. 30 años de experiencia. Pago inmediato.',
    images: ['https://comercializadorans.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://comercializadorans.com',
    languages: {
      'es': 'https://comercializadorans.com/es',
      'en': 'https://comercializadorans.com/en',
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Comercializadora NS',
              image: 'https://comercializadorans.com/og-image.png',
              '@id': 'https://comercializadorans.com',
              url: 'https://comercializadorans.com',
              telephone: '+584243726579',
              email: 'contacto@comercializadorans.com',
              foundingDate: '1994',
              description:
                'Empresa venezolana con 30 años de trayectoria en la compra y comercialización de metales ferrosos y no ferrosos. Ubicados en la Zona Industrial San Vicente, Maracay, Aragua.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Zona Industrial San Vicente, Calle Campesina, Galpón N° 36',
                addressLocality: 'Maracay',
                addressRegion: 'Aragua',
                postalCode: '2103',
                addressCountry: 'VE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '10.2427247',
                longitude: '-67.6277878',
              },
              sameAs: [
                'https://www.instagram.com/cnsreciclaje',
                'https://maps.app.goo.gl/QDt6CQXDUuDTiAjG7',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
