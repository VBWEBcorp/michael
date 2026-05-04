export const CRM_BASE = 'https://www.crm-sauzaire.com/wp-content/uploads/go-x/u'

export type DemoPost = {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  published: boolean
  metaTitle?: string
  metaDescription?: string
}

export const demoPosts: DemoPost[] = [
  {
    _id: 'post-01',
    title: 'Faut-il rénover sa toiture ou simplement la nettoyer ? Le guide complet',
    slug: 'renover-ou-nettoyer-toiture',
    excerpt:
      'Démoussage, traitement hydrofuge ou rénovation complète : comment savoir quelle intervention votre toiture nécessite vraiment ? Nos couvreurs partagent leurs critères de diagnostic.',
    coverImage: `${CRM_BASE}/98255b0c-0248-48b3-909d-60c4032b1168/image.jpg`,
    category: 'Couverture',
    tags: ['toiture', 'démoussage', 'rénovation'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-04-22T09:00:00.000Z',
    published: true,
    content: `
      <p>Une toiture peut sembler en bon état vue du sol et pourtant cacher des désordres importants. Avant d'engager des travaux coûteux, encore faut-il poser le bon diagnostic. Voici les critères qui permettent à nos couvreurs de trancher entre un simple entretien et une rénovation complète.</p>
      <h2>1. L'âge de votre toiture, premier indicateur</h2>
      <p>En Île-de-France, une toiture en tuiles bien entretenue dure entre <strong>40 et 60 ans</strong>. Au-delà, même sans signes visibles d'usure, la sous-toiture peut être fragilisée. Si votre couverture a plus de 40 ans et qu'aucun entretien régulier n'a été réalisé, une inspection approfondie s'impose.</p>
      <h2>2. Les signes qui appellent un simple démoussage</h2>
      <ul>
        <li>Présence visible de mousses, lichens ou algues</li>
        <li>Tuiles encore en bon état général, pas de casse</li>
        <li>Aucune trace d'humidité dans les combles</li>
        <li>Faîtage et zinguerie en bon état</li>
      </ul>
      <p>Dans ce cas, un démoussage avec traitement hydrofuge tous les 5 à 10 ans suffit pour prolonger la durée de vie de votre toiture sans engager de gros travaux.</p>
      <h2>3. Quand la rénovation devient incontournable</h2>
      <ul>
        <li>Tuiles cassées, déplacées ou poreuses sur plusieurs zones</li>
        <li>Infiltrations visibles dans les combles ou les pièces sous toit</li>
        <li>Charpente fragilisée par l'humidité</li>
        <li>Zinguerie corrodée, gouttières percées</li>
        <li>Toiture ondulée, signe d'une charpente affaissée</li>
      </ul>
      <p>Dans ces situations, un simple entretien ne suffit plus : il faut envisager une rénovation partielle ou complète pour préserver la structure de la maison.</p>
      <h2>4. Le diagnostic professionnel, une étape clé</h2>
      <p>Chez Michael Sauzaire, nous proposons un diagnostic gratuit pour évaluer précisément l'état de votre toiture. Cette étape inclut une inspection visuelle de la couverture, un contrôle de la zinguerie et une vérification des combles. Vous repartez avec un rapport clair et un devis détaillé en cas de travaux nécessaires.</p>
      <blockquote>"Mieux vaut un diagnostic gratuit aujourd'hui qu'une infiltration coûteuse demain." — Notre chef de chantier</blockquote>
      <p>Vous avez un doute sur l'état de votre toiture ? Contactez-nous pour planifier une visite.</p>
    `,
  },
  {
    _id: 'post-02',
    title: '5 signes qu\'un ravalement de façade s\'impose chez vous',
    slug: 'signes-ravalement-facade',
    excerpt:
      'Fissures, mousses, infiltrations… Apprenez à reconnaître les signaux d\'alerte qui indiquent que votre façade a besoin d\'une rénovation pour préserver l\'intégrité de votre maison.',
    coverImage: `${CRM_BASE}/ac734ccd-5fb9-4b71-bf6d-550ccb290eed/image.jpg`,
    category: 'Ravalement',
    tags: ['façade', 'fissures', 'entretien'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-04-15T09:00:00.000Z',
    published: true,
    content: `
      <p>La façade protège votre maison des intempéries et joue un rôle essentiel dans son isolation. Quand elle se dégrade, c'est toute la structure du bâtiment qui peut être mise en péril. Voici 5 signes qui ne trompent pas.</p>
      <h2>1. Des fissures qui s'aggravent</h2>
      <p>Les microfissures sont normales avec le temps, mais des fissures larges (plus de 2 mm), profondes ou en escalier doivent alerter. Elles peuvent traduire un mouvement de structure et favoriser les infiltrations.</p>
      <h2>2. Mousses, lichens et traces noires</h2>
      <p>L'apparition de végétation sur la façade indique que l'enduit absorbe l'humidité. À terme, cette humidité fragilise le support et peut atteindre les murs intérieurs.</p>
      <h2>3. Cloques, écaillage ou farinage</h2>
      <p>Si vous passez la main sur votre façade et que de la poudre se détache, c'est le signe d'un farinage : le revêtement ne joue plus son rôle de protection.</p>
      <h2>4. Taches d'humidité à l'intérieur</h2>
      <p>Des auréoles ou de la peinture qui cloque sur les murs intérieurs indiquent souvent une façade qui laisse passer l'eau. Un ravalement avec traitement hydrofuge devient urgent.</p>
      <h2>5. Une obligation légale tous les 10 ans</h2>
      <p>Dans certaines communes d'Île-de-France, le ravalement est obligatoire tous les 10 ans. Un courrier de la mairie peut vous y contraindre.</p>
      <h2>Que faire concrètement ?</h2>
      <p>Au moindre doute, faites établir un diagnostic. Un ravalement préventif coûte toujours moins cher que la réparation des dégâts liés à des infiltrations.</p>
    `,
  },
  {
    _id: 'post-03',
    title: 'Combien coûte une rénovation complète de toiture en 2026 ?',
    slug: 'prix-renovation-toiture-2026',
    excerpt:
      'Tuiles, ardoises, zinc, surface, charpente, isolation… Tour d\'horizon des facteurs qui influencent le prix d\'une rénovation de toiture, avec des fourchettes concrètes pour 2026.',
    coverImage: `${CRM_BASE}/8c4b9e36-ffd5-4c17-94e9-ff8d83c3d8c5/image.jpg`,
    category: 'Couverture',
    tags: ['toiture', 'budget', 'devis'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-04-08T09:00:00.000Z',
    published: true,
    content: `
      <p>Le coût d'une rénovation de toiture varie énormément selon les matériaux, la surface et l'état de la charpente. Voici un tour d'horizon des prix pratiqués en 2026 en Île-de-France.</p>
      <h2>Le prix au m² selon le matériau</h2>
      <ul>
        <li><strong>Tuiles en terre cuite :</strong> 70 à 110 € / m²</li>
        <li><strong>Tuiles en béton :</strong> 50 à 80 € / m²</li>
        <li><strong>Ardoises naturelles :</strong> 130 à 220 € / m²</li>
        <li><strong>Zinc :</strong> 150 à 250 € / m²</li>
      </ul>
      <p>Ces prix incluent la dépose de l'ancienne couverture, la pose des nouveaux matériaux et l'évacuation des déchets.</p>
      <h2>Les coûts annexes à prévoir</h2>
      <h3>Charpente</h3>
      <p>Si la charpente nécessite une reprise, comptez entre 60 et 150 € / m² supplémentaires selon l'ampleur de l'intervention.</p>
      <h3>Isolation</h3>
      <p>L'isolation par l'extérieur (sarking) coûte entre 90 et 180 € / m². C'est l'occasion idéale pour profiter des aides à la rénovation énergétique.</p>
      <h3>Zinguerie</h3>
      <p>Gouttières, descentes et solins représentent 20 à 50 € par mètre linéaire selon le matériau.</p>
      <h2>Les aides disponibles en 2026</h2>
      <ul>
        <li>MaPrimeRénov' (jusqu'à 75 €/m² pour l'isolation)</li>
        <li>CEE (Certificats d'économies d'énergie)</li>
        <li>TVA réduite à 5,5 % pour les travaux d'amélioration énergétique</li>
        <li>Éco-prêt à taux zéro</li>
      </ul>
      <h2>Notre conseil</h2>
      <p>Demandez toujours plusieurs devis détaillés et vérifiez la garantie décennale de l'artisan. Un devis Michael Sauzaire est gratuit et sans engagement.</p>
    `,
  },
  {
    _id: 'post-04',
    title: 'Isolation thermique extérieure : avantages, prix et aides 2026',
    slug: 'ite-isolation-thermique-exterieure',
    excerpt:
      'Réduisez vos factures de chauffage et embellissez votre façade en une seule opération. Notre guide pour comprendre l\'ITE et profiter des aides MaPrimeRénov\' et CEE.',
    coverImage: `${CRM_BASE}/5aabe269-2c4f-4c53-bcdf-0af4fccae8a6/image.jpg`,
    category: 'Ravalement',
    tags: ['isolation', 'ITE', 'MaPrimeRénov'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-03-28T09:00:00.000Z',
    published: true,
    content: `
      <p>L'isolation thermique par l'extérieur (ITE) est l'une des rénovations les plus rentables pour une maison individuelle. Elle combine économies d'énergie, confort et embellissement de la façade.</p>
      <h2>Les avantages de l'ITE</h2>
      <ul>
        <li><strong>Réduction des factures :</strong> jusqu'à 30 % d'économies sur le chauffage</li>
        <li><strong>Confort thermique :</strong> suppression des ponts thermiques</li>
        <li><strong>Pas de réduction de surface habitable</strong></li>
        <li><strong>Embellissement de la façade</strong></li>
        <li><strong>Valorisation du bien</strong> à la revente</li>
      </ul>
      <h2>Les techniques d'ITE</h2>
      <h3>ITE sous enduit</h3>
      <p>Panneaux isolants collés ou fixés mécaniquement sur la façade, recouverts d'un enduit de finition. C'est la solution la plus courante (90 à 180 € / m²).</p>
      <h3>ITE sous bardage</h3>
      <p>Ossature bois fixée sur la façade, isolant inséré, puis bardage en bois, composite ou métal. Plus coûteuse (150 à 250 € / m²) mais idéale pour les supports irréguliers.</p>
      <h2>Les aides 2026</h2>
      <p>Cumulables, ces aides peuvent réduire de 40 à 60 % le coût total :</p>
      <ul>
        <li>MaPrimeRénov' (jusqu'à 75 € / m² selon revenus)</li>
        <li>CEE (Certificats d'économies d'énergie)</li>
        <li>TVA réduite à 5,5 %</li>
        <li>Éco-prêt à taux zéro jusqu'à 50 000 €</li>
      </ul>
      <h2>L'accompagnement Michael Sauzaire</h2>
      <p>Nous prenons en charge le montage du dossier d'aides, le diagnostic technique, la mise en œuvre et le SAV. Un seul interlocuteur pour un chantier serein.</p>
    `,
  },
  {
    _id: 'post-05',
    title: 'Comment choisir la couleur idéale pour votre façade',
    slug: 'choisir-couleur-facade',
    excerpt:
      'Réglementation locale, orientation, harmonie avec le voisinage : suivez notre méthode en 6 étapes pour faire le bon choix de teinte sans regrets.',
    coverImage: `${CRM_BASE}/afaf0eeb-878c-42ba-8b0c-6694b6f40a52/image.jpg`,
    category: 'Peinture',
    tags: ['façade', 'couleur', 'design'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-03-19T09:00:00.000Z',
    published: true,
    content: `
      <p>Choisir la couleur de sa façade n'est pas anodin : c'est un choix qui engage pour 10 à 15 ans et qui influence la perception globale de votre maison. Voici notre méthode éprouvée.</p>
      <h2>Étape 1 : Vérifier la réglementation locale</h2>
      <p>De nombreuses communes (en particulier en zone protégée) imposent des couleurs autorisées via le PLU ou l'avis des Bâtiments de France. Renseignez-vous en mairie avant tout choix.</p>
      <h2>Étape 2 : Tenir compte de l'orientation</h2>
      <p>Une façade exposée plein sud paraîtra plus claire avec le soleil. À l'inverse, une façade nord nécessite des teintes plus chaudes pour ne pas paraître terne.</p>
      <h2>Étape 3 : Observer le voisinage</h2>
      <p>L'harmonie visuelle avec les maisons voisines est importante. Sans copier, restez dans une gamme cohérente avec votre quartier.</p>
      <h2>Étape 4 : Penser aux menuiseries et à la toiture</h2>
      <p>La couleur de la façade doit dialoguer avec les volets, fenêtres, portail et toiture. Une teinte de façade sublime peut être ratée si elle jure avec le toit.</p>
      <h2>Étape 5 : Tester sur un échantillon</h2>
      <p>Une couleur change beaucoup selon la lumière. Demandez à votre artisan d'appliquer un nuancier de 1 m² sur la façade et observez à différentes heures.</p>
      <h2>Étape 6 : Choisir la finition</h2>
      <ul>
        <li><strong>Mat :</strong> chic et discret, mais salissant</li>
        <li><strong>Satiné :</strong> bon compromis facile d'entretien</li>
        <li><strong>Brillant :</strong> peu utilisé en façade extérieure</li>
      </ul>
      <h2>Tendances 2026</h2>
      <p>Les tons naturels ont la cote : beiges chauds, terracotta clairs, gris taupe et verts amande. Le blanc pur est en recul au profit de blancs cassés plus doux.</p>
    `,
  },
  {
    _id: 'post-06',
    title: 'Démoussage de toiture : pourquoi c\'est indispensable',
    slug: 'demoussage-toiture',
    excerpt:
      'Mousses, lichens et algues fragilisent vos tuiles et favorisent les infiltrations. On vous explique quand et comment intervenir, et le coût d\'un démoussage professionnel.',
    coverImage: `${CRM_BASE}/703ef170-c28e-49de-8aaa-354b53754228/image.jpg`,
    category: 'Couverture',
    tags: ['démoussage', 'entretien', 'toiture'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-03-10T09:00:00.000Z',
    published: true,
    content: `
      <p>Une toiture envahie par les mousses, ce n'est pas qu'un problème esthétique. C'est aussi le début d'une dégradation accélérée de votre couverture. Tous les 5 à 10 ans, un démoussage s'impose.</p>
      <h2>Pourquoi les mousses sont dangereuses</h2>
      <p>Les mousses retiennent l'humidité contre les tuiles. Elles favorisent :</p>
      <ul>
        <li>L'infiltration d'eau par capillarité</li>
        <li>L'éclatement des tuiles lors des cycles gel/dégel</li>
        <li>L'obstruction des gouttières et descentes</li>
        <li>La pourriture progressive du bois de charpente</li>
      </ul>
      <h2>Les étapes d'un démoussage professionnel</h2>
      <h3>1. Inspection préalable</h3>
      <p>Notre couvreur vérifie l'état des tuiles, du faîtage et de la zinguerie avant toute intervention. Tuiles cassées remplacées avant le traitement.</p>
      <h3>2. Brossage mécanique ou nettoyage haute pression</h3>
      <p>Élimination des mousses, lichens et débris. Le choix de la méthode dépend du type de tuiles.</p>
      <h3>3. Application d'un fongicide</h3>
      <p>Traitement préventif qui élimine les spores invisibles à l'œil nu.</p>
      <h3>4. Traitement hydrofuge</h3>
      <p>Pulvérisation d'une couche imperméabilisante qui empêche la repousse des mousses pendant 5 à 10 ans.</p>
      <h2>Combien ça coûte ?</h2>
      <p>Pour une maison individuelle, comptez entre <strong>15 et 30 € / m²</strong> selon la complexité de la toiture et l'état initial. Une intervention sur 100 m² coûte donc entre 1 500 et 3 000 €.</p>
      <h2>Quand intervenir ?</h2>
      <p>Idéalement au printemps ou en automne, hors gel et hors pluie. Évitez l'été pour les traitements (fortes chaleurs).</p>
    `,
  },
  {
    _id: 'post-07',
    title: 'Créer une ouverture dans un mur porteur : guide pratique',
    slug: 'ouverture-mur-porteur',
    excerpt:
      'Étude de structure, linteau, autorisations : tout ce qu\'il faut anticiper avant de percer un mur porteur, avec un exemple concret de chantier réalisé à Drancy.',
    coverImage: `${CRM_BASE}/dace7a79-9fca-4972-aa66-0f7fe6049e12/image.jpg`,
    category: 'Maçonnerie',
    tags: ['mur porteur', 'gros œuvre', 'extension'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-02-26T09:00:00.000Z',
    published: true,
    content: `
      <p>Abattre un mur porteur ou y créer une ouverture est l'un des chantiers les plus délicats de la rénovation. Mal exécuté, il peut compromettre la stabilité de toute la maison. Voici comment l'aborder sereinement.</p>
      <h2>1. Identifier un mur porteur</h2>
      <p>Un mur porteur soutient le poids des étages, de la charpente ou de la toiture. Indices : épaisseur supérieure à 15 cm, situation perpendiculaire aux solives, présence aux étages supérieurs.</p>
      <h2>2. L'étude de structure obligatoire</h2>
      <p>Avant tout chantier, un bureau d'études techniques (BET) ou un ingénieur structure doit calculer la descente de charges et dimensionner le linteau de remplacement (IPN, HEA ou poutre béton).</p>
      <h2>3. Les autorisations</h2>
      <p>En copropriété, l'accord de l'assemblée est obligatoire (majorité des 2/3 minimum). En maison individuelle, pas de permis de construire mais une déclaration préalable peut être nécessaire selon l'ampleur des travaux.</p>
      <h2>4. Le déroulement du chantier</h2>
      <ol>
        <li>Mise en place d'étais de soutien</li>
        <li>Découpe au disque diamant</li>
        <li>Évacuation des gravats</li>
        <li>Pose et scellement du linteau</li>
        <li>Reprise des enduits et finitions</li>
      </ol>
      <h2>5. Combien ça coûte ?</h2>
      <p>Pour une ouverture standard (2 m de large), comptez entre <strong>3 000 et 6 000 €</strong> tout compris : étude, fournitures, main-d'œuvre et finitions. Le prix grimpe vite si la charge à reprendre est importante.</p>
      <h2>Notre exemple : un chantier à Drancy</h2>
      <p>Sur un pavillon des années 60, nous avons récemment abattu un mur porteur de 3,5 m pour créer un espace cuisine-salon ouvert. Étude de structure, IPN sur mesure, reprise complète des sols et enduits : 4 jours de chantier, 5 200 € TTC.</p>
      <p>Vous envisagez ce type de projet ? Contactez-nous pour une visite technique gratuite.</p>
    `,
  },
  {
    _id: 'post-08',
    title: 'Peinture intérieure : les tendances de couleur en 2026',
    slug: 'tendances-peinture-2026',
    excerpt:
      'Tons terracotta, verts profonds, beiges chauds… Découvrez les palettes qui font sensation cette année et nos conseils pour les associer pièce par pièce.',
    coverImage: `${CRM_BASE}/bd811e1b-31d4-4224-a2ba-356736579a11/image.jpg`,
    category: 'Peinture',
    tags: ['peinture', 'tendances', 'décoration'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-02-12T09:00:00.000Z',
    published: true,
    content: `
      <p>Après plusieurs années dominées par le blanc et les gris froids, 2026 marque un retour des couleurs chaleureuses et des tons profonds. Voici les palettes que nos peintres appliquent le plus cette année.</p>
      <h2>1. Le terracotta, star de l'année</h2>
      <p>Inspiré des terres cuites méditerranéennes, le terracotta apporte chaleur et caractère. Idéal en mur d'accent dans un salon ou une chambre. Se marie parfaitement avec le bois clair et le lin écru.</p>
      <h2>2. Les verts profonds</h2>
      <p>Vert sapin, vert anglais, vert olive : ces teintes apportent une dimension presque luxueuse à un intérieur. Parfaites en cuisine ou bibliothèque pour un effet cocon élégant.</p>
      <h2>3. Les beiges chauds et tons crème</h2>
      <p>Le blanc froid laisse place à des beiges légèrement rosés ou crème. Plus doux, ils réchauffent les pièces sans paraître datés.</p>
      <h2>4. Le bleu pétrole</h2>
      <p>Entre bleu et vert, le bleu pétrole crée une atmosphère sophistiquée. Excellent dans une salle de bain ou un bureau.</p>
      <h2>5. Le jeu des contrastes doux</h2>
      <p>Plutôt que des oppositions tranchées, on associe désormais des couleurs proches en intensité : terracotta + beige rosé, vert sauge + lin, bleu pétrole + gris perle.</p>
      <h2>Conseils pour bien choisir</h2>
      <ul>
        <li>Tester avec des nuanciers grand format dans la pièce concernée</li>
        <li>Observer la couleur à différentes heures (lumière naturelle vs artificielle)</li>
        <li>Tenir compte du sol et des meubles existants</li>
        <li>Une teinte foncée sur un seul mur agrandit visuellement la pièce</li>
      </ul>
      <h2>Notre offre peinture intérieure</h2>
      <p>Préparation des supports, application en deux couches, finitions soignées et nettoyage du chantier : nous prenons tout en charge avec des produits de qualité professionnelle.</p>
    `,
  },
  {
    _id: 'post-09',
    title: 'Garantie décennale : ce qu\'il faut vérifier avant tout chantier',
    slug: 'garantie-decennale',
    excerpt:
      'Une garantie décennale n\'est pas un détail administratif : elle protège votre patrimoine pendant 10 ans. Voici comment vérifier celle de votre artisan et les pièges à éviter.',
    coverImage: `${CRM_BASE}/efbb17eb-3f7d-4745-86a4-80d02bd7801c/image.jpg`,
    category: 'Conseils',
    tags: ['garantie', 'assurance', 'artisan'],
    author: 'Équipe Michael Sauzaire',
    publishedAt: '2026-01-30T09:00:00.000Z',
    published: true,
    content: `
      <p>Confier des travaux à un artisan sans vérifier sa garantie décennale, c'est prendre un risque majeur pour votre patrimoine. Voici tout ce qu'il faut savoir avant de signer un devis.</p>
      <h2>Qu'est-ce que la garantie décennale ?</h2>
      <p>La garantie décennale est une assurance obligatoire pour tous les professionnels du bâtiment. Elle couvre pendant <strong>10 ans</strong> les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination (infiltrations, fissures graves, défauts d'étanchéité, etc.).</p>
      <h2>Ce que la décennale couvre</h2>
      <ul>
        <li>Défauts de structure (fissures importantes, affaissement)</li>
        <li>Infiltrations d'eau par toiture ou façade</li>
        <li>Défauts d'étanchéité majeurs</li>
        <li>Défauts d'isolation rendant le logement impropre à l'habitation</li>
      </ul>
      <h2>Ce qu'elle ne couvre pas</h2>
      <ul>
        <li>Les défauts esthétiques mineurs</li>
        <li>L'usure normale</li>
        <li>Les dommages causés par un mauvais entretien</li>
      </ul>
      <h2>Comment vérifier l'assurance d'un artisan</h2>
      <ol>
        <li>Demander une <strong>attestation de garantie décennale en cours de validité</strong></li>
        <li>Vérifier que l'attestation mentionne précisément l'activité concernée (couverture, maçonnerie…)</li>
        <li>Contacter l'assureur pour confirmation en cas de doute</li>
        <li>Faire mentionner le numéro de police d'assurance sur le devis et la facture</li>
      </ol>
      <h2>Les pièges classiques</h2>
      <h3>L'attestation périmée</h3>
      <p>Une attestation est valable un an : vérifiez la date.</p>
      <h3>L'activité non couverte</h3>
      <p>Un peintre ne peut pas couvrir une toiture avec sa décennale. Chaque activité doit être mentionnée.</p>
      <h3>Le sous-traitant non assuré</h3>
      <p>Si l'artisan sous-traite à un autre professionnel, vérifiez aussi sa décennale.</p>
      <h2>Michael Sauzaire : transparence totale</h2>
      <p>Nous fournissons systématiquement nos attestations d'assurance avec chaque devis. Couverture, ravalement, maçonnerie et peinture : toutes nos activités sont couvertes par notre garantie décennale.</p>
    `,
  },
]

export const demoBlogSettings = {
  enabled: true,
  title: 'Conseils & actualités',
  description:
    "Conseils d'experts, retours d'expérience et tendances du bâtiment pour vous accompagner dans vos projets de rénovation.",
  eyebrow: 'Blog',
  heroImage: `${CRM_BASE}/be71dbbd-07c5-408c-9651-6f9c04d4d42b/image.jpg`,
  categories: ['Couverture', 'Ravalement', 'Maçonnerie', 'Peinture', 'Conseils'],
}
