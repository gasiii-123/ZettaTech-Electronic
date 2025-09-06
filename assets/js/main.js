/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal(".home__data, .about__img, .getservice__subtitle, .getservice__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .getservice__img", {
    delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".getservice__data, .work__img, .contact__input", { interval: 200 });

/*===== DROPDOWN TOGGLE =====*/
const formDropdown = document.querySelector('.getservice__form .dropdown');
const toggle = formDropdown.querySelector('.dropdown__toggle');
const menuItems = formDropdown.querySelectorAll('.dropdown__link');

toggle.addEventListener('click', () => {
    formDropdown.classList.toggle('open');
});

// Ubah teks dropdown sesuai pilihan
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        toggle.innerHTML = item.textContent + " <i class='bx bx-chevron-down'></i>";
        formDropdown.classList.remove('open');
    });
});

// Tutup dropdown jika klik di luar
document.addEventListener('click', (e) => {
    if (!formDropdown.contains(e.target)) {
        formDropdown.classList.remove('open');
    }
});
