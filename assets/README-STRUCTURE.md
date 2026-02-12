# Portfolio Noah Emboulé - Structure de fichiers

## 📁 Organisation des fichiers

### Pages HTML principales
- **index.html** - Page d'accueil du portfolio avec la grille de projets
- **atelierlume.html** - Page cas d'étude du projet Atelier Lume
- **loveyourkurves.html** - Page cas d'étude du projet Love Your Kurves (à placer si disponible)

### Fichiers CSS
- **style.css** - Styles globaux du portfolio (navigation, hero, projets, footer)
- **loveyourkurves.css** - Styles spécifiques pour les pages de cas d'étude (utilisé par atelierlume.html)

### Fichiers JavaScript
- **app.js** - Script principal avec toutes les fonctionnalités (loader, navigation, animations, modals)

### Images requises
Créer un dossier `assets/img/` et y placer :
- **atelier-lume-screen.png** - Screenshot du site Atelier Lume (fourni)
- **atelierlume-wireframe.jpg** - Wireframes du projet
- **atelierlume-desktop.jpg** - Version desktop
- **atelierlume-mobile.jpg** - Version mobile
- **loveyourkurves-hero.jpg** - Hero du projet LYK
- **logo.webp** - Logo pour le favicon

## 🚀 Installation

1. Créer la structure suivante :
```
portfolio/
├── index.html
├── atelierlume.html
├── loveyourkurves.html (si disponible)
├── maintenance.html (si disponible)
├── app.js
├── assets/
│   ├── style.css
│   ├── loveyourkurves.css
│   ├── img/
│   │   ├── atelier-lume-screen.png
│   │   ├── atelierlume-wireframe.jpg
│   │   ├── atelierlume-desktop.jpg
│   │   ├── atelierlume-mobile.jpg
│   │   ├── loveyourkurves-hero.jpg
│   │   └── logo.webp
│   └── pdf/
│       └── cv-noahemboule.pdf
```

2. Placer tous les fichiers HTML à la racine
3. Placer `app.js` à la racine
4. Créer le dossier `assets/` avec les sous-dossiers `img/` et `pdf/`
5. Copier `style.css` et `loveyourkurves.css` dans `assets/`
6. Placer toutes les images dans `assets/img/`

## 🔧 Fonctionnalités incluses

### Page d'accueil (index.html)
- ✅ Loader animé au chargement
- ✅ Scroll progress bar
- ✅ Bouton back-to-top
- ✅ Navigation fixe responsive
- ✅ Section Hero avec animations
- ✅ Section Processus de création (4 étapes)
- ✅ Grille de projets avec filtres
- ✅ Banner défilant avec liens email
- ✅ Section À propos
- ✅ Section Compétences
- ✅ Footer avec modals (Mentions légales, Confidentialité)

### Page Atelier Lume (atelierlume.html)
- ✅ Même header/footer que l'accueil
- ✅ Hero image du projet
- ✅ Bouton vers le site live
- ✅ Sections : Vue d'ensemble, Contexte, Mon Rôle, Défis & Solutions
- ✅ Recherche Utilisateur, Direction Artistique, Architecture
- ✅ Galerie de visuels (3 images)
- ✅ Résultats & Impact avec métriques
- ✅ Apprentissages clés
- ✅ CTA final vers le site
- ✅ Footer avec CTA contact

### Styles (CSS)
- ✅ Design system cohérent
- ✅ Palette rose (#FE257F) comme couleur principale
- ✅ Animations et transitions fluides
- ✅ Effets parallax et hover
- ✅ Grilles responsives
- ✅ Cards avec gradients et bordures animées
- ✅ Boutons avec effets shine
- ✅ Mobile-first responsive

### Scripts (JavaScript)
- ✅ Gestion du loader avec fermeture automatique
- ✅ Navigation smooth scroll
- ✅ Intersection Observer pour animations
- ✅ Filtres de projets
- ✅ Modals pour mentions légales
- ✅ Parallax sur images
- ✅ Back to top button
- ✅ Scroll progress bar

## 🎨 Personnalisation

### Couleurs principales
```css
--primary-color: #FE257F;  /* Rose principal */
--secondary-color: #ff6e9c; /* Rose secondaire */
--dark-gray: #333;
--medium-gray: #666;
--light-gray: #f9f9f9;
```

### Polices
```css
font-family: 'Recursive', monospace; /* Police principale du portfolio */
```

### Images à personnaliser
Remplacer les images placeholder dans `assets/img/` par tes propres images de projet.

## 🐛 Troubleshooting

### Le loader ne se ferme pas
✅ Corrigé avec un script inline dans index.html et atelierlume.html

### Le texte n'est pas visible dans atelierlume.html
✅ Corrigé avec des styles de sécurité inline dans le <head>

### Les images ne s'affichent pas
Vérifier que :
1. Le dossier `assets/img/` existe
2. Les images ont les bons noms
3. Les chemins dans le HTML correspondent

### Le CSS ne se charge pas
Vérifier que :
1. `assets/style.css` existe
2. `assets/loveyourkurves.css` existe
3. Les chemins dans le HTML sont corrects

## 📝 Notes importantes

- **Ne pas modifier** les noms de classes CSS existants
- **Ne pas supprimer** les scripts inline de fermeture du loader
- **Toujours tester** en local avant de déployer
- **Optimiser les images** pour le web (compression, format WebP si possible)

## 🚀 Déploiement

Le site peut être hébergé sur :
- GitHub Pages
- Netlify
- Vercel
- Hébergement web classique (OVH, etc.)

Aucun build process nécessaire, c'est du HTML/CSS/JS vanilla !

---

**Version** : 1.0  
**Dernière mise à jour** : Février 2025  
**Projet Atelier Lume** : Site fictif créé pour portfolio
