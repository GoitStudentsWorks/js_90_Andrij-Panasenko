export function mobileMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuOpen = document.querySelector(".mobile-menu-open");
    const menuClose = document.querySelector(".mobile-menu-close");

    menuOpen.addEventListener("click", changeMenu);
    menuClose.addEventListener("click", changeMenu);

    function changeMenu() {const isMenuOpen =  menuOpen.getAttribute('aria-expanded') === "true" || false;
menuOpen.setAttribute('aria-expanded', !isMenuOpen);
mobileMenu.classList.toggle("is-open");}
}