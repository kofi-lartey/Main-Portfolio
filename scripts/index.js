// Typing animation for hero section
const texts = [
    "Backend Web Developer",
    "Professional Teacher",
    "Photographer",
    "Videographer"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const textElement = document.getElementById('changing-text');

function type() {
    if (!textElement) return;

    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            erase();
        }, 2000);
    } else {
        setTimeout(type, 100);
    }
}

function erase() {
    letter = currentText.slice(0, --index);
    textElement.textContent = letter;

    if (letter.length === 0) {
        count++;
        setTimeout(type, 500);
    } else {
        setTimeout(erase, 50);
    }
}

// Scroll Progress Indicator
function initializeScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
}

// Smooth scrolling for navigation links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuButton.innerHTML = '<i class="fa-solid fa-times text-xl"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        menuButton.innerHTML = '<i class="fa-solid fa-bars text-xl"></i>';
    }
}

// Intersection Observer for animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .card-hover');
    animateElements.forEach(el => observer.observe(el));
}

// Form handling with improved validation
function initializeContactForm() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Enhanced validation
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        
        if (errors.length > 0) {
            showNotification(errors.join('\n'), 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            form.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fa-solid fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Navbar scroll effect
function initializeNavbarScroll() {
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-black/20', 'backdrop-blur-md');
        } else {
            navbar.classList.remove('bg-black/20', 'backdrop-blur-md');
        }
    });
}

// Active navigation highlighting
function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-yellow-400');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-yellow-400');
            }
        });
    });
}

// Scroll to top functionality
function initializeScrollToTop() {
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (!scrollToTopButton) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopButton.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopButton.classList.add('opacity-100');
        } else {
            scrollToTopButton.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopButton.classList.remove('opacity-100');
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Services accordion functionality
function initializeServicesAccordion() {
    const buttons = document.querySelectorAll("[data-toggle]");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-toggle");
            const targetEl = document.getElementById(targetId);
            const icon = button.querySelector('.fa-chevron-down');

            // Close all sections first
            document.querySelectorAll("[id$='-info']").forEach(section => {
                if (section !== targetEl) {
                    section.style.maxHeight = '0px';
                    section.style.opacity = '0';
                    section.style.paddingTop = '0px';
                    section.style.paddingBottom = '0px';
                }
            });

            // Reset all icons
            document.querySelectorAll('.fa-chevron-down').forEach(chevron => {
                chevron.style.transform = 'rotate(0deg)';
            });

            // Toggle the clicked one
            if (targetEl.style.maxHeight === '0px' || !targetEl.style.maxHeight) {
                targetEl.style.maxHeight = targetEl.scrollHeight + 'px';
                targetEl.style.opacity = '1';
                targetEl.style.paddingTop = '1rem';
                targetEl.style.paddingBottom = '1rem';
                icon.style.transform = 'rotate(180deg)';
            } else {
                targetEl.style.maxHeight = '0px';
                targetEl.style.opacity = '0';
                targetEl.style.paddingTop = '0px';
                targetEl.style.paddingBottom = '0px';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation
    type();
    
    // Initialize all features
    initializeScrollIndicator();
    initializeAnimations();
    initializeContactForm();
    initializeNavbarScroll();
    initializeActiveNavigation();
    initializeScrollToTop();
    initializeServicesAccordion();
    
    // Add click event listeners for navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }
    });
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(() => {
    // Scroll-based animations and effects
}, 10));
