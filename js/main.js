// ========================================
// Load Gallery Data from JSON
// ========================================
async function loadGalleryData() {
    try {
        // Charger les données de la galerie enfants
        const childrensResponse = await fetch('_data/childrens-gallery.json');
        const childrensData = await childrensResponse.json();
        renderGallery('childrens-illustration', childrensData.images);

        // Charger les données de la galerie paysages
        const landscapeResponse = await fetch('_data/landscape-gallery.json');
        const landscapeData = await landscapeResponse.json();
        renderGallery('landscape-illustrations', landscapeData.images);

        // Initialiser la lightbox après avoir chargé toutes les images
        initializeLightbox();
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
    }
}


// Générer le HTML pour une galerie
function renderGallery(galleryId, images) {
    const gallery = document.querySelector(`#${galleryId} .gallery-grid`);
    if (!gallery) return;

    gallery.innerHTML = '';
    images.forEach(image => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `<img src="${image.image}" alt="${image.alt}" loading="lazy">`;
        gallery.appendChild(div);
    });
}

// ========================================
// DOM Elements
// ========================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

// Check if all required elements exist
if (!lightbox || !lightboxImage || !lightboxClose || !lightboxPrev || !lightboxNext) {
    console.error('Lightbox: Required DOM elements not found');
}

// ========================================
// Lightbox Functionality
// ========================================
let currentImageIndex = 0;
let images = [];

// Initialize lightbox after loading images
function initializeLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img, .mockup-item img');
    images = Array.from(galleryItems);

    if (galleryItems.length > 0) {
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentImageIndex = index;
                openLightbox(item.src, item.alt);
            });
        });
    }

    // Observe all gallery images for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    document.querySelectorAll('.gallery-item img, .mockup-item img').forEach(img => {
        imageObserver.observe(img);
    });
}

function openLightbox(src, alt) {
    if (!lightboxImage || !lightbox) return;

    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;

    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Close lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

// Close on background click
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Previous image
if (lightboxPrev && lightboxImage) {
    lightboxPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxImage.alt = images[currentImageIndex].alt;
    });
}

// Next image
if (lightboxNext && lightboxImage) {
    lightboxNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImage.src = images[currentImageIndex].src;
        lightboxImage.alt = images[currentImageIndex].alt;
    });
}

// Keyboard navigation in lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;

    if (e.key === 'ArrowLeft' && lightboxPrev) {
        lightboxPrev.click();
    } else if (e.key === 'ArrowRight' && lightboxNext) {
        lightboxNext.click();
    }
});

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignore empty anchors or just "#"
        if (!href || href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Initialize on Page Load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryData();
});

