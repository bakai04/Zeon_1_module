function testimonials(testimonials) {
  const testimonialsCards = document.querySelector(".testimonials__cards");
  testimonials.forEach((element) => {
    testimonialsCards.innerHTML += `
        <div class="testimonial">
        <p class="testimonial__text">${element.text}</p>
        <div class="testimonial__author">
          <p class="author__name">${element.name}</p>
          <p class="author__position">${element.job}</p>
        </div>
      </div>
    `;
  });
}

export default testimonials;
