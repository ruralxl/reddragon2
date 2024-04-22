
const seta_esquerda = document.getElementById("left");
const seta_direita = document.getElementById("right");

const seta_esquerda2 = document.getElementById("esquerda");
const seta_direita2 = document.getElementById("direita");

const seta_esquerda3 = document.getElementById("esquerda3");
const seta_direita3 = document.getElementById("direita3");

const seta_esquerda4 = document.getElementById("esquerda4");
const seta_direita4 = document.getElementById("direita4");

const carousel = document.querySelector(".caroussel");

const carousel2 = document.querySelector(".caroussel2");

const carousel3 = document.querySelector(".caroussel3");

const carousel4 = document.querySelector(".caroussel4");

const tamanho= carousel.querySelector(".cartas").offsetWidth;


    seta_esquerda.addEventListener("click", () => {
        carousel.scrollLeft += -tamanho; 
    });

    seta_direita.addEventListener("click", () => {
        carousel.scrollLeft += tamanho;
    });

    seta_esquerda2.addEventListener("click", () => {
        carousel2.scrollLeft += -tamanho; 
    });

    seta_direita2.addEventListener("click", () => {
        carousel2.scrollLeft += tamanho;
    });

    seta_esquerda3.addEventListener("click", () => {
        carousel3.scrollLeft += -tamanho; 
    });

    seta_direita3.addEventListener("click", () => {
        carousel3.scrollLeft += tamanho;
    });


    seta_esquerda4.addEventListener("click", () => {
        carousel4.scrollLeft += -tamanho; 
    });

    seta_direita4.addEventListener("click", () => {
        carousel4.scrollLeft += tamanho;
    });





