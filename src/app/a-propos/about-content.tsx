'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, HardHat, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

import { CtaSection } from '@/components/sections/cta-section'
import { PageHero } from '@/components/sections/page-hero'
import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const
const defaultIcons = [Award, HardHat, ShieldCheck]

const defaults = {
  hero: {
    eyebrow: 'À propos',
    title: '25 ans de passion pour le bâtiment',
    description: 'Implantée à Drancy, Michael Sauzaire est une entreprise familiale spécialisée dans la couverture, le ravalement, la maçonnerie et la peinture. Depuis 25 ans, nous accompagnons particuliers et professionnels d\'Île-de-France avec un savoir-faire artisanal et une exigence de qualité.',
    image: 'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u/337ae9d3-e708-4dba-a7e2-8e8e729806b4/image.jpg',
  },
  values: [
    { title: 'Expérience', description: '25 ans d\'interventions sur tous types de bâtiments — du pavillon individuel à l\'immeuble collectif.' },
    { title: 'Savoir-faire artisanal', description: 'Couvreurs, maçons, façadiers et peintres formés aux règles de l\'art et aux techniques traditionnelles comme aux matériaux modernes.' },
    { title: 'Engagement qualité', description: 'Garantie décennale, devis transparents, finitions soignées et délais respectés à chaque étape de votre chantier.' },
  ],
  gallery: [
    'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u/98255b0c-0248-48b3-909d-60c4032b1168/image.jpg',
    'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u/ac734ccd-5fb9-4b71-bf6d-550ccb290eed/image.jpg',
    'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u/8c4b9e36-ffd5-4c17-94e9-ff8d83c3d8c5/image.jpg',
    'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u/5aabe269-2c4f-4c53-bcdf-0af4fccae8a6/image.jpg',
  ],
}

function ValuesTimeline({ values }: { values: any[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative mx-auto mt-14 max-w-4xl">
      {/* Vertical line (background) */}
      <div
        aria-hidden
        className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
      />
      {/* Vertical line (animated fill) */}
      <motion.div
        aria-hidden
        style={{ height: lineHeight }}
        className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-primary to-sky-500 md:left-1/2 md:-translate-x-1/2"
      />

      <ul className="space-y-12 md:space-y-16">
        {values.map((v: any, i: number) => {
          const Icon = defaultIcons[i] ?? Award
          const isRight = i % 2 === 1
          return (
            <li key={v.title || i} className="relative">
              {/* Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, ease, delay: 0.15 }}
                className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
              >
                <span className="relative flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background shadow-[0_0_0_4px_var(--background)]">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                  <Icon className="relative size-4 text-primary" aria-hidden />
                </span>
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: isRight ? 20 : -20, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease, delay: 0.1 }}
                className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                  isRight ? 'md:ml-[calc(50%+2.5rem)]' : 'md:mr-[calc(50%+2.5rem)]'
                }`}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 p-6 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md">
                  {/* Soft gradient wash on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-[11px] font-bold tracking-[0.2em] text-primary">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    </div>
                    <h3 className="mt-3 font-display text-xl leading-tight tracking-[-0.01em] text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function AboutContent() {
  const { data } = useContent('about', defaults)
  const hero = data.hero ?? defaults.hero
  const values = data.values ?? defaults.values
  const gallery = data.gallery ?? defaults.gallery

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        breadcrumb="À propos"
      />

      <section className="border-b border-border/60 bg-muted/10">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle eyebrow="Nos valeurs" title="Ce qui guide chacun de nos chantiers" />
          <ValuesTimeline values={values} />
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <SectionTitle eyebrow="En images" title="Nos chantiers, notre signature" />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {gallery.map((src: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease, delay: i * 0.06 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(min-width:768px) 25vw, 50vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
