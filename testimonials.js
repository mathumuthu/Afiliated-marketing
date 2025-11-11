const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});












const slides = document.querySelectorAll('.slider-wrapper .slide');
let currentSlide = 0;
function showSlide(index) {
    slides.forEach((s,i) => s.classList.toggle('active', i === index));
}
document.querySelector('.slider-nav.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
document.querySelector('.slider-nav.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
// Optional: auto-rotate
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 6000);