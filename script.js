/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

/* ===========================
   STICKY HEADER
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";
        topBtn.style.alignItems = "center";
        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ===========================
   REVEAL ANIMATION
=========================== */

const sections = document.querySelectorAll(".section");

const revealSection = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        const triggerPoint = window.innerHeight - 120;

        if (sectionTop < triggerPoint) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealSection);

revealSection();

/* ===========================
   ACTIVE NAV LINK
=========================== */

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(sec => {

        const sectionTop = sec.offsetTop - 150;

        const sectionHeight = sec.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = sec.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ===========================
   HERO PARALLAX
=========================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY = offset * 0.45 + "px";

});

/* ===========================
   GALLERY HOVER EFFECT
=========================== */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.06)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/* ===========================
   FLOAT EFFECT
=========================== */

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

/* ===========================
   CURRENT YEAR
=========================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Shri Khatu Shyam Mandir | All Rights Reserved`;

}

/* ===========================
   PAGE LOADED
=========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ===========================
   OPTIONAL: PREVENT IMAGE DRAG
=========================== */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log(
"%c🙏 Jai Shri Shyam 🙏",
"color:#FFD700;font-size:24px;font-weight:bold;background:#8B0000;padding:10px;border-radius:8px;"
);