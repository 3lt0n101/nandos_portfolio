function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior:'smooth' });
}

// Simple gallery navigation
const slider = document.querySelector('.gallery-slider');
const images = slider.querySelectorAll('img');
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(index);
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

function showImage(i) {
  images.forEach(img => img.style.display = 'none');
  images[i].style.display = 'block';
}

// Initialize: show first image only
showImage(index);
