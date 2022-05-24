function scroll() {
  const features = document.querySelector("#features");
  const pricing = document.querySelector("#pricing");
  const testimonials = document.querySelector("#testimonials");
  const faq = document.querySelector(".faq");

  document.querySelector(".menu__features").addEventListener("click", () => {
    scrollToSection(features);
  });

  document.querySelector(".menu__pricing").addEventListener("click", () => {
    scrollToSection(pricing);
  });

  document
    .querySelector(".menu__testimonials").addEventListener("click", () => {
      scrollToSection(testimonials);
    });

  document.querySelector(".menu__faq").addEventListener("click", () => {
    scrollToSection(faq);
  });

  function scrollToSection(elem){
    window.scroll({
      left: 0,
      top: elem.offsetTop,
      behavior: "smooth",
    });
  }

}
export default scroll;
