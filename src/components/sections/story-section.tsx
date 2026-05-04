'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { useContent } from '@/hooks/use-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  eyebrow: 'Notre savoir-faire',
  title: '25 ans d\'expérience au service de votre habitat',
  paragraph1: 'Depuis un quart de siècle, Michael Sauzaire intervient sur les chantiers d\'Île-de-France pour rénover, restaurer et embellir maisons et bâtiments. Couvreurs, maçons, façadiers et peintres : nos équipes maîtrisent chaque étape de la rénovation.',
  paragraph2: 'Notre engagement : un conseil personnalisé, des devis transparents et des finitions impeccables, dans le respect des délais et des règles de l\'art.',
  image: 'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u/98255b0c-0248-48b3-909d-60c4032b1168/image.jpg',
}

export function StorySection() {
  const { data } = useContent('home', { story: defaults })
  const story = data.story ?? defaults

  return (
    <section className="border-b border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease }}
            className="max-w-xl"
          >
            <span className="inline-block font-display text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {story.eyebrow}
            </span>

            <h2 className="mt-5 font-display text-balance text-[32px] leading-[1.08] tracking-[-0.02em] text-foreground sm:text-[40px] lg:text-[48px]">
              {story.title}
            </h2>

            <div className="mt-7 space-y-5">
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {story.paragraph1}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {story.paragraph2}
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/a-propos"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              >
                <span className="border-b border-foreground/60 pb-0.5 transition-colors duration-300 group-hover:border-foreground">
                  En savoir plus sur l'entreprise
                </span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] ring-1 ring-foreground/5"
            >
              <Image
                src={story.image}
                alt=""
                fill
                sizes="(min-width:768px) 45vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
