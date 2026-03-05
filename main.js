// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== "#" && href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Package URL parameters (for booking page)
    const urlParams = new URLSearchParams(window.location.search);
    const packageParam = urlParams.get('package');
    
    if (packageParam && window.location.pathname.includes('book.html')) {
        const packageSelect = document.getElementById('packageSelect');
        if (packageSelect) {
            packageSelect.value = packageParam;
        }
    }
});

// Form validation for contact page
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (!name.value || !email.value || !message.value) {
        alert('Please fill in all required fields');
        return false;
    }
    
    if (!email.value.includes('@') || !email.value.includes('.')) {
        alert('Please enter a valid email address');
        return false;
    }
    
    alert('Thank you for your message! We will respond within 4 hours.');
    return true;
}

// Gallery lightbox (simple version)
function openLightbox(imageSrc, caption) {
    // This would be expanded for a real gallery
    console.log('Opening image:', imageSrc);
}

// Lightbox functionality
let currentImageIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const images = []; // Will store actual image paths

// Collect all image sources
galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    if (img) {
        images.push({
            src: img.src,
            caption: item.querySelector('.gallery-caption h4')?.innerText || 'Loving Homes',
            alt: img.alt
        });
    }
    
    // Add click event
    item.addEventListener('click', () => openLightbox(index));
});

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = images[index].src;
    lightboxImg.alt = images[index].alt;
    lightboxCaption.innerText = images[index].caption;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImg.src = images[currentImageIndex].src;
    lightboxImg.alt = images[currentImageIndex].alt;
    lightboxCaption.innerText = images[currentImageIndex].caption;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeImage(-1);
    if (e.key === 'ArrowRight') changeImage(1);
});

// Mobile Menu Toggle - FIXED VERSION
document.addEventListener('DOMContentLoaded', function() {
    // Get the menu button and navigation menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    // Check if elements exist
    if (mobileMenuBtn && navMenu) {
        console.log('Mobile menu found!'); // For debugging
        
        // Toggle menu when button is clicked
        mobileMenuBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            navMenu.classList.toggle('active');
            console.log('Menu toggled'); // For debugging
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    } else {
        console.log('Mobile menu elements not found!');
    }
});
