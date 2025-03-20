document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("nav");
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > header.offsetHeight) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });
});