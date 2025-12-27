# Irina Dufaud - Portfolio Illustratrice

Reproduction statique du site portfolio [illustrasea.com](https://illustrasea.com/) en HTML/CSS/JavaScript.

## Description

Site portfolio d'Irina Dufaud, illustratrice dont l'univers artistique est tissé de plusieurs cultures. Ce projet reproduit fidèlement le design et les fonctionnalités du site original en version statique pour un hébergement sur GitHub Pages.

## Fonctionnalités

- **Design responsive** : Compatible mobile, tablette et desktop
- **Navigation sticky** : Header fixe avec effet de masquage au scroll
- **Galerie d'illustrations** : 20+ illustrations avec effet hover
- **Lightbox** : Visualisation plein écran des images avec navigation clavier
- **Menu déroulant** : Portfolio avec sous-menus (Children's illustration, Landscape illustrations)
- **Animations fluides** : Transitions et effets visuels
- **Bouton scroll-to-top** : Retour rapide en haut de page
- **Lazy loading** : Chargement optimisé des images

## Structure du projet

```
illustrasea/
├── index.html              # Page principale
├── css/
│   └── style.css          # Styles CSS
├── js/
│   └── main.js            # JavaScript pour interactions
├── assets/
│   └── images/            # Toutes les images (logo + 24 illustrations)
├── .nojekyll              # Fichier pour GitHub Pages
└── README.md              # Documentation
```

## Technologies utilisées

- **HTML5** sémantique
- **CSS3** moderne (Flexbox, Grid, Variables CSS)
- **JavaScript vanilla** (ES6+)
- **Responsive design** avec breakpoints : 1240px, 1024px, 778px, 480px

## Palette de couleurs

- Fond principal : `#e7bd97` (beige chaud)
- Accent : `#32373c` (gris foncé)
- Bordures : `#eeeeee` (gris clair)
- Texte : `#333333`

## Installation locale

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/illustrasea.git
cd illustrasea
```

2. Ouvrez `index.html` dans votre navigateur :
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (npx)
npx serve

# Ou simplement double-cliquer sur index.html
```

3. Visitez `http://localhost:8000` dans votre navigateur

## Déploiement sur GitHub Pages

### Méthode 1 : Via les paramètres GitHub

1. Poussez votre code sur GitHub :
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Allez dans **Settings** > **Pages**
3. Sous **Source**, sélectionnez la branche `main` et le dossier `/ (root)`
4. Cliquez sur **Save**
5. Votre site sera disponible à : `https://votre-username.github.io/illustrasea/`

### Méthode 2 : Via GitHub CLI

```bash
gh repo create illustrasea --public --source=. --remote=origin
git add .
git commit -m "Initial commit"
git push origin main
gh api repos/votre-username/illustrasea/pages -X POST -f source[branch]=main -f source[path]=/
```

## Optimisations

- Images avec attribut `loading="lazy"` pour le lazy loading natif
- Intersection Observer pour animations au scroll
- Compression CSS/JS (à faire en production)
- Images optimisées (format JPG/PNG)

## Fonctionnalités JavaScript

### Navigation mobile
- Menu hamburger responsive
- Fermeture automatique au clic sur un lien

### Lightbox
- Ouverture au clic sur une image
- Navigation avec flèches (← →) au clavier
- Fermeture avec `Esc` ou clic extérieur
- Boutons Précédent/Suivant

### Scroll
- Bouton "scroll to top" apparaît après 300px de scroll
- Smooth scroll pour les ancres
- Header se masque au scroll down, réapparaît au scroll up

## Navigation du site

- **Main Home** : Retour à l'accueil
- **Portfolio** : Galerie complète
  - Children's illustration : Illustrations pour enfants
  - Landscape illustrations : Paysages
- **About me** : À propos de l'illustratrice
- **Contact** : Formulaire de contact

## Assets

Le projet contient 26 images :
- 1 logo
- 19 illustrations pour enfants (Children's illustrations)
- 6 illustrations de paysages (Landscape illustrations)

Toutes les images sont hébergées localement dans `assets/images/`.

## Performance

- Temps de chargement : < 2s (sur connexion moyenne)
- Score Lighthouse (estimation) :
  - Performance : 90+
  - Accessibility : 95+
  - Best Practices : 90+
  - SEO : 95+

## Compatibilité navigateurs

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `css/style.css` :

```css
:root {
    --color-bg-primary: #e7bd97;
    --color-accent: #32373c;
    /* ... */
}
```

### Ajouter des images

1. Ajoutez l'image dans `assets/images/`
2. Ajoutez un élément dans `index.html` :

```html
<div class="gallery-item">
    <img src="assets/images/votre-image.jpg" alt="Description" loading="lazy">
</div>
```

## Crédits

- **Illustratrice** : Irina Dufaud
- **Site original** : [illustrasea.com](https://illustrasea.com/)
- **Développement** : Reproduction statique du site original

## Licence

Toutes les illustrations sont la propriété d'Irina Dufaud. Le code source est fourni à titre éducatif.

## Contact

Pour toute question concernant les illustrations ou commissions :
- Site : [illustrasea.com](https://illustrasea.com/)

---

Fait avec ❤️ pour préserver l'art d'Irina Dufaud
