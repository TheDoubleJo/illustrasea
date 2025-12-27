# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static portfolio website for Irina Dufaud, an illustrator. The site is a reproduction of illustrasea.com built with vanilla HTML, CSS, and JavaScript for deployment on GitHub Pages. The project showcases 25 images (1 logo, 4 book mockups, 20 illustrations) with a fully responsive design and interactive features.

## Development Commands

### Local Development
```bash
# Start local server (required - don't just open index.html)
python -m http.server 8000
# OR
npx serve

# Visit: http://localhost:8000
```

### Testing
Run through TESTING.md checklist before deploying. Key tests:
- Lightbox functionality (keyboard navigation with arrow keys and Esc)
- Responsive breakpoints (1240px, 1024px, 778px, 480px)
- Gallery hover effects and lazy loading
- Mobile hamburger menu

### Deployment
```bash
# Deploy to GitHub Pages
git add .
git commit -m "Description"
git push origin main

# GitHub Pages deploys automatically from main branch
```

## Architecture

### File Structure
```
illustrasea/
├── index.html              # Single-page application
├── css/style.css          # All styles with CSS variables
├── js/main.js             # Vanilla JS for all interactions
├── assets/
│   ├── fonts/             # Custom font: "The Girl Next Door"
│   └── images/            # 25 total images (logo + mockups + gallery)
└── .nojekyll              # Required for GitHub Pages
```

### Key Design Patterns

**Single Page Application**: All content is in index.html with anchor-based navigation (#home, #portfolio, etc.)

**CSS Architecture**:
- CSS variables defined in `:root` for colors, fonts, spacing
- Background color: `#fff2e2` (beige)
- Custom font: "The Girl Next Door" loaded via @font-face for hero text
- System font stack for body text
- Four responsive breakpoints with specific grid layouts

**JavaScript Modules** (in js/main.js):
1. **Lightbox system**: Click any gallery/mockup image to open fullscreen viewer with prev/next navigation
2. **Keyboard handlers**: Arrow keys (lightbox navigation), Esc (close lightbox)
3. **Smooth scroll**: Anchor links scroll smoothly
4. **Scroll-to-top button**: Appears after 300px scroll
5. **Intersection Observer**: For scroll-based animations (if implemented)

### Gallery Grid System
The gallery uses a responsive grid that adapts columns based on viewport:
- Desktop (1240px+): 4 columns
- Tablet (1024px): 3 columns
- Small tablet (778px): 2 columns + hamburger menu activates
- Mobile (480px): 1 column

### Lightbox Implementation
- Stores all gallery images in an array
- Tracks currentImageIndex for navigation
- Prevents body scroll when active (overflow: hidden)
- Click outside image or Esc to close
- Arrow keys for prev/next navigation

## Important Notes

### Image Handling
All images use `loading="lazy"` for performance. Images are sourced from `assets/images/` with paths relative to index.html root.

### Navigation System
The site has anchor-based navigation. The Portfolio menu item has dropdown submenus (Children's illustration, Landscape illustrations) that link to sections within the same page using IDs.

### Responsive Behavior
At 778px breakpoint:
- Navigation switches from horizontal to hamburger menu
- Gallery grid reduces from 3 to 2 columns
- Menu is toggled via JavaScript click handler on `.hamburger` element

### Custom Font
"The Girl Next Door" font is used for hero titles and is loaded from `assets/fonts/thegirlnextdoor-808ebfea.woff2`. The @font-face declaration is at the top of style.css.

### Static Site Constraints
This is a purely static site - no backend, no build process, no package.json. All functionality is vanilla JavaScript. Any server-side features (contact forms, etc.) would require external services.

## Development Guidelines

### When Adding Images
1. Add image file to `assets/images/`
2. Add corresponding HTML in gallery-grid section
3. Include `loading="lazy"` attribute
4. The lightbox will automatically work with new gallery items

### When Modifying Styles
Edit CSS variables in `:root` first rather than hardcoding values. This maintains consistency across the site.

### When Modifying JavaScript
All interactive features are in js/main.js organized by functionality with clear comment headers. The lightbox system depends on specific class names (.gallery-item img, .mockup-item img).

### Cross-Browser Testing
Test on Chrome, Firefox, Safari. The site targets modern browsers (Chrome 90+, Firefox 88+, Safari 14+) and uses modern CSS (Grid, Flexbox, CSS Variables).
