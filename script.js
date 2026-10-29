
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const startBtn = document.getElementById("startBtn");

// Mobile menu open and close
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

// Close menu after clicking a navigation link
if (navLinks) {
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}

// Get in Touch button
if (startBtn) {
    startBtn.addEventListener("click", function () {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

console.log("Auspify JavaScript is working!");
