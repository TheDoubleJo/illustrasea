# Guide de déploiement - Illustrasea

## Étapes de déploiement sur GitHub Pages

### 1. Vérification du projet

Tous les fichiers sont en place :
- ✅ `index.html` (8.1 KB)
- ✅ `css/style.css`
- ✅ `js/main.js`
- ✅ `assets/images/` (25 images, 15 MB total)
- ✅ `.nojekyll` (fichier vide pour GitHub Pages)
- ✅ `README.md`

### 2. Tester localement

Avant de déployer, testez le site localement :

```bash
# Option 1 : Python
python -m http.server 8000

# Option 2 : Node.js
npx serve

# Option 3 : PHP
php -S localhost:8000
```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

### 3. Initialiser Git (si pas encore fait)

```bash
git init
git add .
git commit -m "Initial commit - Illustrasea portfolio site"
```

### 4. Créer le repository sur GitHub

#### Méthode A : Via GitHub CLI (recommandé)

```bash
gh auth login
gh repo create illustrasea --public --source=. --remote=origin
git push origin main
```

#### Méthode B : Via l'interface GitHub

1. Allez sur [github.com/new](https://github.com/new)
2. Créez un nouveau repository nommé `illustrasea`
3. N'initialisez PAS avec README, .gitignore ou licence (on a déjà nos fichiers)
4. Cliquez sur "Create repository"
5. Suivez les instructions pour pousser un repository existant :

```bash
git remote add origin https://github.com/VOTRE-USERNAME/illustrasea.git
git branch -M main
git push -u origin main
```

### 5. Activer GitHub Pages

1. Allez dans **Settings** de votre repository
2. Dans le menu latéral, cliquez sur **Pages**
3. Sous **Source**, sélectionnez :
   - Branch : `main`
   - Folder : `/ (root)`
4. Cliquez sur **Save**
5. Attendez quelques minutes (généralement 2-5 minutes)
6. Votre site sera disponible à : `https://VOTRE-USERNAME.github.io/illustrasea/`

### 6. Vérifications post-déploiement

Une fois déployé, vérifiez :

- [ ] Toutes les images s'affichent correctement
- [ ] Le logo apparaît dans le header
- [ ] La navigation fonctionne (menu déroulant, liens d'ancrage)
- [ ] Le responsive fonctionne (testez sur mobile)
- [ ] La lightbox s'ouvre au clic sur les images
- [ ] Les flèches de navigation fonctionnent dans la lightbox
- [ ] Le bouton "scroll to top" apparaît et fonctionne
- [ ] Les animations et transitions sont fluides

### 7. Domaine personnalisé (optionnel)

Si vous souhaitez utiliser un domaine personnalisé (comme illustrasea.com) :

1. Dans **Settings** > **Pages**, sous **Custom domain**, entrez votre domaine
2. Configurez vos DNS chez votre registrar :
   - Type A records pointant vers les IPs GitHub :
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Type CNAME record : www -> VOTRE-USERNAME.github.io
3. Activez **Enforce HTTPS**

### 8. Mises à jour futures

Pour mettre à jour le site :

```bash
# Faites vos modifications
git add .
git commit -m "Description des changements"
git push origin main
```

GitHub Pages se mettra à jour automatiquement en quelques minutes.

## Optimisations recommandées (pour plus tard)

### Compression des images

Pour améliorer les performances, compressez les images :

```bash
# Installer ImageMagick ou utiliser un service en ligne
# Exemple avec ImageMagick :
mogrify -quality 85 assets/images/*.jpg
```

### Minification CSS/JS

Pour la production, minifiez les fichiers :

```bash
# CSS
npx clean-css-cli -o css/style.min.css css/style.css

# JavaScript
npx terser js/main.js -o js/main.min.js

# Puis mettez à jour les liens dans index.html
```

### Ajouter un favicon

```bash
# Ajoutez cette ligne dans le <head> de index.html :
<link rel="icon" type="image/png" href="assets/images/logo.png">
```

## Statistiques du projet

- **HTML** : 1 fichier (8.1 KB)
- **CSS** : 1 fichier (~10 KB)
- **JavaScript** : 1 fichier (~5 KB)
- **Images** : 25 fichiers (15 MB)
- **Total** : ~15.1 MB

## Performance attendue

- **Temps de chargement** : 1-3 secondes (sur connexion moyenne)
- **Lighthouse Score** (estimation) :
  - Performance : 85-95
  - Accessibility : 95-100
  - Best Practices : 90-95
  - SEO : 95-100

## Dépannage

### Les images ne s'affichent pas

- Vérifiez les chemins relatifs dans `index.html`
- Assurez-vous que toutes les images sont bien dans `assets/images/`
- Vérifiez la casse (majuscules/minuscules) des noms de fichiers

### Le CSS/JS ne se charge pas

- Videz le cache du navigateur (Ctrl+F5)
- Vérifiez que les chemins dans `index.html` sont corrects
- Attendez quelques minutes après le push

### Le site ne se met pas à jour

- Le déploiement peut prendre 2-5 minutes
- Videz votre cache navigateur
- Vérifiez que le commit a bien été poussé : `git log`

### Erreur 404

- Vérifiez que GitHub Pages est activé dans Settings > Pages
- Le fichier principal doit être `index.html` (pas `home.html`)
- Vérifiez l'URL : `https://USERNAME.github.io/illustrasea/`

## Support

Pour toute question :
- Consultez le [README.md](README.md)
- Documentation GitHub Pages : [docs.github.com/pages](https://docs.github.com/pages)
- Issues GitHub : Créez une issue sur votre repository

---

Bon déploiement ! 🚀
