# Utilisation du CMS

## Accès au CMS

### En développement local

1. Démarrez un serveur local :
   ```bash
   python -m http.server 8000
   ```

2. Ouvrez votre navigateur : `http://localhost:8000/admin/`

3. **Lors de la première visite**, Sveltia CMS vous demandera votre Personal Access Token GitHub

### Créer un Personal Access Token (une seule fois)

1. Allez sur : https://github.com/settings/tokens
2. Cliquez sur "Generate new token" > "Generate new token (classic)"
3. Donnez un nom : `Illustrasea CMS`
4. Cochez la permission : **repo** (tous les sous-items)
5. Cliquez sur "Generate token"
6. Copiez le token (format : `ghp_xxxxxxxxxxxx...`)

### Utilisation

1. Lors de la première visite de `/admin/`, collez votre PAT dans le champ
2. Le token sera sauvegardé dans votre navigateur (localStorage)
3. Vous n'aurez plus besoin de le ressaisir (sauf si vous videz le cache)

## Gérer les images

### Book Mockups
- Cliquez sur "Book Mockups" dans le menu
- Ajoutez, modifiez ou supprimez des mockups
- Uploadez des images, modifiez les descriptions

### Illustrations enfants
- Cliquez sur "Children's Illustrations"
- Gérez les illustrations de la galerie enfants

### Paysages
- Cliquez sur "Landscape Illustrations"
- Gérez les illustrations de paysages

## Publication

Après avoir modifié vos images :
1. Cliquez sur "Save" dans Sveltia CMS
2. Le CMS créera automatiquement un commit et le poussera sur GitHub
3. GitHub Pages redéploiera le site automatiquement (2-5 min)

## Structure des données

Les données sont stockées dans :
- `_data/mockups.json` : Book mockups
- `_data/childrens-gallery.json` : Illustrations enfants
- `_data/landscape-gallery.json` : Paysages

Les images uploadées vont dans : `assets/images/`
