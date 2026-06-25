# RENOVA'TOIT 73 — Guide de démarrage

## Installation en 3 étapes

### 1. Installer les dépendances
```bash
cd renovatoit73
npm install
```

### 2. Configurer l'email (formulaire de contact)

Dupliquer le fichier `.env.example` en `.env.local` :
```bash
cp .env.example .env.local
```

Remplir les variables dans `.env.local` :
```
SMTP_USER=renovatoit73@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx   ← Mot de passe d'application Gmail (pas votre mdp normal)
CONTACT_EMAIL=renovatoit73@gmail.com
NEXT_PUBLIC_SITE_URL=https://www.renovatoit73.fr
```

> **Pour Gmail :** Activez la validation en 2 étapes, puis créez un "Mot de passe d'application" dans votre compte Google > Sécurité.

### 3. Lancer le site
```bash
npm run dev
```
Ouvrez http://localhost:3000

---

## Déploiement

### Sur Vercel (recommandé — gratuit)
1. Créez un compte sur vercel.com
2. Importez ce dossier depuis GitHub
3. Ajoutez les variables d'environnement dans le dashboard Vercel
4. Deploy !

### Sur Netlify
1. Créez un compte sur netlify.com
2. Glissez-déposez le dossier `renovatoit73/` OU connectez GitHub
3. Build command: `npm run build` — Publish directory: `.next`
4. Ajoutez les variables d'environnement

---

## Personnalisation

### Ajouter vos vraies photos

Remplacez les images Unsplash par vos propres photos :

- **Galerie avant/après** → éditez `components/home/BeforeAfter.tsx`
- **Pages services** → éditez `lib/services.ts` (champ `image`)
- **Hero** → éditez `components/home/Hero.tsx` (URL de l'image)
- **Réalisations** → éditez `app/realisations/page.tsx`

Idéalement, mettez vos photos dans `public/images/` et utilisez des chemins locaux :
```tsx
src="/images/ma-photo-toiture.jpg"
```

### Modifier le contenu

| Fichier | Contenu |
|---------|---------|
| `lib/services.ts` | Tous les services (titres, descriptions, FAQ) |
| `lib/cities.ts` | Toutes les villes (textes SEO) |
| `lib/blog.ts` | Articles de blog |
| `components/home/Hero.tsx` | Titre et sous-titre de la page d'accueil |
| `app/layout.tsx` | Métadonnées globales (titre, description) |

### Changer les couleurs

Éditez `tailwind.config.ts` → section `colors`.

### Ajouter un article de blog

Dans `lib/blog.ts`, ajoutez un objet dans le tableau `blogPosts` en suivant le même format.

---

## SEO — Checklist de mise en ligne

- [ ] Remplacer `VOTRE_CODE_GOOGLE_SEARCH_CONSOLE` dans `app/layout.tsx`
- [ ] Configurer `NEXT_PUBLIC_SITE_URL` avec votre vrai domaine
- [ ] Ajouter une image OG (`public/og-image.jpg` — 1200×630px)
- [ ] Ajouter favicon (`public/favicon.ico`)
- [ ] Soumettre le sitemap dans Google Search Console : `votre-domaine.fr/sitemap.xml`
- [ ] Ajouter votre fiche Google Business Profile

---

## Structure du projet

```
renovatoit73/
├── app/
│   ├── layout.tsx          ← Layout global + SEO global
│   ├── page.tsx            ← Page d'accueil
│   ├── globals.css         ← Styles globaux
│   ├── sitemap.ts          ← Sitemap automatique
│   ├── robots.ts           ← robots.txt
│   ├── not-found.tsx       ← Page 404
│   ├── api/contact/        ← API formulaire de contact
│   ├── services/           ← Page services + pages dynamiques
│   ├── blog/               ← Blog + articles
│   ├── realisations/       ← Galerie
│   ├── [city]/             ← Pages SEO par ville
│   └── mentions-legales/   ← Mentions légales
├── components/
│   ├── layout/             ← Header, Footer
│   ├── home/               ← Sections page d'accueil
│   └── ui/                 ← Composants réutilisables
├── lib/
│   ├── services.ts         ← Data services
│   ├── cities.ts           ← Data villes
│   └── blog.ts             ← Data articles
└── public/images/          ← Vos photos ici
```

---

## Contact technique

Pour toute question, contactez renovatoit73@gmail.com
