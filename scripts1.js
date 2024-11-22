let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to the last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop to the first slide
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slideWidth = slides[0].offsetWidth;
    sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
