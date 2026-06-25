export const seo = {
  siteName: 'Compliance Hub',
  title: 'Compliance Hub | Accounting, Tax & SARS Compliance in South Africa',
  description:
    'Professional accounting, tax, payroll and SARS compliance services for individuals and small businesses across South Africa. Bookkeeping, VAT, CIPC and company registration.',
  keywords: [
    'accounting South Africa',
    'tax consultant South Africa',
    'SARS compliance',
    'bookkeeping services',
    'payroll services South Africa',
    'VAT returns',
    'CIPC annual returns',
    'company registration South Africa',
    'individual tax returns',
    'provisional tax',
    'tax clearance certificate',
    'small business accounting',
  ].join(', '),
  locale: 'en_ZA',
  region: 'ZA',
  email: 'parthematurure@gmail.com',
  phone: '+27766010169',
  whatsapp: 'https://wa.me/27766010169',
  ogImage: '/og-image.png',
  twitterHandle: '@compliancehub',
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  services: [
    'Accounting & Financial Reporting',
    'Tax & SARS Compliance',
    'Payroll Services',
    'Bookkeeping',
    'Company Registration',
    'CIPC Compliance',
    'VAT Submissions',
    'SARS Audit Assistance',
  ],
} as const

export function buildStructuredData(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AccountingService',
        '@id': `${siteUrl}/#organization`,
        name: seo.siteName,
        url: siteUrl,
        image: `${siteUrl}${seo.ogImage}`,
        description: seo.description,
        email: seo.email,
        telephone: seo.phone,
        areaServed: {
          '@type': 'Country',
          name: 'South Africa',
        },
        serviceType: seo.services,
        priceRange: '$$',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: seo.openingHours.days,
            opens: seo.openingHours.opens,
            closes: seo.openingHours.closes,
          },
        ],
        sameAs: [seo.whatsapp],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: seo.siteName,
        description: seo.description,
        inLanguage: 'en-ZA',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-ZA',
      },
    ],
  }
}
