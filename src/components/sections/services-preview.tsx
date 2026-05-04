'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Home, Brush, PaintBucket, Wrench } from 'lucide-react'
import Link from 'next/link'

import { SectionTitle } from '@/components/ui/section-title'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useContent } from '@/hooks/use-content'

const iconMap: Record<string, any> = { Home, Brush, PaintBucket, Wrench }
const defaultServices = [
  { title: 'Couverture & toiture', desc: 'Pose, rénovation et entretien de toitures, zinguerie et étanchéité par des couvreurs expérimentés.' },
  { title: 'Ravalement de façade', desc: 'Nettoyage, isolation thermique extérieure et embellissement de vos façades dans le respect des normes.' },
  { title: 'Maçonnerie générale', desc: 'Gros œuvre, extensions, ouvertures, dallages : un savoir-faire artisanal pour bâtir solide et durable.' },
  { title: 'Peinture intérieure & extérieure', desc: 'Préparation des supports et finitions soignées pour transformer durablement vos espaces.' },
]

const defaultIcons = [Home, Brush, Wrench, PaintBucket]

const ease = [0.22, 1, 0.36, 1] as const

export function ServicesPreview() {
  const { data } = useContent('services', {
    hero: { eyebrow: 'Nos services' },
    services: defaultServices,
  })

  const services = (data.services ?? defaultServices).slice(0, 4)

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Nos prestations"
          title="Tous corps d'état pour votre habitat"
          description="De la charpente à la peinture, nous prenons en charge l'ensemble de vos travaux avec un seul interlocuteur et un cahier des charges respecté."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s: any, i: number) => {
            const Icon = defaultIcons[i] ?? Home
            return (
              <motion.div
                key={s.title || i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.04 }}
              >
                <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <CardTitle className="font-display text-base">{s.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{s.desc || s.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" className="group" asChild>
            <Link href="/services">
              Découvrir toutes nos prestations
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
