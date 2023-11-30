// Array of classes to be added on button click
const classesToAddByClick = [
    { button: "btn-mobile", element: "menu-mobile", className: "is-block" },
    { button: "btn-mobile", element: "menu-searth", className: "is-block" },
    { button: "btn-mobile", element: "icon-menu-mobile-open", className: "is-none" },
    { button: "btn-mobile", element: "icon-menu-mobile-close", className: "is-none" },
    { button: "btn-mobile", element: "menu-mobile-wrapper", className: "is-flex" }
];

// Add classes on button click
for (let classToAddOnClick of classesToAddByClick) {
    addClassByClick(
        classToAddOnClick.button,
        classToAddOnClick.element,
        classToAddOnClick.className
    );
};

// Array of classes to be added on window scroll
const classesToAddByEvent = [
    // Card template
    { element: "card-details", className: "is-fixed", time: 195, type: "not-full" },
    { element: "card-details", className: "has-transition", time: 200, type: "not-full" },
    { element: "card-details", className: "is-top", time: 400, type: "not-full" },
    { element: "card-details", className: "has-no-transition-2", time: 650, type: "not-full" },
    { element: "card-details", className: "is-not-fixed", time: 1568, type: "not-full" },
    { element: "section-content", className: "is-full", time: 1568, type: "not-full" },
    { element: "main-item", className: "has-gap", time: 1568, type: "not-full" },
    { element: "main-content-course", className: "u-relative", time: 1568, type: "not-full" },
    // Navbar
    { element: "navbar", className: "is-fixed", time: 300, type: "full" },
    { element: "navbar", className: "is-visible", time: 400, type: "full" },
    { element: "menu-logo", className: "is-small", time: 300, type: "full" },
    { element: "btn-scroll-top", className: "is-visible", time: 400, type: "full" }
];

// Add classes on window scroll
window.addEventListener("scroll", () => {
    for (let classToAddByEvent of classesToAddByEvent) {
        addClassByScroll(
            classToAddByEvent.element,
            classToAddByEvent.className,
            classToAddByEvent.time,
            classToAddByEvent.type
        );
    };
});

//Scroll the window to the top by button click
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const scrollTopBtn = document.getElementById("btn-scroll-top");
scrollTopBtn.addEventListener("click", scrollToTop);