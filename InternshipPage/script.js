// Internship Carousel Logic
const carousel = document.getElementById("internshipCarousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let scrollAmount = 0;
const scrollStep = 350; // Adjust for card width + gap

// Scroll Left
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -scrollStep,
    behavior: "smooth"
  });
});

// Scroll Right
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: scrollStep,
    behavior: "smooth"
  });
});

// Optional: Autoplay slider (uncomment to use)
/*
setInterval(() => {
  carousel.scrollBy({
    left: scrollStep,
    behavior: "smooth"
  });
}, 5000); // Every 5 seconds
*/

// Optional: Add Apply Now alert (for fun)
document.querySelectorAll('.btn.apply').forEach(button => {
  button.addEventListener('click', () => {
    alert("✅ Application Submitted! Our team will get back to you.");
  });
});
