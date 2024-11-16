// Lightbox effect for gallery images
const galleryImages = document.querySelectorAll('.gallery-container img');
const lightbox = document.createElement('div');
(link unavailable) = 'lightbox';

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    lightbox.innerHTML = `
      <img src="${image.src}" alt="${image.alt}">
      <span class="close">&times;</span>
    `;
    document.body.appendChild(lightbox);
    lightbox.classList.add('show');
  });
});

// Close lightbox
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('close') || (link unavailable) === 'lightbox') {
    lightbox.classList.remove('show');
  }
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Responsive navigation menu
const navToggle = document.createElement('button');
navToggle.innerHTML = '<span>&#9776;</span>';
navToggle.classList.add('nav-toggle');

const nav = document.querySelector('nav');
nav.appendChild(navToggle);

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Scroll to top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<span>&#8593;</span>';
scrollTopButton.classList.add('scroll-top');

document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show scroll to top button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopButton.classList.add('show');
  } else {
    scrollTopButton.classList.remove('show');
  }
});


// Navigation menu active state
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// Automatic slideshow for gallery
const galleryImages = document.querySelectorAll('.gallery-container img');
let currentIndex = 0;

function slideshow() {
  galleryImages.forEach((image, index) => {
    image.style.display = 'none';
  });
  galleryImages[currentIndex].style.display = 'block';
  currentIndex = (currentIndex + 1) % galleryImages.length;
}

setInterval(slideshow, 3000);
// Email validation for contact form
const contactForm = document.querySelector('#contact form');
const emailInput = contactForm.querySelector('input[type="email"]');

contactForm.addEventListener('submit', (e) => {
  const emailValue = emailInput.value.trim();
  if (!emailValue.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    e.preventDefault();
    alert('Invalid email address');
  }
});

// Loading animation
const loadingAnimation = document.createElement('div');
loadingAnimation.classList.add('loading');

document.body.appendChild(loadingAnimation);

window.addEventListener('load', () => {
  loadingAnimation.classList.add('hide');
});

// Password strength indicator
const passwordInput = document.querySelector('#password');
const strengthIndicator = document.createElement('div');
strengthIndicator.classList.add('strength-indicator');

passwordInput.parentNode.appendChild(strengthIndicator);

passwordInput.addEventListener('input', () => {
  const passwordValue = passwordInput.value.trim();
  const strength = getPasswordStrength(passwordValue);
  strengthIndicator.textContent = strength.message;
  strengthIndicator.classList.remove('weak', 'medium', 'strong');
  strengthIndicator.classList.add(strength.class);
});

function getPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(password)) strength++;

  switch (strength) {
    case 0:
    case 1:
      return { message: 'Weak', class: 'weak' };
    case 2:
    case 3:
      return { message: 'Medium', class: 'medium' };
    default:
      return { message: 'Strong', class: 'strong' };
  }
}


// Toggle dark/light mode
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '<span>&#9728;</span>';
toggleButton.classList.add('mode-toggle');

document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Initialize mode from local storage
const storedMode = localStorage.getItem('mode');
if (storedMode === 'dark') {
  document.body.classList.add('dark-mode');
}

// Animated scroll progress bar
const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollPercentage = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});


// Lazy load images
const images = document.querySelectorAll('img');

images.forEach((image) => {
  const src = image.getAttribute('src');
  image.setAttribute('src', '');
image.setAttribute('data-src', src);
});

window.addEventListener('scroll', () => {
  images.forEach((image) => {
    if (isInViewport(image)) {
      image.setAttribute('src', image.getAttribute('data-src'));
    }
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}


// Scroll-to-section animation
const sectionLinks = document.querySelectorAll('.section-link');

sectionLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

