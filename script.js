const arrowBtns = document.querySelectorAll(".wrapper i");
const carousel = document.querySelector(".caroussel");
const firstCardWidth = carousel.querySelector(".cartas").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});


