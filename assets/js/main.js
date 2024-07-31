document.addEventListener("DOMContentLoaded", function () {
  const accordionTitles = document.querySelectorAll(".accordion-title");

  accordionTitles.forEach((title) => {
    title.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("rotate");
      } else {
        content.style.display = "block";
        arrow.classList.add("rotate");
      }
    });
  });
});
