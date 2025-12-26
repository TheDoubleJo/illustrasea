// ========================================
// DOM Elements
// ========================================
const galleryItems = document.querySelectorAll('.gallery-item img, .mockup-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

// ========================================
// Lightbox Functionality
// ========================================
let currentImageIndex = 0;
const images = Array.from(galleryItems);

// Open lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(item.src, item.alt);
    });
});

function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Close lightbox
lightboxClose.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

// Previous image
lightboxPrev.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    lightboxImage.src = images[currentImageIndex].src;
    lightboxImage.alt = images[currentImageIndex].alt;
});

// Next image
lightboxNext.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    lightboxImage.src = images[currentImageIndex].src;
    lightboxImage.alt = images[currentImageIndex].alt;
});

// Keyboard navigation in lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') {
        lightboxPrev.click();
    } else if (e.key === 'ArrowRight') {
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
// Lazy Loading Images with Intersection Observer
// ========================================
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

// Observe all gallery images
document.querySelectorAll('.gallery-item img, .mockup-item img').forEach(img => {
    imageObserver.observe(img);
});

// ========================================
// Prevent context menu on images (optional)
// ========================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment to disable right-click on images
        // e.preventDefault();
    });
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c✨ Irina Dufaud - Illustratrice ✨', 'font-size: 20px; font-weight: bold; color: #e7bd97;');
console.log('%cWebsite designed and developed with love', 'font-size: 12px; color: #32373c;');
