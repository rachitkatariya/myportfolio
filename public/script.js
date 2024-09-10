document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.querySelector("#checkbox");
    const root = document.documentElement; // For applying classes to the whole document

    // Check local storage for the user's theme preference
    if (localStorage.getItem("theme") === "dark") {
        root.classList.add("dark");
        checkbox.checked = true;
    } else {
        root.classList.remove("dark");
        checkbox.checked = false;
    }

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            // Switch to dark mode
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            // Switch to light mode
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    });
});

// Navbar menu toggle functionality
const navDialog = document.getElementById('nav-dialog');
const menuLinks = document.querySelectorAll('#nav-dialog a');

function handleMenu() {
    navDialog.classList.toggle('hidden');
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navDialog.classList.add('hidden');
    });
});

// Intersection Observer setup (for animations or effects)
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1, true, 0.25);
setupIntersectionObserver(line2, false, 0.25);
setupIntersectionObserver(line3, true, 0.25);
setupIntersectionObserver(line4, true, 0.8);

// Accordion functionality
const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    });
});















/* // const navDialog = document.getElementById('nav-dialog');
// function handleMenu() {
//     navDialog.classList.toggle('hidden');
// }

const navDialog = document.getElementById('nav-dialog');
const menuLinks = document.querySelectorAll('#nav-dialog a');

function handleMenu() {
    navDialog.classList.toggle('hidden');
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navDialog.classList.add('hidden');
    });
});


const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.25);
setupIntersectionObserver(line2, false, 0.25);
setupIntersectionObserver(line3, true, 0.25);

setupIntersectionObserver(line4, true, 0.8);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
}) */