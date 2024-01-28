// Handle click events for a navbar toggle button
const addActiveClass = () => {
    for (let eachDiv of offcanvaBtn.children) {
        eachDiv.classList.add('active');
    }
}
const removeActiveClass = () => {
    for (let eachDiv of offcanvaBtn.children) {
        eachDiv.classList.remove('active');
    }
}

const handleClick = () => {
    let offcanvaDiv = document.getElementById('offcanvasRightNav');
    let isOpening = offcanvaDiv.classList.contains('showing');

    let backdrop = document.getElementsByClassName("offcanvas-backdrop")[0];
    if (isOpening) {
        addActiveClass();
    } else {
        removeActiveClass();
    }
    if (isOpening) {
        backdrop.onclick = removeActiveClass;
    }
}

let offcanvaBtn = document.getElementById("offcanvaSvg");
offcanvaBtn.addEventListener("click", handleClick);


// Navbar animation on scroll for mobile version
let lastScrollTop = 0;
let navbar = document.getElementsByClassName("navbar")[0];

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let navStyles = getComputedStyle(navbar);
    let navHeight = parseInt(navStyles.getPropertyValue("height"), 10);

    if (scrollTop > navHeight) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }

    if (scrollTop > lastScrollTop && scrollTop > navHeight) {
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
});


// Change carousel type based on window resize
const BREAKPOINT = 991;

function setCarouselClass() {
    const carousel = document.getElementById('carouselExampleFade');

    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (windowWidth <= BREAKPOINT) {
        carousel.classList.add('carousel-slide');
        carousel.classList?.remove('carousel-fade');
    } else {
        carousel.classList.add('carousel-fade');
        carousel.classList?.remove('carousel-slide');
    }
}

setCarouselClass();
window.addEventListener('resize', setCarouselClass);


// Opening one collapse question at a time with its arrow icon
const questionButtons = document.querySelectorAll(".question");
let isOpen = [false, false, false];

questionButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        isOpen[index] = !isOpen[index];

        document.querySelectorAll(".collapse").forEach((collapse, i) => {
            collapse.classList.remove("show");
            if (i !== index) isOpen[i] = false;
        });
        document.querySelectorAll(".arrow").forEach(svg => {
            svg.classList.remove("rotate");
        });

        if (isOpen[index]) {
            this.querySelector(".arrow").classList.add("rotate");
        } else {
            this.querySelector(".arrow").classList.remove("rotate");
        }
    });
});
