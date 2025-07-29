let index = 0;
const track = document.getElementById('featuredTrack');
const items = track?.children || [];
const total = items.length;
const visible = 3; // Number of cards visible

function updateCarousel() {
  const shift = -(index * (100 / visible));
  track.style.transform = `translateX(${shift}%)`;
}

// Manual controls
document.querySelector('.slider-btn.prev')?.addEventListener('click', () => {
  index = (index - 1 + total) % total;
  updateCarousel();
});
document.querySelector('.slider-btn.next')?.addEventListener('click', () => {
  index = (index + 1) % total;
  updateCarousel();
});

// Auto slide
setInterval(() => {
  index = (index + 1) % total;
  updateCarousel();
}, 4000);
