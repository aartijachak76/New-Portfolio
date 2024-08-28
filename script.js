

document.addEventListener("DOMContentLoaded", () => {
    const welcomePage = document.getElementById("welcome-page");
    const enterBtn = document.getElementById("enter-btn");
    const mainContent = document.querySelector(".main-content");

    enterBtn.addEventListener("click", () => {
        welcomePage.style.opacity = "0";
        setTimeout(() => {
            welcomePage.style.display = "none";
            mainContent.style.display = "block";
            document.body.classList.add("content-visible");
        }, 1000); // Matches the transition time
    });
});

// JavaScript for Mobile Menu Toggle

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// JavaScript for Smooth Scrolling (optional enhancement)
document.querySelectorAll(".navbar a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


