'use client'

import { motion } from 'framer-motion'
import {
  Brush, Building2, CloudRain, Hammer, Home, Layers, PaintBucket, Wrench,
} from 'lucide-react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const
const defaultIcons = [Home, CloudRain, Building2, Layers, Hammer, Brush, PaintBucket, Wrench]

const defaults = {
  hero: {
    eyebrow: 'Nos prestations',
    title: 'Tous corps d\'état pour bâtir et rénover',
    description: 'De la toiture aux finitions intérieures, Michael Sauzaire prend en charge l\'intégralité de vos travaux avec une exigence constante de qualité et de fiabilité.',
    image: 'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u/efbb17eb-3f7d-4745-86a4-80d02bd7801c/image.jpg',
  },
  services: [
    { title: 'Couverture & toiture', description: 'Pose et rénovation de toitures en tuiles, ardoises ou zinc. Réfection complète, démoussage et entretien.' },
    { title: 'Étanchéité & zinguerie', description: 'Gouttières, chéneaux, descentes, solins : étanchéité parfaite et durable contre les intempéries.' },
    { title: 'Ravalement de façade', description: 'Nettoyage, traitement des fissures, enduits, peinture façade. Redonnez éclat et protection à votre bâtiment.' },
    { title: 'Isolation thermique extérieure', description: 'ITE performante pour réduire vos factures énergétiques tout en embellissant votre façade.' },
    { title: 'Maçonnerie générale', description: 'Gros œuvre, extensions, ouvertures, murs porteurs, dallages, escaliers : un savoir-faire complet.' },
    { title: 'Rénovation intérieure', description: 'Cloisons, plafonds, enduits, plâtrerie : préparation et finition de tous vos espaces de vie.' },
    { title: 'Peinture intérieure', description: 'Préparation des supports, application soignée, choix des teintes : un rendu irréprochable pièce par pièce.' },
    { title: 'Peinture extérieure', description: 'Façades, volets, ferronneries : protection et embellissement durables avec des produits adaptés.' },
  ],
}

export function ServicesContent() {
  const { data } = useContent('services', defaults)
  const hero = data.hero ?? defaults.hero
  const services = data.services ?? defaults.services

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="Services"
      />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s: any, i: number) => {
              const Icon = defaultIcons[i] ?? Home
              return (
                <motion.div
                  key={s.title || i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, ease, delay: i * 0.03 }}
                >
                  <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                    <CardHeader>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <CardTitle className="font-display text-base">{s.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{s.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
