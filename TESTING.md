# Guide de tests - Illustrasea

## Tests à effectuer localement

### 1. Tests visuels de base

- [ ] Le logo s'affiche correctement dans le header
- [ ] Toutes les 25 images se chargent (pas d'images cassées)
- [ ] Le fond beige (#e7bd97) s'affiche
- [ ] Les couleurs correspondent au site original

### 2. Tests du Header

- [ ] Le logo est cliquable et ramène en haut de page
- [ ] Les liens de navigation fonctionnent
- [ ] Le menu "Portfolio" affiche le sous-menu au survol (desktop)
- [ ] Les sous-menus "Children's illustration" et "Landscape illustrations" fonctionnent
- [ ] Le header reste fixé en haut au scroll

### 3. Tests de la navigation mobile

Réduisez la fenêtre à < 778px ou utilisez DevTools (F12) :

- [ ] Le menu hamburger (3 barres) apparaît
- [ ] Cliquer sur le hamburger ouvre le menu
- [ ] Le menu se ferme en cliquant sur un lien
- [ ] L'animation du hamburger fonctionne (transformation en X)

### 4. Tests de la galerie

- [ ] Les 4 mockups de livres s'affichent en haut
- [ ] Les 20 illustrations s'affichent dans la grille
- [ ] Au survol d'une image :
  - [ ] L'image se soulève légèrement (translateY)
  - [ ] L'ombre s'agrandit
  - [ ] L'image se zoom légèrement
- [ ] Sur mobile, la grille s'adapte (1 colonne)

### 5. Tests de la Lightbox

- [ ] Cliquer sur une image ouvre la lightbox
- [ ] L'image s'affiche en grand format
- [ ] Le fond devient noir semi-transparent
- [ ] La page ne scroll plus (body overflow hidden)

**Navigation lightbox :**
- [ ] Bouton ✕ (fermer) fonctionne
- [ ] Clic en dehors de l'image ferme la lightbox
- [ ] Touche **Esc** ferme la lightbox
- [ ] Flèche **←** (gauche) montre l'image précédente
- [ ] Flèche **→** (droite) montre l'image suivante
- [ ] Boutons ‹ et › fonctionnent

### 6. Tests du scroll

- [ ] Scroll fluide (smooth scroll) sur les ancres
- [ ] Au scroll vers le bas (> 100px), le header se masque
- [ ] Au scroll vers le haut, le header réapparaît
- [ ] Après 300px de scroll, le bouton "scroll to top" apparaît
- [ ] Cliquer sur le bouton remonte en haut de page avec animation

### 7. Tests responsive

Testez ces résolutions (F12 > Toggle Device Toolbar) :

**Desktop (1240px+) :**
- [ ] Grille d'images à 4 colonnes
- [ ] Menu horizontal
- [ ] Tous les espacements corrects

**Tablet (1024px) :**
- [ ] Grille à 3 colonnes
- [ ] Menu horizontal maintenu
- [ ] Texte hero légèrement réduit

**Small Tablet (778px) :**
- [ ] Menu hamburger activé
- [ ] Grille à 2 colonnes
- [ ] Navigation verticale dans le menu mobile

**Mobile (480px) :**
- [ ] Grille à 1 colonne
- [ ] Menu hamburger
- [ ] Tous les éléments lisibles
- [ ] Images qui s'adaptent

### 8. Tests de performance

Ouvrez DevTools (F12) > Network :

- [ ] Temps de chargement initial < 3 secondes
- [ ] Les images se chargent progressivement (lazy loading)
- [ ] Aucune erreur 404 dans la console
- [ ] Aucune erreur JavaScript

### 9. Tests d'accessibilité

- [ ] Toutes les images ont un attribut `alt`
- [ ] Navigation au clavier possible (Tab)
- [ ] Les boutons ont des labels aria
- [ ] Contraste des textes suffisant

### 10. Tests multi-navigateurs

Testez sur :
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (si disponible)
- [ ] Mobile (Chrome Android / Safari iOS)

## Outils de test recommandés

### Chrome DevTools

1. Ouvrir DevTools : **F12** ou **Ctrl+Shift+I**
2. **Toggle Device Toolbar** : **Ctrl+Shift+M**
3. Tester différentes résolutions

### Lighthouse (Performance)

1. DevTools > Lighthouse
2. Cliquer sur "Generate report"
3. Vérifier les scores :
   - Performance : > 85
   - Accessibility : > 90
   - Best Practices : > 90
   - SEO : > 90

### Console JavaScript

1. DevTools > Console
2. Vérifier qu'il n'y a pas d'erreurs (lignes rouges)
3. Vous devriez voir les messages :
   - "✨ Irina Dufaud - Illustratrice ✨"
   - "Website designed and developed with love"

## Problèmes courants et solutions

### Les images ne s'affichent pas

**Cause** : Serveur non lancé (protocole file://)
**Solution** : Utilisez un serveur HTTP (Python, npx serve, etc.)

### Le menu mobile ne s'ouvre pas

**Cause** : JavaScript non chargé
**Solution** : Vérifiez la console (F12) pour les erreurs

### Les animations ne fonctionnent pas

**Cause** : CSS non chargé
**Solution** : Vérifiez que `css/style.css` existe et est lié dans `index.html`

### Erreur CORS

**Cause** : Fichier ouvert en file:// au lieu de http://
**Solution** : Lancez un serveur local

## Commande de test rapide

```bash
# Lancer le serveur
python -m http.server 8000

# Dans un autre terminal, vérifier les fichiers
ls -la
ls -la assets/images/

# Compter les images
ls -1 assets/images/ | wc -l
# Doit afficher : 25
```

## Checklist pré-déploiement

Avant de déployer sur GitHub Pages :

- [ ] Tous les tests ci-dessus passent
- [ ] Aucune erreur dans la console
- [ ] Le site est beau sur mobile ET desktop
- [ ] Toutes les images se chargent
- [ ] La navigation fonctionne parfaitement
- [ ] Les animations sont fluides
- [ ] Le code est propre (pas de console.log inutiles)

---

Une fois tous ces tests validés, vous êtes prêt à déployer ! 🚀
