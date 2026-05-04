import type { Metadata } from 'next'

import { connectDB } from '@/lib/db'
import { GallerySettings, GalleryImage } from '@/models/Gallery'
import { siteConfig } from '@/lib/seo'
import GalleryContent from './gallery-content'

export const revalidate = 3600

const CRM_BASE = 'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u'

const defaultSettings = {
  enabled: true,
  title: 'Nos réalisations',
  description: '25 ans de chantiers en Île-de-France : toitures, ravalements, maçonnerie et peinture. Découvrez les travaux récemment réalisés par nos équipes.',
  eyebrow: 'Galerie',
  heroImage: `${CRM_BASE}/337ae9d3-e708-4dba-a7e2-8e8e729806b4/image.jpg`,
}

const demoImages = [
  {
    _id: 'real-01',
    title: 'Réfection complète de toiture en tuiles',
    description: 'Pavillon individuel — dépose, charpente, écran sous-toiture et pose de tuiles neuves.',
    imageUrl: `${CRM_BASE}/98255b0c-0248-48b3-909d-60c4032b1168/image.jpg`,
    category: 'Couverture',
  },
  {
    _id: 'real-02',
    title: 'Ravalement de façade — maison familiale',
    description: 'Nettoyage haute pression, traitement des fissures et application d\'un enduit hydraulique teinté.',
    imageUrl: `${CRM_BASE}/ac734ccd-5fb9-4b71-bf6d-550ccb290eed/image.jpg`,
    category: 'Ravalement',
  },
  {
    _id: 'real-03',
    title: 'Rénovation de toiture après tempête',
    description: 'Remplacement des tuiles cassées, reprise de la zinguerie et étanchéité complète.',
    imageUrl: `${CRM_BASE}/8c4b9e36-ffd5-4c17-94e9-ff8d83c3d8c5/image.jpg`,
    category: 'Couverture',
  },
  {
    _id: 'real-04',
    title: 'Embellissement de façade pavillonnaire',
    description: 'Reprise des enduits, ravalement et finition couleur sur l\'ensemble du bâtiment.',
    imageUrl: `${CRM_BASE}/5aabe269-2c4f-4c53-bcdf-0af4fccae8a6/image.jpg`,
    category: 'Ravalement',
  },
  {
    _id: 'real-05',
    title: 'Couverture neuve avec zinguerie',
    description: 'Pose complète d\'une toiture neuve, gouttières aluminium et descentes.',
    imageUrl: `${CRM_BASE}/6679a358-c90f-46f1-b4a4-0d27d44bc350/image.jpg`,
    category: 'Couverture',
  },
  {
    _id: 'real-06',
    title: 'Façade rénovée — pavillon individuel',
    description: 'Préparation des supports, application d\'un enduit monocouche et finition grattée.',
    imageUrl: `${CRM_BASE}/ad90fe30-e096-4f58-996d-a3397067cab6/image.jpg`,
    category: 'Ravalement',
  },
  {
    _id: 'real-07',
    title: 'Restauration de toiture ancienne',
    description: 'Remplacement de tuiles à l\'identique, reprise des arêtes et faîtage scellé au mortier.',
    imageUrl: `${CRM_BASE}/703ef170-c28e-49de-8aaa-354b53754228/image.jpg`,
    category: 'Couverture',
  },
  {
    _id: 'real-08',
    title: 'Maçonnerie — création d\'ouverture',
    description: 'Percement d\'un mur porteur, pose de linteau et reprise des enduits intérieurs.',
    imageUrl: `${CRM_BASE}/dace7a79-9fca-4972-aa66-0f7fe6049e12/image.jpg`,
    category: 'Maçonnerie',
  },
  {
    _id: 'real-09',
    title: 'Façade colorée — entrée pavillonnaire',
    description: 'Ravalement complet et choix d\'une teinte personnalisée pour valoriser l\'entrée.',
    imageUrl: `${CRM_BASE}/afaf0eeb-878c-42ba-8b0c-6694b6f40a52/image.jpg`,
    category: 'Ravalement',
  },
  {
    _id: 'real-10',
    title: 'Couverture en tuiles plates',
    description: 'Pose traditionnelle sur charpente bois, intégration des fenêtres de toit.',
    imageUrl: `${CRM_BASE}/07c8c5b0-3aac-42f2-9099-04cd67d986d5/image.jpg`,
    category: 'Couverture',
  },
  {
    _id: 'real-11',
    title: 'Ravalement et embellissement extérieur',
    description: 'Reprise complète des enduits, peinture des volets et ferronneries.',
    imageUrl: `${CRM_BASE}/bd811e1b-31d4-4224-a2ba-356736579a11/image.jpg`,
    category: 'Peinture',
  },
  {
    _id: 'real-12',
    title: 'Toiture rénovée et zinguerie neuve',
    description: 'Démoussage, traitement antimousse, remplacement des gouttières et descentes.',
    imageUrl: `${CRM_BASE}/be71dbbd-07c5-408c-9651-6f9c04d4d42b/image.jpg`,
    category: 'Couverture',
  },
  {
    _id: 'real-13',
    title: 'Chantier de couverture — vue d\'ensemble',
    description: 'Mise en sécurité, échafaudage et travaux de couverture en cours.',
    imageUrl: `${CRM_BASE}/337ae9d3-e708-4dba-a7e2-8e8e729806b4/image.jpg`,
    category: 'Couverture',
  },
  {
    _id: 'real-14',
    title: 'Façade rénovée avec finition soignée',
    description: 'Application d\'un enduit décoratif et nettoyage des éléments en pierre.',
    imageUrl: `${CRM_BASE}/e8128d55-72ac-4db4-88a8-bfd6a27c2392/image.jpg`,
    category: 'Ravalement',
  },
  {
    _id: 'real-15',
    title: 'Travaux extérieurs — pavillon rénové',
    description: 'Ensemble de prestations couverture, façade et peinture sur un même chantier.',
    imageUrl: `${CRM_BASE}/efbb17eb-3f7d-4745-86a4-80d02bd7801c/image.jpg`,
    category: 'Rénovation',
  },
]

export async function generateMetadata(): Promise<Metadata> {
  try {
    await connectDB()
    const settings = (await GallerySettings.findOne().lean()) as any

    const title = settings?.title || defaultSettings.title
    const description = settings?.description || defaultSettings.description

    return {
      title,
      description,
      openGraph: {
        type: 'website',
        title,
        description,
        url: `${siteConfig.url}/gallery`,
        siteName: siteConfig.name,
        locale: siteConfig.locale,
        images: settings?.heroImage ? [{ url: settings.heroImage }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: settings?.heroImage ? [settings.heroImage] : [],
      },
      alternates: {
        canonical: '/gallery',
      },
    }
  } catch {
    return { title: defaultSettings.title }
  }
}

export default async function GalleryPage() {
  let settings: any = defaultSettings
  let images: any[] = demoImages

  try {
    await connectDB()
    const [settingsDoc, imagesDocs] = await Promise.all([
      GallerySettings.findOne().lean(),
      GalleryImage.find({ active: true })
        .sort({ order: 1 })
        .select('title description imageUrl category')
        .limit(60)
        .lean(),
    ])

    if (settingsDoc) settings = settingsDoc
    if (imagesDocs && (imagesDocs as any[]).length > 0) {
      images = (imagesDocs as any[]).map((img) => ({
        ...img,
        _id: String(img._id),
      }))
    }
  } catch {
    // Fallback gracieux : on garde les images de démo hardcodées
  }

  return <GalleryContent initialSettings={settings as any} initialImages={images as any} />
}
