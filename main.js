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