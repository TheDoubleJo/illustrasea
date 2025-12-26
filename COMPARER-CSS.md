# Guide pour comparer et copier le CSS exact

## Méthode 1 : Copier les styles computed (RECOMMANDÉ)

### Pour la section portrait/hero :

1. **Sur illustrasea.com** :
   - F12 > Inspecter l'élément de la photo portrait
   - Dans le panneau de droite, cliquez sur l'onglet **Computed**
   - Vous verrez TOUS les styles appliqués (margin, padding, width, etc.)
   - Copiez les valeurs importantes

2. **Sur localhost:8000** :
   - F12 > Inspecter la même section
   - Comparez les valeurs Computed

### Pour copier tout le CSS d'une section :

1. Sur illustrasea.com, F12
2. Trouvez l'élément (ex: la section portrait)
3. Dans l'onglet **Styles**, vous voyez tous les CSS appliqués
4. Copiez le CSS pertinent

## Méthode 2 : Extraire tout le CSS du site

### Via DevTools :

```javascript
// Collez ceci dans la Console (F12 > Console) sur illustrasea.com
let css = '';
for (let sheet of document.styleSheets) {
    try {
        for (let rule of sheet.cssRules) {
            css += rule.cssText + '\n';
        }
    } catch(e) {}
}
console.log(css);
// Clic droit > Copy
```

## Méthode 3 : Télécharger directement les fichiers CSS

### Via onglet Sources :

1. F12 > Sources
2. Développez le domaine illustrasea.com
3. Cherchez les dossiers :
   - `wp-content/themes/marceau/`
   - `wp-content/plugins/`
4. Trouvez les fichiers .css
5. Clic droit > Save as

## Méthode 4 : Me dire les différences visuelles

**C'est la plus rapide !** Dites-moi simplement :

- Quelle section ne ressemble pas à l'original ?
- Qu'est-ce qui est différent ? (couleur, taille, position, espacement)
- Faites une capture d'écran si besoin

Et je corrigerai immédiatement.

---

**Quelle méthode préférez-vous ?**
