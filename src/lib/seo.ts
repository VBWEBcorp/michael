export const siteConfig = {
  name: 'Michael Sauzaire',
  tagline: 'Couverture & Rénovation',
  fullName: 'Michael Sauzaire - Couverture & Rénovation',
  url: 'https://www.crm-sauzaire.com',
  locale: 'fr_FR',
  description:
    'Michael Sauzaire — couverture, ravalement, maçonnerie et peinture en Île-de-France. 25 ans de savoir-faire au service de vos chantiers de rénovation.',
  ogImage: 'https://www.crm-sauzaire.com/og.png',
  twitterHandle: '@michaelsauzaire',
  themeColor: '#b85c3a',
  phone: '+33 6 60 68 92 25',
  email: 'entreprise@crm-sauzaire.com',
  address: {
    street: '37 Rue Voltaire',
    city: 'Drancy',
    postalCode: '93700',
    country: 'FR',
  },
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} - ${siteConfig.name}`
}

export const routes = [
  '/',
  '/a-propos',
  '/services',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/conditions-generales',
  '/politique-cookies',
] as const
