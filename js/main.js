// Hero Slideshow
const heroSlideshow = document.querySelector('.hero-slideshow');
const images = [
    'images/Hero/1.jpg',
    'images/Hero/2.jpg',
    'images/Hero/3.jpg'
];
let currentImageIndex = 0;

function changeBackground() {
    heroSlideshow.style.background = `url('${images[currentImageIndex]}') center/cover no-repeat`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Initialize first image
changeBackground();
// Change image every 5 seconds
setInterval(changeBackground, 5000);

// Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollTop = 0;
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Form submission handling
 const contactForm = document.querySelector('.contact-form');
 if (contactForm) {
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         // Add your form submission logic here
         alert('Thank you for your message! We will get back to you soon.');
         contactForm.reset();
     });
 }

 // Navbar scroll effect
 window.addEventListener('scroll', function() {
     const navbar = document.querySelector('.navbar');
     if (window.scrollY > 50) {
         navbar.style.background = 'rgba(255, 255, 255, 0.95)';
     } else {
         navbar.style.background = 'white';
     }
 });

 // Timeline animation on scroll
 const timelineItems = document.querySelectorAll('.timeline-item');
 const observerOptions = {
     threshold: 0.5,
     rootMargin: "0px"
 };

 const observer = new IntersectionObserver(function(entries, observer) {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.opacity = 1;
             entry.target.style.transform = 'translateX(0)';
         }
     });
 }, observerOptions);

 timelineItems.forEach(item => {
     item.style.opacity = 0;
     item.style.transform = 'translateX(-50px)';
     item.style.transition = 'all 0.5s ease-out';
     observer.observe(item);
 });
