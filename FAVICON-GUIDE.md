# Guide de création du Favicon

Le site référence maintenant des fichiers favicon dans le HTML. Vous devez créer ces fichiers à partir de votre logo existant.

## Fichiers requis

Les fichiers suivants doivent être créés et placés dans `assets/images/` :

1. `favicon-16x16.png` (16x16 pixels)
2. `favicon-32x32.png` (32x32 pixels)
3. `apple-touch-icon.png` (180x180 pixels)

## Méthode 1 : Utiliser un générateur en ligne (Recommandé)

### Option A : RealFaviconGenerator (gratuit et complet)
1. Allez sur https://realfavicongenerator.net/
2. Uploadez votre logo (`assets/images/logo.png`)
3. Configurez les options selon vos préférences
4. Téléchargez le package généré
5. Copiez les fichiers PNG dans `assets/images/`

### Option B : Favicon.io (simple et rapide)
1. Allez sur https://favicon.io/
2. Choisissez "PNG to ICO" ou "Text to ICO"
3. Uploadez votre logo
4. Téléchargez les fichiers générés
5. Renommez et copiez dans `assets/images/`

## Méthode 2 : Utiliser un éditeur d'images

### Avec Photoshop, GIMP, ou autre :
1. Ouvrez `assets/images/logo.png`
2. Créez 3 versions aux dimensions requises :
   - 16x16 pixels → `favicon-16x16.png`
   - 32x32 pixels → `favicon-32x32.png`
   - 180x180 pixels → `apple-touch-icon.png`
3. Assurez-vous d'utiliser un fond transparent ou le fond beige du site (#fff2e2)
4. Exportez en PNG
5. Placez les fichiers dans `assets/images/`

## Méthode 3 : Ligne de commande (ImageMagick)

Si vous avez ImageMagick installé :

```bash
# Naviguez vers le dossier images
cd assets/images

# Créez les différentes tailles
magick logo.png -resize 16x16 favicon-16x16.png
magick logo.png -resize 32x32 favicon-32x32.png
magick logo.png -resize 180x180 apple-touch-icon.png
```

## Vérification

Après avoir créé les fichiers, vérifiez que :
- [ ] Les 3 fichiers existent dans `assets/images/`
- [ ] Les fichiers ont les bonnes dimensions
- [ ] Le favicon s'affiche dans l'onglet du navigateur
- [ ] Le favicon s'affiche sur mobile (apple-touch-icon)

## Notes importantes

- **Format** : Utilisez PNG pour une meilleure compatibilité
- **Fond** : Transparent ou beige (#fff2e2) pour correspondre au thème
- **Simplicité** : Les favicons sont très petits, privilégiez un design simple et reconnaissable
- **Test** : Testez sur différents navigateurs (Chrome, Firefox, Safari, Edge)

## Déploiement

Une fois les favicons créés :
1. Ajoutez-les au git : `git add assets/images/favicon-*.png assets/images/apple-touch-icon.png`
2. Committez : `git commit -m "Add favicons"`
3. Poussez vers GitHub : `git push origin main`

Le site sera automatiquement déployé avec les nouveaux favicons.
