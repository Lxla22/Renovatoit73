export interface Service {
  slug: string
  title: string
  shortTitle: string
  category: 'nettoyage' | 'traitement' | 'peinture'
  tagline: string
  description: string
  longDescription: string
  benefits: string[]
  process: { step: string; desc: string }[]
  faq: { q: string; a: string }[]
  image: string
  icon: string
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'demoussage-toiture',
    title: 'Démoussage de Toiture',
    shortTitle: 'Démoussage',
    category: 'nettoyage',
    tagline: 'Éliminez la mousse pour protéger votre toiture durablement',
    description:
      'Le démoussage professionnel élimine les mousses, lichens et végétaux qui dégradent votre toiture et obstruent vos gouttières.',
    longDescription:
      "La présence de mousses et lichens sur une toiture n'est pas qu'une question esthétique. Ces organismes retiennent l'humidité, accélèrent la dégradation des tuiles et peuvent provoquer des infiltrations. Notre traitement professionnel élimine efficacement toutes ces végétations pour prolonger la durée de vie de votre couverture.",
    benefits: [
      'Élimination totale des mousses et lichens',
      'Protection contre les infiltrations',
      'Prolongation de la durée de vie de la toiture',
      'Amélioration de l\'esthétique du bâtiment',
    ],
    process: [
      { step: 'Inspection', desc: "Diagnostic visuel de l'état de votre toiture" },
      { step: 'Application', desc: 'Traitement biocide adapté au type de couverture' },
      { step: 'Nettoyage', desc: 'Élimination mécanique douce des végétaux' },
      { step: 'Protection', desc: 'Application optionnelle d\'un traitement préventif' },
    ],
    faq: [
      {
        q: 'À quelle fréquence faut-il démoussager une toiture ?',
        a: 'Un démoussage tous les 2 à 5 ans est généralement recommandé, selon l\'exposition et l\'environnement de votre maison.',
      },
      {
        q: 'Le démoussage abîme-t-il les tuiles ?',
        a: 'Non, nos techniques douces respectent l\'intégrité des tuiles. Nous utilisons une pression adaptée pour éviter tout endommagement.',
      },
    ],
    image: '/demoussage.jpg',
    icon: '🏠',
    metaTitle: "Démoussage de Toiture en Savoie — RENOVA'TOIT 73",
    metaDescription:
      "Service de démoussage de toiture professionnel en Savoie (73). Élimination des mousses, lichens et végétaux. Devis gratuit à Chambéry, Aix-les-Bains, Albertville.",
  },
  {
    slug: 'nettoyage-toiture',
    title: 'Nettoyage de Toiture',
    shortTitle: 'Nettoyage',
    category: 'nettoyage',
    tagline: 'Une toiture propre pour une maison valorisée',
    description:
      'Nettoyage haute pression ou basse pression de votre toiture pour éliminer saletés, algues et dépôts tenaces.',
    longDescription:
      "Un nettoyage régulier de votre toiture est indispensable pour maintenir son étanchéité et sa longévité. Nous intervenons avec le matériel adapté à chaque type de couverture : tuiles, ardoises, zinc, fibrociment. Notre méthode préserve l'intégrité de votre toit tout en garantissant un résultat impeccable.",
    benefits: [
      'Élimination des salissures et algues',
      'Restauration de l\'aspect d\'origine',
      'Prévention des infiltrations',
      'Matériel adapté à chaque type de toiture',
    ],
    process: [
      { step: 'Évaluation', desc: 'Analyse du type de couverture et état général' },
      { step: 'Protection', desc: 'Mise en protection des gouttières et abords' },
      { step: 'Nettoyage', desc: 'Application de la technique adaptée (HP ou BP)' },
      { step: 'Contrôle', desc: 'Vérification du résultat et nettoyage des abords' },
    ],
    faq: [
      {
        q: 'Quelle est la différence entre nettoyage haute et basse pression ?',
        a: 'La haute pression est efficace sur les tuiles robustes. La basse pression, plus douce, convient aux ardoises et aux toitures fragiles.',
      },
      {
        q: 'Combien de temps dure un nettoyage de toiture ?',
        a: 'Entre 2 et 6 heures selon la superficie et l\'état de votre toiture.',
      },
    ],
    image: '/nettoyage.jpg',
    icon: '🚿',
    metaTitle: "Nettoyage de Toiture en Savoie — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage de toiture haute pression professionnel en Savoie (73). Tuiles, ardoises, zinc. Devis gratuit à Chambéry, Aix-les-Bains, Albertville et toute la Savoie.",
  },
  {
    slug: 'hydrofuge-toiture',
    title: 'Traitement Hydrofuge',
    shortTitle: 'Hydrofuge',
    category: 'traitement',
    tagline: 'Imperméabilisez votre toiture contre pluie et humidité',
    description:
      'Application d\'un traitement hydrofuge pénétrant pour imperméabiliser votre toiture et repousser l\'eau durablement.',
    longDescription:
      "Le traitement hydrofuge est la solution idéale après un nettoyage ou un démoussage. Il pénètre profondément dans les pores des tuiles pour créer une barrière invisible contre l'eau, sans modifier l'aspect de votre toiture. Un traitement qui multiplie par 3 à 5 la durée de vie de votre couverture.",
    benefits: [
      'Imperméabilisation longue durée (5 à 10 ans)',
      'Pénétration profonde dans les matériaux',
      'Aspect naturel préservé',
      'Prévention des infiltrations et du gel',
    ],
    process: [
      { step: 'Préparation', desc: 'Nettoyage préalable indispensable de la toiture' },
      { step: 'Séchage', desc: 'Attente du séchage complet (24 à 48h)' },
      { step: 'Application', desc: "Projection du produit hydrofuge en 1 ou 2 couches" },
      { step: 'Contrôle', desc: 'Vérification de la couverture totale de la surface' },
    ],
    faq: [
      {
        q: 'Combien de temps dure un traitement hydrofuge ?',
        a: 'Un traitement hydrofuge de qualité offre une protection de 5 à 10 ans selon l\'exposition et le type de matériaux.',
      },
      {
        q: 'L\'hydrofuge change-t-il l\'aspect de ma toiture ?',
        a: 'Non, le produit est incolore et ne modifie pas l\'aspect de votre toiture. Il existe aussi des versions colorées si vous souhaitez raviver les couleurs.',
      },
    ],
    image: '/hydrofuge.jpg',
    icon: '💧',
    metaTitle: "Traitement Hydrofuge Toiture Savoie — RENOVA'TOIT 73",
    metaDescription:
      "Traitement hydrofuge toiture en Savoie (73). Imperméabilisation durable 5-10 ans. Devis gratuit à Chambéry, Aix-les-Bains, Albertville.",
  },
  {
    slug: 'peinture-toiture',
    title: 'Peinture de Toiture',
    shortTitle: 'Peinture',
    category: 'peinture',
    tagline: 'Redonnez vie et couleur à votre toiture',
    description:
      'Application de peinture microporeuse spéciale toiture pour rénover l\'aspect de vos tuiles et les protéger durablement.',
    longDescription:
      "La peinture de toiture est une solution complète qui associe rénovation esthétique et protection durable. Nos peintures microporeuses de haute qualité laissent respirer les matériaux tout en offrant une protection maximale contre les UV, le gel et les intempéries. Un investissement valorisant pour votre patrimoine.",
    benefits: [
      'Rénovation complète de l\'aspect de la toiture',
      'Protection renforcée contre les UV et intempéries',
      'Large choix de coloris',
      'Microporeuse : laisse respirer les matériaux',
    ],
    process: [
      { step: 'Nettoyage', desc: 'Démoussage et nettoyage complet de la toiture' },
      { step: 'Traitement', desc: 'Application d\'un primaire d\'adhérence si nécessaire' },
      { step: 'Peinture', desc: 'Application en 2 couches de peinture microporeuse' },
      { step: 'Finition', desc: 'Contrôle qualité et nettoyage du chantier' },
    ],
    faq: [
      {
        q: 'Quelle est la durée de vie d\'une peinture de toiture ?',
        a: 'La durée de vie d\'une peinture de toiture varie de 5 à 15 ans selon la qualité des produits utilisés, le type de toiture, la préparation du support et les conditions climatiques locales.',
      },
      {
        q: 'Peut-on peindre toutes les toitures ?',
        a: 'La plupart des toitures en tuiles terre cuite, béton, ardoises naturelles ou synthétiques peuvent être peintes. Un diagnostic préalable est indispensable.',
      },
    ],
    image: '/peinture.jpg',
    icon: '🎨',
    metaTitle: "Peinture de Toiture Savoie — RENOVA'TOIT 73",
    metaDescription:
      "Peinture de toiture professionnelle en Savoie (73). Rénovation et protection durable. Devis gratuit à Chambéry, Aix-les-Bains, Albertville.",
  },
  {
    slug: 'nettoyage-gouttieres',
    title: 'Nettoyage de Gouttières',
    shortTitle: 'Gouttières',
    category: 'nettoyage',
    tagline: 'Des gouttières propres pour évacuer l\'eau efficacement',
    description:
      'Débouchage et nettoyage complet de vos gouttières et descentes pluviales pour éviter les débordements et dégâts.',
    longDescription:
      "Des gouttières obstruées par feuilles, mousses et débris peuvent causer des dégâts importants : débordements, infiltrations en façade, problèmes de fondations. Notre service de nettoyage de gouttières assure une évacuation optimale des eaux pluviales et prévient ces désordres coûteux.",
    benefits: [
      'Élimination des feuilles et débris',
      'Débouchage des descentes pluviales',
      'Prévention des infiltrations en façade',
      'Vérification de l\'état général',
    ],
    process: [
      { step: 'Inspection', desc: 'Vérification de l\'état des gouttières et fixations' },
      { step: 'Nettoyage', desc: 'Élimination manuelle et par soufflage des débris' },
      { step: 'Débouchage', desc: 'Nettoyage haute pression des descentes' },
      { step: 'Contrôle', desc: 'Test d\'écoulement et rapport d\'intervention' },
    ],
    faq: [
      {
        q: 'À quelle fréquence nettoyer ses gouttières ?',
        a: 'Idéalement, les gouttières doivent être nettoyées 2 fois par an : à l\'automne après la chute des feuilles et au printemps pour éliminer les dépôts hivernaux. Si votre maison est entourée de nombreux arbres, un nettoyage 3 à 4 fois par an peut être nécessaire. Pensez également à vérifier vos gouttières après une forte tempête ou un épisode de vents violents.',
      },
      {
        q: 'Peut-on combiner le nettoyage de gouttières avec celui de la toiture ?',
        a: 'Oui, nous proposons souvent un forfait combiné toiture + gouttières pour optimiser le déplacement et le coût.',
      },
    ],
    image: '/gouttieres.jpg',
    icon: '🌧️',
    metaTitle: "Nettoyage de Gouttières Savoie — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage et débouchage de gouttières en Savoie (73). Intervention rapide à Chambéry, Aix-les-Bains, Albertville. Devis gratuit.",
  },
  {
    slug: 'nettoyage-terrasses',
    title: 'Nettoyage de Terrasses',
    shortTitle: 'Terrasses',
    category: 'nettoyage',
    tagline: 'Terrasses, dallages et pavés remis à neuf',
    description:
      'Nettoyage haute pression de vos terrasses, allées, dallages et pavés pour retrouver leur éclat d\'origine.',
    longDescription:
      "Vos terrasses et dallages subissent les assauts du temps : mousses, algues, huiles, taches tenaces. Notre service de nettoyage haute pression restitue l'éclat d'origine de vos sols extérieurs. Nous intervenons sur tous types de surfaces : dalles béton, carrelage extérieur, pavés, pierre naturelle.",
    benefits: [
      'Élimination totale des mousses et algues',
      'Suppression des taches tenaces',
      'Surface antidérapante restaurée',
      'Traitement préventif anti-mousse disponible',
    ],
    process: [
      { step: 'Préparation', desc: 'Dégagement de la zone et protection du mobilier' },
      { step: 'Pré-traitement', desc: 'Application d\'un dégraissant ou biocide si nécessaire' },
      { step: 'Nettoyage HP', desc: 'Lavage haute pression avec buse adaptée au support' },
      { step: 'Rinçage', desc: 'Rinçage final et évacuation des eaux usées' },
    ],
    faq: [
      {
        q: 'Le nettoyage HP abîme-t-il les joints ?',
        a: 'Avec une pression et une buse adaptées, le nettoyage HP n\'endommage pas les joints. Nous adaptons toujours notre matériel au type de surface.',
      },
      {
        q: 'Peut-on traiter contre les futures mousses ?',
        a: 'Oui, nous proposons l\'application d\'un traitement anti-mousse préventif après nettoyage pour retarder le retour des végétaux.',
      },
    ],
    image: '/terrasses.jpg',
    icon: '🪨',
    metaTitle: "Nettoyage Terrasses & Dallages Savoie — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage haute pression de terrasses, dallages et pavés en Savoie (73). Résultat garanti à Chambéry, Aix-les-Bains, Albertville. Devis gratuit.",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(category: Service['category']): Service[] {
  return services.filter((s) => s.category === category)
}
