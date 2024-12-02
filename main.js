const wrapper = document.querySelector('.carousel-wrapper');
const cards = Array.from(document.querySelectorAll('.c_card'));
const cardWidth = cards[0].offsetWidth + 20; // Card width + margin (10px on each side)

// Clone each card and append to the end to make the carousel feel infinite
cards.forEach(card => {
  const clone = card.cloneNode(true);
  wrapper.appendChild(clone);
});

let currentPosition = 0;

function moveCarousel() {
  currentPosition -= 1; // Move left by 1 pixel

  // Check if we've scrolled past the original set of cards
  if (currentPosition <= -cardWidth * cards.length) {
    currentPosition = 0; // Reset the position to the beginning
    wrapper.style.transition = 'none'; // Temporarily remove transition to reset position
    wrapper.style.transform = `translateX(${currentPosition}px)`;

    // Use a timeout to re-enable the transition for smooth movement
    setTimeout(() => {
      wrapper.style.transition = 'transform 0.5s linear';
    });
  } else {
    wrapper.style.transform = `translateX(${currentPosition}px)`; // Apply the transformation
  }

  // Request the next frame for continuous animation
  requestAnimationFrame(moveCarousel);
}

// Start the animation
moveCarousel();



// testimonial slider
const testimonialWrapper = document.querySelector('.testimonial_content');
const testimonialCards = Array.from(document.querySelectorAll('.testimonial_card'));
const cardCount = testimonialCards.length;
const testimonialCardWidth = testimonialCards[0].offsetWidth + 20; // Card width + margin (10px on each side)

// Clone each testimonial card enough times to cover the screen and make the loop seamless
testimonialCards.forEach(card => {
  const clone = card.cloneNode(true);
  testimonialWrapper.appendChild(clone);
});

// Calculate total width required for seamless looping
const totalWidth = testimonialCardWidth * cardCount * 2;
testimonialWrapper.style.width = `${totalWidth}px`;

let testimonialPosition = 0;

function moveTestimonialCarousel() {
  testimonialPosition -= 0.5; // Move right by 0.5 pixels (adjust speed as needed)

  // If we've scrolled past the beginning of the original set, reset position to start
  if (testimonialPosition <= -testimonialCardWidth * cardCount) {
    testimonialPosition = 0; // Reset position for a continuous loop
  }

  testimonialWrapper.style.transform = `translateX(${testimonialPosition}px)`; // Apply transformation to move right
  requestAnimationFrame(moveTestimonialCarousel);
}

// Start the animation
moveTestimonialCarousel();


// slider for universities
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.uni_card_container');
  const cards = document.querySelectorAll('.uni_card');
  let scrollAmount = 0;
  let cardWidth = cards[0].offsetWidth; // Dynamic card width

  // Clone cards for seamless looping
  cards.forEach(card => container.appendChild(card.cloneNode(true)));

  function updateCardWidth() {
      cardWidth = cards[0].offsetWidth;
  }

  function loopSlide() {
      scrollAmount += 1;
      if (scrollAmount >= cardWidth * cards.length) {
          scrollAmount = 0; // Reset when loop completes
      }
      container.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(loopSlide);
  }

  // Update card width on resize for responsiveness
  window.addEventListener('resize', updateCardWidth);

  updateCardWidth();
  loopSlide();
});
