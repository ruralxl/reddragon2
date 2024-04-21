
const seta_esquerda = document.getElementById("left");
const seta_direita = document.getElementById("right");

const seta_esquerda2 = document.getElementById("esquerda");
const seta_direita2 = document.getElementById("direita");

const carousel = document.querySelector(".caroussel");
const tamanho1= carousel.querySelector(".cartas").offsetWidth;

const carousel2 = document.querySelector(".caroussel2");
const tamanho2 = carousel2.querySelector(".cartas").offsetWidth;

    seta_esquerda.addEventListener("click", () => {
        carousel.scrollLeft += -tamanho1; 
    });

    seta_direita.addEventListener("click", () => {
        carousel.scrollLeft += tamanho1;
    });

    seta_esquerda2.addEventListener("click", () => {
        carousel2.scrollLeft += -tamanho2; 
    });

    seta_direita2.addEventListener("click", () => {
        carousel2.scrollLeft += tamanho2;
    });




