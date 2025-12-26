# Comment récupérer la police personnalisée

## Étape 1 : Identifier le nom de la police

1. Ouvrez **https://illustrasea.com/**
2. Clic droit sur le texte "My artistic universe is woven from multiple cultures..."
3. Sélectionnez **Inspecter** (ou F12)
4. Dans l'onglet **Styles** (panneau de droite), cherchez la propriété `font-family`
5. Notez le nom exact de la police

## Étape 2 : Trouver les fichiers de police

### Option A : Via l'onglet Network (DevTools)

1. Ouvrez les DevTools (F12)
2. Allez dans l'onglet **Network**
3. Filtrez par **Font** (ou tapez `.woff` dans le filtre)
4. Rafraîchissez la page (F5)
5. Vous verrez tous les fichiers de police chargés
6. Clic droit sur chaque fichier > **Open in new tab**
7. Les fichiers .woff2 ou .woff se téléchargeront automatiquement

### Option B : Via l'onglet Sources

1. DevTools (F12) > Onglet **Sources**
2. Dans le panneau de gauche, développez le site
3. Cherchez les dossiers : `wp-content/themes/`, `fonts/`, `assets/`
4. Les fichiers de police sont généralement .woff, .woff2, .ttf, .otf
5. Clic droit > Save as

### Option C : Via l'onglet Application

1. DevTools (F12) > **Application** (ou **Storage** sur Firefox)
2. Dans le menu de gauche, cliquez sur **Fonts**
3. Vous verrez toutes les polices chargées

## Étape 3 : Télécharger la police avec curl/wget

Une fois que vous avez l'URL de la police (par exemple : `https://illustrasea.com/wp-content/themes/.../font.woff2`) :

```bash
# Télécharger la police
curl -o "assets/fonts/ma-police.woff2" "URL_DE_LA_POLICE"
```

## Étape 4 : Utiliser votre propre fichier de police

Si vous avez acheté la police, vous devriez avoir les fichiers sur votre ordinateur.

1. Créez un dossier `assets/fonts/`
2. Copiez vos fichiers de police (.woff2, .woff, .ttf, .otf)
3. Ajoutez le @font-face dans le CSS (voir ci-dessous)

## Étape 5 : Ajouter la police au CSS

Une fois les fichiers téléchargés, ajoutez ceci au début de `css/style.css` :

```css
@font-face {
    font-family: 'NomDeLaPolice';
    src: url('../assets/fonts/ma-police.woff2') format('woff2'),
         url('../assets/fonts/ma-police.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

/* Ensuite, utilisez-la */
.hero-title,
.hero-subtitle {
    font-family: 'NomDeLaPolice', -apple-system, sans-serif;
}
```

## Outils en ligne pour identifier une police

Si vous ne trouvez pas le nom de la police :

1. **WhatFont** (extension Chrome) : https://chrome.google.com/webstore/detail/whatfont
2. **WhatTheFont** (upload screenshot) : https://www.myfonts.com/pages/whatthefont
3. **Font Ninja** (extension) : https://www.fonts.ninja/

## Notes importantes

- Les fichiers .woff2 sont les plus modernes et compressés
- Assurez-vous d'avoir les droits d'utilisation de la police
- Si vous avez acheté la police, utilisez vos fichiers originaux

---

**Dites-moi le nom de la police une fois identifiée, et je vous aiderai à l'intégrer !**
