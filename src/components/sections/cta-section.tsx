'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  eyebrow: 'Un projet de rénovation ?',
  title: 'Recevez votre devis gratuit sous 48h',
  description: 'Décrivez-nous votre chantier — toiture, façade, gros œuvre ou peinture. Un de nos experts se déplace pour évaluer vos besoins et vous proposer un devis clair et détaillé, sans engagement.',
  button: 'Demander mon devis gratuit',
}

const CRM_BASE = 'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u'

const col1Images = [
  `${CRM_BASE}/98255b0c-0248-48b3-909d-60c4032b1168/image.jpg`,
  `${CRM_BASE}/8c4b9e36-ffd5-4c17-94e9-ff8d83c3d8c5/image.jpg`,
  `${CRM_BASE}/5aabe269-2c4f-4c53-bcdf-0af4fccae8a6/image.jpg`,
  `${CRM_BASE}/703ef170-c28e-49de-8aaa-354b53754228/image.jpg`,
]

const col2Images = [
  `${CRM_BASE}/ac734ccd-5fb9-4b71-bf6d-550ccb290eed/image.jpg`,
  `${CRM_BASE}/6679a358-c90f-46f1-b4a4-0d27d44bc350/image.jpg`,
  `${CRM_BASE}/ad90fe30-e096-4f58-996d-a3397067cab6/image.jpg`,
  `${CRM_BASE}/afaf0eeb-878c-42ba-8b0c-6694b6f40a52/image.jpg`,
]

function ScrollColumn({ images, direction, speed }: { images: string[]; direction: 'up' | 'down'; speed: number }) {
  // Duplicate once for seamless loop (2 copies, translate -50%)
  const doubled = [...images, ...images]
  const from = direction === 'up' ? '0%' : '-50%'
  const to = direction === 'up' ? '-50%' : '0%'

  return (
    <div className="w-[130px] lg:w-[150px] shrink-0">
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: [from, to] }}
        transition={{
          y: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={`${direction}-${i}`}
            className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shrink-0"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="150px"
              loading="lazy"
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function CtaSection() {
  const { data } = useContent('home', { cta: defaults })
  const cta = data.cta ?? defaults

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-white dark:bg-zinc-900 shadow-[var(--shadow-lg)]"
        >

          <div className="relative flex items-stretch min-h-[420px] sm:min-h-[460px]">
            {/* Left - Text content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center p-10 sm:p-14 space-y-6">
              <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                {cta.eyebrow}
              </p>
              <h2 className="max-w-xl font-display text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
                {cta.title}
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                {cta.description}
              </p>
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  {cta.button}
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Right - Scrolling images, clipped to card */}
            <div className="hidden md:block relative w-[300px] lg:w-[340px] shrink-0 overflow-hidden">
              {/* Fade top */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white dark:from-zinc-900 to-transparent z-20" />
              {/* Fade bottom */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent z-20" />
              {/* Fade left, smooth blend into text area */}
              <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent z-20" />

              <div className="absolute inset-0 overflow-hidden">
                <div className="flex gap-3 -rotate-6 translate-x-[10%]" style={{ height: '140%', marginTop: '-20%' }}>
                  <ScrollColumn images={col1Images} direction="up" speed={40} />
                  <ScrollColumn images={col2Images} direction="down" speed={45} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
