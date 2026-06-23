window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});
const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(function (element) {
    observer.observe(element);
});
const topButton = document.querySelector("#topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Reservation Date

const reservationDate = document.querySelector("#date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

reservationDate.min = `${year}-${month}-${day}`;