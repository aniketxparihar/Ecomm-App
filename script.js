const modalButton = document.querySelector(".modal__button");
const modalScreen = document.querySelector(".modal__screen");
const hiddenMenu = document.querySelector(".hidden__menu");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const filters = document.querySelector("#filters");
hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenMenu.style.display = "flex";
})
close.addEventListener('click', (e) => {
    e.preventDefault();
    hiddenMenu.style.display = "none";
})
const modalOpen = () => {
        modalScreen.style.display = "block";
}
const modalClose = () => {
        modalScreen.style.display = "none";
}
