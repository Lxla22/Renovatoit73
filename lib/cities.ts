export interface City {
  slug: string
  name: string
  department: string
  deptCode: string
  region: string
  description: string
  whyActNow?: string
  metaTitle: string
  metaDescription: string
  lat: number
  lng: number
}

export const cities: City[] = [
  {
    slug: 'chambery',
    name: 'Chambéry',
    department: 'Savoie',
    deptCode: '73',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Chambéry, préfecture de la Savoie, bénéficie d'un climat alpin avec des hivers humides propices au développement de mousses sur les toitures. RENOVA'TOIT 73 intervient rapidement sur Chambéry et ses quartiers pour l'entretien et la rénovation de vos toitures.",
    metaTitle: "Nettoyage & Rénovation Toiture Chambéry (73) — RENOVA'TOIT 73",
    metaDescription:
      "Entreprise de nettoyage et rénovation de toiture à Chambéry (73). Démoussage, hydrofuge, peinture. Devis gratuit sur Chambéry et communes voisines.",
    lat: 45.5646,
    lng: 5.9178,
  },
  {
    slug: 'aix-les-bains',
    name: 'Aix-les-Bains',
    department: 'Savoie',
    deptCode: '73',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Aix-les-Bains, station thermale au bord du lac du Bourget, connaît une humidité élevée due à la proximité du lac. Cette humidité favorise particulièrement la croissance de mousses et algues sur les toitures. RENOVA'TOIT 73 propose ses services à Aix-les-Bains pour protéger efficacement votre habitat.",
    metaTitle: "Nettoyage & Rénovation Toiture Aix-les-Bains (73) — RENOVA'TOIT 73",
    metaDescription:
      "Entreprise de nettoyage et rénovation de toiture à Aix-les-Bains (73). Proximité lac du Bourget : toitures particulièrement exposées à l'humidité. Devis gratuit.",
    lat: 45.6886,
    lng: 5.9153,
  },
  {
    slug: 'annecy',
    name: 'Annecy',
    department: 'Haute-Savoie',
    deptCode: '74',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Annecy et les bords du lac bénéficient des services de RENOVA'TOIT 73. La proximité du lac et le climat humide de Haute-Savoie favorisent particulièrement la croissance de mousses et algues sur les toitures. Nous intervenons rapidement pour protéger et rénover votre habitat.",
    whyActNow:
      "Les toitures en Haute-Savoie sont soumises à un climat exigeant, marqué par des précipitations régulières, une forte humidité et des épisodes de gel en hiver. À Annecy, la proximité du lac d'Annecy et des massifs alpins favorise le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture, tous les 2 à 5 ans, est recommandé afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Annecy (74) — RENOVA'TOIT 73",
    metaDescription:
      "Entreprise de nettoyage et rénovation de toiture à Annecy (74). Démoussage, hydrofuge, peinture. Devis gratuit sur Annecy et alentours.",
    lat: 45.8992,
    lng: 6.1294,
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    department: 'Rhône',
    deptCode: '69',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Lyon et sa métropole bénéficient des services de RENOVA'TOIT 73. Troisième ville de France, Lyon et ses communes périphériques présentent un parc immobilier diversifié dont les toitures nécessitent un entretien régulier face aux intempéries et aux variations climatiques.",
    whyActNow:
      "Les toitures dans le Rhône sont soumises à des conditions climatiques variées : épisodes de pluie, gel en hiver, fortes chaleurs en été et variations de température. À Lyon, ces conditions favorisent le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture (tous les 2 à 5 ans) est indispensable afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Lyon (69) — RENOVA'TOIT 73",
    metaDescription:
      "Entreprise de nettoyage et rénovation de toiture à Lyon (69). Démoussage, hydrofuge, peinture. Devis gratuit sur Lyon et sa métropole.",
    lat: 45.7640,
    lng: 4.8357,
  },
  {
    slug: 'grenoble',
    name: 'Grenoble',
    department: 'Isère',
    deptCode: '38',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Grenoble, capitale des Alpes, et son agglomération bénéficient des services de RENOVA'TOIT 73. Entourée de massifs montagneux, la région grenobloise expose les toitures à une forte humidité et au développement de végétaux. Nous intervenons pour démoussage, nettoyage et traitement hydrofuge.",
    whyActNow:
      "Les toitures en Isère sont soumises à des conditions climatiques variées : épisodes de pluie, gel en hiver, fortes chaleurs en été et humidité, notamment à proximité des massifs alpins. À Grenoble, ces conditions favorisent le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture (tous les 2 à 5 ans) est indispensable pour préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Grenoble (38) — RENOVA'TOIT 73",
    metaDescription:
      "Entreprise de nettoyage et rénovation de toiture à Grenoble (38). Démoussage, hydrofuge, peinture. Devis gratuit sur Grenoble et son agglomération.",
    lat: 45.1885,
    lng: 5.7245,
  },
  {
    slug: 'saint-jean-de-maurienne',
    name: 'Saint-Jean-de-Maurienne',
    department: 'Savoie',
    deptCode: '73',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Capitale de la Maurienne, Saint-Jean-de-Maurienne et sa vallée bénéficient des services de RENOVA'TOIT 73. Les toitures de montagne sont soumises à des conditions climatiques sévères qui nécessitent un entretien régulier et des traitements adaptés.",
    whyActNow:
      "Les toitures en Savoie sont soumises à des conditions climatiques exigeantes : précipitations régulières, neige en hiver, cycles de gel et de dégel et fortes variations de température. À Saint-Jean-de-Maurienne, ces conditions favorisent le développement de mousses, lichens et algues, qui fragilisent progressivement la couverture. Un entretien régulier de votre toiture (tous les 2 à 5 ans) est indispensable afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage Toiture Saint-Jean-de-Maurienne (73) — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage et rénovation de toiture à Saint-Jean-de-Maurienne (73). Expertise toitures de montagne. Devis gratuit.",
    lat: 45.2769,
    lng: 6.3525,
  },
  {
    slug: 'annemasse',
    name: 'Annemasse',
    department: 'Haute-Savoie',
    deptCode: '74',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Annemasse, ville frontalière à deux pas de Genève, bénéficie des services de RENOVA'TOIT 73. Le climat humide du bassin genevois et les précipitations abondantes nécessitent un entretien régulier des toitures.",
    whyActNow:
      "Les toitures en Haute-Savoie sont soumises à un climat exigeant, marqué par des précipitations régulières, une forte humidité et des épisodes de gel en hiver. À Annemasse, la proximité du lac Léman et des massifs alpins favorise le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture (tous les 2 à 5 ans) est indispensable afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Annemasse (74) — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage et démoussage de toiture à Annemasse (74). À proximité de Genève. Devis gratuit.",
    lat: 46.1942,
    lng: 6.2347,
  },
  {
    slug: 'thonon-les-bains',
    name: 'Thonon-les-Bains',
    department: 'Haute-Savoie',
    deptCode: '74',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Thonon-les-Bains, au bord du lac Léman, bénéficie des services de RENOVA'TOIT 73. La proximité du lac génère une forte humidité qui accélère le développement de mousses et lichens sur les toitures. Nous intervenons rapidement pour protéger votre habitat.",
    whyActNow:
      "Les toitures en Haute-Savoie sont soumises à un climat exigeant, marqué par des précipitations régulières, une forte humidité et des épisodes de gel en hiver. À Thonon-les-Bains, la proximité du lac Léman favorise le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture (tous les 2 à 5 ans) est indispensable afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Thonon-les-Bains (74) — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage et démoussage de toiture à Thonon-les-Bains (74). Proximité lac Léman. Devis gratuit.",
    lat: 46.3700,
    lng: 6.4789,
  },
  {
    slug: 'voiron',
    name: 'Voiron',
    department: 'Isère',
    deptCode: '38',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Voiron et le Pays Voironnais bénéficient des services de RENOVA'TOIT 73. Le climat humide du Grésivaudan et du Vercors favorise la croissance de mousses sur les toitures, nécessitant un entretien professionnel régulier.",
    whyActNow:
      "Les toitures en Isère sont soumises à des conditions climatiques variées : épisodes de pluie, gel en hiver, fortes chaleurs en été et humidité. À Voiron, la proximité du massif de la Chartreuse et les précipitations régulières favorisent le développement de mousses, lichens et algues, qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture, tous les 2 à 5 ans, est recommandé afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Voiron (38) — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage et démoussage de toiture à Voiron (38). Démoussage, hydrofuge, peinture. Devis gratuit sur Voiron et le Pays Voironnais.",
    lat: 45.3636,
    lng: 5.5908,
  },
  {
    slug: 'belley',
    name: 'Belley',
    department: 'Ain',
    deptCode: '01',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Belley, sous-préfecture de l'Ain, bénéficie des services de RENOVA'TOIT 73. Située entre le lac du Bourget et le Rhône, la ville connaît un climat humide propice au développement de mousses sur les toitures.",
    whyActNow:
      "Les toitures dans l'Ain sont soumises à des conditions climatiques variées : épisodes de pluie, gel en hiver, fortes chaleurs en été et humidité. À Belley, la proximité du Rhône et des reliefs du Bugey favorise le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture (tous les 2 à 5 ans) est indispensable afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Belley (01) — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage et démoussage de toiture à Belley (01). Intervention rapide. Devis gratuit.",
    lat: 45.7614,
    lng: 5.6881,
  },
  {
    slug: 'cluses',
    name: 'Cluses',
    department: 'Haute-Savoie',
    deptCode: '74',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Cluses et la vallée de l'Arve bénéficient des services de RENOVA'TOIT 73. Les brouillards fréquents et l'humidité de la vallée favorisent la croissance de végétaux sur les toitures, nécessitant un entretien régulier.",
    whyActNow:
      "Les toitures en Haute-Savoie sont soumises à un climat exigeant, marqué par des précipitations régulières, une forte humidité, ainsi que des épisodes de neige et de gel en hiver. À Cluses, la proximité des montagnes favorise le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier de votre toiture, tous les 2 à 5 ans, est recommandé afin de préserver son étanchéité, prolonger sa durée de vie et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Cluses (74) — RENOVA'TOIT 73",
    metaDescription:
      "Nettoyage et démoussage de toiture à Cluses (74). Intervention rapide sur la vallée de l'Arve. Devis gratuit.",
    lat: 46.0614,
    lng: 6.5794,
  },
  {
    slug: 'rumilly',
    name: 'Rumilly',
    department: 'Haute-Savoie',
    deptCode: '74',
    region: 'Auvergne-Rhône-Alpes',
    description:
      "Rumilly, ville dynamique de Haute-Savoie, bénéficie des services de RENOVA'TOIT 73 pour l'entretien et la rénovation de vos toitures. Le climat humide de la région favorise le développement de mousses et lichens nécessitant un traitement professionnel.",
    whyActNow:
      "Les toitures en Savoie sont soumises à un climat particulièrement exigeant : précipitations abondantes, cycles gel/dégel en altitude, forte humidité. À Rumilly, ces conditions favorisent le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier (tous les 2 à 5 ans) est indispensable pour préserver l'étanchéité de votre toit et éviter des réparations coûteuses.",
    metaTitle: "Nettoyage & Rénovation Toiture Rumilly (74) — RENOVA'TOIT 73",
    metaDescription:
      "Entreprise de nettoyage et rénovation de toiture à Rumilly (74). Démoussage, hydrofuge, peinture. Devis gratuit sur Rumilly et alentours.",
    lat: 45.8653,
    lng: 5.9431,
  },
]

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug)
}
