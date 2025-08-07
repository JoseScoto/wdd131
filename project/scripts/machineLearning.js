document.addEventListener("DOMContentLoaded", function () {
    const hamburguer = document.querySelector(".hamburguer");
    const menu = document.querySelector(".nav-menu ul");

    hamburguer.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});