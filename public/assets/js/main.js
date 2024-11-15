// To switch themes
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.top-bar button');
    const themeIcon = themeButton.querySelector('i');
    const themeStylesheet = document.getElementById('themeStyle');

    themeButton.addEventListener('click', () => {
        if (themeIcon.classList.contains('fa-moon')) {
            // Switch to dark mode
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeStylesheet.href = 'assets/css/dark.css';
        } else {
            // Switch to light mode
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeStylesheet.href = 'assets/css/light.css';
        }
    });
});



// For the carousel

class BackgroundCarousel {
    constructor() {
        this.images = [
            'assets/images/1.jpg',
            'assets/images/2.jpg',
            'assets/images/3.jpg'
        ];
        this.currentIndex = 0;
        this.header = document.querySelector('header');
        this.currentBg = null;
        this.nextBg = null;
        this.init();
    }

    init() {
        // Create two background divs for smooth transitions
        this.currentBg = this.createBackgroundDiv();
        this.nextBg = this.createBackgroundDiv();
        this.header.appendChild(this.currentBg);
        this.header.appendChild(this.nextBg);
        
        // Set initial background
        this.changeBackground();
        
        // Start carousel
        setInterval(() => this.changeBackground(), 5000);
    }

    createBackgroundDiv() {
        const div = document.createElement('div');
        div.className = 'header-background';
        return div;
    }

    changeBackground() {
        const overlay = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))';
        
        // Swap background elements
        [this.currentBg, this.nextBg] = [this.nextBg, this.currentBg];
        
        // Set new background
        this.currentBg.style.backgroundImage = `${overlay}, url(${this.images[this.currentIndex]})`;
        this.currentBg.style.opacity = '1';
        this.nextBg.style.opacity = '0';
        
        // Add zoom effect to current background
        this.currentBg.classList.remove('zoom-effect');
        void this.currentBg.offsetWidth;
        this.currentBg.classList.add('zoom-effect');
        
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BackgroundCarousel();
});


// in mobile view

// const dots = document.querySelectorAll('.dot');
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         // Remove active class from all dots
//         dots.forEach(d => d.classList.remove('active'));
//         // Add active class to clicked dot
//         dot.classList.add('active');
//         // Change background image based on index
//         changeBackground(index);
//     });
// });


// Check if device is mobile
const isMobile = window.innerWidth <= 768;

if (isMobile) {
    // Stop all automatic transitions
    const backgrounds = document.querySelectorAll('.header-background');
    backgrounds.forEach(bg => {
        bg.style.animation = 'none';
        bg.style.transition = 'none';
    });
    
    // Clear any existing intervals
    clearInterval(window.carouselInterval);
    clearInterval(window.backgroundInterval);
}

// Handle dot navigation clicks
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        // Show corresponding background
        const backgrounds = document.querySelectorAll('.header-background');
        backgrounds.forEach(bg => bg.style.opacity = '0');
        backgrounds[index].style.opacity = '1';
    });
});

















// For Scrolling to the top

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scroll-to-top');
    scrollToTopButton.classList.toggle('visible', window.pageYOffset > 100);
});

document.addEventListener('DOMContentLoaded', function() {
var scrollToTop = document.getElementById('scroll-to-top');
var scrollIcon = document.getElementById('scroll-icon');

scrollToTop.addEventListener('click', function(e) {
    e.preventDefault();
    scrollIcon.classList.remove('fa-arrow-up');
    scrollIcon.classList.add('fa-rocket');
    this.classList.add('rocket');

    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 300);

    setTimeout(function() {
        scrollIcon.classList.remove('fa-rocket');
        scrollIcon.classList.add('fa-arrow-up');
        scrollToTop.classList.remove('rocket');
    }, 1000);
});
});

// For the countdown-timer
function updateCountdown() {
    // Set the target date (example: March 1, 2024)
    const targetDate = new Date('2024-12-01T00:00:00').getTime();
    
    function update() {
        const currentDate = new Date().getTime();
        const timeLeft = targetDate - currentDate;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.querySelector('.timer-item:nth-child(1) span').textContent = String(days).padStart(2, '0');
        document.querySelector('.timer-item:nth-child(3) span').textContent = String(hours).padStart(2, '0');
        document.querySelector('.timer-item:nth-child(5) span').textContent = String(minutes).padStart(2, '0');
        document.querySelector('.timer-item:nth-child(7) span').textContent = String(seconds).padStart(2, '0');

        if (timeLeft < 0) {
            clearInterval(timerInterval);
            document.querySelector('.countdown-timer').innerHTML = '<h2>Event has started!</h2>';
        }
    }

    // Update immediately and then every second
    update();
    const timerInterval = setInterval(update, 1000);
}

// Start the countdown when the page loads
document.addEventListener('DOMContentLoaded', updateCountdown);










// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('nav');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     nav.classList.toggle('active');
// });

// // Close menu when clicking a link
// document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('active');
//         nav.classList.remove('active');
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const topBar = document.querySelector('.top-bar');
        if (window.scrollY > 50) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    });
});
